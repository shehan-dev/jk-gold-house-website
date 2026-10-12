"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * Moves its children against the scroll direction for a slow parallax.
 * `distance` is the total travel in percent of the element height.
 */
export function Parallax({
  children,
  className = "",
  distance = 12,
  axis = "y",
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  axis?: "x" | "y";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const shift = useTransform(scrollYProgress, [0, 1], [`-${distance / 2}%`, `${distance / 2}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={
          reduce
            ? undefined
            : axis === "y"
              ? { y: shift, top: `-${distance / 2}%`, bottom: `-${distance / 2}%` }
              : { x: shift, left: `-${distance / 2}%`, right: `-${distance / 2}%` }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
