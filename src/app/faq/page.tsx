import { FAQ } from "@/components/site/FAQ";
import { PageCta } from "@/components/site/PageCta";
import { PageHeader } from "@/components/site/PageHeader";
import { pageMetadata } from "@/lib/seo";
import { faqs, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Questions & answers",
  description:
    "Answers to common VIJETA Battery questions: choosing a battery, Gold vs Silver, warranty claims, old battery exchange, dealerships and where batteries are made.",
  path: "/faq",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${site.url}/#faq`,
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FAQPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Questions"
        index="01"
        crumb="FAQ"
        path="/faq"
        title={
          <>
            Straight <em className="accent-serif font-normal text-royal">answers.</em>
          </>
        }
        intro="The questions we hear most at the counter and on the phone — answered without the runaround. If yours is not here, call the sales line."
        meta={[
          { label: "Topics", value: `${faqs.length} questions` },
          { label: "Sales line", value: site.phonePrimaryLabel },
          { label: "Response", value: "During working hours" },
        ]}
      />
      <FAQ index="01" />
      <PageCta
        title={
          <>
            Still <em className="accent-serif font-normal text-royal">unsure?</em>
          </>
        }
        copy="Tell us the vehicle, the city and what you need. We will answer directly and point you to the nearest authorised dealer."
        primary={{ label: "Ask our team", href: "/contact" }}
        secondary={{ label: "See the range", href: "/products" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
