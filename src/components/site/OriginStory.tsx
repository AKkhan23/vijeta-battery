import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { origin } from "@/lib/heritage";

export function OriginStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-white" style={{ scrollMarginTop: "5.5rem" }}>
      <div className="container-x section-y">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel text={origin.eyebrow} />
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-[20ch] text-[clamp(2.2rem,4.4vw,3.9rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-ink">
                {origin.title}
              </h2>
            </Reveal>

            <div className="mt-8 flex max-w-[38rem] flex-col gap-5">
              {origin.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={0.06 + index * 0.05}>
                  <p
                    className={
                      index === 0
                        ? "text-[1.12rem] leading-[1.75] text-ink/75"
                        : "text-[1.02rem] leading-[1.8] text-ink/70"
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-10 border-l-2 border-royal pl-5">
              <p className="max-w-[24ch] font-serif text-[clamp(1.5rem,2.4vw,2.05rem)] leading-[1.18] tracking-[-0.02em] text-ink">
                “{origin.pullQuote}”
              </p>
              <p className="mt-3 font-sans font-medium text-[0.75rem] text-ink/40">
                {origin.pullNote}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="relative lg:sticky lg:top-24">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-paper sm:aspect-[3/2]">
                  <Image
                    src="/origin-indore-unit-crop.jpg"
                    alt={origin.caption}
                    fill
                    sizes="(max-width: 1024px) 92vw, 38vw"
                    className="scale-[1.03] object-cover object-[50%_72%]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent"
                  />
                  <p className="absolute inset-x-0 bottom-0 max-w-[26rem] p-5 font-sans text-[0.72rem] leading-relaxed text-white/85">
                    {origin.caption}
                  </p>
                </div>

                <div className="mt-4 w-[9.5rem] border border-royal/15 bg-paper p-3.5 shadow-[0_30px_60px_-40px_rgba(8,11,20,0.5)] sm:absolute sm:right-4 sm:top-4 sm:mt-0">
                  <p className="display text-[2.2rem] leading-none text-royal">{origin.badge}</p>
                  <p className="mt-1.5 font-sans text-[0.66rem] leading-snug text-ink/50">
                    {origin.badgeNote}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
