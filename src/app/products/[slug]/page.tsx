import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HomePowerSeriesDetail } from "@/components/site/HomePowerSeriesDetail";
import { Reveal } from "@/components/ui/Reveal";
import { industrialProducts } from "@/lib/industrialProducts";
import { getGroupForSeries, getHomePowerSeries, homePowerSeries } from "@/lib/homePower";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...industrialProducts.map((product) => ({ slug: product.slug })),
    ...homePowerSeries.map((series) => ({ slug: series.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const series = getHomePowerSeries(slug);
  if (series) {
    const group = getGroupForSeries(slug);
    return {
      title: `${series.name} · ${group?.name ?? "Home Power"}`,
      description: series.intro,
      alternates: { canonical: `/products/${slug}` },
    };
  }

  const product = industrialProducts.find((item) => item.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.intro, alternates: { canonical: `/products/${slug}` } };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  const series = getHomePowerSeries(slug);
  if (series) {
    const group = getGroupForSeries(slug);
    if (!group) notFound();
    return <HomePowerSeriesDetail series={series} group={group} />;
  }

  const product = industrialProducts.find((item) => item.slug === slug);
  if (!product) notFound();

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
              <span className="text-ink/70">{product.name}</span>
            </nav>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <Reveal>
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-white to-[#e8eefc] p-8">
                <Image src={product.detailImage ?? product.image} alt={product.name} fill sizes="(max-width:1024px) 90vw, 50vw" className="object-contain p-8" priority />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="font-sans text-[0.78rem] font-medium text-royal">{product.category}</p>
              <h1 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
                {product.name}
              </h1>
              {product.badge && (
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 font-sans text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink">
                  ★ {product.badge}
                </span>
              )}
              <p className="mt-6 text-[1.05rem] leading-[1.8] text-ink/65">{product.intro}</p>

              {product.featured && (
                <div className="mt-6 rounded-2xl border border-gold/30 bg-[#fbf7ee] p-5">
                  <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#7a5c1f]">
                    Why this one leads
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">
                    Transparent SAN containers let operators see electrolyte level, plate condition and separators without opening the cell. Tubular plates cast on high-pressure HADI machines, low self-discharge and rapid recharge make it a dependable choice for standby float and cyclic duty — from 100 Ah to 1000 Ah.
                  </p>
                </div>
              )}

              {product.note && (
                <div className="mt-7 rounded-xl border border-royal/15 bg-[#eef3ff] p-5 text-[0.92rem] leading-relaxed text-ink/70">
                  {product.note}
                </div>
              )}

              {product.details?.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-[0.98rem] leading-[1.85] text-ink/60">{paragraph}</p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {product.compare && (
        <section className="border-t border-line bg-white section-y">
          <div className="container-x">
            <Reveal>
              <p className="font-sans text-[0.78rem] font-medium text-royal">Choosing the right cell</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.02em] text-ink">
                {product.compare.title}
              </h2>
              <p className="mt-3 max-w-[54rem] text-[0.95rem] leading-relaxed text-ink/60">
                Both cells share the same 2 V transparent SAN tubular platform. The difference is the
                rated capacity at the 10-hour rate — SAN 200 delivers twice the capacity of SAN 100
                for longer backup or a heavier cyclic load.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-royal/12 bg-white">
                <table className="w-full min-w-[34rem] border-collapse text-left text-[0.85rem]">
                  <thead>
                    <tr className="bg-[#eef3ff]">
                      <th className="whitespace-nowrap px-5 py-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-ink/50">
                        Specification
                      </th>
                      {product.compare.columns.map((column) => (
                        <th key={column} className="whitespace-nowrap px-5 py-4 font-sans text-[0.92rem] font-semibold text-royal">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.compare.rows.map(([label, first, second]) => (
                      <tr key={label} className="border-t border-line">
                        <th className="whitespace-nowrap px-5 py-3.5 font-sans text-[0.8rem] font-medium text-ink/55">
                          {label}
                        </th>
                        <td className="whitespace-nowrap px-5 py-3.5 text-ink/70">{first}</td>
                        <td className="whitespace-nowrap px-5 py-3.5 font-semibold text-ink">{second}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {(product.atAGlance || product.materials || product.quality) && (
        <section className="section-y bg-paper">
          <div className="container-x">
            {product.atAGlance && (
              <Reveal>
                <p className="font-sans text-[0.78rem] font-medium text-royal">At a glance</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {product.atAGlance.map((item) => (
                    <div key={item.label} className="rounded-xl border border-royal/12 bg-white p-4">
                      <span className="block font-sans text-[0.7rem] uppercase tracking-[0.1em] text-ink/45">{item.label}</span>
                      <span className="mt-1.5 block text-[1rem] font-semibold leading-snug text-ink">{item.value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {product.materials && (
              <Reveal className="mt-12">
                <p className="font-sans text-[0.78rem] font-medium text-royal">Inside the cell</p>
                <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.02em] text-ink">
                  What it is <em className="heading-gloss accent-serif font-normal text-royal">made of.</em>
                </h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {product.materials.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-royal/12 bg-white p-5">
                      <h3 className="font-sans text-[0.95rem] font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-[0.88rem] leading-relaxed text-ink/60">{item.copy}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {product.quality && (
              <Reveal className="mt-12">
                <p className="font-sans text-[0.78rem] font-medium text-royal">Quality &amp; standards</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {product.quality.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-royal/12 bg-white p-4 text-[0.9rem] leading-relaxed text-ink/65">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-royal" />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-sans text-[0.78rem] font-medium text-royal">Applications</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {product.applications.map((item) => (
                <span key={item} className="rounded-full border border-royal/15 bg-white px-3 py-1.5 font-sans text-[0.78rem] font-medium text-royal">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-sans text-[0.78rem] font-medium text-royal">Key features</p>
            <ul className="mt-5 flex flex-col gap-3">
              {product.features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.9rem] leading-relaxed text-ink/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-royal" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {product.userBenefits && (
          <Reveal className="container-x mt-12">
            <p className="font-sans text-[0.78rem] font-medium text-royal">User benefits</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {product.userBenefits.map((item) => (
                <div key={item} className="rounded-xl border border-royal/12 bg-white p-4 text-[0.86rem] leading-relaxed text-ink/65">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </section>

      {product.table && (
        <section className="section-y bg-white">
          <div className="container-x">
            <Reveal>
              <p className="font-sans text-[0.78rem] font-medium text-royal">Technical data sheet</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,3rem)] font-semibold tracking-[-0.02em] text-ink">
                Specifications
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-royal/12 bg-white">
                <table className="w-full min-w-[75rem] border-collapse text-left text-[0.8rem]">
                  <thead>
                    <tr className="bg-royal text-white">
                      {product.table.headers.map((header) => (
                        <th key={header} className="whitespace-nowrap px-4 py-3 font-sans font-medium">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.table.rows.map((row, index) => (
                      <tr key={row[0]} className={index % 2 ? "bg-[#f7f9ff]" : "bg-white"}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className={`whitespace-nowrap px-4 py-3 ${cellIndex === 0 ? "font-semibold text-ink" : "text-ink/65"}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-white pb-16">
        <div className="container-x text-center">
          <Link href="/products" className="link-arrow">← Back to all products</Link>
        </div>
      </section>
    </main>
  );
}
