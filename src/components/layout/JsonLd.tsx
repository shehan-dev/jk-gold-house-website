import { site } from "@/lib/site";

/** LocalBusiness / JewelryStore structured data for local search. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "@id": `${site.url}/#store`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: [`${site.url}/images/og-image.jpg`, `${site.url}/images/jk/storefront-street.jpg`],
    logo: `${site.url}/images/jk/logo-jk.png`,
    telephone: site.phoneE164,
    priceRange: "$$",
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    areaServed: ["Negombo", "Sri Lanka"],
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${dayNames[d]}`),
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: Object.values(site.social),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Jewellery & Services",
      itemListElement: [
        "22K Gold Jewellery",
        "18K Gold Jewellery",
        "Wedding Jewellery",
        "Engagement Rings",
        "Custom Jewellery",
        "Jewellery Repairs",
        "Ring Resizing",
        "Old Gold Buying",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const dayNames: Record<string, string> = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
};
