import { images, type SiteImage } from "./images";

export type Collection = {
  slug: string;
  name: string;
  description: string;
  image: SiteImage;
};

/**
 * Featured collections shown as editorial image tiles.
 * Order matters — it follows the grid: 1 large, 2 landscape, 3 portrait, 2 wide.
 */
export const featuredCollections: Collection[] = [
  { slug: "necklaces", name: "Necklaces", description: "Statement and delicate gold necklaces for every occasion.", image: images.pendantEarring },
  { slug: "rings", name: "Rings", description: "Everyday gold bands to stone-set statement rings.", image: images.ringsCup },
  { slug: "gold-chains", name: "Gold Chains", description: "Finely made chains in 22K and 18K gold.", image: images.goldChains },
  { slug: "pendants", name: "Pendants", description: "Meaningful pendants that sit close to the heart.", image: images.pendantLight },
  { slug: "bracelets", name: "Bracelets", description: "Fine gold bracelets and bangle cuffs for daily wear.", image: images.handsRings },
  { slug: "bangles", name: "Bangles", description: "Traditional and contemporary gold bangles, worn alone or stacked.", image: images.bangles },
  { slug: "wedding-jewellery", name: "Wedding Jewellery", description: "Bridal sets and heirloom pieces for the day itself.", image: images.leafNecklace },
  { slug: "engagement-rings", name: "Engagement Rings", description: "Rings chosen for the question that changes everything.", image: images.coffeeRing },
];

/** Remaining collections, presented as an editorial index. */
export const moreCollections: { name: string; description: string }[] = [
  { name: "Gemstone Jewellery", description: "Sapphires and precious stones set in gold" },
  { name: "Earrings", description: "Studs, drops and traditional designs" },
  { name: "Children’s Jewellery", description: "First gold for little ones" },
  { name: "Men’s Jewellery", description: "Chains, rings and bracelets" },
  { name: "Custom Jewellery", description: "Designed around your idea" },
  { name: "Silver Jewellery", description: "Elegant pieces in silver" },
];

export type Service = {
  icon: "repair" | "resize" | "custom" | "oldGold" | "investment";
  title: string;
  description: string;
};

export const services: Service[] = [
  { icon: "repair", title: "Jewellery Repairs", description: "Professional assistance for jewellery requiring repair or restoration, handled with the same care as when it was made." },
  { icon: "resize", title: "Ring Resizing", description: "Resize selected rings for a more comfortable and suitable fit." },
  { icon: "custom", title: "Custom Designs", description: "Personalised jewellery created according to your requirements, occasion and style." },
  { icon: "oldGold", title: "Old Gold Buying", description: "Thinking of selling your old gold? Contact JK Gold House to discuss it with us personally." },
  { icon: "investment", title: "Jewellery Investment Service", description: "Ask us about our jewellery investment service — we will gladly explain how it works and the current details." },];

export const reasons = [
  { icon: "years", title: "35+ Years of Experience", description: "Decades of jewellery industry experience and trusted customer relationships." },
  { icon: "gold", title: "Genuine Gold", description: "A commitment to genuine and quality gold jewellery." },
  { icon: "trust", title: "Trusted Relationships", description: "Long-term relationships built through honesty, reliability and personal service." },
  { icon: "craft", title: "Quality & Craftsmanship", description: "Attention to detail, quality and presentation in every piece." },
  { icon: "personal", title: "Personal Service", description: "Personalised assistance when selecting or designing jewellery." },
  { icon: "design", title: "Modern & Custom Designs", description: "Contemporary jewellery combined with personalised designs." },
] as const;

export const customJourney = [
  { step: "01", title: "Idea", description: "Share a sketch, a photograph, an heirloom or simply a feeling. Every piece begins with a conversation." },
  { step: "02", title: "Design", description: "Together we refine the details — gold, stones, proportions and finish — until it feels right." },
  { step: "03", title: "Craftsmanship", description: "Your design is brought to life with care, precision and attention to every detail." },
  { step: "04", title: "Finished Jewellery", description: "A piece made around your story, ready to be worn and treasured for years to come." },
];

export const weddingFeatures = [
  "Bridal jewellery",
  "Wedding jewellery",
  "Engagement rings",
  "Couple’s jewellery",
  "Traditional gold jewellery",
  "Custom wedding designs",
];

export type GalleryItem = SiteImage & {
  category: GalleryCategory;
  shape: "portrait" | "landscape" | "square" | "tall";
};

export const galleryCategories = [
  "All",
  "Gold Jewellery",
  "Wedding Jewellery",
  "Engagement Rings",
  "Custom Designs",
  "New Arrivals",
  "Store",
] as const;
export type GalleryCategory = Exclude<(typeof galleryCategories)[number], "All">;

// The home page shows the first 10 — keep the strongest images at the top.
export const gallery: GalleryItem[] = [
  { ...images.pendantEarring, category: "New Arrivals", shape: "tall" },
  { ...images.storefrontStreet, category: "Store", shape: "landscape" },
  { ...images.handsRings, category: "Gold Jewellery", shape: "portrait" },
  { ...images.goldChains, category: "Gold Jewellery", shape: "tall" },
  { ...images.ringsCup, category: "New Arrivals", shape: "portrait" },
  { ...images.consultation, category: "Store", shape: "landscape" },
  { ...images.pendantLight, category: "New Arrivals", shape: "portrait" },
  { ...images.leafNecklace, category: "Custom Designs", shape: "square" },
  { ...images.crossPendant, category: "Gold Jewellery", shape: "portrait" },
  { ...images.team, category: "Store", shape: "landscape" },
  { ...images.sapphireRing, category: "Engagement Rings", shape: "square" },
  { ...images.necklaceWhite, category: "Wedding Jewellery", shape: "tall" },
  { ...images.profileNecklace, category: "Wedding Jewellery", shape: "portrait" },
  { ...images.coffeeRing, category: "Engagement Rings", shape: "landscape" },
  { ...images.bangles, category: "Gold Jewellery", shape: "portrait" },
  { ...images.necklaceSea, category: "Gold Jewellery", shape: "portrait" },
];

export const socialPosts = [
  { label: "New Arrivals", image: images.pendantLight },
  { label: "Wedding Jewellery", image: images.necklaceWhite },
  { label: "Gold Price Updates", image: images.goldChains },
  { label: "New Designs", image: images.pendantEarring },
  { label: "Customer Moments", image: images.consultation },
  { label: "Store Updates", image: images.team },
];
