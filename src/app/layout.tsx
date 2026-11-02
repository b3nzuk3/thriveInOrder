import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const display = localFont({ src: "../../public/fonts/cantata-one.ttf", variable: "--font-display", display: "swap" });
const sans = localFont({ src: "../../public/fonts/manrope.ttf", variable: "--font-sans", display: "swap" });
const heroDisplay = localFont({ src: "../../public/fonts/dm-serif-display.ttf", variable: "--font-hero", weight: "400", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://thrive-in-order-home.hussenito85.chatgpt.site"),
  title: { default: "Thrive in Order | Organized Spaces, Brighter Days", template: "%s | Thrive in Order" },
  description: "Personalized home organizing, decluttering, laundry support, nursery organization, moving support, and senior downsizing. Thoughtful systems for the way you live.",
  openGraph: { title: "Thrive in Order", description: "Organized Spaces, Brighter Days.", type: "website", locale: "en_US", images: [{ url: "/images/hero.webp", width: 1448, height: 1086, alt: "A welcoming, thoughtfully organized entryway" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${sans.variable} ${heroDisplay.variable}`}><body id="top"><SiteHeader />{children}<SiteFooter /></body></html>;
}
