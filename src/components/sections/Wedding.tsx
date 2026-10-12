import { MaskImage } from "@/components/motion/MaskImage";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { weddingFeatures } from "@/lib/content";
import { images } from "@/lib/images";
import { messages, whatsappHref } from "@/lib/site";
import Image from "next/image";

export function Wedding({ onWeddingPage = false }: { onWeddingPage?: boolean }) {
  return (
    <section id="wedding" className="relative overflow-hidden bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="container-luxe grid items-center gap-16 lg:grid-cols-12 lg:gap-14">
        <div className="relative lg:col-span-6">
          <MaskImage
            image={images.necklaceWhite}
            sizes="(min-width: 1024px) 48vw, 100vw"
            direction="right"
            className="aspect-[4/5] w-full"
          />
          {/* Secondary image with gentle horizontal parallax */}
          <div className="absolute -bottom-10 -left-4 hidden w-[42%] border-[6px] border-ivory shadow-2xl sm:block lg:-left-10">
            <Parallax className="aspect-square" axis="x" distance={10}>
              <Image
                src={images.coffeeRing.src}
                alt={images.coffeeRing.alt}
                fill
                sizes="20vw"
                className="object-cover"
                style={{ objectPosition: images.coffeeRing.position }}
              />
            </Parallax>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal y={12}>
            <Eyebrow>Wedding &amp; Engagement</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-5xl leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
              Made for Your Most <em className="font-normal text-gold-ink">Meaningful</em> Moments
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg leading-relaxed text-stone">
              From engagements to weddings and the celebrations that follow, choose jewellery that becomes part of
              memories you carry forward.
            </p>
          </Reveal>

          <Stagger className="mt-10 grid grid-cols-1 gap-x-8 sm:grid-cols-2" stagger={0.07}>
            {weddingFeatures.map((f) => (
              <StaggerItem key={f} className="flex items-center gap-4 border-b border-obsidian/10 py-4">
                <span aria-hidden className="size-1.5 rotate-45 bg-gold" />
                <span className="text-[0.95rem] text-obsidian">{f}</span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.3} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {onWeddingPage ? (
              <Button href={whatsappHref(messages.category("wedding jewellery"))} variant="dark" icon={<WhatsAppIcon className="size-4" />}>
                Enquire About Wedding Jewellery
              </Button>
            ) : (
              <Button href="/wedding" variant="dark">
                Explore Wedding Jewellery
              </Button>
            )}
            <Button href={whatsappHref(messages.wedding)} variant="outline-dark">
              Plan Your Jewellery With Us
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
