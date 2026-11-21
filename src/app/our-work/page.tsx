import { FactoryHero } from "@/components/site/FactoryHero";
import { FactoryFeatureSection } from "@/components/site/FactoryFeatureSection";
import { FactoryChargers } from "@/components/site/FactoryChargers";
import { FactoryMachineryGrid } from "@/components/site/FactoryMachineryGrid";
import { ourWorkMedia } from "@/lib/our-work-media";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our work — factory tour",
  description:
    "Step inside our manufacturing floor and discover the people, processes and equipment behind every Vijeta battery.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <main className="our-work">
      <FactoryHero />

      <FactoryFeatureSection
        id="battery-production"
        index="01 / 04"
        eyebrow="OUR PRODUCTION"
        title="Inside Battery Production"
        body="Every Vijeta battery begins with a carefully managed production process. Our team works through each stage with attention to workmanship, consistency and detail, bringing every unit one step closer to completion."
        video={ourWorkMedia.production}
        tone="white"
        mediaDirection="from-left"
      />

      <FactoryFeatureSection
        id="battery-assembly"
        index="02 / 04"
        eyebrow="THE MAKING PROCESS"
        title="Where Every Component Comes Together"
        body="Precision and attention to detail come together on our assembly floor. Our production team handles each stage with care, ensuring every component is properly brought together before the battery moves forward in the manufacturing process."
        video={ourWorkMedia.assembly}
        reverse
        tone="paper"
        mediaDirection="from-right"
      />

      <FactoryFeatureSection
        id="assembly-closeup"
        index="03 / 04"
        eyebrow="CRAFT IN DETAIL"
        title="Finished with Care, Built to Last"
        body="A closer look at the assembly floor, where each battery is checked and finished before it leaves our facility."
        video={ourWorkMedia.process}
        tone="white"
        mediaDirection="from-left"
      />

      <FactoryChargers />

      <FactoryFeatureSection
        id="manufacturing-machinery"
        index="04 / 04"
        eyebrow="OUR TECHNOLOGY"
        title="Precision in Motion"
        body="Behind every production stage is equipment designed to support careful and consistent manufacturing. Take a closer look at the machinery and processes operating on our factory floor."
        video={ourWorkMedia.machineryVideo}
        tone="paper"
        mediaDirection="from-left"
        note="Manufacturing equipment"
      />

      <FactoryMachineryGrid />
    </main>
  );
}
