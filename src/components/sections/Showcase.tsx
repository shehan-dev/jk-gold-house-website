import Image from "next/image";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { images, type SiteImage } from "@/lib/images";

/** Full-bleed campaign-style image with slow parallax and an overlaid statement. */
export function Showcase({
  image = images.necklaceSea,
  title = (
    <>
      Made to Catch the Light.
      <br />
      <em className="font-normal text-champagne">Made to Last.</em>
    </>
  ),
  eyebrow = "JK Gold House",
}: {
  image?: SiteImage;
  title?: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <section aria-label="Jewellery showcase" className="vignette relative h-[85svh] min-h-[520px] overflow-hidden bg-obsidian">
      <Parallax className="absolute! inset-0" distance={18}>
        <Image src={image.src} alt={image.alt} fill sizes="100vw" quality={90} className="object-cover" style={{ objectPosition: image.position }} />
      </Parallax>
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-obsidian/80 via-obsidian/20 to-obsidian/30" />
      <div className="relative z-10 flex h-full items-end">
        <div className="container-luxe pb-16 sm:pb-24">
          <Reveal y={12}>
            <p className="eyebrow text-gold">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.15} duration={1.4}>
            <h2 className="mt-5 max-w-4xl text-5xl leading-[1] text-ivory sm:text-6xl lg:text-8xl">{title}</h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
