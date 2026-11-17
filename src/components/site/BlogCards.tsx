import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { articles } from "@/lib/company";

export function BlogCards() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <Reveal className="flex justify-center">
          <SectionLabel index="05" text="From the journal" />
        </Reveal>
        <Reveal>
          <h2 className="mx-auto mt-7 max-w-[22ch] text-center text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
            Knowledge that keeps you moving.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.06} y={16} amount={0.12} className="h-full">
              <Link
                href={`/blog/${article.slug}`}
                className="blog-card group flex h-full flex-col overflow-hidden rounded-2xl border border-royal/12 bg-white"
              >
                <div className="relative h-[13rem] w-full overflow-hidden bg-paper">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="blog-card__image object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-sans text-[0.72rem] font-medium text-royal">{article.tag}</span>
                  <h3 className="mt-3 text-[1.22rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/55">{article.excerpt}</p>
                  <span className="mt-auto flex items-center gap-2 pt-6 font-sans text-[0.82rem] font-medium text-royal">
                    Read article
                    <ArrowUpRight className="blog-card__arrow h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
