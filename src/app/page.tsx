import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { FilmSection } from "@/components/sections/FilmSection";
import { About } from "@/components/sections/About";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Collections } from "@/components/sections/Collections";
import { GoldFeature } from "@/components/sections/GoldFeature";
import { Showcase } from "@/components/sections/Showcase";
import { Wedding } from "@/components/sections/Wedding";
import { CustomJourney } from "@/components/sections/CustomJourney";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { HeritageStatement } from "@/components/sections/HeritageStatement";
import { Gallery } from "@/components/sections/Gallery";
import { PriceEnquiry } from "@/components/sections/PriceEnquiry";
import { StoreVisit } from "@/components/sections/StoreVisit";
import { Social } from "@/components/sections/Social";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reviews } from "@/components/sections/Reviews";

/**
 * Home — the full story:
 * Watch → Discover → Explore → Imagine → Trust → Connect
 */
export default function HomePage() {
  return (
    <>
      <HeroSlideshow nextId="discover" />
      <BrandIntro />
      <FilmSection />
      <About />
      <TrustStrip />
      <Collections />
      <GoldFeature />
      <Showcase />
      <Wedding />
      <CustomJourney />
      <Services />
      <WhyChoose />
      <Reviews />
      <HeritageStatement />
      <Gallery limit={10} filters={false} />
      <PriceEnquiry />
      <StoreVisit />
      <Social />
      <FinalCTA />
    </>
  );
}
