import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { GoldLine } from "@/components/motion/GoldLine";
import type { SiteImage } from "@/lib/images";

/** Cinematic header for inner pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image: SiteImage;
}) {
  return (
    <section className="vignette grain relative flex min-h-[72svh] items-end overflow-hidden bg-obsidian pt-36 pb-16 sm:pb-24">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        preload
        quality={90}
        sizes="100vw"
        className="animate-hero-zoom object-cover"
        style={{ objectPosition: image.position }}
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/45 to-obsidian/50" />
      <div className="container-luxe relative z-10">
        <Reveal y={12}>
          <nav aria-label="Breadcrumb" className="eyebrow flex items-center gap-3 text-[0.6rem] text-taupe">
            <Link href="/" className="link-luxe hover:text-ivory">
              Home
            </Link>
            <span aria-hidden className="text-gold">/</span>
            <span aria-current="page" className="text-gold">
              {eyebrow}
            </span>
          </nav>
        </Reveal>
        <Reveal delay={0.1} duration={1.3}>
          <h1 className="mt-8 max-w-4xl text-5xl leading-[1] text-ivory sm:text-6xl lg:text-8xl">{title}</h1>
        </Reveal>
        <GoldLine className="mt-10 w-24" delay={0.5} />
        {intro && (
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/80">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
