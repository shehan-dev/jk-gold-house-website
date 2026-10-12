import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/ui/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialPosts } from "@/lib/content";
import { site } from "@/lib/site";

export function Social() {
  return (
    <section id="social" className="overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="container-luxe">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Social"
            title="Stay Connected With JK Gold House"
            intro="Follow JK Gold House for new jewellery, designs, promotions, gold price updates and store moments."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={site.social.instagram} variant="dark" icon={<InstagramIcon className="size-4" />}>
              Follow JK Gold House
            </Button>
            <Button href={site.social.facebook} variant="outline-dark" icon={<FacebookIcon className="size-4" />} arrow={false}>
              Facebook
            </Button>
            <Button href={site.social.tiktok} variant="outline-dark" icon={<TikTokIcon className="size-4" />} arrow={false}>
              TikTok
            </Button>
          </div>
        </div>
      </div>

      {/* Preview wall — horizontal scroll on mobile */}
      <Stagger className="no-scrollbar mt-14 flex snap-x gap-3 overflow-x-auto px-5 sm:gap-4 md:px-10 lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-10 xl:px-16">
        {socialPosts.map((p, i) => (
          <StaggerItem key={p.label} className={`w-[62vw] shrink-0 snap-start sm:w-[40vw] lg:w-auto ${i % 2 === 1 ? "lg:translate-y-10" : ""}`}>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/5] overflow-hidden bg-taupe"
              aria-label={`${p.label} — view on Instagram`}
            >
              <Image
                src={p.image.src}
                alt={p.image.alt}
                fill
                sizes="(min-width: 1024px) 16vw, 60vw"
                className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-105"
                style={{ objectPosition: p.image.position }}
              />
              <span aria-hidden className="absolute inset-0 bg-linear-to-t from-obsidian/70 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-ivory">
                <span className="eyebrow text-[0.55rem]">{p.label}</span>
                <InstagramIcon className="size-4 text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
