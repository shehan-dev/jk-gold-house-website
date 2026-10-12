import { Gem, HeartHandshake, Handshake, PenTool, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reasons } from "@/lib/content";

const icons: Record<(typeof reasons)[number]["icon"], LucideIcon> = {
  years: Sparkles,
  gold: Gem,
  trust: Handshake,
  craft: ShieldCheck,
  personal: HeartHandshake,
  design: PenTool,
};

export function WhyChoose() {
  return (
    <section id="why" className="grain relative overflow-hidden bg-espresso py-24 text-ivory sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-48 size-[40rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-luxe relative">
        <SectionHeading tone="dark" eyebrow="The JK Promise" title="Why Choose JK Gold House?" center />
        <Stagger className="mt-20 grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {reasons.map((r) => {
            const Icon = icons[r.icon];
            return (
              <StaggerItem key={r.title} className="group text-center sm:text-left">
                <Icon
                  className="mx-auto size-8 text-gold transition-transform duration-700 ease-luxe group-hover:-translate-y-1 sm:mx-0"
                  strokeWidth={1}
                  aria-hidden
                />
                <h3 className="mt-6 text-3xl leading-tight">{r.title}</h3>
                <span
                  aria-hidden
                  className="mx-auto mt-4 block h-px w-8 bg-gold/60 transition-all duration-700 ease-luxe group-hover:w-16 sm:mx-0"
                />
                <p className="mt-4 leading-relaxed text-taupe">{r.description}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
