import { Gem, MapPin, PenTool, Sparkles } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const items = [
  { icon: Sparkles, value: "35+ Years", label: "Experience" },
  { icon: Gem, value: "22K / 18K", label: "Gold Jewellery" },
  { icon: PenTool, value: "Custom", label: "Jewellery Designs" },
  { icon: MapPin, value: "Negombo", label: "Sri Lanka" },
];

export function TrustStrip() {
  return (
    <section aria-label="Why customers trust us" className="grain relative bg-obsidian text-ivory">
      <div aria-hidden className="h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
      <Stagger className="container-luxe grid grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, value, label }, i) => (
          <StaggerItem
            key={value}
            className={`flex flex-col items-center gap-3 px-4 py-10 text-center sm:py-14 ${
              i % 2 === 1 ? "border-l border-gold/20" : ""
            } ${i >= 2 ? "border-t border-gold/20 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
          >
            <Icon className="size-5 text-gold" strokeWidth={1.25} aria-hidden />
            <p className="font-serif text-3xl sm:text-4xl">{value}</p>
            <p className="eyebrow text-[0.6rem] text-taupe">{label}</p>
          </StaggerItem>
        ))}
      </Stagger>
      <div aria-hidden className="h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
