import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CellDiagram } from "./CellDiagram";

const points = [
  { title: "Cranking power", note: "Wide plate surface. First turn, no hesitation." },
  { title: "Service life", note: "Lead-calcium alloy resists heat and corrosion." },
  { title: "Tested unit by unit", note: "Formation-charged and load-tested in Pithampur." },
];

export function TechnologyTeaser() {
  return (
    <section className="relative overflow-hidden border-y border-ink bg-ink text-white">
      <div aria-hidden="true" className="blueprint-dark pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(47,92,255,0.28),transparent_65%)]"
      />

      <div className="container-x relative section-y">
        <Reveal>
          <SectionLabel index="04" text="Inside the cell" light />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="max-w-[12ch] text-[clamp(2.6rem,5vw,4.4rem)] text-white">
                Good starts
                <br />
                aren’t <em className="accent-serif font-normal text-volt">luck.</em>
              </h2>
              <p className="mt-6 max-w-[28rem] text-[0.95rem] leading-relaxed text-white/60">
                Four things decide whether a battery cranks on the morning you need it.
                We build for all four — then test every unit before it leaves.
              </p>
            </Reveal>

            <div className="mt-10 border-t border-white/12">
              {points.map((point, index) => (
                <Reveal key={point.title} delay={0.05 * index} y={14}>
                  <div className="flex gap-5 border-b border-white/12 py-4">
                    <span className="font-mono text-[0.62rem] text-volt">0{index + 1}</span>
                    <div>
                      <p className="font-display text-[1.02rem] font-semibold tracking-tight text-white">
                        {point.title}
                      </p>
                      <p className="mt-1 text-[0.84rem] text-white/50">{point.note}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12} className="mt-8">
              <Link href="/technology" className="btn btn-light">
                See how it works
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:col-span-6" amount={0.1}>
            <div className="relative mx-auto max-w-[440px] border border-white/12 bg-ink/60">
              <div aria-hidden="true" className="blueprint-dark pointer-events-none absolute inset-0 opacity-60" />
              <div className="relative flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-white/55">
                  Cell assembly / exploded view
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-white/40">
                  <span className="h-1 w-1 rounded-full bg-volt" />
                  Fig. 01
                </span>
              </div>
              <div className="relative px-3 py-2 sm:px-6">
                <CellDiagram highlight="all" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
