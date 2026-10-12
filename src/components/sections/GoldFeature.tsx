import { Phone } from "lucide-react";
import { MaskImage } from "@/components/motion/MaskImage";
import { Reveal } from "@/components/motion/Reveal";
import { GoldLine } from "@/components/motion/GoldLine";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { messages, telHref, whatsappHref } from "@/lib/site";

export function GoldFeature() {
  return (
    <section id="gold" className="grain relative overflow-hidden bg-obsidian py-24 text-ivory sm:py-32 lg:py-40">
      <div className="container-luxe grid items-center gap-16 lg:grid-cols-12">
        <div className="relative grid grid-cols-5 gap-4 lg:col-span-6">
          <MaskImage image={images.goldChains} sizes="(min-width: 1024px) 28vw, 60vw" className="col-span-3 aspect-[3/4]" />
          <div className="col-span-2 flex flex-col gap-4 pt-16">
            <MaskImage image={images.crossPendant} sizes="(min-width: 1024px) 18vw, 40vw" className="aspect-[3/4]" delay={0.2} />
            <MaskImage image={images.bangles} sizes="(min-width: 1024px) 18vw, 40vw" className="aspect-square" delay={0.35} />
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal y={12}>
            <Eyebrow tone="dark">Genuine Gold</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">The Beauty of Genuine Gold</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg leading-relaxed text-taupe">
              Discover timeless jewellery crafted and selected with an appreciation for genuine gold, lasting quality and
              enduring design — the heritage JK Gold House has been known for across generations.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-10 grid grid-cols-2 border-y border-gold/20">
            <div className="py-6 pr-6">
              <p className="font-serif text-5xl text-gold">22K</p>
              <p className="mt-2 text-sm text-taupe">Rich, traditional gold for heirloom and bridal pieces.</p>
            </div>
            <div className="border-l border-gold/20 py-6 pl-6">
              <p className="font-serif text-5xl text-gold">18K</p>
              <p className="mt-2 text-sm text-taupe">Durable, refined gold ideal for gemstone and everyday wear.</p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 border border-gold/30 bg-ivory/3 p-6 sm:p-8">
            <GoldLine className="mb-5 w-12" />
            <p className="font-serif text-xl leading-snug text-ivory sm:text-2xl">
              Gold prices can change daily. For today’s gold prices and current jewellery prices, please contact JK Gold
              House directly.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappHref(messages.goldPrice)} icon={<WhatsAppIcon className="size-4" />}>
                Get Today’s Price
              </Button>
              <Button href={telHref} variant="outline-light" icon={<Phone className="size-4" strokeWidth={1.5} />} arrow={false}>
                Call JK Gold House
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
