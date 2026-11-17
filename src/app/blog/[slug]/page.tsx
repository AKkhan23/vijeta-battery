import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageHeader } from "@/components/site/PageHeader";
import { articles } from "@/lib/company";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const more = articles.filter((item) => item.slug !== slug);

  return (
    <main id="main">
      <PageHeader
        eyebrow={article.tag}
        index="01"
        crumb={article.title}
        path={`/blog/${slug}`}
        title={<>{article.title}</>}
        intro={article.excerpt}
        meta={[{ label: "Reading", value: `${article.body.length} key points` }]}
      />

      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <article>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-paper">
              <Image src={article.image} alt={article.title} fill sizes="(max-width:1024px) 90vw, 65vw" className="object-cover" priority />
            </div>
            <div className="mt-10 flex flex-col gap-6">
              {article.body.map((paragraph, index) => (
                <p key={paragraph} className="text-[1.05rem] leading-[1.85] text-ink/65">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <p className="font-sans text-[0.75rem] font-medium text-royal">More from the journal</p>
              <div className="mt-5 flex flex-col gap-3">
                {more.map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="flex items-center justify-between gap-4 border-b border-line py-4 text-[0.95rem] font-medium text-ink transition-colors hover:text-royal">
                    {item.title}
                    <span aria-hidden="true" className="text-royal">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <EnquiryForm />
            <p className="mt-4 text-center text-[0.8rem] leading-relaxed text-ink/45">
              Need a recommendation? Send your vehicle details and our team will confirm the right series.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
