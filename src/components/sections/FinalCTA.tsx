import Image from "next/image";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { GoldLine } from "@/components/motion/GoldLine";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";
import { messages, whatsappHref } from "@/lib/site";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta" className="vignette relative overflow-hidden bg-obsidian py-32 sm:py-44">
      <Parallax className="absolute! inset-0" distance={14}>
        <Image
          src={images.goldChainsWide.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: images.goldChainsWide.position }}
        />
      </Parallax>
      <div aria-hidden className="absolute inset-0 bg-obsidian/70" />
      <div className="container-luxe relative z-10 text-center">
        <GoldLine className="mx-auto w-16" origin="center" />
        <Reveal delay={0.1} duration={1.4}>
          <h2 id="final-cta" className="mx-auto mt-10 max-w-4xl text-5xl leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
            Your Next Special Moment Deserves a Little <em className="text-shimmer font-normal">Brilliance.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ivory/80">
            Whether you are looking for timeless gold jewellery, an engagement ring, wedding jewellery or something uniquely
            yours, visit JK Gold House and let us help you find the right piece.
          </p>
        </Reveal>
        <Reveal delay={0.35} className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/jewellery">Explore Jewellery</Button>
          <Button href={whatsappHref(messages.general)} variant="outline-light">
            Contact JK Gold House
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
