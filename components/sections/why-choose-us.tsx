"use client";

import {
  Award,
  HeartHandshake,
  Lightbulb,
  Zap,
  ShieldCheck,
  Headphones,
  Layers,
  BadgeCheck,
} from "lucide-react";
import Reveal from "@/components/ui/reveal";

const REASONS = [
  {
    icon: Award,
    title: "Experienced Team",
    description: "Practitioners who've shipped real systems, not just prototypes.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "Every engagement starts with your outcomes, not our template.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We bring current tools and methods, applied with judgment.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Momentum matters — we ship in weeks, not quarters.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Solutions",
    description: "Built to hold up under real usage and real scrutiny.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Support that's there when something actually breaks.",
  },
  {
    icon: Layers,
    title: "Industry Expertise",
    description: "Context across manufacturing, healthcare, finance, and more.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Rigorous testing before anything reaches production.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-ink py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our Advantage</p>
          <h2 className="section-heading mt-4 text-paper">
            Why Choose{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Vettriswar Groups of Company
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 4) * 0.07} direction="scale">
              <div className="group relative flex h-full flex-col items-center bg-ink-soft p-8 text-center transition-colors duration-500 hover:bg-ink-raised">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/25 text-gold transition-all duration-500 group-hover:animate-pulse-glow group-hover:border-gold">
                  <reason.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-base text-paper">
                  {reason.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-paper-muted">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
