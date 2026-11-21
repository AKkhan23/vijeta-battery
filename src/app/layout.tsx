import type { Metadata, Viewport } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { ChargeRail } from "@/components/site/ChargeRail";
import { FloatingActions } from "@/components/site/FloatingActions";
import { ChatWidget } from "@/components/site/ChatWidget";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { TorchCursor } from "@/components/site/TorchCursor";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const wordmark = Montserrat({
  subsets: ["latin"],
  variable: "--font-wordmark",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vijetabattery.com"),
  title: {
    default: "VIJETA Batteries — Lead-Acid Power Since 1988",
    template: "%s · VIJETA Batteries",
  },
  description:
    "Lead-acid batteries for cars, tractors, trucks, rickshaws and industry. Manufactured at Vijeta Accumulators and New Technologies since 1988. Gold series with 36 months of cover, Silver with 24.",
  keywords: [
    "VIJETA Batteries",
    "lead acid battery",
    "car battery India",
    "tractor battery",
    "truck battery",
    "auto rickshaw battery",
    "industrial battery",
    "Vijeta Accumulators and New Technologies battery manufacturer",
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
      "Batteries for the vehicles India runs on. Built at Vijeta Accumulators and New Technologies, tested unit by unit, backed for up to 36 months.",
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
      "Batteries for the vehicles India runs on. Built at Vijeta Accumulators and New Technologies, tested unit by unit, backed for up to 36 months.",
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
      className={`${manrope.variable} ${wordmark.variable}`}
    >
      {/* ===== VIJETA PRELOADER : START (HEAD PART) ===== */}
      {/* REVERT NOTE: the original loader (flying p1-p4.webp images) is still
          clean in git. To restore it later just run:
          `git checkout -- src/app/layout.tsx` and delete public/loader/battery.gif */}
      <head>
      <link rel="preload" as="image" href="/loader/battery.gif" />
      <link rel="preload" as="image" href="/loader/title.webp" />
      <style>{`
  html.vj-lock, html.vj-lock body { overflow: hidden; }
  #vj-loader {
    position: fixed; inset: 0; z-index: 2147483647;
    background: #f4f5f2;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: opacity .4s ease, visibility .4s ease;
  }
  #vj-loader.vj-hide { opacity: 0; visibility: hidden; }
  /* Supplied Battery.gif (150x112, 120 frames) replaces the old flying-images
     animation. The brand text + progress line below are intentionally unchanged. */
  .vj-stage { position: relative; width: min(70vw, 260px); aspect-ratio: 150 / 112; }
  .vj-battery { display: block; width: 100%; height: 100%; object-fit: contain; }
  .vj-title {
    width: min(62vw, 270px); height: auto; margin-top: 18px;
    opacity: 0; transform: translate3d(0, 12px, 0);
    animation: vj-up .5s cubic-bezier(.2, .9, .25, 1) .95s forwards;
  }
  .vj-bar {
    width: min(56vw, 230px); height: 5px; border-radius: 3px;
    background: #d6dceb; margin-top: 22px; overflow: hidden;
    opacity: 0; animation: vj-fade .25s ease .25s forwards;
  }
  .vj-bar i {
    display: block; height: 100%; width: 100%; background: #1133cd;
    transform: scaleX(0); transform-origin: left;
    animation: vj-fill 1.5s cubic-bezier(.4, 0, .2, 1) .25s forwards;
  }
  @keyframes vj-up   { to { opacity: 1; transform: translate3d(0, 0, 0); } }
  @keyframes vj-fade { to { opacity: 1; } }
  @keyframes vj-fill { to { transform: scaleX(1); } }
  @media (prefers-reduced-motion: reduce) {
    .vj-title, .vj-bar, .vj-bar i { animation-duration: .01s; animation-delay: 0s; }
  }
`}</style>
      </head>
      {/* ===== VIJETA PRELOADER : END (HEAD PART) ===== */}
      <body id="top" className="min-h-svh bg-paper font-sans text-ink">
        {/* ===== VIJETA PRELOADER : START (BODY PART - <body> ke bilkul upar, #root se pehle) ===== */}
        <div id="vj-loader" role="status" aria-label="Loading" suppressHydrationWarning>
          <div className="vj-stage">
            <img className="vj-battery" src="/loader/battery.gif" alt="" />
          </div>
          <img className="vj-title" src="/loader/title.webp" alt="Vijeta Battery" decoding="async" />
          <div className="vj-bar"><i></i></div>
        </div>
        <InlineScript html={`
  (function () {
    var MIN = 1800, MAX = 3200, t0 = Date.now();
    var el = document.getElementById('vj-loader'), done = false;
    document.documentElement.classList.add('vj-lock');
    function hide() {
      if (done) return; done = true;
      el.classList.add('vj-hide');
      document.documentElement.classList.remove('vj-lock');
    }
    function onReady() { setTimeout(hide, Math.max(0, MIN - (Date.now() - t0))); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady, { once: true });
    else onReady();
    setTimeout(hide, MAX);          // safety: max 3.2s
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
        <TorchCursor />
        <ChargeRail />
        <Nav />
        {children}
        <Footer />
        <FloatingActions />
        <ChatWidget />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
