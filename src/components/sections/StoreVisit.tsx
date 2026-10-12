import Image from "next/image";
import { Clock, MapPin, Phone, User } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { directionsHref, mapEmbedSrc, messages, site, telHref, whatsappHref } from "@/lib/site";

export function StoreVisit() {
  return (
    <section id="visit" className="bg-[#f1ebe0] py-24 sm:py-32 lg:py-40">
      <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Our Store" title="Visit JK Gold House" />

          <Reveal delay={0.2} className="mt-10">
            <dl className="divide-y divide-obsidian/10 border-y border-obsidian/10">
              <InfoRow icon={<MapPin className="size-4" strokeWidth={1.5} />} label="Address">
                <address className="not-italic">
                  <strong className="font-semibold">{site.name}</strong>
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.country}
                </address>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-luxe mt-1 inline-block text-gold-ink">
                  Open in Google Maps
                </a>
              </InfoRow>
              <InfoRow icon={<User className="size-4" strokeWidth={1.5} />} label="Founder">
                {site.owner}
              </InfoRow>
              <InfoRow icon={<Phone className="size-4" strokeWidth={1.5} />} label="Phone">
                <a href={telHref} className="link-luxe">
                  {site.phoneDisplay}
                </a>
              </InfoRow>
              <InfoRow icon={<WhatsAppIcon className="size-4" />} label="WhatsApp">
                <a href={whatsappHref(messages.general)} target="_blank" rel="noopener noreferrer" className="link-luxe">
                  {site.whatsappDisplay}
                </a>
              </InfoRow>
              <InfoRow icon={<Clock className="size-4" strokeWidth={1.5} />} label="Opening hours">
                {site.hours.map((h) => (
                  <p key={h.label}>
                    {h.label}: <span className="text-stone">{h.value}</span>
                  </p>
                ))}
              </InfoRow>
              <InfoRow icon={<InstagramIcon className="size-4" />} label="Social">
                <span className="flex flex-wrap gap-x-5 gap-y-2">
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="link-luxe inline-flex items-center gap-2">
                    Instagram
                  </a>
                  <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="link-luxe inline-flex items-center gap-2">
                    <FacebookIcon className="size-3.5" /> Facebook
                  </a>
                  <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className="link-luxe inline-flex items-center gap-2">
                    <TikTokIcon className="size-3.5" /> TikTok
                  </a>
                </span>
              </InfoRow>
            </dl>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={directionsHref} variant="dark" icon={<MapPin className="size-4" strokeWidth={1.5} />}>
              Get Directions
            </Button>
            <Button href={whatsappHref(messages.general)} variant="outline-dark">
              Contact Us
            </Button>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:col-span-7">
          <Reveal className="relative aspect-[4/3] overflow-hidden bg-taupe sm:aspect-[16/10]">
            <iframe
              title="Map showing JK Gold House in Negombo"
              src={mapEmbedSrc}
              className="absolute inset-0 h-full w-full grayscale-[35%] sepia-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {[images.storefrontStreet, images.team].map((img, i) => (
              <Reveal key={img.src} delay={0.1 + i * 0.1} className="relative aspect-video overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" style={{ objectPosition: img.position }} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1.5rem_7rem_1fr] items-start gap-3 py-4 text-sm sm:text-[0.95rem]">
      <span className="mt-0.5 text-gold-ink" aria-hidden>
        {icon}
      </span>
      <dt className="eyebrow pt-1 text-[0.6rem] text-stone">{label}</dt>
      <dd className="text-obsidian">{children}</dd>
    </div>
  );
}
