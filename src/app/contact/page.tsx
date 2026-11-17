import { Contact } from "@/components/site/Contact";
import { PageHeader } from "@/components/site/PageHeader";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact & enquiries",
  description:
    "Contact VIJETA Batteries in Pithampur. Call the sales line, message on WhatsApp or send an enquiry for the right battery and your nearest authorised dealer.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Get in touch"
        index="01"
        crumb="Contact"
        path="/contact"
        title={
          <>
            Talk to a
            <br />
            <em className="heading-gloss accent-serif font-normal text-royal">person.</em>
          </>
        }
        intro="Send the details and we will come back with the right battery, the right series and the nearest authorised dealer. A phone call works too."
        meta={[
          { label: "Plant & general", value: site.phones[0].label },
          { label: "Enquiries", value: site.phones[1].label },
          { label: "Email", value: site.email },
          { label: "Plant", value: "Pithampur, Dhar" },
        ]}
      />
      <Contact index="01" />
    </main>
  );
}
