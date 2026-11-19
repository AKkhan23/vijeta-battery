import { AboutHero } from "@/components/site/AboutHero";
import { AboutIntro } from "@/components/site/AboutIntro";
import { DispatchPackaging } from "@/components/site/DispatchPackaging";
import { JourneySlider } from "@/components/site/JourneySlider";
import { OriginStory } from "@/components/site/OriginStory";
import { OwnerNote } from "@/components/site/OwnerNote";
import { PageCta } from "@/components/site/PageCta";
import { PlantProcess } from "@/components/site/PlantProcess";
import { QualityChecking } from "@/components/site/QualityChecking";
import { StatsBand } from "@/components/site/StatsBand";
import { TenderProcess } from "@/components/site/TenderProcess";
import { numbers } from "@/lib/heritage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About the factory",
  description:
    "VIJETA Batteries began in 1988 with accumulators and torches. Nearly four decades later the same family makes lead-acid batteries at Pithampur, M.P. — and every unit still leaves load-tested.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main">
      <AboutHero />
      <AboutIntro />
      <StatsBand
        index="01"
        items={numbers}
        cta={{ href: "#government", label: "Government & tender supply" }}
      />
      <JourneySlider />
      <OriginStory />
      <OwnerNote />
      <PlantProcess />
      <TenderProcess />
      <QualityChecking />
      <DispatchPackaging />
      <PageCta
        title={
          <>
            Made here. Backed <em className="heading-gloss accent-serif font-normal text-royal">here.</em>
          </>
        }
        copy="See the series we build on that floor, or send a tender line and let the plant quote against it."
        primary={{ label: "Browse batteries", href: "/products" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </main>
  );
}
