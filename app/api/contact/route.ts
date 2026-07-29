import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";
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

    const toAddress = process.env.CONTACT_TO_EMAIL || SITE.emails.general;
    const resendApiKey = process.env.RESEND_API_KEY;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number.parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const emailText = [
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
      .join("\n");

    // Option 1: Use Resend if RESEND_API_KEY is configured
    if (resendApiKey) {
      const fromAddress = process.env.CONTACT_FROM_EMAIL || "Vettriswar Groups <onboarding@resend.dev>";
      const resend = new Resend(resendApiKey);

      const { error } = await resend.emails.send({
        from: fromAddress,
        to: toAddress,
        replyTo: email,
        subject: `[Website Inquiry] ${subject}`,
        text: emailText,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { success: false, error: "Could not send your message via Resend. Please verify your Resend key/domain." },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true });
    }

    // Option 2: Use SMTP (Nodemailer - Gmail / Custom SMTP) if credentials are provided
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: process.env.CONTACT_FROM_EMAIL || `"${name}" <${smtpUser}>`,
        to: toAddress,
        replyTo: email,
        subject: `[Website Inquiry] ${subject}`,
        text: emailText,
      });

      return NextResponse.json({ success: true });
    }

    // Option 3: Zero-Config Fallback via FormSubmit directly to toAddress
    try {
      const fsRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(toAddress)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: SITE.url,
          Referer: SITE.url,
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || "N/A",
          _subject: `[Website Inquiry] ${subject}`,
          message,
          _replyto: email,
        }),
      });

      const fsData = await fsRes.json();

      if (fsRes.ok || fsData.success === "true" || fsData.message?.includes("activate")) {
        return NextResponse.json({ success: true });
      }
    } catch (fsErr) {
      console.error("FormSubmit fallback error:", fsErr);
    }

    console.error("No working email provider configured.");
    return NextResponse.json(
      {
        success: false,
        error: "Could not send email. Please ensure your email configuration is set up.",
      },
      { status: 500 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
