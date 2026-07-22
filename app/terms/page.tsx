import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/terms` },
};

export default function TermsPage() {
  return (
    <section className="container-px mx-auto max-w-3xl py-32">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-4 text-paper">Terms of Service</h1>
      <div className="divider-gold mt-6" />

      <div className="prose prose-invert mt-10 max-w-none space-y-6 text-sm leading-relaxed text-paper-muted">
        <p>
          These Terms of Service govern your use of the {SITE.name} website. They are
          provided as demo content for this template and should be reviewed by
          qualified legal counsel before launch.
        </p>

        <h2 className="font-display text-lg text-paper">Use of This Site</h2>
        <p>
          By accessing this website you agree to use it only for lawful purposes and in
          a way that does not infringe the rights of, or restrict, anyone else&apos;s use
          of it.
        </p>

        <h2 className="font-display text-lg text-paper">Intellectual Property</h2>
        <p>
          All content on this site, including text, graphics, logos, and images, is the
          property of {SITE.name} unless otherwise stated, and may not be reproduced
          without permission.
        </p>

        <h2 className="font-display text-lg text-paper">Limitation of Liability</h2>
        <p>
          {SITE.name} makes reasonable efforts to keep information on this site accurate
          and up to date but does not warrant that content is complete or error-free.
        </p>

        <h2 className="font-display text-lg text-paper">Governing Law</h2>
        <p>
          These terms are governed by the laws of India, with courts in Salem, Tamil
          Nadu having jurisdiction (demo content — confirm with legal counsel before
          launch).
        </p>

        <h2 className="font-display text-lg text-paper">Contact</h2>
        <p>
          Questions about these terms can be directed to{" "}
          <a href={`mailto:${SITE.emails.general}`} className="text-gold hover:underline">
            {SITE.emails.general}
          </a>{" "}
          or by post at {SITE.address.full}.
        </p>

        <p className="text-xs text-paper-muted/60">Last updated: July 2026 (demo content)</p>
      </div>
    </section>
  );
}
