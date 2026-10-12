"use client";

import { motion } from "motion/react";

/** Thin gold line that draws itself when it enters the viewport. */
export function GoldLine({
  className = "",
  origin = "left",
  delay = 0.2,
  vertical = false,
}: {
  className?: string;
  origin?: "left" | "center" | "right" | "top";
  delay?: number;
  vertical?: boolean;
}) {
  return (
    <motion.span
      aria-hidden
      className={`block bg-gold ${vertical ? "w-px" : "h-px"} ${className}`}
      style={{ transformOrigin: origin === "top" ? "top" : origin }}
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
