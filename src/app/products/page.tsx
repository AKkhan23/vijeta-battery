import { PageCta } from "@/components/site/PageCta";
import { PageHeader } from "@/components/site/PageHeader";
import { Range } from "@/components/site/Range";
import { Series } from "@/components/site/Series";
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
        title={
          <>
            Power for the
            <br />
            way you <em className="accent-serif font-normal text-royal">work.</em>
          </>
        }
        intro="Two series, six applications, one engineering brief. Gold for the long haul, Silver for the daily drive — built on the same line and tested the same way."
        meta={[
          { label: "Gold series", value: "36 months" },
          { label: "Silver series", value: "24 months" },
          { label: "Categories", value: "6 applications" },
          { label: "Testing", value: "100% load-tested" },
        ]}
      />
      <Series index="01" />
      <Range index="02" />
      <PageCta
        title={
          <>
            Tell us what you
            <br />
            <em className="accent-serif font-normal text-royal">drive.</em>
          </>
        }
        copy="Make, model, fuel type and year — send the details and we will confirm the right series and the nearest dealer."
        primary={{ label: "Enquire now", href: "/contact" }}
        secondary={{ label: "Read the warranty", href: "/warranty" }}
      />
    </main>
  );
}
