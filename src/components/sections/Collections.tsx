import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredCollections, moreCollections, type Collection } from "@/lib/content";
import { messages, whatsappHref } from "@/lib/site";

// Editorial layout: one large feature, two medium, then smaller tiles
const tileLayout = [
  "md:col-span-2 lg:col-span-7 lg:row-span-2 aspect-[4/5] md:aspect-[16/10] lg:aspect-auto",
  "lg:col-span-5 aspect-[4/3]",
  "lg:col-span-5 aspect-[4/3]",
  "lg:col-span-4 aspect-[4/5]",
  "lg:col-span-4 aspect-[4/5]",
  "md:col-span-2 lg:col-span-4 aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5]",
  "lg:col-span-6 aspect-[16/10]",
  "lg:col-span-6 aspect-[16/10]",
];

/**
 * `enquire` — tiles open a WhatsApp enquiry (used on the Jewellery page);
 * otherwise tiles lead to the Jewellery page.
 */
export function Collections({ enquire = false, showMore = true }: { enquire?: boolean; showMore?: boolean }) {
  return (
    <section id="collections" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="container-luxe">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="The Collections"
            title="Discover Our Jewellery"
            intro="Timeless pieces for everyday elegance, meaningful occasions and moments worth remembering."
          />
          {!enquire && (
            <Reveal delay={0.2}>
              <Button href="/jewellery" variant="outline-dark">
                View all collections
              </Button>
            </Reveal>
          )}
        </div>

        <Stagger className="mt-16 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-12" stagger={0.08}>
          {featuredCollections.map((c, i) => (
            <StaggerItem key={c.slug} className={`relative ${tileLayout[i]}`}>
              <CollectionTile collection={c} large={i === 0} enquire={enquire} />
            </StaggerItem>
          ))}
        </Stagger>

        {showMore && (
          <div className="mt-20">
            <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-gold-ink">Also at JK Gold House</p>
                <p className="mt-4 font-serif text-3xl leading-tight">Jewellery chosen for moments that matter.</p>
              </div>
            </Reveal>

            {/* Smaller image tiles */}
            <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5" stagger={0.07}>
              {moreCollections
                .filter((c) => c.image)
                .map((c, i, all) => (
                  // An odd last tile spans the full width on phones
                  <StaggerItem key={c.name} className={all.length % 2 === 1 && i === all.length - 1 ? "col-span-2 md:col-span-1" : ""}>
                    <a
                      href={whatsappHref(messages.category(c.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${c.name} on WhatsApp`}
                      className="group block"
                    >
                      <span
                        className={`relative block overflow-hidden bg-taupe ${
                          all.length % 2 === 1 && i === all.length - 1 ? "aspect-[16/10] md:aspect-[4/5]" : "aspect-[4/5]"
                        }`}
                      >
                        <Image
                          src={c.image!.src}
                          alt={c.image!.alt}
                          fill
                          sizes="(min-width: 1024px) 18vw, (min-width: 768px) 30vw, 48vw"
                          className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.05]"
                          style={{ objectPosition: c.image!.position }}
                        />
                      </span>
                      <span className="mt-4 flex items-start justify-between gap-3">
                        <span>
                          <span className="block font-serif text-xl leading-tight text-obsidian transition-colors duration-500 group-hover:text-gold-ink sm:text-2xl">
                            {c.name}
                          </span>
                          <span className="mt-1 block text-sm leading-snug text-stone">{c.description}</span>
                        </span>
                        <ArrowUpRight
                          className="mt-1 size-4 shrink-0 text-gold-ink transition-transform duration-500 ease-luxe group-hover:translate-x-1 group-hover:-translate-y-1"
                          strokeWidth={1.25}
                          aria-hidden
                        />
                      </span>
                    </a>
                  </StaggerItem>
                ))}
            </Stagger>

            {/* Collections without photography yet */}
            <ul className="mt-12 border-t border-obsidian/10">
              {moreCollections
                .filter((c) => !c.image)
                .map((c) => (
                  <li key={c.name} className="border-b border-obsidian/10">
                    <a
                      href={whatsappHref(messages.category(c.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-6 py-5"
                    >
                      <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                        <span className="font-serif text-2xl text-obsidian transition-colors duration-500 group-hover:text-gold-ink">
                          {c.name}
                        </span>
                        <span className="text-sm text-stone">{c.description}</span>
                      </span>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-gold-ink transition-transform duration-500 ease-luxe group-hover:translate-x-1 group-hover:-translate-y-1"
                        strokeWidth={1.25}
                        aria-hidden
                      />
                      <span className="sr-only">(enquire on WhatsApp)</span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function CollectionTile({ collection, large, enquire }: { collection: Collection; large: boolean; enquire: boolean }) {
  const content = (
    <>
      <Image
        src={collection.image.src}
        alt={collection.image.alt}
        fill
        sizes={large ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"}
        className="object-cover transition-transform duration-1600 ease-luxe group-hover:scale-[1.05]"
        style={{ objectPosition: collection.image.position }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-obsidian/85 via-obsidian/15 to-transparent transition-opacity duration-700 group-hover:opacity-100 lg:opacity-80"
      />
      <div aria-hidden className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/20" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="eyebrow text-[0.6rem] text-gold/80 transition-colors duration-500 group-hover:text-gold-bright">
          {enquire ? "Enquire" : "Collection"}
        </p>
        <h3 className={`mt-2 text-ivory ${large ? "text-4xl sm:text-5xl" : "text-3xl"}`}>{collection.name}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/75">{collection.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ivory">
          {enquire ? "Enquire" : "Explore"}
          <ArrowRight className="size-4 text-gold transition-transform duration-500 ease-luxe group-hover:translate-x-1.5" strokeWidth={1.5} aria-hidden />
        </span>
      </div>
    </>
  );

  const className = "group absolute inset-0 block overflow-hidden bg-espresso";

  return enquire ? (
    <a
      href={whatsappHref(messages.category(collection.name))}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`Enquire about ${collection.name} on WhatsApp`}
    >
      {content}
    </a>
  ) : (
    <Link href="/jewellery" className={className}>
      {content}
    </Link>
  );
}
