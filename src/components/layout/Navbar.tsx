"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LogoCompact } from "@/components/ui/Logo";
import { EnquiryIcon, FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/ui/BrandIcons";
import { enquiryHref, messages, navLinks, site, telHref, whatsappEnabled } from "@/lib/site";
import { setScrollLocked } from "./Providers";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = isHome ? window.innerHeight * 0.75 : 40;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    setScrollLocked(open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;
  const hideLogo = isHome && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
          solid
            ? "bg-obsidian/85 py-3 shadow-[0_12px_40px_-20px_rgb(0_0_0/0.6)] backdrop-blur-xl"
            : "bg-linear-to-b from-obsidian/60 to-transparent py-5 sm:py-7"
        }`}
      >
        <span
          aria-hidden
          className={`absolute inset-x-0 bottom-0 h-px origin-left bg-linear-to-r from-transparent via-gold/50 to-transparent transition-transform duration-700 ease-luxe ${
            scrolled ? "scale-x-100" : "scale-x-0"
          }`}
        />
        <nav className="container-luxe flex items-center justify-between gap-6" aria-label="Main">
          <div className={`transition-all duration-500 ease-luxe ${hideLogo ? "pointer-events-none -translate-y-1 opacity-0" : "opacity-100"}`}>
            <LogoCompact />
          </div>

          <ul className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => {
              const active = link.href === "/" ? isHome : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`link-luxe text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${
                      active ? "text-gold" : "text-ivory/85 hover:text-ivory"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={enquiryHref(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2.5 border border-gold/60 px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-500 ease-luxe hover:border-gold hover:bg-gold hover:text-obsidian sm:inline-flex"
            >
              <EnquiryIcon className="size-4 text-gold transition-colors group-hover:text-obsidian" />
              Enquire
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative grid size-11 place-items-center text-ivory transition-colors hover:text-gold xl:hidden"
            >
              {open ? <X className="size-6" strokeWidth={1.25} /> : <Menu className="size-6" strokeWidth={1.25} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && <MobileMenu pathname={pathname} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  const firstLink = useRef<HTMLAnchorElement>(null);
  useEffect(() => firstLink.current?.focus(), []);

  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      data-lenis-prevent
      className="grain fixed inset-0 z-40 flex flex-col overflow-y-auto bg-obsidian pt-24 xl:hidden"
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
      transition={{ duration: 0.7, ease: [0.77, 0, 0.18, 1] }}
    >
      <div className="container-luxe flex flex-1 flex-col justify-between gap-12 pb-10">
        <ul className="flex flex-col gap-1 pt-4">
          {navLinks.map((link, i) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 + i * 0.05, ease: EASE }}
              >
                <Link
                  ref={i === 0 ? firstLink : undefined}
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-baseline gap-4 py-2 font-serif text-4xl transition-colors sm:text-5xl ${
                    active ? "text-gold" : "text-ivory hover:text-champagne"
                  }`}
                >
                  <span className="font-sans text-[0.65rem] tracking-[0.3em] text-gold/70">0{i + 1}</span>
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col gap-6 border-t border-ivory/10 pt-8"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={enquiryHref(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center gap-3 bg-gold text-xs font-semibold uppercase tracking-[0.2em] text-obsidian"
            >
              <EnquiryIcon className="size-5" /> {whatsappEnabled ? "WhatsApp Us" : "Message Us"}
            </a>
            <a
              href={telHref}
              className="flex min-h-14 items-center justify-center gap-3 border border-ivory/25 text-xs font-semibold uppercase tracking-[0.2em] text-ivory"
            >
              <Phone className="size-4" strokeWidth={1.5} /> Call {site.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center justify-between gap-4 text-sm text-taupe">
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-ivory">
              <MapPin className="size-4 shrink-0 text-gold" strokeWidth={1.5} /> {site.address.street}, {site.address.city}
            </a>
            <span className="flex shrink-0 gap-4">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold">
                <InstagramIcon />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold">
                <FacebookIcon />
              </a>
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-gold">
                <TikTokIcon />
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
