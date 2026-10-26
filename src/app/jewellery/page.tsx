import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Collections } from "@/components/sections/Collections";
import { GoldFeature } from "@/components/sections/GoldFeature";
import { Showcase } from "@/components/sections/Showcase";
import { PriceEnquiry } from "@/components/sections/PriceEnquiry";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Jewellery Collections — 22K & 18K Gold",
  description:
    "Explore rings, necklaces, gold chains, bangles, earrings, pendants, engagement rings, wedding and gemstone jewellery at JK Gold House, Negombo.",
  alternates: { canonical: "/jewellery" },
};

export default function JewelleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Jewellery"
        title={
          <>
            Jewellery chosen for <em className="font-normal text-champagne">moments that matter.</em>
          </>
        }
        intro="From everyday gold to heirloom pieces — browse our collections and enquire directly for designs and today’s prices."
        image={images.goldChainsWide}
      />
      <Collections hideViewAll />
      <GoldFeature />
      <Showcase image={images.pendantEarringWide} />
      <PriceEnquiry />
      <FinalCTA />
    </>
  );
}
