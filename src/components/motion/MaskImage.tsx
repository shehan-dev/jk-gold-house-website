"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { SiteImage } from "@/lib/images";

type MaskImageProps = {
  image: SiteImage;
  className?: string;
  sizes: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  preload?: boolean;
  /** Override the default focal point */
  position?: string;
};

const clips = {
  up: { from: "inset(100% 0% 0% 0%)", to: "inset(0% 0% 0% 0%)" },
  left: { from: "inset(0% 100% 0% 0%)", to: "inset(0% 0% 0% 0%)" },
  right: { from: "inset(0% 0% 0% 100%)", to: "inset(0% 0% 0% 0%)" },
};

/** Image that reveals behind a sliding mask, with a gentle settle-in zoom. */
export function MaskImage({ image, className = "", sizes, direction = "up", delay = 0, preload, position }: MaskImageProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: clips[direction].from }}
      whileInView={{ clipPath: clips[direction].to }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, delay, ease: [0.77, 0, 0.18, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
          style={{ objectPosition: position ?? image.position }}
        />
      </motion.div>
    </motion.div>
  );
}
