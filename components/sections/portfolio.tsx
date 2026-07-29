"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/reveal";

type Project = {
  id: string;
  title: string;
  category: "Web" | "AI" | "Enterprise" | "Automation";
  industry: string;
  client: string;
  year: string;
  description: string;
  tech: string[];
  achievements: string[];
  imageSrc: string;
};

const PROJECTS: Project[] = [
  {
    id: "p7",
    title: "AI Data Annotation & Labeling",
    category: "AI",
    industry: "AI / Machine Learning",
    client: "Innodata Inc.",
    year: "2026",
    description:
      "Large-scale annotation and labeling of text, image, audio, video, and document datasets to support training and validation of AI and Generative AI models.",
    tech: ["NLP", "Computer Vision", "Data QA", "HITL Workflows"],
    achievements: [
      "Delivered high-quality labeled datasets across multiple content formats",
      "Maintained consistency through standardized QA protocols",
      "Supported model training for NLP, vision, and Generative AI use cases",
    ],
    imageSrc: "/images/projects/project-p7.svg",
  },
  {
    id: "p8",
    title: "Mapping & Search Evaluation",
    category: "AI",
    industry: "AI / Geospatial Data",
    client: "TELUS Digital AI",
    year: "2026",
    description:
      "Quality evaluation of map search results, location accuracy, routing relevance, and Points of Interest data to improve AI-powered navigation systems.",
    tech: ["Search Evaluation", "Geospatial QA", "Data Validation"],
    achievements: [
      "Rated map search relevance against standardized quality guidelines",
      "Validated business listings, addresses, and POI accuracy",
      "Contributed evaluation data used to improve mapping AI models",
    ],
    imageSrc: "/images/projects/project-p8.svg",
  },
  {
    id: "p9",
    title: "Custom WordPress Website Development",
    category: "Web",
    industry: "Information Technology",
    client: "Stackly",
    year: "2026",
    description:
      "End-to-end WordPress website development including theme customization, plugin configuration, performance optimization, and ongoing maintenance.",
    tech: ["WordPress", "PHP", "HTML/CSS", "JavaScript"],
    achievements: [
      "Delivered responsive, cross-browser compatible websites",
      "Optimized site speed and security following best practices",
      "Provided ongoing technical support and maintenance",
    ],
    imageSrc: "/images/projects/project-p9.svg",
  },
  {
    id: "p10",
    title: "AI Content Review & Transcription Rating",
    category: "AI",
    industry: "AI / Content Quality",
    client: "SRT (Meta Platform)",
    year: "2026",
    description:
      "Review and quality rating of AI-generated transcriptions and content across video, audio, text, and document formats to support machine learning model validation.",
    tech: ["NLP", "Transcription QA", "Content Moderation"],
    achievements: [
      "Evaluated AI-generated transcriptions for accuracy and consistency",
      "Identified and flagged transcription and formatting errors",
      "Supported model validation for speech recognition and language systems",
    ],
    imageSrc: "/images/projects/project-p10.svg",
  },
];

const CATEGORIES = ["All", "Web", "AI"] as const;

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="portfolio" className="relative bg-ink-soft py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our Work</p>
          <h2 className="section-heading mt-4 text-paper">
            Selected{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
          <p className="mt-6 text-balance font-serif text-lg italic text-paper-muted">
            A look at the range of engagements we take on across industries
            and technologies.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                filter === cat
                  ? "border-gold bg-gold text-ink"
                  : "border-paper/15 text-paper-muted hover:border-gold/50 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group glass-card glass-card-hover overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden rounded-t-3xl bg-ink-raised">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover object-center opacity-95"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-ink/50"
                />
                <div className="absolute left-4 top-4 rounded-full border border-paper/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-widest text-paper">
                  {project.category}
                </div>
              </div>

              <div className="p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg text-paper">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-widest text-paper-muted/70">
                    {project.industry} &middot; {project.year}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-paper-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-paper/10 px-3 py-1 text-[11px] text-paper-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActive(project)}
                    className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold hover:underline"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card relative max-h-[85vh] w-full max-w-2xl overflow-y-auto p-8 md:p-10"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close project details"
                className="absolute right-5 top-5 text-paper-muted hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="mt-4 font-display text-2xl text-paper">
                {active.title}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-paper-muted/70">
                {active.industry} &middot; {active.year} &middot; {active.client}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-paper-muted">
                {active.description}
              </p>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold">
                Technologies
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-paper/10 px-3 py-1 text-[11px] text-paper-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold">
                Key Achievements
              </h4>
              <ul className="mt-3 space-y-2">
                {active.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-paper-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
