import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PriceEnquiry } from "@/components/sections/PriceEnquiry";
import { StoreVisit } from "@/components/sections/StoreVisit";
import { Social } from "@/components/sections/Social";
import { Reviews } from "@/components/sections/Reviews";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact & Visit Our Negombo Store",
  description:
    "Contact JK Gold House in Negombo by WhatsApp or phone for today’s gold price, jewellery enquiries, opening hours and directions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            We’d love to <em className="font-normal text-champagne">hear from you.</em>
          </>
        }
        intro="Ask for today’s gold price, enquire about a design, or visit us in Negombo — we’re here to help."
        image={images.sapphireRing}
      />
      <StoreVisit />
      <PriceEnquiry />
      <Reviews />
      <Social />
    </>
  );
}
