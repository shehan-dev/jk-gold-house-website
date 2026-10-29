/**
 * Central business details for JK Gold House.
 * These also feed the LocalBusiness structured data that Google reads.
 */
export const site = {
  name: "JK Gold House",
  owner: "Jagath Mendis",
  tagline: "Celebrating Life’s Moments in Gold",
  description:
    "JK Gold House is a trusted family jewellery house in Negombo, Sri Lanka, with over 35 years of experience in genuine 22K and 18K gold jewellery, wedding jewellery, engagement rings and custom designs.",
  // Live domain. NEXT_PUBLIC_SITE_URL can override it (e.g. for a staging deployment).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jkgoldhouse.lk",
  yearsOfExperience: 35,

  phoneDisplay: "+94 312 220 175",
  phoneE164: "+94312220175",

  whatsappDisplay: "+94 71 415 1447",
  whatsappNumber: "94714151447",

  address: {
    street: "598, Colombo Road, 2nd Kurana",
    city: "Negombo",
    region: "Western Province",
    country: "Sri Lanka",
    countryCode: "LK",
  },

  geo: { lat: 7.1925541, lng: 79.8569009 },

  hours: [
    { label: "Monday – Saturday", value: "9:00 AM – 7:00 PM", days: ["Mo", "Tu", "We", "Th", "Fr", "Sa"], opens: "09:00", closes: "19:00" },
    { label: "Sunday", value: "10:00 AM – 2:00 PM", days: ["Su"], opens: "10:00", closes: "14:00" },
  ],

  social: {
    facebook: "https://www.facebook.com/JKGoldHouse",
    instagram: "https://www.instagram.com/jk.goldhouse",
    tiktok: "https://www.tiktok.com/@jkgoldhouse",
  },

  messenger: "https://m.me/JKGoldHouse",
  mapsUrl: "https://maps.app.goo.gl/tz1ikAzRVoc9iXBS8",
  // Opens the Google reviews panel / the "write a review" dialog for the store's Google Business Profile
  googleReviewsUrl: "https://www.google.com/search?q=JK+Gold+House+Negombo#lrd=0x3ae2ee5ed75fbc8d:0x6c39ba6af86c40d5,1,,,,",
  googleWriteReviewUrl: "https://www.google.com/search?q=JK+Gold+House+Negombo#lrd=0x3ae2ee5ed75fbc8d:0x6c39ba6af86c40d5,3,,,,",
} as const;

export const telHref = `tel:${site.phoneE164}`;

/**
 * WhatsApp is temporarily switched off. Set to `true` to bring back every
 * WhatsApp button, number and the floating chat button across the site.
 * While off, enquiry buttons open Facebook Messenger instead.
 */
export const whatsappEnabled = false;

export function whatsappHref(message = "Hello JK Gold House, I would like to make an enquiry.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Where "Enquire" buttons lead: WhatsApp (with a pre-filled message) when enabled, otherwise Messenger. */
export function enquiryHref(message?: string) {
  return whatsappEnabled ? whatsappHref(message) : site.messenger;
}

export const enquiryChannel = whatsappEnabled ? "WhatsApp" : "Messenger";

export const messages = {
  general: "Hello JK Gold House, I would like to make an enquiry.",
  goldPrice: "Hello JK Gold House, could you please share today’s gold price?",
  wedding: "Hello JK Gold House, I would like to plan wedding jewellery with you.",
  custom: "Hello JK Gold House, I have an idea for a custom piece of jewellery I would like to discuss.",
  category: (name: string) => `Hello JK Gold House, I would like to see your ${name.toLowerCase()} collection.`,
  service: (name: string) => `Hello JK Gold House, I would like to know more about your ${name.toLowerCase()} service.`,
};

const latLng = `${site.geo.lat},${site.geo.lng}`;
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${latLng}`;
export const mapEmbedSrc = `https://www.google.com/maps?q=${latLng}&z=17&output=embed`;
export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.country}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/jewellery", label: "Jewellery" },
  { href: "/wedding", label: "Wedding" },
  { href: "/custom-jewellery", label: "Custom Jewellery" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;
