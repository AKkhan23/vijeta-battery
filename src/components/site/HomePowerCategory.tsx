import Image from "next/image";
import Link from "next/link";
import { PageCta } from "@/components/site/PageCta";
import { PowerVisual } from "@/components/site/PowerVisual";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import {
  getGroupHref,
  getSeriesHref,
  homePowerGroups,
  type HomePowerGroup,
} from "@/lib/homePower";

const chooser: Record<string, { title: string; copy: string }[]> = {
  "home-inverters": [
    { title: "Start with the load", copy: "Add the wattage of everything that must stay on, then leave headroom for starting surges." },
    { title: "Choose the waveform", copy: "Pure sine wave for electronics and sensitive loads. Square wave for fans, lights and basic appliances." },
    { title: "Match the battery", copy: "Inverter VA and battery Ah have to work together. Ask us to size the pair for your outage hours." },
  ],
  "inverter-batteries": [
    { title: "Count your outage hours", copy: "Longer cuts need more Ah — and a charger that can refill the pack before the next one." },
    { title: "Decide on maintenance", copy: "Tubular batteries need periodic water checks. Lithium packs need none at all." },
    { title: "Check the warranty term", copy: "Ask for the written warranty period for the exact capacity you are buying." },
  ],
  "lithtec-combo": [
    { title: "Match UPS to battery", copy: "Use the pairing chart on this page to align voltage, capacity and UPS model." },
    { title: "One matched system", copy: "Lithium-tuned charging and a smart BMS mean faster recharge and fewer compromises." },
    { title: "Plan for today and later", copy: "Start with a 12.8 V apartment setup or scale to a 51.2 V whole-home installation." },
  ],
};

