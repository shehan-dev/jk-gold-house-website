import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CustomJourney } from "@/components/sections/CustomJourney";
import { Showcase } from "@/components/sections/Showcase";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Custom Jewellery — Your Vision, Your Jewellery",
  description:
    "Create personalised gold jewellery with JK Gold House in Negombo. Individual consultations, custom wedding designs and unique pieces.",
  alternates: { canonical: "/custom-jewellery" },
};

export default function CustomJewelleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom Jewellery"
        title={
          <>
            Your vision. <em className="font-normal text-champagne">Your jewellery.</em>
          </>
        }
        intro="Bring an idea, a reference or a family heirloom. We’ll help you turn it into a piece made around your story."
        image={images.leafNecklace}
      />
      <CustomJourney />
      <Showcase
        image={images.necklaceSea}
        eyebrow="Made for you"
        title={
          <>
            One idea.
            <br />
            <em className="font-normal text-champagne">One of a kind.</em>
          </>
        }
      />
      <WhyChoose />
      <FinalCTA />
    </>
  );
}
