import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { values } from "@/lib/company";

export function ValuesSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <Reveal className="flex justify-center">
          <SectionLabel index="03" text="What we stand for" />
        </Reveal>
        <Reveal>
          <h2 className="mx-auto mt-8 max-w-[20ch] text-center text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
            The values behind every battery.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05} y={16} amount={0.12} className="h-full">
              <article className="value-card h-full rounded-2xl border border-royal/12 bg-paper p-6">
                <span className="font-display text-[2.4rem] font-semibold leading-none text-royal/15">0{index + 1}</span>
                <h3 className="mt-6 text-[1.15rem] font-semibold text-ink">{value.title}</h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/55">{value.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
