import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { whyIntro, whyUs } from "@/lib/heritage";

export function WhyChooseUs() {
  return (
    <section id="why-vijeta" className="relative bg-white" style={{ scrollMarginTop: "5.5rem" }}>
      <div className="container-x section-y">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionLabel text={whyIntro.eyebrow} />
            <h2 className="mt-6 max-w-[18ch] text-[clamp(2.3rem,4.8vw,4.2rem)] font-semibold leading-[1.07] tracking-[-0.025em] text-ink">
              {whyIntro.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 lg:pb-2">
            <p className="max-w-[30rem] text-[1rem] leading-[1.8] text-ink/55">{whyIntro.body}</p>
          </Reveal>
        </div>

        <div className="mt-12 border-b border-line">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} y={16}>
              <div className="group grid gap-3 border-t border-line py-6 transition-colors hover:bg-paper/70 sm:grid-cols-12 sm:gap-6 sm:px-2">
                <span className="font-sans text-[0.72rem] font-medium text-royal/60 sm:col-span-1">
                  0{index + 1}
                </span>
                <h3 className="text-[1.08rem] font-semibold leading-snug tracking-[-0.015em] text-ink sm:col-span-4">
                  {item.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.75] text-ink/60 sm:col-span-7">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
