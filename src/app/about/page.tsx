import { About } from "@/components/site/About";
import { PageCta } from "@/components/site/PageCta";
import { PageHeader } from "@/components/site/PageHeader";
import { StatsBand } from "@/components/site/StatsBand";
import { VisionMission } from "@/components/site/VisionMission";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About the factory",
  description:
    "VIJETA Batteries has manufactured lead-acid batteries in Pithampur since 1988. Meet the plant, the people and the standard behind every unit.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="The factory"
        index="01"
        crumb="About"
        path="/about"
        title={
          <>
            A battery company
            <br />
            that <em className="accent-serif font-normal text-royal">stayed put.</em>
          </>
        }
        intro="Same plant. Same industrial corridor. Same standard since 1988. We cast grids, mix paste, assemble cells and load-test every battery on one floor in Pithampur."
        meta={[
          { label: "Founded", value: "1988" },
          { label: "Plant", value: "Pithampur, Dhar" },
          { label: "Legal name", value: "Aadinath Power Systems Pvt. Ltd." },
          { label: "Contact", value: site.phonePrimaryLabel },
        ]}
      />
      <About />
      <VisionMission />
      <StatsBand index="03" />
      <PageCta
        title={
          <>
            Made here. Backed <em className="accent-serif font-normal text-royal">here.</em>
          </>
        }
        copy="See the two series we build on that floor, and find the one that fits your vehicle."
        primary={{ label: "Browse batteries", href: "/products" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </main>
  );
}
