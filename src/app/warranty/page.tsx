import { PageCta } from "@/components/site/PageCta";
import { PageHeader } from "@/components/site/PageHeader";
import { Warranty } from "@/components/site/Warranty";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Warranty & claims",
  description:
    "VIJETA warranty cover: 36 months on Gold, 24 months on Silver. What is covered, what is not, and how to make a claim through your authorised dealer.",
  path: "/warranty",
});

export default function WarrantyPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Cover & claims"
        index="01"
        crumb="Warranty"
        path="/warranty"
        title={
          <>
            Cover that holds
            <br />
            at the <em className="heading-gloss accent-serif font-normal text-royal">counter.</em>
          </>
        }
        intro="Every VIJETA battery is covered through our authorised dealer network. Keep your invoice and a claim stays simple — for you and for the dealer."
        meta={[
          { label: "Gold series", value: "36 months" },
          { label: "Silver series", value: "24 months" },
          { label: "Covers", value: "Manufacturing defects" },
          { label: "Proof needed", value: "Invoice + warranty card" },
        ]}
      />
      <Warranty index="01" />
      <PageCta
        title={
          <>
            Still have a
            <br />
            <em className="heading-gloss accent-serif font-normal text-royal">question?</em>
          </>
        }
        copy="Our sales line answers warranty questions directly, or send us the battery details and we will guide you to the right dealer."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Read the FAQs", href: "/faq" }}
      />
    </main>
  );
}
