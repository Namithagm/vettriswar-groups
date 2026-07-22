import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container-px mx-auto max-w-3xl py-32">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-4 text-paper">Privacy Policy</h1>
      <div className="divider-gold mt-6" />

      <div className="prose prose-invert mt-10 max-w-none space-y-6 text-sm leading-relaxed text-paper-muted">
        <p>
          This Privacy Policy outlines the general approach {SITE.name} takes to
          visitor data. It is provided as demo content for this template and should be
          reviewed by qualified legal counsel before the site goes live.
        </p>

        <h2 className="font-display text-lg text-paper">Information We Collect</h2>
        <p>
          We may collect information you voluntarily provide through our contact and
          newsletter forms, such as your name, email address, phone number, and message
          content. We may also collect standard technical data (IP address, browser
          type, pages visited) via analytics tools once you consent to their use.
        </p>

        <h2 className="font-display text-lg text-paper">How We Use Cookies</h2>
        <p>
          We use a cookie consent banner to let you choose which categories of cookies
          are active on your visit: necessary cookies (always on, required for the site
          to function), analytics cookies, and marketing cookies. You can change your
          preference at any time by clearing your browser&apos;s local storage for this
          site and revisiting.
        </p>

        <h2 className="font-display text-lg text-paper">How We Use Your Information</h2>
        <p>
          Information submitted through our forms is used solely to respond to your
          inquiry or to send newsletter updates you opted into. We do not sell personal
          information to third parties.
        </p>

        <h2 className="font-display text-lg text-paper">Data Retention & Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal data by
          contacting us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-gold hover:underline">
            {SITE.email}
          </a>
          .
        </p>

        <h2 className="font-display text-lg text-paper">Contact</h2>
        <p>
          Questions about this policy can be directed to{" "}
          <a href={`mailto:${SITE.emails.general}`} className="text-gold hover:underline">
            {SITE.emails.general}
          </a>
          , by phone at {SITE.phones[0]}, or by post at {SITE.address.full}.
        </p>

        <p className="text-xs text-paper-muted/60">Last updated: July 2026 (demo content)</p>
      </div>
    </section>
  );
}
