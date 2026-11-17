import { PageCta } from "@/components/site/PageCta";
import { PageHeader } from "@/components/site/PageHeader";
import { Technology } from "@/components/site/Technology";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Inside the cell",
  description:
    "How VIJETA builds a lead-acid battery: grid casting, plate design, lead-calcium alloy, sealed case and unit-by-unit load testing in Pithampur.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Engineering"
        index="01"
        crumb="Technology"
        path="/technology"
        title={
          <>
            What happens
            <br />
            <em className="heading-gloss accent-serif font-normal text-royal">inside</em> the case.
          </>
        }
        intro="Four things decide whether a battery cranks on the morning you need it. Explore the exploded cell to see the part each one plays."
        meta={[
          { label: "Configuration", value: "12 V / 6 cells" },
          { label: "Grid alloy", value: "Lead-calcium" },
          { label: "Case", value: "Impact-resistant PP" },
          { label: "Quality check", value: "100% load-tested" },
        ]}
      />
      <Technology index="01" />
      <PageCta
        title={
          <>
            Built to start.
            <br />
            Tested to <em className="heading-gloss accent-serif font-normal text-royal">last.</em>
          </>
        }
        copy="See which series puts that engineering to work for your vehicle, or ask our team directly."
        primary={{ label: "See the range", href: "/products" }}
        secondary={{ label: "Ask our team", href: "/contact" }}
      />
    </main>
  );
}
