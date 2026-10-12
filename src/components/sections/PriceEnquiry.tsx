import { MapPin, MessageCircle, Phone } from "lucide-react";
import { GoldLine } from "@/components/motion/GoldLine";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { directionsHref, messages, site, telHref, whatsappHref } from "@/lib/site";

const actions = [
  { label: "WhatsApp Us", sub: "Fastest reply", href: whatsappHref(messages.goldPrice), icon: <WhatsAppIcon className="size-6" />, primary: true },
  { label: "Call Us", sub: site.phoneDisplay, href: telHref, icon: <Phone className="size-6" strokeWidth={1.25} /> },
  { label: "Message Us", sub: "On Messenger", href: site.messenger, icon: <MessageCircle className="size-6" strokeWidth={1.25} /> },
  { label: "Visit Our Store", sub: "Colombo Road, Negombo", href: directionsHref, icon: <MapPin className="size-6" strokeWidth={1.25} /> },
];

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
              Gold prices can change daily. For the latest gold prices and current jewellery prices, please contact JK Gold
              House directly.
            </p>
          </Reveal>
        </div>

        <Stagger className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {actions.map((a) => (
            <StaggerItem key={a.label}>
              <a
                href={a.href}
                {...(a.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`group flex h-full flex-col items-center gap-4 px-6 py-8 text-center transition-all duration-500 ease-luxe hover:-translate-y-1 ${
                  a.primary
                    ? "bg-gold text-obsidian hover:bg-gold-bright"
                    : "border border-gold/30 text-ivory hover:border-gold hover:bg-ivory/4"
                }`}
              >
                <span className={a.primary ? "text-obsidian" : "text-gold"}>{a.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.22em]">{a.label}</span>
                <span className={`text-sm ${a.primary ? "text-obsidian/70" : "text-taupe"}`}>{a.sub}</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
