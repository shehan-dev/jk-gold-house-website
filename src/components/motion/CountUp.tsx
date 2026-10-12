"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Gently counts from 0 to `to` once visible. Shows the final value for reduced motion and before hydration. */
export function CountUp({ to, suffix = "", duration = 2.4 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (reduce) {
      setValue(to);
      return;
    }
    if (!inView) {
      setValue(0);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  return (
    <span ref={ref} role="text" aria-label={`${to}${suffix}`}>
      <span aria-hidden>
        {value}
        {suffix}
      </span>
    </span>
  );
}
