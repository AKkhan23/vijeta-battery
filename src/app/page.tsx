import type { Metadata } from "next";
import { DealerCTA } from "@/components/site/DealerCTA";
import { CinematicHero } from "@/components/site/CinematicHero";
import { ProductShowcase } from "@/components/site/ProductShowcase";
import { StoryScroll } from "@/components/site/StoryScroll";
import { Marquee } from "@/components/site/Marquee";
import { PageCta } from "@/components/site/PageCta";
import { RangePreview } from "@/components/site/RangePreview";
import { Series } from "@/components/site/Series";
import { TechnologyTeaser } from "@/components/site/TechnologyTeaser";
import { Testimonials } from "@/components/site/Testimonials";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AutoPartsStore", "LocalBusiness"],
      "@id": `${site.url}/#business`,
      name: "VIJETA Batteries",
      legalName: site.legalName,
      url: site.url,
      image: `${site.url}/og.png`,
      logo: `${site.url}/icon.svg`,
      telephone: site.phonePrimary,
      email: site.email,
      foundingDate: "1988",
      priceRange: "₹₹",
      description: site.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.pin,
        addressCountry: "IN",
      },
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: [
        "Lead-acid batteries",
        "Car batteries",
        "Tractor batteries",
        "Commercial vehicle batteries",
        "Industrial batteries",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "VIJETA Batteries",
      publisher: { "@id": `${site.url}/#business` },
      inLanguage: "en-IN",
    },
  ],
};

export default function Home() {
  return (
    <>
      <main id="main">
        <CinematicHero />
        <ProductShowcase />
        <Marquee />
        <Series />
        <RangePreview />
        <TechnologyTeaser />
        <StoryScroll variant="home" />
        <Testimonials />
        <PageCta
          eyebrow="Find your fit"
          title={
            <>
              Not sure which battery
              <br />
              fits <em className="heading-gloss accent-serif font-normal text-royal">yours?</em>
            </>
          }
          copy="Send us the make, model and fuel type. We will confirm the right series and point you to the nearest authorised dealer."
          primary={{ label: "Browse batteries", href: "/products" }}
          secondary={{ label: "Ask our team", href: "/contact" }}
        />
        <DealerCTA />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
