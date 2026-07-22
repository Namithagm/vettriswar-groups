import { NextResponse } from "next/server";
import { Resend } from "resend";
import { newsletterSchema } from "@/lib/schemas";

// Uses Resend's Audiences API. Create an audience in the Resend dashboard
// and set its ID as RESEND_AUDIENCE_ID (see .env.example). Swap this file
// for a Mailchimp call if you'd rather use Mailchimp instead.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      console.error("RESEND_API_KEY or RESEND_AUDIENCE_ID is not set.");
      return NextResponse.json(
        { success: false, error: "Newsletter is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.contacts.create({
      email: parsed.data.email,
      audienceId,
      unsubscribed: false,
    });

    if (error) {
      console.error("Resend newsletter error:", error);
      return NextResponse.json(
        { success: false, error: "Could not subscribe right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
