"use client";

import Reveal from "@/components/ui/reveal";

// Demo client names for the marquee — replace with real client names/logos
// (with permission to display) once available.
const CLIENTS = [
  "Northbridge Mfg",
  "Solace Health",
  "Vertex Retail",
  "Ashgrove Finance",
  "Kelso Logistics",
  "Bright Path Edu",
  "Marrow Studio",
  "Ferro Industries",
];

export default function ClientLogos() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className="relative overflow-hidden border-y border-paper/10 bg-ink py-16">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow">Trusted By</p>
          <h3 className="mt-3 font-display text-2xl text-paper sm:text-3xl">
            Teams We&apos;ve Worked With
          </h3>
        </Reveal>
      </div>

      <div className="group relative mask-fade-edges">
        <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center whitespace-nowrap font-display text-xl text-paper-muted/50 grayscale transition-all duration-500 hover:text-gold hover:grayscale-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
