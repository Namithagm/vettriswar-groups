import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas";
import { SITE } from "@/lib/constants";

// Basic in-memory rate limiting per server instance. Good enough for a
// low-traffic marketing site; swap for a durable store (Upstash, etc.)
// if you need it to hold across serverless cold starts / multiple instances.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data.", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    const toAddress = process.env.CONTACT_TO_EMAIL || SITE.emails.general;
    const fromAddress = process.env.CONTACT_FROM_EMAIL || "Vettriswar Groups of Company <onboarding@resend.dev>";

    if (!apiKey) {
      // Fail loudly in server logs so misconfiguration is obvious, but keep
      // the client message generic.
      console.error("RESEND_API_KEY is not set — contact form cannot send email.");
      return NextResponse.json(
        { success: false, error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `[Website] ${subject}`,
      text: [
        `New contact form submission from ${SITE.name} website`,
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Could not send your message. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
