import Image from "next/image";
import Link from "next/link";

/**
 * JK Gold House logo (transparent PNG, designed for dark backgrounds).
 * Source: public/images/jk/logo-jk.png (536×500).
 */
export function LogoMark({ className = "", preload }: { className?: string; preload?: boolean }) {
  return (
    <Image
      src="/images/jk/logo-jk.png"
      alt="JK Gold House"
      width={536}
      height={500}
      preload={preload}
      className={`h-auto ${className}`}
      sizes="(min-width: 768px) 260px, 180px"
    />
  );
}

/** Compact horizontal lock-up for the navigation bar and footer. */
export function LogoCompact({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="JK Gold House — home">
      <Image src="/images/jk/logo-jk.png" alt="" width={536} height={500} className="h-10 w-auto sm:h-11" sizes="48px" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl tracking-wide text-ivory transition-colors duration-500 group-hover:text-champagne">
          JK Gold House
        </span>
        <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.38em] text-gold">Negombo · Est. 35+ yrs</span>
      </span>
    </Link>
  );
}
