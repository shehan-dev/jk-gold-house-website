import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Gallery } from "@/components/sections/Gallery";
import { Social } from "@/components/sections/Social";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A glimpse into JK Gold House — gold jewellery, wedding jewellery, engagement rings, custom designs and our Negombo store.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            A glimpse into <em className="font-normal text-champagne">JK Gold House.</em>
          </>
        }
        image={images.necklaceSea}
      />
      <Gallery />
      <Social />
      <FinalCTA />
    </>
  );
}
