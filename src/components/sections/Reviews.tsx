import { Star } from "lucide-react";
import { GoldLine } from "@/components/motion/GoldLine";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { googleRating, reviews, type Review } from "@/lib/reviews";
import { site } from "@/lib/site";

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="relative overflow-hidden bg-[#f1ebe0] py-24 sm:py-32 lg:py-40">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal y={12}>
              <Eyebrow>Customer Reviews</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="reviews-title" className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                Kind Words From <em className="font-normal text-gold-ink">Our Customers</em>
              </h2>
            </Reveal>
          </div>

          {/* Google rating summary */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="flex flex-col gap-6 border-l border-gold pl-6 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
              <div className="flex items-center gap-5">
                <p className="font-serif text-6xl leading-none text-obsidian">{googleRating.score.toFixed(1)}</p>
                <div>
                  <Stars rating={Math.round(googleRating.score)} label={`Rated ${googleRating.score} out of 5`} />
                  <p className="mt-2 flex items-center gap-2 text-sm text-stone">
                    <GoogleIcon /> Based on {googleRating.count} Google reviews
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-row">
                <Button href={site.googleReviewsUrl} variant="dark">
                  See More Reviews
                </Button>
                <Button href={site.googleWriteReviewUrl} variant="ghost-dark" arrow={false}>
                  Write a Review
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <GoldLine className="mt-16 w-full opacity-40" />

        <Stagger className="mt-16 columns-1 gap-5 md:columns-2 lg:columns-3" stagger={0.1}>
          {reviews.map((r) => (
            <StaggerItem key={r.name} className="mb-5 break-inside-avoid">
              <ReviewCard review={r} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="group relative bg-ivory p-8 transition-all duration-700 ease-luxe hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(20_18_16/0.3)] sm:p-10">
      <span aria-hidden className="absolute top-6 right-8 font-serif text-7xl leading-none text-gold/25">
        “
      </span>
      <Stars rating={review.rating} label={`${review.rating} out of 5 stars`} />
      {review.highlight && <p className="mt-6 font-serif text-2xl leading-snug text-obsidian">{review.highlight}</p>}
      <blockquote className="mt-4 leading-relaxed text-stone">
        <p>“{review.text}”</p>
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-obsidian/10 pt-6">
        <span
          aria-hidden
          className="grid size-11 shrink-0 place-items-center rounded-full bg-obsidian font-serif text-lg text-gold"
        >
          {initials(review.name)}
        </span>
        <span>
          <span className="block font-semibold text-obsidian">{review.name}</span>
          <span className="mt-0.5 flex items-center gap-1.5 text-xs text-stone">
            <GoogleIcon className="size-3.5" /> Google review
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <span role="img" aria-label={label} className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={`size-4 ${i < rating ? "fill-gold text-gold" : "text-gold/30"}`}
          strokeWidth={1.25}
        />
      ))}
    </span>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function GoogleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.06H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.55 10.55 0 0 0 12 1 11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38z" />
    </svg>
  );
}
