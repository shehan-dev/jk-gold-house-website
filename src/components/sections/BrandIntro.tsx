import { Reveal } from "@/components/motion/Reveal";
import { GoldLine } from "@/components/motion/GoldLine";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function BrandIntro() {
  return (
    <section id="discover" className="relative overflow-hidden bg-ivory py-24 sm:py-32 lg:py-44">
      {/* Soft champagne glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-champagne/40 blur-3xl"
      />
      <div className="container-luxe relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal y={12}>
            <Eyebrow>Est. 35+ Years • Negombo, Sri Lanka</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 text-5xl leading-[0.98] text-obsidian sm:text-6xl lg:text-7xl xl:text-[5.75rem]">
              Celebrating Life’s
              <br />
              Moments in <em className="text-shimmer font-normal">Gold</em>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col justify-end lg:col-span-5">
          <GoldLine className="mb-10 w-full max-w-sm" />
          <Reveal delay={0.25}>
            <p className="text-lg leading-relaxed text-stone sm:text-xl">
              For over 35 years, JK Gold House has been creating and providing quality jewellery designed to celebrate
              life’s most meaningful moments. From timeless 22+ carat gold pieces to personalised creations, every piece is
              chosen and crafted with care.
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/jewellery" variant="dark">
              Explore Our Jewellery
            </Button>
            <Button href="/contact" variant="outline-dark">
              Contact Us
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
