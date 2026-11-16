import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { claimSteps, site, warrantyRows } from "@/lib/site";

export function Warranty({ index = "06" }: { index?: string }) {
  return (
    <section id="warranty" className="section-y bg-paper">
      <div className="container-x">
        <Reveal>
          <SectionLabel index={index} text="Warranty" />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="max-w-[14ch] text-[clamp(2.6rem,4.6vw,4rem)]">
                Cover that holds
                <br />
                at the <em className="accent-serif font-normal text-royal">counter.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="prose-lede mt-6 max-w-[27rem]">
                Every VIJETA battery is covered through our authorised dealer network.
                Gold runs 36 months, Silver 24. Keep your invoice and a claim stays
                simple — for you and for the dealer.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-8 border border-line bg-white p-5">
              <p className="eyebrow text-ink/40">Standard coverage</p>
              <p className="mt-3 text-[0.86rem] leading-relaxed text-ink/65">
                Warranty covers manufacturing defects. Wear, misuse, physical damage and
                unauthorised charging are not covered.
              </p>
              <a
                href={`tel:${site.phones[1].tel}`}
                className="link-arrow mt-4 text-[0.8rem]"
              >
                Questions? Call {site.phones[1].label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.06} amount={0.1}>
              <div className="overflow-hidden border border-line bg-white">
                <div className="grid grid-cols-[1.3fr_0.9fr_0.9fr] bg-paper-deep/60">
                  <div className="px-4 py-4 sm:px-6">
                    <span className="eyebrow text-ink/35">Compare</span>
                  </div>
                  <div className="relative border-l border-line px-4 py-4 sm:px-6">
                    <span className="absolute inset-x-0 top-0 h-[2px] bg-royal" />
                    <p className="font-display text-[0.95rem] font-bold tracking-tight">Gold</p>
                    <p className="mt-0.5 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-ink/40">
                      Premium
                    </p>
                  </div>
                  <div className="border-l border-line px-4 py-4 sm:px-6">
                    <p className="font-display text-[0.95rem] font-bold tracking-tight">Silver</p>
                    <p className="mt-0.5 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-ink/40">
                      Everyday
                    </p>
                  </div>
                </div>

                {warrantyRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1.3fr_0.9fr_0.9fr] border-t border-line"
                  >
                    <div className="px-4 py-3.5 sm:px-6">
                      <span className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ink/42">
                        {row.label}
                      </span>
                    </div>
                    <div className="border-l border-line bg-royal/[0.035] px-4 py-3.5 text-[0.82rem] font-medium sm:px-6">
                      {row.gold}
                    </div>
                    <div className="border-l border-line px-4 py-3.5 text-[0.82rem] text-ink/70 sm:px-6">
                      {row.silver}
                    </div>
                  </div>
                ))}

                <div className="border-t border-line bg-paper/70 px-4 py-3 sm:px-6">
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-ink/35">
                    Cover is honoured through authorised VIJETA dealers. Invoice required.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-10">
              <p className="eyebrow text-ink/40">If you need to claim</p>
              <div className="mt-4 grid gap-5 sm:grid-cols-3">
                {claimSteps.map((step, index) => (
                  <Reveal key={step.title} delay={0.06 * index} y={16}>
                    <div className="border-t border-line pt-4">
                      <span className="font-mono text-[0.62rem] text-royal">0{index + 1}</span>
                      <h3 className="mt-2 font-display text-[0.98rem] font-semibold leading-snug tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[0.78rem] leading-relaxed text-ink/55">
                        {step.copy}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
