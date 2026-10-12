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
  coffeeRing: still("coffee-ring", "Sapphire engagement-style ring worn while holding a cup", "60% 50%"),
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
