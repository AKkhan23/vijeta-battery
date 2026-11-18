import { PageCta } from "@/components/site/PageCta";
import { HomePowerTeaser } from "@/components/site/HomePowerTeaser";
import { ProductGallery } from "@/components/site/ProductGallery";
import { PageHeader } from "@/components/site/PageHeader";
import { Range } from "@/components/site/Range";
import { Series } from "@/components/site/Series";
import { ValuesSection } from "@/components/site/ValuesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Batteries & applications",
  description:
    "Explore VIJETA Gold (36 months) and Silver (24 months) series, and batteries for cars, tractors, rickshaws, trucks, industry and solar.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="The range"
        index="01"
        crumb="Products"
        path="/products"
        image="/products-hero-final.jpg"
        title={
          <>
            Power for the
            <br />
            way you <em className="heading-gloss accent-serif font-normal text-white">work.</em>
          </>
        }
        intro="Trusted on Indian roads since 1988. Gold for the long haul, Silver for the daily drive — one line, one standard, every unit load-tested before it reaches you."
        meta={[
          { label: "Gold series", value: "36 months" },
          { label: "Silver series", value: "24 months" },
          { label: "Categories", value: "6 applications" },
          { label: "Testing", value: "100% load-tested" },
        ]}
      />
      <ProductGallery />
      <HomePowerTeaser />
      <Series index="01" />
      <ValuesSection />
      <Range index="02" />
      <PageCta
        title={
          <>
            Tell us what you
            <br />
            <em className="heading-gloss accent-serif font-normal text-royal">drive.</em>
          </>
        }
        copy="Make, model, fuel type and year — send the details and we will confirm the right series and the nearest dealer."
        primary={{ label: "Enquire now", href: "/contact" }}
        secondary={{ label: "Read the warranty", href: "/warranty" }}
      />
    </main>
  );
}
