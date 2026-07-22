import { Compass, Eye, Gem, Target } from "lucide-react";
import Reveal from "@/components/ui/reveal";

const PILLARS = [
  {
    icon: Target,
    title: "Mission",
    copy: "To engineer dependable technology and business solutions that let our clients move with confidence in competitive markets.",
  },
  {
    icon: Eye,
    title: "Vision",
    copy: "To be recognized as a trusted long-term technology and consulting partner across the industries we serve.",
  },
  {
    icon: Gem,
    title: "Core Values",
    copy: "Integrity, craftsmanship, and accountability guide every engagement, from a single automation to a full platform build.",
  },
  {
    icon: Compass,
    title: "Company Overview",
    copy: "Vettriswar Groups of Company partners with organizations across manufacturing, healthcare, finance, and beyond to design, build, and support technology that fits how they actually work.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">About Us</p>
          <h2 className="section-heading mt-4 text-paper">
            Built on Craft,
            <span className="block bg-gold-gradient bg-clip-text text-transparent">
              Guided by Purpose
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
          <p className="mt-6 text-balance font-serif text-lg italic text-paper-muted">
            Vettriswar Groups of Company is a business and technology solutions company
            helping organizations modernize how they build, sell, and
            operate.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="glass-card glass-card-hover group h-full p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                  <pillar.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-display text-xl text-paper">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-muted">
                  {pillar.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
