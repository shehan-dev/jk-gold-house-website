import Image from "next/image";
import { Gem, Lightbulb, PenTool, Sparkles } from "lucide-react";
import { GoldLine } from "@/components/motion/GoldLine";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { customJourney } from "@/lib/content";
import { products } from "@/lib/images";
import { messages, whatsappHref } from "@/lib/site";

const stepIcons = [Lightbulb, PenTool, Sparkles, Gem];
const customPieces = [
  products.namePendant,
  products.nameBraceletHeart,
  products.airplanePendant,
  products.kanjiPendant,
  products.nameNecklace,
  products.nameNecklaceScript,
];
const highlights = ["Custom designs", "Personalised jewellery", "Individual consultations", "Special occasions", "Wedding designs", "Unique pieces"];

export function CustomJourney() {
  return (
    <section id="custom" className="relative overflow-hidden bg-[#efe7d9] py-24 sm:py-32 lg:py-40">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Custom Jewellery"
              title={
                <>
                  Your Vision. <em className="font-normal text-gold-ink">Your Jewellery.</em>
                </>
              }
              intro="Have an idea, a reference or a design you’ve always wanted? Work with JK Gold House to create a personalised piece designed around your preferences, occasion and style."
            />
          </div>
          <Reveal delay={0.25} className="lg:col-span-5">
            <ul className="flex flex-wrap gap-2">
              {highlights.map((h) => (
                <li key={h} className="border border-obsidian/15 px-4 py-2 text-xs tracking-wide text-obsidian">
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Idea → Design → Craftsmanship → Finished Jewellery */}
        <div className="relative mt-20">
          <GoldLine className="absolute top-7 right-0 left-0 hidden lg:block" delay={0.4} />
          <Stagger className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8" stagger={0.22}>
            {customJourney.map((s, i) => {
              const Icon = stepIcons[i];
              return (
                <StaggerItem key={s.step} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 grid size-14 place-items-center rounded-full border border-gold bg-[#efe7d9] text-gold-ink">
                      <Icon className="size-5" strokeWidth={1.25} aria-hidden />
                    </span>
                    <span className="eyebrow text-gold-ink">Step {s.step}</span>
                  </div>
                  <h3 className="mt-6 text-3xl">{s.title}</h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-stone">{s.description}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        {/* Real custom pieces made by JK Gold House */}
        <div className="mt-20">
          <Reveal>
            <p className="eyebrow text-gold-ink">Made for our customers</p>
          </Reveal>
          <Stagger className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6" stagger={0.08}>
            {customPieces.map((img) => (
              <StaggerItem key={img.src}>
                <div className="group relative aspect-[4/5] overflow-hidden bg-taupe">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 15vw, (min-width: 768px) 30vw, 48vw"
                    className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.05]"
                    style={{ objectPosition: img.position }}
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.2} className="mt-16 flex flex-col items-start gap-4 border-t border-obsidian/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg font-serif text-2xl leading-snug">Bring a sketch, a photo or simply an idea — we’ll take it from there.</p>
          <Button href={whatsappHref(messages.custom)} variant="dark" icon={<WhatsAppIcon className="size-4" />}>
            Bring Your Idea to Life
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
