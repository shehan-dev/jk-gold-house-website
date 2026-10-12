import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { JsonLd } from "@/components/layout/JsonLd";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "JK Gold House Negombo | Genuine 22K Gold & Wedding Jewellery",
    template: "%s | JK Gold House Negombo",
  },
  description:
    "JK Gold House is a trusted family jewellery house in Negombo, Sri Lanka with 35+ years of experience. Genuine 22K & 18K gold jewellery, wedding jewellery, engagement rings, custom designs and repairs.",
  keywords: [
    "JK Gold House",
    "JK Gold House Negombo",
    "jewellery shop in Negombo",
    "gold jewellery Negombo",
    "22K gold jewellery Negombo",
    "wedding jewellery Negombo",
    "engagement rings Negombo",
    "custom jewellery Negombo",
    "genuine gold jewellery Sri Lanka",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_LK",
    siteName: site.name,
    title: "JK Gold House — Celebrating Life’s Moments in Gold",
    description: "35+ years of trust, genuine gold and personal service in Negombo, Sri Lanka.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Gold necklace by JK Gold House" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JK Gold House — Celebrating Life’s Moments in Gold",
    description: "35+ years of trust, genuine gold and personal service in Negombo, Sri Lanka.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#141210",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-LK" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-dvh bg-ivory">
        <a
          href="#main"
          className="fixed top-3 left-3 z-100 -translate-y-20 bg-gold px-4 py-2 text-sm font-semibold text-obsidian transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <JsonLd />
        <Providers>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <FloatingContact />
        </Providers>
      </body>
    </html>
  );
}
