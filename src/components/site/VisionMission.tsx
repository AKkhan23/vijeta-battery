import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { visionMission } from "@/lib/site";

export function VisionMission() {
  return (
    <section className="relative overflow-hidden border-y border-ink bg-ink text-white">
      <div aria-hidden="true" className="blueprint-dark pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(47,92,255,0.24),transparent_65%)]"
      />

      <div className="container-x relative section-y">
        <Reveal>
          <SectionLabel index="02" text="Why we exist" light />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-volt">Vision</p>
              <p className="mt-5 max-w-[26ch] font-serif text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.12] tracking-[-0.02em] text-white">
                {visionMission.vision}
              </p>
            </Reveal>
            <Reveal delay={0.08} className="mt-10 border-t border-white/12 pt-8">
              <p className="eyebrow text-volt">Mission</p>
              <p className="mt-5 max-w-[32ch] font-display text-[clamp(1.35rem,2.1vw,1.85rem)] font-semibold leading-[1.18] tracking-tight text-white/85">
                {visionMission.mission}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.06}>
              <p className="eyebrow text-white/40">What we hold to</p>
              <div className="mt-5 border-t border-white/12">
                {visionMission.values.map((value, index) => (
                  <div key={value.title} className="border-b border-white/12 py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.62rem] text-volt">0{index + 1}</span>
                      <h3 className="font-display text-[1.1rem] font-semibold tracking-tight text-white">
                        {value.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-[34ch] pl-8 text-[0.88rem] leading-relaxed text-white/55">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-8 border border-white/15 p-5">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-white/35">
                In one line
              </p>
              <p className="mt-3 font-serif text-[1.35rem] italic leading-snug text-white/90">
                Make it right at the plant. Stand by it at the counter.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
