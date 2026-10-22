/**
 * Image registry. Every image on the site is referenced from here so new
 * product / store photography can be swapped in without touching components.
 *
 * - `still(...)` — frames taken from the JK Gold House brand film (1920×800)
 * - `photo(...)` — JK Gold House product, store and team photography
 *
 * `position` is the CSS object-position focal point used when the image is
 * cropped (e.g. portrait tiles on mobile).
 */
export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position: string;
};

const still = (file: string, alt: string, position = "50% 50%"): SiteImage => ({
  src: `/images/jk/${file}.jpg`,
  alt,
  width: 1920,
  height: 800,
  position,
});

const photo = (file: string, alt: string, width: number, height: number, position = "50% 50%"): SiteImage => ({
  src: `/images/jk/${file}.jpg`,
  alt,
  width,
  height,
  position,
});

export const images = {
  // People & store
  founder: photo("jagath-mendis", "Jagath Mendis, founder and owner of JK Gold House", 500, 625, "50% 30%"),
  storefrontStreet: photo("storefront-street", "JK Gold House on Colombo Road, Negombo", 680, 273, "62% 50%"),
  team: photo("team", "The JK Gold House team inside the Negombo showroom", 680, 306, "45% 50%"),
  consultation: photo("consultation", "A JK Gold House jeweller presenting necklaces to a customer", 680, 306, "60% 50%"),

  // Product photography
  goldChains: photo("gold-chains", "Heavy gold chains and a gold cross pendant held in cupped hands", 1600, 2400, "52% 50%"),
  goldChainsWide: photo("gold-chains-wide", "Gold chains and a polished gold cross pendant held in cupped hands", 2880, 1620, "50% 50%"),
  pendantEarring: photo("pendant-earring", "Gold pendant necklace, stud earring and bangle worn together", 1600, 2400, "50% 72%"),
  pendantEarringWide: photo("pendant-earring-wide", "Oval gold pendant with sparkling stones on a fine gold chain", 2880, 1620, "55% 60%"),
  handsRings: photo("hands-rings-bracelets", "Gold rings and bangle bracelets worn on crossed hands", 1080, 1350, "55% 45%"),
  ringsCup: photo("rings-cup", "Two delicate gold rings set with sparkling stones", 1080, 1350, "65% 60%"),
  pendantLight: photo("pendant-light", "Pavé-set round gold pendant on a fine gold chain", 1080, 1350, "50% 55%"),
  crossPendant: photo("cross-pendant", "Polished gold cross pendant on a gold chain held in praying hands", 1080, 1350, "50% 50%"),

  // Brand film stills
  sapphireRing: still("sapphire-ring", "Gold ring with a blue sapphire surrounded by brilliant stones", "41% 50%"),
  bangles: still("bangles", "Stacked gold bangles worn on the wrist", "42% 50%"),
  profileNecklace: still("profile-necklace", "Woman wearing a delicate gold necklace at golden hour", "44% 40%"),
  necklaceSea: still("necklace-sea", "Gold leaf necklace and ring photographed by the sea", "20% 50%"),
  leafNecklace: still("leaf-necklace", "Sculptural gold necklace with matching gold ring", "72% 50%"),
  necklaceWhite: still("necklace-white", "Bride-inspired portrait with gold necklace and bangles", "40% 45%"),
  sunsetProfile: still("sunset-profile", "Silhouette wearing a gold necklace at sunset", "42% 40%"),
} satisfies Record<string, SiteImage>;

/** JK Gold House product photography — public/images/collection/ */
const piece = (file: string, alt: string, width: number, height: number, position = "50% 55%"): SiteImage => ({
  src: `/images/collection/${file}.jpg`,
  alt,
  width,
  height,
  position,
});

