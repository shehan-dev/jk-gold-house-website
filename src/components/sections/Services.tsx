"use client";

import { ArrowRight, Coins, Hammer, PenTool, Ruler, TrendingUp, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, type Service } from "@/lib/content";
import { messages, whatsappHref } from "@/lib/site";

const icons: Record<Service["icon"], LucideIcon> = {
  repair: Hammer,
  resize: Ruler,
  custom: PenTool,
  oldGold: Coins,
  investment: TrendingUp,
};

export function Services() {
  return (
    <section id="services" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Jewellery Services"
          title="More Than Jewellery"
          intro="Our relationship with customers continues beyond the purchase."
        />
        {/* 5 cards: 3 on the first row, 2 wider cards on the second (desktop); last card spans full width on tablet */}
        <Stagger className="mt-16 grid gap-px border border-obsidian/10 bg-obsidian/10 sm:grid-cols-2 lg:grid-cols-6" stagger={0.08}>
          {services.map((s, i) => (
            <StaggerItem
              key={s.title}
              className={`bg-ivory ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${i === services.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""}`}
            >
              <ServiceCard service={s} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const Icon = icons[service.icon];
  const id = `service-${service.icon}`;

  return (
    <article
      data-open={open}
      className="group relative flex h-full flex-col bg-ivory p-8 transition-all duration-700 ease-luxe hover:z-10 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgb(20_18_16/0.35)] data-[open=true]:bg-white sm:p-10"
    >
      <Icon
        className="size-7 text-gold-ink transition-transform duration-700 ease-luxe group-hover:-translate-y-1 group-hover:rotate-[-8deg] group-data-[open=true]:rotate-[-8deg]"
        strokeWidth={1.1}
        aria-hidden
      />
      <h3 className="mt-8 text-[1.75rem] leading-tight">
        <button
          type="button"
          className="text-left"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
        >
          {service.title}
        </button>
      </h3>
      <span
        aria-hidden
        className="mt-4 block h-px w-10 origin-left bg-gold transition-all duration-700 ease-luxe group-hover:w-24 group-data-[open=true]:w-24"
      />
      {/* Description: revealed on hover (desktop) or tap (touch) */}
      <div
        id={id}
        className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-luxe group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] group-data-[open=true]:grid-rows-[1fr]"
      >
        <div className="overflow-hidden">
          <p className="pt-5 leading-relaxed text-stone opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-within:opacity-100 group-data-[open=true]:opacity-100">
            {service.description}
          </p>
          <a
            href={whatsappHref(messages.service(service.title))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-ink"
          >
            Ask about this
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} aria-hidden />
          </a>
        </div>
      </div>
      {!open && (
        <span aria-hidden className="mt-4 text-xs text-stone [@media(hover:hover)]:hidden">
          Tap to learn more
        </span>
      )}
    </article>
  );
}
