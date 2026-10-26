import { images, products, type SiteImage } from "./images";

/** A jewellery category. Clicking it opens the gallery with `filter` selected. */
export type Collection = {
  name: string;
  description: string;
  image: SiteImage;
  filter: GalleryFilter;
};

/**
 * Featured collections shown as editorial image tiles.
 * Order matters — it follows the grid: 1 large, 2 landscape, 3 portrait, 2 wide.
 */
export const featuredCollections: Collection[] = [
  { name: "Necklaces", description: "Statement and delicate gold necklaces for every occasion.", image: images.pendantEarring, filter: "necklaces" },
  { name: "Rings", description: "Everyday gold bands to stone-set statement rings.", image: images.ringsCup, filter: "rings" },
  { name: "Gold Chains", description: "Finely made chains in 22K and 18K gold.", image: images.goldChains, filter: "gold-chains" },
  { name: "Pendants", description: "Meaningful pendants that sit close to the heart.", image: images.pendantLight, filter: "pendants" },
  { name: "Bracelets", description: "Fine gold bracelets and bangle cuffs for daily wear.", image: products.waveBracelet, filter: "bracelets" },
  { name: "Bangles", description: "Traditional and contemporary gold bangles, worn alone or stacked.", image: products.heartBangle, filter: "bangles" },
  { name: "Wedding Jewellery", description: "Wedding bands, bridal sets and heirloom pieces for the day itself.", image: products.weddingBands, filter: "wedding" },
  { name: "Engagement Rings", description: "Rings chosen for the question that changes everything.", image: products.filigreeRing, filter: "wedding" },
];

/** Remaining collections — smaller image tiles; one without photos yet is shown as an enquiry link. */
export const moreCollections: Collection[] = [
  { name: "Gemstone Jewellery", description: "Topaz, amethyst and precious stones set in gold", image: products.blueTopazPendant, filter: "gemstones" },
  { name: "Earrings", description: "Studs, drops and matching sets", image: products.peridotSet, filter: "earrings" },
  { name: "Men’s Jewellery", description: "Chains, rings, kadas and bracelets", image: products.cubanChainSet, filter: "mens" },
  { name: "Children’s Jewellery", description: "First gold for little ones", image: products.babyFeetPendant, filter: "childrens" },
  { name: "Custom Jewellery", description: "Name pieces and designs made around your idea", image: products.namePendant, filter: "custom" },
];

/** Collections we don't have photos of yet — shown as enquiry links. */
export const textCollections = [{ name: "Silver Jewellery", description: "Elegant pieces in silver" }];

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

