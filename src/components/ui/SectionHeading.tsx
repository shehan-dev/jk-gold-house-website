import { Reveal } from "@/components/motion/Reveal";
import { GoldLine } from "@/components/motion/GoldLine";

type Tone = "light" | "dark";

/** Small uppercase label with a drawn gold rule. `tone` refers to the background. */
export function Eyebrow({ children, tone = "light", center = false }: { children: React.ReactNode; tone?: Tone; center?: boolean }) {
  return (
    <div className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
      <GoldLine className="w-10" />
      <p className={`eyebrow ${tone === "light" ? "text-gold-ink" : "text-gold"}`}>{children}</p>
      {center && <GoldLine className="w-10" origin="right" />}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  center = false,
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: Tone;
  center?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal y={12}>
          <Eyebrow tone={tone} center={center}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <Tag
          className={`mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl ${tone === "light" ? "text-obsidian" : "text-ivory"}`}
        >
          {title}
        </Tag>
      </Reveal>
      {intro && (
        <Reveal delay={0.2}>
          <p
            className={`mt-6 text-base leading-relaxed sm:text-lg ${tone === "light" ? "text-stone" : "text-taupe"} ${center ? "mx-auto max-w-2xl" : "max-w-xl"}`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