export function HomePowerCategory({ group }: { group: HomePowerGroup }) {
  const siblings = homePowerGroups.filter((item) => item.slug !== group.slug);

  return (
    <main id="main" className="pt-[76px]">
      <section className="section-y bg-white">
        <div className="container-x">
          <Reveal>
            <nav aria-label="Breadcrumb" className="font-sans text-[0.78rem] text-ink/45">
              <Link href="/" className="hover:text-royal">Home</Link>
              <span className="px-2">/</span>
              <Link href="/products" className="hover:text-royal">Products</Link>
              <span className="px-2">/</span>
              <span className="text-ink/70">{group.name}</span>
            </nav>
          </Reveal>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <Reveal>
              <p className="font-sans text-[0.78rem] font-medium text-royal">{group.eyebrow}</p>
              <h1 className="mt-5 text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[0.98]">
                {group.name.split(" ").slice(0, -1).join(" ")}{" "}
                <em className="heading-gloss accent-serif font-normal text-royal">
                  {group.name.split(" ").slice(-1)[0]}.
                </em>
              </h1>
              <p className="prose-lede mt-7 max-w-[34rem]">{group.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#series" className="btn btn-primary">
                  Explore the range
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Ask for sizing help
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div
                className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-royal/12 bg-gradient-to-b from-white via-[#f4f7ff] to-[#e3e9f9] ${
                  group.image ? "" : "blueprint p-6"
                }`}
              >
                {group.image ? (
                  <Image
                    src={group.image}
                    alt={`VIJETA ${group.name}`}
                    fill
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    priority
                    className="object-cover object-[50%_58%]"
                  />
                ) : (
                  <PowerVisual kind={group.kind} uid={`cat-${group.slug}`} className="h-full w-full max-w-[34rem]" title={`VIJETA ${group.name} illustration`} />
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-px border border-royal/12 bg-royal/10 sm:grid-cols-3">
              {group.stats.map((stat) => (
                <div key={stat.label} className="bg-white px-5 py-6 sm:px-7">
                  <p className="font-sans text-[0.72rem] font-medium text-ink/45">{stat.label}</p>
                  <p className="mt-2 text-[clamp(1.15rem,2vw,1.6rem)] font-semibold tracking-[-0.02em] text-ink">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="series" className="section-y bg-paper">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-sans text-[0.78rem] font-medium text-royal">The range</p>
              <h2 className="mt-3 max-w-[24ch] text-[clamp(2rem,4vw,3.2rem)] leading-[1.05]">
                {group.series.length} ways to keep the lights on.
              </h2>
            </div>
            <Link href="/products" className="link-arrow">
              All VIJETA products
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.series.map((series, index) => {
              const productImage = series.image;
              return (
              <Reveal key={series.slug} delay={index * 0.05} y={18} className="h-full">
                <Link
                  href={getSeriesHref(series)}
                  className="torch-card group flex h-full flex-col p-5"
                >
                  <div className="relative flex h-[13rem] items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#e8eefc]">
                    {productImage ? (
                      <Image
                        src={productImage}
                        alt={`VIJETA ${series.name}`}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
                        className="object-cover object-[50%_62%] transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <PowerVisual kind={series.kind} uid={`card-${series.slug}`} className="h-full w-full p-3" title={`${series.name} illustration`} />
                    )}
                  </div>
                  <p className="mt-5 font-sans text-[0.72rem] font-medium text-royal">{series.waveform}</p>
                  <h3 className="mt-2 text-[1.25rem] font-semibold tracking-[-0.02em] text-ink">{series.name}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-ink/60">{series.tagline}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-3 text-[0.78rem]">
                    <div>
                      <dt className="font-sans text-ink/40">Range</dt>
                      <dd className="mt-0.5 font-medium text-ink/80">{series.range}</dd>
                    </div>
                    <div>
                      <dt className="font-sans text-ink/40">Warranty</dt>
                      <dd className="mt-0.5 font-medium text-ink/80">{series.warranty}</dd>
                    </div>
                  </dl>
                  <span className="mt-auto flex items-center justify-between gap-3 border-t border-royal/12 pt-5 font-sans text-[0.78rem] font-medium text-royal">
                    View series
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-sans text-[0.78rem] font-medium text-royal">How to choose</p>
            <h2 className="mt-3 max-w-[20ch] text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.06]">
              Three decisions, made simple.
            </h2>
            <p className="prose-lede mt-5 max-w-[30rem]">{group.selectionNote}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex flex-col">
              {(chooser[group.slug] ?? []).map((item, index) => (
                <div key={item.title} className="flex gap-5 border-b border-line py-5 first:pt-0 last:border-0">
                  <span className="font-sans text-[0.78rem] font-medium text-royal">0{index + 1}</span>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink/60">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="container-x mt-12">
          <div className="overflow-x-auto border border-royal/12 bg-white">
            <table className="w-full min-w-[46rem] border-collapse text-left text-[0.82rem]">
              <thead>
                <tr className="bg-royal text-white">
                  <th className="whitespace-nowrap px-4 py-3 font-sans font-medium">Series</th>
                  <th className="whitespace-nowrap px-4 py-3 font-sans font-medium">Range</th>
                  <th className="whitespace-nowrap px-4 py-3 font-sans font-medium">Warranty</th>
                  <th className="whitespace-nowrap px-4 py-3 font-sans font-medium">Output</th>
                  <th className="whitespace-nowrap px-4 py-3 font-sans font-medium">Good for</th>
                </tr>
              </thead>
              <tbody>
                {group.series.map((series, index) => (
                  <tr key={series.slug} className={index % 2 ? "bg-[#f7f9ff]" : "bg-white"}>
                    <td className="whitespace-nowrap px-4 py-3 font-semibold text-ink">
                      <Link href={getSeriesHref(series)} className="hover:text-royal">{series.name}</Link>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-ink/65">{series.range}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-ink/65">{series.warranty}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-ink/65">{series.waveform}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-ink/65">{series.applications[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="section-y bg-paper-deep/50">
        <div className="container-x">
          <p className="eyebrow text-royal">Keep exploring</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {siblings.map((item) => (
              <Link
                key={item.slug}
                href={getGroupHref(item)}
                className="group flex items-center justify-between gap-4 border border-royal/12 bg-white px-5 py-4 transition-colors hover:border-royal/40"
              >
                <span className="text-[1.05rem] font-semibold text-ink">{item.name}</span>
                <ArrowUpRight className="h-4 w-4 text-royal transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={
          <>
            Not sure which one
            <br />
            <em className="heading-gloss accent-serif font-normal text-royal">fits your home?</em>
          </>
        }
        copy="Send us your appliances, outage hours and pin code. We will recommend the right series and point you to the nearest VIJETA dealer."
        primary={{ label: "Ask an expert", href: "/contact" }}
        secondary={{ label: "See the warranty", href: "/warranty" }}
      />
    </main>
  );
}
