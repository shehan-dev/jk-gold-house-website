import { Reveal } from "@/components/motion/Reveal";
import { GoldLine } from "@/components/motion/GoldLine";
import { Button } from "@/components/ui/Button";
import { FacebookIcon } from "@/components/ui/BrandIcons";
import { site } from "@/lib/site";

/** Today's gold price — posted daily on the JK Gold House Facebook page. */
export function PriceEnquiry() {
  return (
    <section id="gold-price" className="grain relative overflow-hidden bg-obsidian py-24 text-ivory sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(199_163_90/0.22),transparent_60%)]" />
      <div className="container-luxe relative">
        <div className="mx-auto max-w-3xl text-center">
          <GoldLine className="mx-auto w-16" origin="center" />
          <Reveal delay={0.1}>
            <p className="eyebrow mt-8 text-gold">Today’s Gold Price</p>
            <h2 className="mt-6 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Looking for <em className="text-shimmer font-normal">Today’s</em> Gold Price?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-taupe">
              Gold prices change every day. We post the latest gold price on our Facebook page daily — follow JK Gold
              House on Facebook so you never miss an update.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-12 flex flex-col items-center gap-5">
            <Button href={site.social.facebook} icon={<FacebookIcon className="size-4" />} className="px-10!">
              Follow Us on Facebook
            </Button>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="link-luxe text-sm text-taupe hover:text-ivory"
            >
              facebook.com/JKGoldHouse
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
