"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector(l.href)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        scrolled
          ? "border-b border-gold/10 bg-ink/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      )}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/vettriswar-logo.png"
            alt="Vettriswar Groups of Company"
            width={140}
            height={50}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "font-body text-[13px] font-medium uppercase tracking-widest transition-colors duration-300",
                  active === link.href
                    ? "text-gold"
                    : "text-paper-muted hover:text-gold"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <a href="#contact" className="btn-gold">
            Contact Us
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-gold"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between container-px py-5">
              <Image
                src="/images/vettriswar-logo.png"
                alt={SITE.name}
                width={130}
                height={46}
                className="h-9 w-auto object-contain"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-gold"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
              className="mt-6 flex flex-col items-center gap-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl tracking-wide text-paper hover:text-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-gold mt-4"
              >
                Contact Us
              </motion.a>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
