"use client";

import { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Send, Check, Mail, Phone, MapPin } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

const SERVICES = [
  "Software Development",
  "AI Solutions",
  "Business Consulting",
  "Digital Marketing",
  "Automation",
  "Cloud Services",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) {
        setError(result.error || "Could not subscribe. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setError("Network error — please try again.");
      setStatus("error");
    }
  };

  return (
    <footer className="relative border-t border-paper/10 bg-ink-soft">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/images/vettriswar-logo.png"
              alt={SITE.name}
              width={150}
              height={53}
              className="h-14 w-auto object-contain"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper-muted">
              {SITE.description}
            </p>
            <div className="mt-5 space-y-2.5 text-sm text-paper-muted">
              <a href={`mailto:${SITE.emails.general}`} className="flex items-start gap-2 hover:text-gold">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {SITE.emails.general}
              </a>
              <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`} className="flex items-start gap-2 hover:text-gold">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {SITE.phones[0]}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{SITE.address.full}</span>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
                { icon: Twitter, href: SITE.social.twitter, label: "Twitter" },
                { icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
                { icon: Youtube, href: SITE.social.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/10 text-paper-muted transition-all duration-300 hover:border-gold/50 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-gold">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-paper-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-gold">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-paper-muted transition-colors hover:text-gold"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-gold">
              Newsletter
            </h4>
            <p className="mt-5 text-sm text-paper-muted">
              Occasional updates on our work. No noise.
            </p>
            {status === "success" ? (
              <p className="mt-4 flex items-center gap-2 text-sm text-gold">
                <Check className="h-4 w-4" /> Subscribed — thank you!
              </p>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="mt-4 flex overflow-hidden rounded-full border border-paper/15 bg-paper/5"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Email address"
                  className="w-full bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper-muted/60 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  aria-label="Subscribe"
                  className="flex items-center justify-center bg-gold-gradient px-4 text-ink transition-transform hover:scale-105 disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
            {status === "error" && error && (
              <p role="alert" className="mt-2 text-xs text-red-400">
                {error}
              </p>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-8 text-xs text-paper-muted/70 sm:flex-row">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
