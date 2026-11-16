import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaticBattery } from "./StaticBattery";

const series = [
  {
    index: "01",
    badge: "Premium",
    name: "Gold Series",
    warranty: "36",
    variant: "gold" as const,
    copy:
      "For cars, SUVs and commercial vehicles that cannot afford a slow morning. A denser grid and higher cranking reserve, built for heavier loads and longer service.",
    specs: [
      { k: "Cranking", v: "High reserve" },
      { k: "Service life", v: "Extended" },
      { k: "Maintenance", v: "Low" },
      { k: "Cover", v: "36 months" },
    ],
    dark: false,
  },
  {
    index: "02",
    badge: "Everyday",
    name: "Silver Series",
    warranty: "24",
    variant: "silver" as const,
    copy:
      "The dependable daily driver. Stable starting power for regular automotive use, with low maintenance and honest value right across its service life.",
    specs: [
      { k: "Cranking", v: "Dependable" },
      { k: "Service life", v: "Everyday" },
      { k: "Maintenance", v: "Low" },
      { k: "Cover", v: "24 months" },
    ],
    dark: true,
  },
];

export function Series({ index = "02" }: { index?: string }) {
  return (
    <section id="series" className="section-y border-y border-line bg-white">
      <div className="container-x">
        <Reveal>
          <SectionLabel index={index} text="The series" />
        </Reveal>

        <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <h2 className="max-w-[16ch] text-[clamp(2.7rem,5.4vw,4.7rem)]">
              Two series.
              <br />
              One <em className="accent-serif font-normal text-royal">standard.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[26rem] lg:text-right">
            <p className="prose-lede">
              Gold for the long haul. Silver for the daily drive. Both built on the same
              line, tested the same way, and covered through authorised dealers.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {series.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1} amount={0.12}>
              <article
                className={`group relative flex h-full min-h-[34rem] flex-col overflow-hidden border p-6 transition-colors sm:p-8 ${
                  item.dark
                    ? "border-ink bg-ink text-white hover:border-royal"
                    : "border-line bg-paper text-ink hover:border-royal/50"
                }`}
              >
                {item.dark ? (
                  <div aria-hidden="true" className="blueprint-dark absolute inset-0 opacity-50" />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(22,56,198,0.09),transparent_58%)]"
                  />
                )}

                <div className="relative flex items-start justify-between gap-6">
                  <div>
                    <span
                      className={`inline-flex items-center border px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.18em] ${
                        item.dark
                          ? "border-white/25 text-white/70"
                          : "border-ink/15 text-ink/55"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <h3 className="mt-4 font-display text-[1.6rem] font-bold tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p
                      className={`display text-[clamp(3.6rem,6vw,5.4rem)] leading-[0.8] ${
                        item.dark ? "text-white" : "text-royal"
                      }`}
                    >
                      {item.warranty}
                    </p>
                    <p
                      className={`mt-2 font-mono text-[0.56rem] uppercase tracking-[0.18em] ${
                        item.dark ? "text-white/45" : "text-ink/45"
                      }`}
                    >
                      Months
                      <br />
                      warranty
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-1 items-center justify-center py-2">
                  <StaticBattery
                    variant={item.variant}
                    className="h-[15.5rem] w-auto drop-shadow-[0_26px_35px_rgba(7,11,24,0.18)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:rotate-[-2deg] sm:h-[17rem]"
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-3 left-1/2 h-px w-40 -translate-x-1/2 ${
                      item.dark ? "bg-white/10" : "bg-ink/10"
                    }`}
                  />
                </div>

                <div className="relative mt-auto">
                  <p
                    className={`max-w-[38ch] text-[0.92rem] leading-relaxed ${
                      item.dark ? "text-white/62" : "text-ink/62"
                    }`}
                  >
                    {item.copy}
                  </p>

                  <dl
                    className={`mt-6 grid grid-cols-2 border-t ${
                      item.dark ? "border-white/12" : "border-line"
                    }`}
                  >
                    {item.specs.map((spec) => (
                      <div
                        key={spec.k}
                        className={`border-b py-2.5 ${
                          item.dark ? "border-white/12" : "border-line"
                        }`}
                      >
                        <dt
                          className={`font-mono text-[0.55rem] uppercase tracking-[0.16em] ${
                            item.dark ? "text-white/35" : "text-ink/35"
                          }`}
                        >
                          {spec.k}
                        </dt>
                        <dd className="mt-1 text-[0.82rem] font-medium">{spec.v}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    href="/contact"
                    className={`btn mt-6 w-full ${item.dark ? "btn-light" : "btn-primary"}`}
                  >
                    Enquire about {item.name.replace(" Series", "")}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink/40">
            Not sure which one? Send us the vehicle details.
          </p>
          <Link href="/contact" className="link-arrow">
            Ask our team
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
