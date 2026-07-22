"use client";

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
};

// Demo portfolio — six illustrative case studies used to showcase the
// template's layout and filtering. Client names are fictional; replace with
// real, permissioned case studies before launch.
const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Manufacturing KPI Dashboard",
    category: "Enterprise",
    industry: "Manufacturing",
    client: "Northbridge Mfg (Demo Client)",
    year: "2025",
    description:
      "Real-time production, downtime, and quality dashboard unifying data from shop-floor sensors and legacy MES systems into a single operations view.",
    tech: ["Next.js", "PostgreSQL", "Docker", "Grafana"],
    achievements: [
      "Cut manual reporting time by roughly 70%",
      "Unified 4 separate plant data sources into one dashboard",
      "Enabled shift-level downtime alerts within seconds",
    ],
  },
  {
    id: "p2",
    title: "AI Recruitment Platform",
    category: "AI",
    industry: "Human Resources",
    client: "Bright Path Edu (Demo Client)",
    year: "2025",
    description:
      "LLM-powered resume screening and candidate-matching platform that ranks applicants against role requirements and surfaces interview-ready shortlists.",
    tech: ["LangChain", "FastAPI", "Groq AI", "PostgreSQL"],
    achievements: [
      "Reduced initial screening time from days to minutes",
      "Improved shortlist-to-interview conversion rate",
      "Processed thousands of resumes per hiring cycle",
    ],
  },
  {
    id: "p3",
    title: "Smart ERP System",
    category: "Enterprise",
    industry: "Retail & Distribution",
    client: "Vertex Retail (Demo Client)",
    year: "2024",
    description:
      "Modular ERP covering inventory, procurement, and finance for a multi-warehouse distribution business, replacing a patchwork of spreadsheets.",
    tech: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    achievements: [
      "Consolidated 3 warehouses onto one inventory system",
      "Cut stock discrepancy incidents significantly",
      "Automated purchase-order generation end to end",
    ],
  },
  {
    id: "p4",
    title: "Healthcare Management Platform",
    category: "Enterprise",
    industry: "Healthcare",
    client: "Solace Health (Demo Client)",
    year: "2024",
    description:
      "Secure patient intake, scheduling, and records platform for a multi-location clinic network, built with strict access controls and audit logging.",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker"],
    achievements: [
      "Streamlined intake across multiple clinic locations",
      "Reduced appointment no-shows with automated reminders",
      "Passed internal security and access-control review",
    ],
  },
  {
    id: "p5",
    title: "Enterprise CRM Solution",
    category: "Web",
    industry: "Financial Services",
    client: "Ashgrove Finance (Demo Client)",
    year: "2023",
    description:
      "Custom CRM tracking the full client lifecycle — leads, onboarding, servicing, and renewals — with role-based pipelines for sales and support teams.",
    tech: ["Next.js", "Tailwind", "PostgreSQL", "Stripe"],
    achievements: [
      "Centralized client data previously split across 5 tools",
      "Shortened average deal-to-close time",
      "Gave leadership real-time pipeline visibility",
    ],
  },
  {
    id: "p6",
    title: "Business Intelligence Dashboard",
    category: "Automation",
    industry: "Logistics",
    client: "Kelso Logistics (Demo Client)",
    year: "2023",
    description:
      "n8n-driven pipeline connecting CRM, email, and finance systems into a single automated reporting layer with a live BI dashboard on top.",
    tech: ["n8n", "REST APIs", "PostgreSQL", "Metabase"],
    achievements: [
      "Automated weekly reporting that took a full day manually",
      "Connected 3 previously siloed systems",
      "Gave finance and ops a shared source of truth",
    ],
  },
];

const CATEGORIES = ["All", "Web", "AI", "Enterprise", "Automation"] as const;

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
            Demo case studies illustrating the range of engagements we take on
            across industries and technologies.
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
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-ink-raised via-ink-soft to-ink">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gold-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-ink/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">
                    Demo Project
                  </span>
                  <span className="font-display text-2xl text-gold/30 transition-transform duration-700 group-hover:scale-110">
                    {project.category}
                  </span>
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

              <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">
                Demo Project
              </span>
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
