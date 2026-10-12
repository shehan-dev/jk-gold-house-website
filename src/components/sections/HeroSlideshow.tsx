"use client";

import { getImageProps } from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/ui/Logo";
import { heroSlides, type HeroSlide } from "@/lib/images";
import { smoothScrollTo } from "@/components/layout/Providers";

const SLIDE_MS = 6500;
const FADE_MS = 1800;
const EASE = [0.22, 1, 0.36, 1] as const;

/** Landscape image from 768px up, portrait image on phones. */
function ArtDirectedImage({ slide, eager }: { slide: HeroSlide; eager: boolean }) {
  const common = {
    alt: slide.alt,
    fill: true,
    sizes: "100vw",
    quality: 90,
    loading: eager ? "eager" : "lazy",
    fetchPriority: eager ? "high" : "auto",
  } as const;
  const { props: desktop } = getImageProps({ ...common, src: slide.desktop.src });
  const {
    props: { srcSet: mobileSrcSet, style, ...img },
  } = getImageProps({ ...common, src: slide.mobile.src });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop.srcSet} sizes="100vw" />
      <source media="(max-width: 767.98px)" srcSet={mobileSrcSet} sizes="100vw" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...img}
        className="object-cover [object-position:var(--pos-m)] md:[object-position:var(--pos-d)]"
        style={{ ...style, "--pos-d": slide.desktop.position, "--pos-m": slide.mobile.position } as React.CSSProperties}
      />
    </picture>
  );
}

/** Full-viewport cinematic opening: cross-fading slideshow with slow Ken Burns zoom and the JK Gold House logo. */
export function HeroSlideshow({ nextId = "discover" }: { nextId?: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % heroSlides.length), SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="JK Gold House highlights"
      className="grain vignette relative h-dvh min-h-[600px] w-full overflow-hidden bg-obsidian"
    >
      {/* Slides */}
      <div className="absolute inset-0" aria-live="off">
        {heroSlides.map((slide, i) => {
          const active = i === index;
          return (
            <div
              key={slide.desktop.src}
              aria-hidden={!active}
              className="absolute inset-0 will-change-[opacity,transform]"
              style={{
                opacity: active ? 1 : 0,
                transform: reduce ? undefined : active ? "scale(1)" : "scale(1.1)",
                transition: active
                  ? `opacity ${FADE_MS}ms ease, transform ${SLIDE_MS + FADE_MS}ms cubic-bezier(0.25, 0.1, 0.25, 1)`
                  : `opacity ${FADE_MS}ms ease, transform 0ms linear ${FADE_MS}ms`,
              }}
            >
              <ArtDirectedImage slide={slide} eager={i === 0} />
            </div>
          );
        })}
      </div>

      {/* Cinematic overlays for logo readability */}
      <div aria-hidden className="absolute inset-0 bg-obsidian/35" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-obsidian/70 via-transparent to-obsidian/85" />

      {/* Logo + tagline — centred, slightly above the middle */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-[12vh] text-center">
        <div className="relative">
          <motion.div
            aria-hidden
            className="absolute inset-[-30%] rounded-full bg-[radial-gradient(closest-side,rgb(199_163_90/0.45),transparent)] blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0.45] }}
            transition={{ duration: 3.2, delay: 1, times: [0, 0.5, 1], ease: "easeInOut" }}
          />
          <motion.h1
            initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 0.6, ease: EASE }}
            className="relative"
          >
            <LogoMark preload className="w-40 drop-shadow-[0_10px_30px_rgb(0_0_0/0.45)] sm:w-52 md:w-60" />
            <span className="sr-only">JK Gold House — Jewellery in Negombo, Sri Lanka</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.6, delay: 1.9, ease: EASE }}
          className="mt-9 h-px w-24 bg-linear-to-r from-transparent via-gold to-transparent"
          aria-hidden
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 2.1, ease: EASE }}
          className="mt-7 font-serif text-2xl font-light italic text-ivory sm:text-3xl md:text-4xl"
        >
          Celebrating Life’s Moments in Gold
        </motion.p>
      </div>

      {/* Slide indicators + pause control */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.6 }}
        className="absolute bottom-8 left-5 z-10 hidden items-center gap-4 sm:flex md:left-10 xl:left-16"
      >
        <span className="eyebrow tabular-nums text-ivory/70">
          {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.desktop.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              className="group relative h-6 w-8"
            >
              <span className="absolute inset-x-0 top-1/2 h-px bg-ivory/25" />
              <span
                className="absolute top-1/2 left-0 h-px bg-gold"
                style={{
                  width: i === index ? "100%" : "0%",
                  transition: i === index && !paused ? `width ${SLIDE_MS}ms linear` : "width 300ms ease",
                }}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className="grid size-8 place-items-center text-ivory/70 transition-colors hover:text-gold"
        >
          {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
        </button>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.button
        type="button"
        onClick={() => smoothScrollTo(`#${nextId}`)}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 2.8, ease: EASE }}
        className="group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-ivory/80 transition-colors hover:text-ivory"
        aria-label="Scroll to explore"
      >
        <span className="eyebrow text-[0.6rem]">Scroll to explore</span>
        <span className="relative h-12 w-px overflow-hidden bg-ivory/15">
          <span className="absolute inset-0 animate-line-pulse bg-gold" />
        </span>
        <ChevronDown className="size-4 animate-scroll-cue text-gold" strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}
