"use client";

import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { messages, telHref, whatsappHref } from "@/lib/site";

/** Persistent WhatsApp (primary) and call (secondary) buttons, lower-right. */
export function FloatingContact() {
  return (
    <motion.div
      className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={telHref}
        aria-label="Call JK Gold House"
        className="group relative grid size-12 place-items-center rounded-full border border-gold/40 bg-obsidian/90 text-gold shadow-lg backdrop-blur transition-all duration-500 ease-luxe hover:scale-105 hover:border-gold md:hidden"
      >
        <Phone className="size-5" strokeWidth={1.5} />
      </a>
      <a
        href={whatsappHref(messages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with JK Gold House on WhatsApp"
        className="group relative grid size-15 place-items-center rounded-full bg-gold text-obsidian shadow-[0_12px_32px_-8px_rgb(199_163_90/0.7)] transition-all duration-500 ease-luxe hover:scale-[1.07] hover:shadow-[0_0_0_6px_rgb(199_163_90/0.18),0_16px_40px_-8px_rgb(199_163_90/0.8)]"
      >
        <WhatsAppIcon className="size-7" />
        <span className="pointer-events-none absolute right-full mr-4 hidden translate-x-2 whitespace-nowrap bg-obsidian px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ivory opacity-0 shadow-lg transition-all duration-500 ease-luxe group-hover:translate-x-0 group-hover:opacity-100 md:block">
          Chat With JK Gold House
        </span>
      </a>
    </motion.div>
  );
}
