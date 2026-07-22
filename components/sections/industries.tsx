"use client";

import {
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Landmark,
  HardHat,
  Building,
  Scale,
  Rocket,
  ShoppingCart,
} from "lucide-react";
import Reveal from "@/components/ui/reveal";

const INDUSTRIES = [
  { icon: Factory, name: "Manufacturing" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Landmark, name: "Finance" },
  { icon: HardHat, name: "Construction" },
  { icon: Building, name: "Real Estate" },
  { icon: Scale, name: "Government" },
  { icon: Rocket, name: "Startups" },
  { icon: ShoppingCart, name: "E-Commerce" },
];

export default function Industries() {
  return (
    <section id="industries" className="relative bg-ink-soft py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Where We Work</p>
          <h2 className="section-heading mt-4 text-paper">
            Industries{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
          <p className="mt-6 text-balance font-serif text-lg italic text-paper-muted">
            Domain context matters — here&apos;s where our solutions are
            already at work.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.name} delay={(i % 5) * 0.06}>
              <div className="group flex h-full flex-col items-center justify-center gap-4 rounded-xl border border-paper/10 bg-paper/[0.02] px-4 py-10 text-center transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-gold/40 hover:bg-paper/[0.05]">
                <industry.icon
                  className="h-7 w-7 text-gold/70 transition-colors duration-500 group-hover:text-gold"
                  strokeWidth={1.5}
                />
                <span className="font-body text-sm font-medium text-paper-muted transition-colors duration-500 group-hover:text-paper">
                  {industry.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
