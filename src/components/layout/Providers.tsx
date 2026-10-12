"use client";

import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

let lenisInstance: Lenis | null = null;

/** Smoothly scroll to an element or position, falling back to native scrolling. */
export function smoothScrollTo(target: string | HTMLElement | number) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { duration: 1.6 });
    return;
  }
  if (typeof target === "number") window.scrollTo({ top: target, behavior: "smooth" });
  else (typeof target === "string" ? document.querySelector(target) : target)?.scrollIntoView({ behavior: "smooth" });
}

export function setScrollLocked(locked: boolean) {
  if (lenisInstance) {
    if (locked) lenisInstance.stop();
    else lenisInstance.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({ lerp: 0.085, anchors: true, autoRaf: true });
    lenisInstance = lenis;
    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // Reset smooth-scroll position on client-side navigation (skip the first render so #anchors still work)
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    lenisInstance?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
