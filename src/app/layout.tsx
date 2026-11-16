import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { ChargeRail } from "@/components/site/ChargeRail";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vijetabattery.com"),
  title: {
    default: "VIJETA Batteries — Lead-Acid Power Since 1988",
    template: "%s · VIJETA Batteries",
  },
  description:
    "Lead-acid batteries for cars, tractors, trucks, rickshaws and industry. Manufactured in Pithampur since 1988. Gold series with 36 months of cover, Silver with 24.",
  keywords: [
    "VIJETA Batteries",
    "lead acid battery",
    "car battery India",
    "tractor battery",
    "truck battery",
    "auto rickshaw battery",
    "industrial battery",
    "Pithampur battery manufacturer",
    "vijetabattery.com",
  ],
  authors: [{ name: "VIJETA Batteries" }],
  creator: "VIJETA Batteries",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vijetabattery.com",
    siteName: "VIJETA Batteries",
    title: "VIJETA Batteries — Lead-Acid Power Since 1988",
    description:
      "Batteries for the vehicles India runs on. Built in Pithampur, tested unit by unit, backed for up to 36 months.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "VIJETA Batteries — lead-acid power since 1988",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIJETA Batteries — Lead-Acid Power Since 1988",
    description:
      "Batteries for the vehicles India runs on. Built in Pithampur, tested unit by unit, backed for up to 36 months.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "Automotive",
};

export const viewport: Viewport = {
  themeColor: "#f4f5f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${interTight.variable} ${plexMono.variable} ${instrumentSerif.variable}`}
    >
      <body id="top" className="min-h-svh bg-paper font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-sm focus:bg-royal focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <ChargeRail />
        <Nav />
        {children}
        <Footer />
        <FloatingActions />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
