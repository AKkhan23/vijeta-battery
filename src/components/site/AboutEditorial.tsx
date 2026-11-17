import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { visionMission, whoWeAre } from "@/lib/company";

export function WhoWeAre() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <Reveal className="flex justify-center">
          <SectionLabel index="01" text={whoWeAre.eyebrow} />
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-[80rem] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-paper">
              <Image
                src="/hero-battery.jpg"
                alt="VIJETA heavy duty battery"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-[18ch] text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
              {whoWeAre.title}
            </h2>
            <div className="mt-7 flex flex-col gap-5">
              {whoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[1rem] leading-[1.8] text-ink/60">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function VisionMissionEditorial() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <Reveal className="flex justify-center">
          <SectionLabel index="02" text="Vision & mission" />
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-[80rem] gap-5 md:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col justify-between rounded-3xl border border-royal/12 bg-white p-8 sm:p-10">
              <div>
                <p className="font-sans text-[0.75rem] font-medium text-royal">Our vision</p>
                <p className="mt-5 text-[1.15rem] leading-[1.6] text-ink/75">{visionMission.vision}</p>
              </div>
              <p className="mt-8 border-t border-royal/10 pt-5 font-display text-[1.1rem] font-semibold text-royal">
                “{visionMission.motto}”
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col justify-between rounded-3xl border border-royal/12 bg-white p-8 sm:p-10">
              <div>
                <p className="font-sans text-[0.75rem] font-medium text-royal">Our mission</p>
                <p className="mt-5 text-[1.15rem] leading-[1.6] text-ink/75">{visionMission.mission}</p>
              </div>
              <ul className="mt-8 flex flex-col gap-3 border-t border-royal/10 pt-5">
                {visionMission.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[0.88rem] leading-relaxed text-ink/60">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-royal" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function AboutEditorial() {
  return (
    <>
      <WhoWeAre />
      <VisionMissionEditorial />
    </>
  );
}
