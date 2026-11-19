import { FAQ } from "@/components/site/FAQ";
import { PageCta } from "@/components/site/PageCta";
import { faqItems } from "@/lib/heritage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

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
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FAQPage() {
  return (
    <main id="main">
      <FAQ />
      <PageCta
        title={
          <>
            Still <em className="heading-gloss accent-serif font-normal text-royal">unsure?</em>
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
