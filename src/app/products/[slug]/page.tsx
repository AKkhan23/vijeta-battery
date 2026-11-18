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
                <Image src={product.image} alt={product.name} fill sizes="(max-width:1024px) 90vw, 50vw" className="object-contain p-8" priority />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="font-sans text-[0.78rem] font-medium text-royal">{product.category}</p>
              <h1 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
                {product.name}
              </h1>
              <p className="mt-6 text-[1.05rem] leading-[1.8] text-ink/65">{product.intro}</p>

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
