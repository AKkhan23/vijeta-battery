import Image from "next/image";
import Link from "next/link";
import { PageCta } from "@/components/site/PageCta";
import { PowerVisual } from "@/components/site/PowerVisual";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import {
  getGroupHref,
  getRelatedSeries,
  getSeriesHref,
  type HomePowerGroup,
  type HomePowerSeries,
} from "@/lib/homePower";

export function HomePowerSeriesDetail({
  series,
  group,
}: {
  series: HomePowerSeries;
  group: HomePowerGroup;
}) {
  const facts = [
    { label: "Range", value: series.range },
    { label: "Warranty", value: series.warranty },
    { label: "Output", value: series.waveform },
  ];
  const related = getRelatedSeries(series);
  const productImage = series.image;

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
              <Link href={getGroupHref(group)} className="hover:text-royal">{group.name}</Link>
              <span className="px-2">/</span>
              <span className="text-ink/70">{series.name}</span>
            </nav>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:gap-16">
            <Reveal>
              <div
                className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-royal/12 bg-gradient-to-b from-white via-[#f4f7ff] to-[#e3e9f9] ${
                  productImage ? "" : "blueprint p-6"
                }`}
              >
                {productImage ? (
                  <Image
                    src={productImage}
                    alt={`VIJETA ${series.name}`}
                    fill
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    priority
                    className="object-cover object-[50%_58%]"
                  />
                ) : (
                  <PowerVisual
                    kind={series.kind}
                    uid={`detail-${series.slug}`}
                    className="h-full w-full max-w-[34rem]"
                    title={`VIJETA ${series.name} illustration`}
                  />
                )}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="font-sans text-[0.78rem] font-medium text-royal">{group.name}</p>
              <h1 className="mt-4 text-[clamp(2.4rem,4.6vw,3.9rem)] leading-[1.02]">
                {series.name.split(" ").slice(0, -1).join(" ")}{" "}
                <em className="heading-gloss accent-serif font-normal text-royal">
                  {series.name.split(" ").slice(-1)[0]}.
                </em>
              </h1>
              <p className="prose-lede mt-6">{series.intro}</p>

              <div className="mt-8 grid gap-px border border-royal/12 bg-royal/10 sm:grid-cols-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="bg-white px-4 py-5">
                    <p className="font-sans text-[0.7rem] font-medium text-ink/40">{fact.label}</p>
                    <p className="mt-1.5 text-[0.92rem] font-semibold leading-snug text-ink">{fact.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Enquire about this series
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href={getGroupHref(group)} className="btn btn-ghost">
                  All {group.name}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {series.note && (
            <Reveal delay={0.12}>
              <p className="mt-10 max-w-[52rem] border-l-2 border-gold bg-[#faf7ef] px-5 py-4 text-[0.86rem] leading-relaxed text-ink/65">
                {series.note}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-sans text-[0.78rem] font-medium text-royal">About the series</p>
            <h2 className="mt-3 max-w-[22ch] text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.06]">
              Built for the way Indian homes use power.
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {series.description.map((paragraph) => (
                <p key={paragraph} className="text-[0.98rem] leading-[1.85] text-ink/65">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="font-sans text-[0.78rem] font-medium text-royal">What makes it different</p>
            <ul className="mt-5 flex flex-col">
              {series.features.map((feature, index) => (
                <li key={feature} className="flex gap-4 border-b border-line py-4 first:pt-0 last:border-0">
                  <span className="mt-0.5 font-sans text-[0.72rem] font-medium text-royal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.92rem] leading-relaxed text-ink/70">{feature}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="container-x mt-12">
          <p className="font-sans text-[0.78rem] font-medium text-royal">Benefits built for you</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {series.benefits.map((benefit) => (
              <div
                key={benefit}
                className="border border-royal/12 bg-white px-5 py-5 text-[0.88rem] leading-relaxed text-ink/70"
              >
                {benefit}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="font-sans text-[0.78rem] font-medium text-royal">Where it works</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.08]">A perfect fit for</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex flex-wrap gap-2.5">
              {series.applications.map((item) => (
                <span
                  key={item}
                  className="border border-royal/15 bg-[#f7f9ff] px-4 py-2 font-sans text-[0.82rem] font-medium text-royal"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {series.table && (
          <Reveal className="container-x mt-12">
            <p className="font-sans text-[0.78rem] font-medium text-royal">Pairing guide</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.08]">
              Home UPS &amp; lithium battery combo chart
            </h2>
            <div className="mt-7 overflow-x-auto border border-royal/12 bg-white">
              <table className="w-full min-w-[52rem] border-collapse text-left text-[0.82rem]">
                <thead>
                  <tr className="bg-royal text-white">
                    {series.table.headers.map((header) => (
                      <th key={header} className="whitespace-nowrap px-4 py-3 font-sans font-medium">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {series.table.rows.map((row, index) => (
                    <tr key={row[0]} className={index % 2 ? "bg-[#f7f9ff]" : "bg-white"}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`whitespace-nowrap px-4 py-3 ${
                            cellIndex === 0
                              ? "font-semibold text-ink"
                              : cell === "—"
                                ? "text-ink/30"
                                : "text-ink/65"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[0.76rem] text-ink/45">
              Pairing is indicative. Confirm the final combination with your VIJETA dealer.
            </p>
          </Reveal>
        )}
      </section>

      <section className="section-y bg-paper-deep/50">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-sans text-[0.78rem] font-medium text-royal">More from {group.name}</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.7rem)] leading-[1.06]">
                Compare the other series.
              </h2>
            </div>
            <Link href={getGroupHref(group)} className="link-arrow">
              View the full range
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05} y={16} className="h-full">
                <Link
                  href={getSeriesHref(item)}
                  className="group flex h-full items-center justify-between gap-4 border border-royal/12 bg-white px-5 py-5 transition-colors hover:border-royal/40"
                >
                  <span>
                    <span className="block text-[1.05rem] font-semibold text-ink">{item.name}</span>
                    <span className="mt-1 block font-sans text-[0.76rem] text-ink/45">{item.range}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-royal transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={
          <>
            Ready to size your
            <br />
            <em className="heading-gloss accent-serif font-normal text-royal">home backup?</em>
          </>
        }
        copy={`Tell us your load and outage hours. We will confirm whether ${series.name} is the right fit and connect you with a VIJETA dealer.`}
        primary={{ label: "Enquire now", href: "/contact" }}
        secondary={{ label: "Compare the range", href: getGroupHref(group) }}
      />
    </main>
  );
}
