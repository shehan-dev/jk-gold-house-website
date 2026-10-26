import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Wedding } from "@/components/sections/Wedding";
import { CustomJourney } from "@/components/sections/CustomJourney";
import { Showcase } from "@/components/sections/Showcase";
import { Gallery } from "@/components/sections/Gallery";
import { PriceEnquiry } from "@/components/sections/PriceEnquiry";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Wedding Jewellery & Engagement Rings",
  description:
    "Bridal jewellery, wedding necklaces, engagement rings, couple’s jewellery and custom wedding designs from JK Gold House, Negombo.",
  alternates: { canonical: "/wedding" },
};

export default function WeddingPage() {
  return (
    <>
      <PageHero
        eyebrow="Wedding"
        title={
          <>
            For the moments you’ll <em className="font-normal text-champagne">carry forward.</em>
          </>
        }
        intro="Engagement rings, bridal sets and traditional gold jewellery — chosen with you, for the most meaningful day."
        image={images.pendantEarringWide}
      />
      <Wedding onWeddingPage />
      <Showcase
        image={images.profileNecklace}
        eyebrow="Bridal"
        title={
          <>
            Jewellery that becomes
            <br />
            <em className="font-normal text-champagne">part of the memory.</em>
          </>
        }
      />
      <CustomJourney />
      <Gallery />
      <PriceEnquiry />
    </>
  );
}
