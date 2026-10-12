import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { About } from "@/components/sections/About";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { HeritageStatement } from "@/components/sections/HeritageStatement";
import { FilmSection } from "@/components/sections/FilmSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reviews } from "@/components/sections/Reviews";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us — 35+ Years of Trust",
  description:
    "The story of JK Gold House, Negombo: over 35 years of genuine gold, family-oriented service and craftsmanship under owner Jagath Mendis.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A legacy built <em className="font-normal text-champagne">on trust.</em>
          </>
        }
        intro="For more than 35 years, JK Gold House has helped families in Negombo celebrate life’s moments in gold."
        image={images.pendantEarringWide}
      />
      <About showLink={false} />
      <TrustStrip />
      <FilmSection />
      <WhyChoose />
      <Reviews />
      <HeritageStatement />
      <FinalCTA />
    </>
  );
}
