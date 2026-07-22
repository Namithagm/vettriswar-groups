"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/reveal";

const FAQS = [
  {
    question: "What services does Vettriswar Groups of Company offer?",
    answer:
      "We provide software development, AI solutions, business consulting, digital marketing, automation, recruitment, enterprise solutions, and cloud services. Each engagement is scoped to the client's specific need.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing depends on project scope — we offer both fixed-scope quotes for defined deliverables and ongoing retainers for continuous work. We'll walk through the right structure during your consultation.",
  },
  {
    question: "What does post-launch support look like?",
    answer:
      "All projects include a defined support window post-launch, with optional extended maintenance plans for ongoing updates and monitoring.",
  },
  {
    question: "Are you currently hiring?",
    answer:
      "Yes — check the Careers section above for current openings, or reach out directly if you don't see a fit but want to connect.",
  },
  {
    question: "How do I start a consultation?",
    answer:
      "Fill out the contact form below or email us directly. We typically respond within one to two business days to schedule an initial call.",
  },
  {
    question: "Do you work with startups as well as enterprises?",
    answer:
      "Yes — we work across company sizes, from early-stage startups needing an MVP to enterprises modernizing legacy systems.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink-soft py-28 md:py-36">
      <div className="container-px mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow">Questions</p>
          <h2 className="section-heading mt-4 text-paper">
            Frequently Asked{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        <div className="mt-14 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="overflow-hidden rounded-xl border border-paper/10 bg-paper/[0.02]">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-base text-paper sm:text-lg">
                      {faq.question}
                    </span>
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
                        <p className="px-6 pb-6 text-sm leading-relaxed text-paper-muted">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