export const products = {
  // Rings
  filigreeRing: piece("filigree-ring-model", "Gold filigree ring set with sparkling stones, worn on the hand", 1080, 1160, "50% 60%"),
  weddingBands: piece("wedding-bands", "A pair of polished gold wedding bands with diagonal detailing", 1280, 1010, "50% 50%"),
  weddingBandsPair: piece("wedding-bands-pair", "Matching gold wedding bands", 1280, 667, "50% 50%"),
  twoToneCoupleRings: piece("two-tone-couple-rings", "Two-tone gold couple rings set with solitaire stones", 1280, 960, "50% 50%"),
  twoToneCoupleRings2: piece("two-tone-couple-rings-2", "Two-tone gold and white gold couple rings with stones", 1280, 960, "50% 50%"),
  mensStoneRings: piece("mens-stone-rings", "Men’s gold rings set with single stones", 960, 1280, "50% 50%"),
  gemstoneRingBox: piece("gemstone-ring-box", "Gold ring with a deep red gemstone in a JK Gold House box", 960, 1280, "50% 55%"),

  // Bangles & bracelets
  heartBangle: piece("heart-bangle", "Slim gold bangle with a polished heart", 960, 1280, "50% 50%"),
  waveBracelet: piece("wave-bracelet-model", "Wave-shaped gold bracelet with a line of sparkling stones", 1080, 1160, "55% 68%"),
  screwBangle: piece("screw-bangle", "Engraved gold bangle with screw motifs", 1280, 960, "50% 50%"),
  kadaBangle: piece("kada-bangle", "Ornate gold kada bangle with a symbolic centrepiece", 1280, 1256, "50% 50%"),
  nameKada: piece("name-kada", "Gold kada bracelet with an engraved name plate", 950, 1280, "50% 45%"),
  mensCurbBracelet: piece("mens-curb-bracelet", "Heavy men’s gold curb bracelet", 800, 800, "50% 50%"),
  mensLinkBracelet: piece("mens-link-bracelet", "Men’s gold link bracelet", 960, 1280, "50% 55%"),
  mensLinkBraceletWide: piece("mens-link-bracelet-wide", "Men’s two-tone gold link bracelet", 1280, 960, "50% 50%"),
  beadBracelet: piece("bead-bracelet", "Bead bracelet with gold caps", 960, 1280, "50% 40%"),

  // Chains
  cubanChain: piece("cuban-chain", "Heavy gold Cuban link chain", 960, 1280, "50% 50%"),
  cubanChainSet: piece("cuban-chain-bracelet-set", "Gold Cuban link chain with matching bracelet", 960, 1280, "50% 50%"),
  ropeChain: piece("rope-chain", "Gold chain displayed on a neck stand", 960, 1280, "50% 50%"),
  francoChain: piece("franco-chain", "Thick gold Franco chain on a display bust", 960, 1280, "50% 55%"),
  curbChain: piece("curb-chain", "Gold curb chain on a display bust", 630, 1024, "50% 55%"),

  // Pendants & necklaces
  geometricNecklace: piece("geometric-necklace", "Modern gold necklace with a geometric stone-set pendant", 960, 1280, "50% 50%"),
  blueTopazPendant: piece("blue-topaz-pendant", "Gold pendant set with a blue topaz on a gold chain", 960, 1280, "50% 55%"),
  navaratnaPendant: piece("navaratna-pendant", "Gold pendant set with coloured gemstones", 960, 1280, "50% 55%"),
  rainbowPendant: piece("rainbow-circle-pendant", "Gold circle pendant set with rainbow gemstones", 960, 1280, "50% 60%"),
  barPendant: piece("bar-pendant-chain", "Gold bar pendant on a fine chain", 960, 1280, "50% 55%"),
  bulletPendant: piece("bullet-pendant", "Polished gold bullet pendant on a chain", 1280, 1232, "50% 55%"),
  mensBarPendant: piece("mens-bar-pendant", "Men’s gold bar pendant", 994, 1280, "50% 50%"),
  figaroPendant: piece("figaro-chain-pendant", "Gold Figaro chain with a bar pendant", 960, 1280, "50% 55%"),
  hornPendant: piece("horn-pendant", "Gold-capped black horn pendant on a gold chain", 960, 1280, "50% 55%"),
  tuskPendant: piece("tusk-pendant", "Gold tusk pendant on a gold chain", 960, 1280, "50% 60%"),
  conchPendant: piece("conch-pendant", "Gold conch shell pendant", 960, 1280, "50% 45%"),
  trebleClefPendant: piece("treble-clef-pendant", "Gold treble clef pendant", 960, 1280, "50% 55%"),
  babyFeetPendant: piece("baby-feet-pendant", "Gold pendant engraved with baby footprints", 960, 1280, "50% 60%"),

  // Personalised / custom
  namePendant: piece("name-pendant", "Personalised gold name bar pendant", 960, 1280, "50% 55%"),
  nameNecklace: piece("name-necklace", "Personalised gold name necklace", 960, 1280, "50% 50%"),
  nameNecklaceScript: piece("name-necklace-script", "Gold script name necklace on a display bust", 960, 1280, "50% 55%"),
  nameBraceletHeart: piece("name-bracelet-heart", "Personalised gold name bracelet with a heart charm", 960, 1280, "50% 50%"),
  nameBraceletChild: piece("name-bracelet-child", "Personalised children’s gold name bracelet", 960, 1280, "50% 55%"),
  airplanePendant: piece("airplane-pendant", "Custom gold airplane pendant", 760, 689, "50% 50%"),
  kanjiPendant: piece("kanji-bar-pendant", "Custom gold bar pendant engraved with Japanese characters", 894, 1280, "50% 50%"),

  // Gemstone sets
  amethystSet: piece("amethyst-set", "Gold amethyst ring, earrings and pendant set", 768, 1024, "50% 50%"),
  peridotSet: piece("peridot-set", "Gold peridot ring, earrings and pendant set", 768, 1024, "50% 50%"),
  topazSet: piece("topaz-set", "Gold blue topaz ring, earrings and pendant set", 768, 1024, "50% 50%"),
} satisfies Record<string, SiteImage>;

/** Hero slides: landscape image for desktop/tablet, portrait image for phones. */
export type HeroSlide = { alt: string; desktop: SiteImage; mobile: SiteImage };

export const heroSlides: HeroSlide[] = [
  { alt: "Gold chains and a gold cross pendant by JK Gold House", desktop: images.goldChainsWide, mobile: images.goldChains },
  { alt: "Gold rings set with sparkling stones", desktop: images.sapphireRing, mobile: images.ringsCup },
  { alt: "Gold pendant necklace by JK Gold House", desktop: images.pendantEarringWide, mobile: images.pendantEarring },
  { alt: "Delicate gold necklace worn at golden hour", desktop: images.profileNecklace, mobile: images.pendantLight },
  { alt: "Gold jewellery by JK Gold House", desktop: images.leafNecklace, mobile: images.crossPendant },
];

export const film = {
  src: "/videos/jk-film-720.mp4",
  poster: images.sunsetProfile.src,
};
