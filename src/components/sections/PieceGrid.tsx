"use client";

import Image from "next/image";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Lightbox } from "@/components/sections/Gallery";
import type { SiteImage } from "@/lib/images";

/** Grid of individual jewellery pieces — clicking one opens it in the full-screen image panel. */
export function PieceGrid({ pieces, label, className = "" }: { pieces: SiteImage[]; label: string; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const items = pieces.map((p) => ({ ...p, label }));

  return (
    <>
      <Stagger className={className} stagger={0.08}>
        {pieces.map((img, i) => (
          <StaggerItem key={img.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View larger: ${img.alt}`}
              className="group relative block aspect-[4/5] w-full overflow-hidden bg-taupe"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 15vw, (min-width: 768px) 30vw, 48vw"
                className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.05]"
                style={{ objectPosition: img.position }}
              />
              <span aria-hidden className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/20" />
            </button>
          </StaggerItem>
        ))}
      </Stagger>

      <AnimatePresence>
        {open !== null && <Lightbox items={items} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </>
  );
}
