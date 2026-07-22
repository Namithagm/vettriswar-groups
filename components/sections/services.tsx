"use client";

import {
  Code2,
  BrainCircuit,
  Briefcase,
  Megaphone,
  Workflow,
  Users,
  Building2,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "@/components/ui/reveal";

const SERVICES = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom web and mobile applications engineered for reliability, built on modern, maintainable architecture.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Practical AI systems — from LLM-powered tools to predictive models — designed around real business workflows.",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Strategic guidance on operations, technology adoption, and growth planning for organizations at every stage.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns and brand positioning that turn visibility into measurable business outcomes.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "End-to-end workflow automation that removes manual bottlenecks and keeps teams focused on higher-value work.",
  },
  {
    icon: Users,
    title: "Recruitment",
    description:
      "Talent sourcing and staffing support to help growing teams hire the right people, faster.",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description:
      "Large-scale systems and integrations built to support complex organizational needs at enterprise reliability.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Cloud architecture, migration, and managed infrastructure built for security, uptime, and scale.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ink-soft py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />

      <div className="container-px relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-heading mt-4 text-paper">
            Our{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
          <p className="mt-6 text-balance font-serif text-lg italic text-paper-muted">
            A full-stack partner across technology, strategy, and growth —
            engaged individually or as one integrated team.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 0.08}>
              <div className="glass-card glass-card-hover group relative h-full overflow-hidden p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/20"
                />

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                  <service.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <h3 className="mt-6 font-display text-lg text-paper">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-muted">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
