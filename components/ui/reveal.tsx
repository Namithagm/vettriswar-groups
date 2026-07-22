"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
};

const variantsFor = (direction: RevealProps["direction"]): Variants => {
  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, x: -40 },
        show: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: 40 },
        show: { opacity: 1, x: 0 },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.92 },
        show: { opacity: 1, scale: 1 },
      };
    default:
      return {
        hidden: { opacity: 0, y: 32 },
        show: { opacity: 1, y: 0 },
      };
  }
};

export default function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={variantsFor(direction)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
