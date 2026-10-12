"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery, galleryCategories, type GalleryItem } from "@/lib/content";
import { setScrollLocked } from "@/components/layout/Providers";

const shapes: Record<GalleryItem["shape"], string> = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export function Gallery({ limit, filters = true }: { limit?: number; filters?: boolean }) {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(() => {
    const filtered = category === "All" ? gallery : gallery.filter((g) => g.category === category);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [category, limit]);

  return (
    <section id="gallery" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="container-luxe">
        <SectionHeading eyebrow="Gallery" title="A Glimpse Into JK Gold House" />

        {filters && (
          <Reveal delay={0.2} className="mt-10">
            <div role="group" aria-label="Filter gallery" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
              {galleryCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={`shrink-0 border px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 ${
                    category === c
                      ? "border-obsidian bg-obsidian text-ivory"
                      : "border-obsidian/15 text-stone hover:border-gold hover:text-obsidian"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* Masonry via CSS columns */}
        <ul key={category} className="mt-12 columns-2 gap-3 sm:gap-4 lg:columns-3 xl:columns-4">
            {items.map((item, i) => (
              <motion.li
                key={item.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                transition={{ duration: 0.9, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="mb-3 break-inside-avoid sm:mb-4"
              >
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className={`group relative block w-full overflow-hidden bg-taupe ${shapes[item.shape]}`}
                  aria-label={`Open image: ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.05]"
                    style={{ objectPosition: item.position }}
                  />
                  <span aria-hidden className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/25" />
                  <span className="eyebrow absolute bottom-3 left-3 translate-y-2 text-[0.55rem] text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.category}
                  </span>
                </button>
              </motion.li>
            ))}
        </ul>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox items={items} index={lightbox} onIndex={setLightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function Lightbox({
  items,
  index,
  onIndex,
  onClose,
}: {
  items: GalleryItem[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const item = items[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const prev = useCallback(() => onIndex((index - 1 + items.length) % items.length), [index, items.length, onIndex]);
  const next = useCallback(() => onIndex((index + 1) % items.length), [index, items.length, onIndex]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    setScrollLocked(true);
    return () => {
      setScrollLocked(false);
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-60 flex flex-col bg-obsidian/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClose}
      data-lenis-prevent
    >
      <div className="flex items-center justify-between px-5 py-4 text-ivory sm:px-8" onClick={(e) => e.stopPropagation()}>
        <p className="eyebrow text-gold">
          {item.category} <span className="ml-3 text-taupe/70">{index + 1} / {items.length}</span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="grid size-11 place-items-center rounded-full border border-ivory/20 transition-colors hover:border-gold hover:text-gold"
        >
          <X className="size-5" strokeWidth={1.25} />
        </button>
      </div>

      <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.src}
            className="absolute inset-4 sm:inset-x-20 sm:inset-y-6"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={item.src} alt={item.alt} fill sizes="100vw" quality={90} className="object-contain" />
          </motion.div>
        </AnimatePresence>

        <LightboxNav side="left" onClick={prev} label="Previous image">
          <ChevronLeft className="size-5" strokeWidth={1.25} />
        </LightboxNav>
        <LightboxNav side="right" onClick={next} label="Next image">
          <ChevronRight className="size-5" strokeWidth={1.25} />
        </LightboxNav>
      </div>
      <p className="px-5 pb-6 text-center text-sm text-taupe sm:px-8" onClick={(e) => e.stopPropagation()}>
        {item.alt}
      </p>
    </motion.div>
  );
}

function LightboxNav({ side, onClick, label, children }: { side: "left" | "right"; onClick: () => void; label: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/20 bg-obsidian/60 text-ivory transition-colors hover:border-gold hover:text-gold ${
        side === "left" ? "left-3 sm:left-6" : "right-3 sm:right-6"
      }`}
    >
      {children}
    </button>
  );
}
