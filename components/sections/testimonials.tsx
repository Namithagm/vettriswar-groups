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

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Innodata Inc.",
    designation: "Data Engineering & AI Solutions Partner",
    company: "Innodata",
    review:
      "Vettriswar Groups of Company delivered consistently accurate, well-structured annotated datasets across text, image, and document formats. Their attention to quality assurance protocols made a real difference in our model training pipeline.",
    rating: 5,
  },
  {
    name: "TELUS Digital AI",
    designation: "AI Evaluation & Search Quality Partner",
    company: "TELUS Digital AI",
    review:
      "The mapping evaluation work from Vettriswar Groups of Company was thorough and precise — strong attention to detail on location accuracy, POI validation, and search relevance that directly improved our data quality standards.",
    rating: 5,
  },
  {
    name: "Stackly",
    designation: "IT & Digital Solutions Partner",
    company: "Stackly",
    review:
      "Vettriswar Groups of Company handled our WordPress development needs end-to-end — from theme customization to performance optimization — with clean execution and dependable communication throughout.",
    rating: 5,
  },
  {
    name: "SRT (Meta Platform)",
    designation: "AI Content Review Partner",
    company: "Supplier Review Tool",
    review:
      "Their content review team brought sharp analytical rigor to evaluating AI-generated transcriptions across video, audio, and text. Consistent, quality-focused work that supported our model validation goals.",
    rating: 5,
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
