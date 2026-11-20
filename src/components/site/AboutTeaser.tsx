import Link from "next/link";
import { ArrowUpRight, PinIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/site";

const facts = [
  { value: "1988", label: "Established" },
  { value: "One", label: "Plant at Vijeta Accumulators and New Technologies" },
  { value: "100%", label: "Units load-tested" },
];

export function AboutTeaser() {
  return (
    <section id="about" className="section-y bg-paper">
      <div className="container-x">
        <Reveal>
          <SectionLabel index="01" text="The factory" />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="max-w-[14ch] text-[clamp(2.5rem,5vw,4.5rem)]">
                Thirty-eight years.
                <br />
                One <em className="heading-gloss accent-serif font-normal text-royal">standard.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-8 border-l-2 border-royal pl-5">
              <p className="max-w-[24ch] font-serif text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.16] text-ink">
                “A battery is judged on the morning it must start.”
              </p>
              <p className="mt-3 font-sans font-medium text-[0.75rem] text-ink/40">
                The rule on our floor
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.06}>
              <p className="prose-lede max-w-[34rem]">
                VIJETA began in 1988 with a straightforward brief: make a battery that
                survives India. One that sits under a bonnet in 45°C heat, cranks a cold
                tractor at dawn, and still holds its charge two summers later. We cast
                grids, mix paste, assemble cells and load-test every unit ourselves —
                close to the quality, few to the excuses.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-8 grid grid-cols-3 border-y border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="border-r border-line py-5 last:border-r-0 [&:not(:first-child)]:pl-4">
                  <p className="font-display text-[1.5rem] font-bold tracking-tight text-ink">
                    {fact.value}
                  </p>
                  <p className="mt-1 font-sans font-medium text-[0.72rem] text-ink/40">
                    {fact.label}
                  </p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.16} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/about" className="btn btn-primary">
                Inside the factory
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <span className="inline-flex items-center gap-2 font-sans font-medium text-[0.72rem] text-ink/40">
                <PinIcon className="h-3.5 w-3.5 text-royal" />
                Vijeta Accumulators and New Technologies · Dhar · M.P.
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
