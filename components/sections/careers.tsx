"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Coffee,
  TrendingUp,
  Users2,
  MapPin,
  ArrowRight,
  ChevronDown,
  Briefcase,
  Clock3,
} from "lucide-react";
import Reveal from "@/components/ui/reveal";

const BENEFITS = [
  { icon: GraduationCap, title: "Continuous Learning", copy: "Structured mentorship and space to grow real skills." },
  { icon: Coffee, title: "Balanced Culture", copy: "Sustainable pace, respected boundaries, real flexibility." },
  { icon: TrendingUp, title: "Growth Paths", copy: "Clear routes from individual contributor to leadership." },
  { icon: Users2, title: "Collaborative Teams", copy: "Small, senior teams where your voice actually matters." },
];

type Opening = {
  title: string;
  type: string;
  location: string;
  experience: string;
  responsibilities: string[];
  requirements: string[];
};

// Demo openings — illustrative roles used to showcase this section's layout.
// Replace with real, current vacancies before launch.
const OPENINGS: Opening[] = [
  {
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Salem / Remote",
    experience: "2–4 years",
    responsibilities: [
      "Build and maintain features across our Next.js frontend and Node.js backend",
      "Collaborate with design and product on new client-facing features",
      "Write tests and participate in code review",
    ],
    requirements: [
      "Strong experience with React, Next.js, and TypeScript",
      "Comfortable with REST APIs and relational databases (PostgreSQL)",
      "Familiarity with Git-based workflows and CI/CD",
    ],
  },
  {
    title: "AI Engineer",
    type: "Full-time",
    location: "Salem",
    experience: "2–5 years",
    responsibilities: [
      "Design and ship LLM-powered features using LangChain and FastAPI",
      "Evaluate and fine-tune models for client-specific use cases",
      "Own model performance, cost, and reliability in production",
    ],
    requirements: [
      "Hands-on experience with LangChain, FastAPI, or similar frameworks",
      "Understanding of RAG, embeddings, and prompt engineering",
      "Python proficiency and comfort working with APIs like Groq or OpenAI",
    ],
  },
  {
    title: "React Developer",
    type: "Full-time",
    location: "Remote",
    experience: "1–3 years",
    responsibilities: [
      "Implement responsive, accessible UI components from design specs",
      "Optimize front-end performance across client projects",
      "Work closely with backend engineers to integrate APIs",
    ],
    requirements: [
      "Solid grasp of React, hooks, and modern component patterns",
      "Experience with Tailwind CSS or a comparable utility-first framework",
      "Eye for detail in spacing, motion, and responsive layouts",
    ],
  },
  {
    title: "Flutter Developer",
    type: "Full-time",
    location: "Salem / Remote",
    experience: "1–3 years",
    responsibilities: [
      "Build and maintain cross-platform mobile apps for client projects",
      "Integrate REST and GraphQL APIs into mobile clients",
      "Ship to both the App Store and Google Play",
    ],
    requirements: [
      "Experience shipping at least one production Flutter app",
      "Comfortable with state management (Provider, Riverpod, or Bloc)",
      "Understanding of native platform considerations for iOS and Android",
    ],
  },
  {
    title: "UI/UX Designer",
    type: "Contract",
    location: "Remote",
    experience: "2+ years",
    responsibilities: [
      "Design user flows, wireframes, and high-fidelity UI for web and mobile",
      "Maintain and extend our design system across projects",
      "Partner with engineering to ensure designs ship as intended",
    ],
    requirements: [
      "Strong portfolio demonstrating end-to-end product design work",
      "Proficiency in Figma and prototyping tools",
      "Ability to explain design decisions with clear rationale",
    ],
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Salem",
    experience: "3–5 years",
    responsibilities: [
      "Own CI/CD pipelines and deployment automation across client projects",
      "Manage containerized environments with Docker",
      "Monitor uptime, performance, and incident response",
    ],
    requirements: [
      "Experience with Docker, CI/CD tooling, and cloud infrastructure",
      "Comfortable with Linux administration and scripting",
      "Familiarity with monitoring and logging tools",
    ],
  },
  {
    title: "HR Executive",
    type: "Full-time",
    location: "Salem",
    experience: "1–3 years",
    responsibilities: [
      "Manage end-to-end recruitment for technical and non-technical roles",
      "Coordinate onboarding, documentation, and employee records",
      "Support culture and engagement initiatives across the team",
    ],
    requirements: [
      "Prior experience in HR or recruitment, ideally in tech or services",
      "Strong communication and organizational skills",
      "Comfortable using applicant tracking and HRMS tools",
    ],
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Salem / Remote",
    experience: "1–3 years",
    responsibilities: [
      "Plan and execute campaigns across LinkedIn, Instagram, and email",
      "Track performance metrics and report on campaign ROI",
      "Support content creation for blog and social channels",
    ],
    requirements: [
      "Experience running paid and organic campaigns on social platforms",
      "Familiarity with analytics tools (GA4, Meta Business Suite)",
      "Strong written communication skills",
    ],
  },
];

export default function Careers() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="careers" className="relative bg-ink-soft py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Join Us</p>
          <h2 className="section-heading mt-4 text-paper">
            Careers at{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Vettriswar Groups of Company
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
          <p className="mt-6 text-balance font-serif text-lg italic text-paper-muted">
            We hire people who take ownership and care about the craft.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="glass-card glass-card-hover h-full p-7 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                  <b.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-base text-paper">
                  {b.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-paper-muted">
                  {b.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16">
          <h3 className="mb-2 text-center font-display text-xl text-paper">
            Current Openings
          </h3>
          <p className="mb-6 text-center text-xs uppercase tracking-widest text-paper-muted/60">
            Demo openings — illustrative roles, not live vacancies
          </p>
          <div className="mx-auto flex max-w-3xl flex-col divide-y divide-white/10 overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.02]">
            {OPENINGS.map((job, i) => {
              const isOpen = open === i;
              return (
                <div key={job.title}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full flex-col items-start justify-between gap-3 p-6 text-left transition-colors duration-300 hover:bg-paper/[0.03] sm:flex-row sm:items-center"
                  >
                    <div>
                      <p className="font-display text-base text-paper">
                        {job.title}
                      </p>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-paper-muted">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock3 className="h-3 w-3" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 text-gold"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-5 px-6 pb-7">
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">
                              Responsibilities
                            </h4>
                            <ul className="mt-2 space-y-1.5">
                              {job.responsibilities.map((r) => (
                                <li key={r} className="text-sm leading-relaxed text-paper-muted">
                                  &middot; {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">
                              Requirements
                            </h4>
                            <ul className="mt-2 space-y-1.5">
                              {job.requirements.map((r) => (
                                <li key={r} className="text-sm leading-relaxed text-paper-muted">
                                  &middot; {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold hover:underline"
                          >
                            Apply Now
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
