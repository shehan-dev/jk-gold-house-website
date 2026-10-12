import { CountUp } from "@/components/motion/CountUp";
import { GoldLine } from "@/components/motion/GoldLine";
import { MaskImage } from "@/components/motion/MaskImage";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

export function About({ showLink = true }: { showLink?: boolean }) {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f1ebe0] py-24 sm:py-32 lg:py-40">
      <div className="container-luxe grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Images: one large, one smaller overlapping */}
        <div className="relative mb-20 sm:mb-28 lg:col-span-6 lg:mb-20">
          <MaskImage
            image={images.handsRings}
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="aspect-[4/5] w-[86%] sm:aspect-[5/6]"
          />
          {/* Founder portrait */}
          <figure className="absolute right-0 -bottom-16 w-[48%] sm:-bottom-20">
            <div className="border-[6px] border-[#f1ebe0] shadow-2xl">
              <MaskImage
                image={images.founder}
                sizes="(min-width: 1024px) 22vw, 45vw"
                direction="left"
                delay={0.35}
                className="aspect-[4/5]"
              />
            </div>
            <Reveal as="span" delay={0.6} y={10} className="mt-3 block">
              <figcaption>
                <span className="block font-serif text-xl leading-tight text-obsidian sm:text-2xl">Jagath Mendis</span>
                <span className="eyebrow mt-1 block text-[0.6rem] text-gold-ink">Founder &amp; Owner</span>
              </figcaption>
            </Reveal>
          </figure>

          {/* 35+ milestone badge */}
          <Reveal
            delay={0.5}
            className="absolute top-8 -right-2 bg-obsidian px-6 py-5 text-ivory shadow-xl sm:top-12 sm:right-4 sm:px-8 sm:py-7"
          >
            <p className="font-serif text-5xl leading-none text-gold sm:text-6xl">
              <CountUp to={35} suffix="+" />
            </p>
            <p className="eyebrow mt-3 text-[0.6rem] text-taupe">Years of trust</p>
          </Reveal>
        </div>

        <div className="pt-6 lg:col-span-5 lg:col-start-8 lg:pt-0">
          <Reveal y={12}>
            <Eyebrow>Our Heritage</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
              Over 35 Years of Trust, Quality &amp; Craftsmanship
            </h2>
          </Reveal>
          <GoldLine className="mt-8 w-24" />
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-stone sm:text-lg">
              <p>
                <strong className="font-semibold text-obsidian">JK Gold House</strong> began with a simple belief: that
                jewellery should be honest, beautiful and chosen with care. Under the guidance of our owner,{" "}
                <strong className="font-semibold text-obsidian">Jagath Mendis</strong>, that belief has shaped more than
                35 years of serving families in Negombo and beyond.
              </p>
              <p>
                We are a family-oriented jewellery house. Many of our customers first visited us for an engagement ring
                or a wedding necklace — and now return with their children and grandchildren. Those relationships, built
                on genuine gold, attention to detail and personal service, are what we value most.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 border-l border-gold pl-6">
            <p className="font-serif text-2xl italic text-obsidian sm:text-3xl">“A legacy built on trust.”</p>
            <p className="eyebrow mt-3 text-gold-ink">Jagath Mendis · Founder</p>
          </Reveal>

          {showLink && (
            <Reveal delay={0.4} className="mt-10">
              <Button href="/about" variant="ghost-dark">
                Read our story
              </Button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
