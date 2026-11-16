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

// Inline script helper (Next.js 16 guide): avoids React's dev warning for <script>.
function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${archivo.variable} ${interTight.variable} ${plexMono.variable} ${instrumentSerif.variable}`}
    >
      {/* ===== VIJETA PRELOADER : START (HEAD PART) ===== */}
      <head>
        <link rel="preload" as="image" href="/loader/p1.webp" />
      <link rel="preload" as="image" href="/loader/p2.webp" />
      <link rel="preload" as="image" href="/loader/p3.webp" />
      <link rel="preload" as="image" href="/loader/p4.webp" />
      <link rel="preload" as="image" href="/loader/title.webp" />
      <style>{`
  html.vj-lock, html.vj-lock body { overflow: hidden; }
  #vj-loader {
    position: fixed; inset: 0; z-index: 2147483647;
    background: #f3f6f2;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: opacity .45s ease, visibility .45s ease;
  }
  #vj-loader.vj-hide { opacity: 0; visibility: hidden; }
  .vj-stage { position: relative; width: min(84vw, 400px); aspect-ratio: 586 / 510; }
  .vj-stage img {
    position: absolute; inset: 0; width: 100%; height: 100%;
    opacity: 0; will-change: transform, opacity;
    animation: vj-in 1.15s cubic-bezier(.34, 1.45, .5, 1) forwards;
    filter: drop-shadow(0 14px 18px rgba(10, 20, 60, .18));
  }
  .vj-stage img:nth-child(1) { --x:-75%; --y:-70%; --r:-32deg; animation-delay: .00s; }
  .vj-stage img:nth-child(2) { --x: 75%; --y:-65%; --r: 30deg; animation-delay: .12s; }
  .vj-stage img:nth-child(3) { --x:-70%; --y: 70%; --r: 26deg; animation-delay: .24s; }
  .vj-stage img:nth-child(4) { --x: 75%; --y: 72%; --r:-28deg; animation-delay: .36s; }
  @keyframes vj-in {
    0%   { opacity: 0; transform: translate(var(--x), var(--y)) rotate(var(--r)); }
    25%  { opacity: 1; }
    100% { opacity: 1; transform: none; filter: none; }
  }
  .vj-title {
    width: min(62vw, 270px); height: auto; margin-top: 18px;
    opacity: 0; transform: translateY(14px);
    animation: vj-up .6s ease 1.55s forwards;
  }
  .vj-bar {
    width: min(56vw, 230px); height: 5px; border-radius: 3px;
    background: #d6dceb; margin-top: 22px; overflow: hidden;
    opacity: 0; animation: vj-fade .4s ease 1.7s forwards;
  }
  .vj-bar i {
    display: block; height: 100%; width: 100%; background: #1133cd;
    transform: scaleX(0); transform-origin: left;
    animation: vj-fill 2.2s cubic-bezier(.4, 0, .2, 1) 1.7s forwards;
  }
  @keyframes vj-up   { to { opacity: 1; transform: none; } }
  @keyframes vj-fade { to { opacity: 1; } }
  @keyframes vj-fill { to { transform: scaleX(1); } }
  @media (prefers-reduced-motion: reduce) {
    .vj-stage img, .vj-title, .vj-bar, .vj-bar i { animation-duration: .01s; animation-delay: 0s; }
  }
`}</style>
      </head>
      {/* ===== VIJETA PRELOADER : END (HEAD PART) ===== */}
      <body id="top" className="min-h-svh bg-paper font-sans text-ink">
        {/* ===== VIJETA PRELOADER : START (BODY PART - <body> ke bilkul upar, #root se pehle) ===== */}
        <div id="vj-loader" role="status" aria-label="Loading">
          <div className="vj-stage">
            <img src="/loader/p1.webp" alt="" decoding="async" />
            <img src="/loader/p2.webp" alt="" decoding="async" />
            <img src="/loader/p3.webp" alt="" decoding="async" />
            <img src="/loader/p4.webp" alt="" decoding="async" />
          </div>
          <img className="vj-title" src="/loader/title.webp" alt="Vijeta Battery" decoding="async" />
          <div className="vj-bar"><i></i></div>
        </div>
        <InlineScript html={`
  (function () {
    var MIN = 2300, MAX = 5000, t0 = Date.now();
    var el = document.getElementById('vj-loader'), done = false;
    document.documentElement.classList.add('vj-lock');
    function hide() {
      if (done) return; done = true;
      el.classList.add('vj-hide');
      document.documentElement.classList.remove('vj-lock');
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 600);
    }
    function onReady() { setTimeout(hide, Math.max(0, MIN - (Date.now() - t0))); }
    if (document.readyState === 'complete') onReady();
    else window.addEventListener('load', onReady);
    setTimeout(hide, MAX);          // safety: max 5s
  })();
`} />
        {/* ===== VIJETA PRELOADER : END (BODY PART) ===== */}
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
