import { Contact } from "@/components/site/Contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact & enquiries",
  description:
    "Send a VIJETA enquiry and we will come back with the right battery, the right series and the nearest authorised dealer.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main" className="pt-[76px]">
      <Contact id="contact" />
    </main>
  );
}
