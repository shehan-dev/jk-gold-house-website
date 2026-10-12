import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "gold" | "dark" | "outline-dark" | "outline-light" | "ghost-light" | "ghost-dark";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-obsidian hover:bg-gold-bright shadow-[0_10px_30px_-12px_rgb(199_163_90/0.6)]",
  dark: "bg-obsidian text-ivory hover:bg-espresso",
  "outline-dark": "border border-obsidian/25 text-obsidian hover:border-gold hover:bg-obsidian hover:text-ivory",
  "outline-light": "border border-ivory/30 text-ivory hover:border-gold hover:bg-ivory/5",
  "ghost-light": "text-ivory px-0! hover:text-gold",
  "ghost-dark": "text-obsidian px-0! hover:text-gold-ink",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: React.ReactNode;
  arrow?: boolean;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

/** Link styled as a premium button. Arrow shifts slightly on hover. */
export function Button({ href, children, variant = "gold", icon, arrow = true, className = "", external, ariaLabel }: ButtonProps) {
  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);
  const classes = `group/btn inline-flex min-h-12 items-center justify-center gap-3 px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] transition-all duration-500 ease-luxe ${variants[variant]} ${className}`;
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-500 ease-luxe group-hover/btn:translate-x-1.5"
          strokeWidth={1.5}
        />
      )}
    </>
  );

  if (isExternal) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
