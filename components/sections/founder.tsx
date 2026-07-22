import Image from "next/image";
import { Linkedin, Quote } from "lucide-react";
import { FOUNDER } from "@/lib/constants";
import Reveal from "@/components/ui/reveal";

export default function FounderSection() {
  return (
    <section className="relative bg-ink-soft py-28 md:py-36">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Leadership</p>
          <h2 className="section-heading mt-4 text-paper">
            Meet Our{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Founder
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal direction="left">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-3xl bg-gold-gradient opacity-20 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold/20 bg-ink-raised">
                {/* Demo initials avatar — swap for an approved founder portrait when available */}
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-display text-6xl text-gold/25">
                    {FOUNDER.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <Quote className="h-10 w-10 text-gold/40" />
            <p className="mt-4 text-balance font-serif text-2xl italic leading-snug text-paper sm:text-3xl">
              {FOUNDER.quote}
            </p>

            <div className="mt-8">
              <h3 className="font-display text-2xl text-paper">
                {FOUNDER.name}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-widest text-gold">
                {FOUNDER.title}
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper-muted">
                {FOUNDER.bio}
              </p>

              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
