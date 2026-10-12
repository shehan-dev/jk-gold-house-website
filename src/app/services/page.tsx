import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { PriceEnquiry } from "@/components/sections/PriceEnquiry";
import { StoreVisit } from "@/components/sections/StoreVisit";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Jewellery Services — Repairs, Resizing, Custom Designs & Old Gold",
  description:
    "Jewellery repairs, ring resizing, custom designs, old gold buying and jewellery investment service at JK Gold House, Negombo.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            More than <em className="font-normal text-champagne">jewellery.</em>
          </>
        }
        intro="Our relationship with customers continues beyond the purchase — from repairs and resizing to custom designs and old gold."
        image={images.bangles}
      />
      <Services />
      <PriceEnquiry />
      <StoreVisit />
    </>
  );
}
