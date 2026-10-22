import { images, products, type SiteImage } from "./images";

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
  { slug: "bracelets", name: "Bracelets", description: "Fine gold bracelets and bangle cuffs for daily wear.", image: products.waveBracelet },
  { slug: "bangles", name: "Bangles", description: "Traditional and contemporary gold bangles, worn alone or stacked.", image: products.heartBangle },
  { slug: "wedding-jewellery", name: "Wedding Jewellery", description: "Bridal sets and heirloom pieces for the day itself.", image: images.leafNecklace },
  { slug: "engagement-rings", name: "Engagement Rings", description: "Rings chosen for the question that changes everything.", image: products.filigreeRing },
];

/** Remaining collections — shown as smaller tiles (with an image) or a text link (without). */
export const moreCollections: { name: string; description: string; image?: SiteImage }[] = [
  { name: "Gemstone Jewellery", description: "Topaz, amethyst and precious stones set in gold", image: products.blueTopazPendant },
  { name: "Earrings", description: "Studs, drops and matching sets", image: products.peridotSet },
  { name: "Men’s Jewellery", description: "Chains, rings, kadas and bracelets", image: products.cubanChainSet },
  { name: "Children’s Jewellery", description: "First gold for little ones", image: products.babyFeetPendant },
  { name: "Custom Jewellery", description: "Name pieces and designs made around your idea", image: products.namePendant },
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
  "Wedding & Engagement",
  "Gemstones",
  "Men’s Jewellery",
  "Custom Designs",
  "Children’s Jewellery",
  "New Arrivals",
  "Store",
] as const;
export type GalleryCategory = Exclude<(typeof galleryCategories)[number], "All">;

// The home page shows the first 10 — keep the strongest images at the top.
export const gallery: GalleryItem[] = [
  { ...products.waveBracelet, category: "New Arrivals", shape: "tall" },
  { ...products.twoToneCoupleRings, category: "Wedding & Engagement", shape: "landscape" },
  { ...images.pendantEarring, category: "New Arrivals", shape: "portrait" },
  { ...products.geometricNecklace, category: "Gold Jewellery", shape: "portrait" },
  { ...products.topazSet, category: "Gemstones", shape: "portrait" },
  { ...products.filigreeRing, category: "Wedding & Engagement", shape: "tall" },
  { ...images.storefrontStreet, category: "Store", shape: "landscape" },
  { ...products.kadaBangle, category: "Gold Jewellery", shape: "square" },
  { ...images.goldChains, category: "Men’s Jewellery", shape: "portrait" },
  { ...products.blueTopazPendant, category: "Gemstones", shape: "portrait" },

  { ...products.weddingBands, category: "Wedding & Engagement", shape: "landscape" },
  { ...products.namePendant, category: "Custom Designs", shape: "portrait" },
  { ...products.cubanChainSet, category: "Men’s Jewellery", shape: "portrait" },
  { ...products.heartBangle, category: "Gold Jewellery", shape: "portrait" },
  { ...images.handsRings, category: "Gold Jewellery", shape: "portrait" },
  { ...products.amethystSet, category: "Gemstones", shape: "portrait" },
  { ...products.airplanePendant, category: "Custom Designs", shape: "square" },
  { ...products.babyFeetPendant, category: "Children’s Jewellery", shape: "portrait" },
  { ...images.consultation, category: "Store", shape: "landscape" },
  { ...products.navaratnaPendant, category: "Gemstones", shape: "portrait" },
  { ...products.mensStoneRings, category: "Men’s Jewellery", shape: "portrait" },
  { ...products.twoToneCoupleRings2, category: "Wedding & Engagement", shape: "landscape" },
  { ...products.nameBraceletChild, category: "Children’s Jewellery", shape: "portrait" },
  { ...images.ringsCup, category: "New Arrivals", shape: "portrait" },
  { ...products.rainbowPendant, category: "Gemstones", shape: "portrait" },
  { ...products.screwBangle, category: "Gold Jewellery", shape: "landscape" },
  { ...products.kanjiPendant, category: "Custom Designs", shape: "portrait" },
  { ...products.cubanChain, category: "Men’s Jewellery", shape: "portrait" },
  { ...products.peridotSet, category: "Gemstones", shape: "portrait" },
  { ...products.nameNecklaceScript, category: "Custom Designs", shape: "portrait" },
  { ...images.team, category: "Store", shape: "landscape" },
  { ...products.conchPendant, category: "Gold Jewellery", shape: "portrait" },
  { ...products.gemstoneRingBox, category: "Gemstones", shape: "portrait" },
  { ...products.mensLinkBracelet, category: "Men’s Jewellery", shape: "portrait" },
  { ...products.nameBraceletHeart, category: "Children’s Jewellery", shape: "portrait" },
  { ...products.weddingBandsPair, category: "Wedding & Engagement", shape: "landscape" },
  { ...images.pendantLight, category: "New Arrivals", shape: "portrait" },
  { ...products.francoChain, category: "Men’s Jewellery", shape: "portrait" },
  { ...products.nameKada, category: "Custom Designs", shape: "portrait" },
  { ...products.tuskPendant, category: "Gold Jewellery", shape: "portrait" },
  { ...products.bulletPendant, category: "Men’s Jewellery", shape: "square" },
  { ...products.trebleClefPendant, category: "Gold Jewellery", shape: "portrait" },
  { ...products.mensCurbBracelet, category: "Men’s Jewellery", shape: "square" },
  { ...products.hornPendant, category: "Gold Jewellery", shape: "portrait" },
  { ...products.nameNecklace, category: "Custom Designs", shape: "portrait" },
  { ...products.figaroPendant, category: "Men’s Jewellery", shape: "portrait" },
  { ...products.barPendant, category: "Gold Jewellery", shape: "portrait" },
  { ...products.mensBarPendant, category: "Men’s Jewellery", shape: "portrait" },
  { ...products.beadBracelet, category: "Men’s Jewellery", shape: "portrait" },
  { ...products.ropeChain, category: "Gold Jewellery", shape: "portrait" },
  { ...products.curbChain, category: "Men’s Jewellery", shape: "portrait" },
  { ...products.mensLinkBraceletWide, category: "Men’s Jewellery", shape: "landscape" },
  { ...images.crossPendant, category: "Gold Jewellery", shape: "portrait" },
  { ...images.necklaceWhite, category: "Wedding & Engagement", shape: "tall" },
  { ...images.sapphireRing, category: "Wedding & Engagement", shape: "square" },
];

export const socialPosts = [
  { label: "New Arrivals", image: images.pendantLight },
  { label: "Wedding Jewellery", image: images.necklaceWhite },
  { label: "Gold Price Updates", image: images.goldChains },
  { label: "New Designs", image: images.pendantEarring },
  { label: "Customer Moments", image: images.consultation },
  { label: "Store Updates", image: images.team },
];
