import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { messages, site, telHref, whatsappHref } from "@/lib/site";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/jewellery", label: "Jewellery" },
  { href: "/wedding", label: "Wedding Jewellery" },
  { href: "/custom-jewellery", label: "Custom Jewellery" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-obsidian text-taupe">
      <div aria-hidden className="h-px bg-linear-to-r from-transparent via-gold/60 to-transparent" />
      <div className="container-luxe grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-28">
        <div className="lg:col-span-4">
          <Image src="/images/jk/logo-jk.png" alt="JK Gold House" width={536} height={500} className="h-28 w-auto" sizes="120px" />
          <p className="mt-8 max-w-xs font-serif text-2xl leading-snug text-ivory">
            Over 35 years of trust, quality and jewellery craftsmanship.
          </p>
          <div className="mt-8 flex gap-3">
            <SocialLink href={site.social.instagram} label="Instagram">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href={site.social.facebook} label="Facebook">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href={site.social.tiktok} label="TikTok">
              <TikTokIcon />
            </SocialLink>
            <SocialLink href={whatsappHref(messages.general)} label="WhatsApp">
              <WhatsAppIcon />
            </SocialLink>
          </div>
        </div>

        <div className="lg:col-span-3 lg:col-start-6">
          <h2 className="eyebrow font-sans text-gold">Explore</h2>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:grid-cols-1">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-luxe text-taupe transition-colors hover:text-ivory">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-4">
          <h2 className="eyebrow font-sans text-gold">Visit &amp; Contact</h2>
          <ul className="mt-6 space-y-5 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-luxe text-ivory">
                <address className="not-italic">
                  {site.name}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.country}
                </address>
              </a>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
              <a href={telHref} className="link-luxe text-ivory">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-4">
              <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={whatsappHref(messages.general)} target="_blank" rel="noopener noreferrer" className="link-luxe text-ivory">
                {site.whatsappDisplay} (WhatsApp)
              </a>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
              <div>
                {site.hours.map((h) => (
                  <p key={h.label}>
                    <span className="text-ivory">{h.label}</span> · {h.value}
                  </p>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-8 text-xs tracking-wide text-taupe/70 sm:flex-row">
          <p>© {new Date().getFullYear()} JK Gold House. All Rights Reserved.</p>
          <p>Negombo · Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-ivory/15 text-ivory transition-all duration-500 ease-luxe hover:-translate-y-0.5 hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}
