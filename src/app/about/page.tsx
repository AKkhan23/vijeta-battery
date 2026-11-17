import { About } from "@/components/site/About";
import { AboutHero } from "@/components/site/AboutHero";
import { VisionMissionEditorial, WhoWeAre } from "@/components/site/AboutEditorial";
import { JourneyTimeline } from "@/components/site/JourneyTimeline";
import { StoryScroll } from "@/components/site/StoryScroll";
import { PageCta } from "@/components/site/PageCta";
import { StatsBand } from "@/components/site/StatsBand";
import { VisionMission } from "@/components/site/VisionMission";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About the factory",
  description:
    "VIJETA Batteries has manufactured lead-acid batteries in Pithampur since 1988. Meet the plant, the people and the standard behind every unit.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main">
      <AboutHero />
      <StatsBand index="02" />
      <WhoWeAre />
      <JourneyTimeline />
      <VisionMissionEditorial />
      <About />
      <StoryScroll />
      <VisionMission />
      <PageCta
        title={
          <>
            Made here. Backed <em className="heading-gloss accent-serif font-normal text-royal">here.</em>
          </>
        }
        copy="See the two series we build on that floor, and find the one that fits your vehicle."
        primary={{ label: "Browse batteries", href: "/products" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </main>
  );
}