/** Gallery filters. `slug` is used in links such as /gallery?filter=rings */
export const galleryFilters = [
  { slug: "all", label: "All" },
  { slug: "rings", label: "Rings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "pendants", label: "Pendants" },
  { slug: "gold-chains", label: "Gold Chains" },
  { slug: "bracelets", label: "Bracelets" },
  { slug: "bangles", label: "Bangles" },
  { slug: "earrings", label: "Earrings" },
  { slug: "gemstones", label: "Gemstones" },
  { slug: "wedding", label: "Wedding & Engagement" },
  { slug: "mens", label: "Men’s Jewellery" },
  { slug: "childrens", label: "Children’s Jewellery" },
  { slug: "custom", label: "Custom Designs" },
  { slug: "store", label: "Store" },
] as const;
export type GalleryFilter = Exclude<(typeof galleryFilters)[number]["slug"], "all">;

export function galleryHref(filter: GalleryFilter) {
  return `/gallery?filter=${filter}`;
}

export type GalleryItem = SiteImage & {
  /** Every filter this photo appears under — the first one is shown as its label. */
  tags: GalleryFilter[];
  shape: "portrait" | "landscape" | "square" | "tall";
};

const g = (img: SiteImage, shape: GalleryItem["shape"], ...tags: GalleryFilter[]): GalleryItem => ({ ...img, shape, tags });

export function filterLabel(slug: GalleryFilter) {
  return galleryFilters.find((f) => f.slug === slug)!.label;
}

// The home page shows the first 10 — keep the strongest images at the top.
export const gallery: GalleryItem[] = [
  g(products.waveBracelet, "tall", "bracelets"),
  g(products.twoToneCoupleRings, "landscape", "wedding", "rings"),
  g(images.pendantEarring, "portrait", "necklaces", "pendants", "earrings"),
  g(products.bridalNecklace, "tall", "wedding", "necklaces"),
  g(products.topazSet, "portrait", "gemstones", "earrings", "rings"),
  g(products.filigreeRing, "tall", "rings", "wedding"),
  g(images.storefrontStreet, "landscape", "store"),
  g(products.kadaBangle, "square", "bangles", "mens"),
  g(images.goldChains, "portrait", "gold-chains", "mens", "pendants"),
  g(products.blueTopazPendant, "portrait", "gemstones", "pendants", "necklaces"),

  g(products.stoneWeddingBands, "square", "wedding", "rings"),
  g(products.namePendant, "portrait", "custom", "pendants"),
  g(products.cubanChainSet, "portrait", "gold-chains", "mens", "bracelets"),
  g(products.heartBangle, "portrait", "bangles"),
  g(products.cageRing, "portrait", "rings"),
  g(images.handsRings, "portrait", "rings", "bracelets"),
  g(products.amethystSet, "portrait", "gemstones", "earrings", "rings"),
  g(products.airplanePendant, "square", "custom", "pendants"),
  g(products.babyFeetPendant, "portrait", "childrens", "pendants"),
  g(images.consultation, "landscape", "store"),
  g(products.navaratnaPendant, "portrait", "gemstones", "pendants"),
  g(products.mensStoneRings, "portrait", "mens", "rings"),
  g(products.baguetteRing, "landscape", "rings", "wedding"),
  g(products.nameBraceletChild, "portrait", "childrens", "custom", "bracelets"),
  g(images.ringsCup, "portrait", "rings"),
  g(products.rainbowPendant, "portrait", "gemstones", "pendants", "necklaces"),
  g(products.screwBangle, "landscape", "bangles"),
  g(products.kanjiPendant, "portrait", "custom", "pendants"),
  g(products.cubanChain, "portrait", "gold-chains", "mens"),
  g(products.peridotSet, "portrait", "gemstones", "earrings", "rings"),
  g(products.weddingBands, "landscape", "wedding", "rings"),
  g(products.nameNecklaceScript, "portrait", "custom", "necklaces"),
  g(products.conchPendant, "portrait", "pendants"),
  g(products.gemstoneRingBox, "portrait", "gemstones", "rings"),
  g(products.mensLinkBracelet, "portrait", "mens", "bracelets"),
  g(products.nameBraceletHeart, "portrait", "childrens", "custom", "bracelets"),
  g(products.twoToneCoupleRings2, "landscape", "wedding", "rings"),
  g(images.pendantLight, "portrait", "pendants", "necklaces"),
  g(products.francoChain, "portrait", "gold-chains", "mens"),
  g(products.nameKada, "portrait", "custom", "bangles", "mens"),
  g(products.tuskPendant, "portrait", "pendants"),
  g(products.bulletPendant, "square", "pendants", "mens"),
  g(products.trebleClefPendant, "portrait", "pendants"),
  g(products.mensCurbBracelet, "square", "mens", "bracelets"),
  g(products.hornPendant, "portrait", "pendants"),
  g(products.nameNecklace, "portrait", "custom", "necklaces"),
  g(products.figaroPendant, "portrait", "gold-chains", "mens", "pendants"),
  g(products.weddingBandsPair, "landscape", "wedding", "rings"),
  g(products.barPendant, "portrait", "pendants", "necklaces"),
  g(products.mensBarPendant, "portrait", "mens", "pendants"),
  g(products.beadBracelet, "portrait", "mens", "bracelets"),
  g(products.ropeChain, "portrait", "gold-chains"),
  g(products.curbChain, "portrait", "gold-chains", "mens"),
  g(products.mensLinkBraceletWide, "landscape", "mens", "bracelets"),
  g(images.crossPendant, "portrait", "pendants", "gold-chains"),
  g(images.sapphireRing, "square", "rings", "gemstones", "wedding"),
];

export const socialPosts = [
  { label: "New Arrivals", image: images.pendantLight },
  { label: "Wedding Jewellery", image: products.bridalNecklace },
  { label: "Gold Price Updates", image: images.goldChains },
  { label: "New Designs", image: images.pendantEarring },
  { label: "Customer Moments", image: images.consultation },
  { label: "Rings & Bands", image: products.stoneWeddingBands },
];
