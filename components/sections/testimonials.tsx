"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import Reveal from "@/components/ui/reveal";

import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  name: string;
  designation: string;
  company: string;
  review: string;
  rating: number;
};

// Demo testimonials — fictional names and companies used to showcase this
// section's layout. Replace with real, permissioned client quotes before launch.
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arun Kumar",
    designation: "Operations Director",
    company: "Northbridge Mfg (Demo)",
    review:
      "Vettriswar Groups of Company rebuilt our reporting stack in weeks. The team communicated clearly and delivered exactly what we asked for, on schedule.",
    rating: 5,
  },
  {
    name: "Priya Raman",
    designation: "Founder",
    company: "Bright Path Edu (Demo)",
    review:
      "Working with Vettriswar Groups of Company felt like having an in-house engineering team. Thoughtful, responsive, and genuinely invested in our outcome.",
    rating: 5,
  },
  {
    name: "David Chen",
    designation: "CTO",
    company: "Ashgrove Finance (Demo)",
    review:
      "Their AI solutions team helped us cut manual review time significantly. Strong technical judgment and clear documentation throughout.",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    designation: "Head of Operations",
    company: "Kelso Logistics (Demo)",
    review:
      "Reliable, professional, and easy to work with across every phase — from discovery to post-launch support.",
    rating: 5,
  },
  {
    name: "Rajesh Menon",
    designation: "VP of Engineering",
    company: "Vertex Retail (Demo)",
    review:
      "They took the time to actually understand our inventory workflows before writing a line of code. The ERP rollout was smoother than any vendor project we've run before.",
    rating: 5,
  },
  {
    name: "Ananya Suresh",
    designation: "Clinic Director",
    company: "Solace Health (Demo)",
    review:
      "Data security was our biggest concern going in, and the team addressed it head-on. The platform has been stable since day one across all our locations.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-50" />

      <div className="container-px relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-heading mt-4 text-paper">
            What Our{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
          <p className="mt-4 text-xs uppercase tracking-widest text-paper-muted/60">
            Demo testimonials — illustrative quotes, not real clients
          </p>
        </Reveal>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-4"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name} className="!h-auto">
                <div className="glass-card flex h-full flex-col p-8">
                  <Quote className="h-8 w-8 text-gold/40" />
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-paper-muted">
                    &ldquo;{t.review}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-paper/10 pt-4">
                    <p className="font-display text-base text-paper">
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-xs text-paper-muted">
                      {t.designation}, {t.company}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination mt-8 flex justify-center gap-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-paper/20 [&_.swiper-pagination-bullet-active]:bg-gold" />
        </div>
      </div>
    </section>
  );
}
