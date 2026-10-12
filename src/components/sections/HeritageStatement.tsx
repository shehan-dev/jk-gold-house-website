import Image from "next/image";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { GoldLine } from "@/components/motion/GoldLine";
import { images } from "@/lib/images";

export function HeritageStatement() {
  return (
    <section aria-labelledby="heritage-title" className="vignette grain relative overflow-hidden bg-obsidian py-32 sm:py-44 lg:py-56">
      <Parallax className="absolute! inset-0" distance={16}>
        <Image
          src={images.sunsetProfile.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: images.sunsetProfile.position }}
        />
      </Parallax>
      <div aria-hidden className="absolute inset-0 bg-obsidian/65" />
      <div className="container-luxe relative z-10 text-center">
        <GoldLine className="mx-auto w-16" origin="center" />
        <Reveal delay={0.1} duration={1.6} y={36}>
          <h2 id="heritage-title" className="mx-auto mt-10 max-w-4xl text-5xl leading-[1] text-ivory sm:text-6xl lg:text-8xl">
            Jewellery Made to Be <em className="font-normal text-champagne">Treasured</em>
          </h2>
        </Reveal>
        <Reveal delay={0.3} duration={1.6} y={30}>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-ivory/80 sm:text-xl">
            At JK Gold House, we craft jewellery that inspires confidence and celebrates your special moments. Every piece
            is selected or created with care, precision and a touch of brilliance, with the intention of becoming something
            you can treasure for years to come.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
