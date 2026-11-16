import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

type Props = {
  eyebrow: string;
  index: string;
  title: ReactNode;
  intro: string;
  crumb: string;
  path: string;
  meta?: { label: string; value: string }[];
};

export function PageHeader({ eyebrow, index, title, intro, crumb, path, meta = [] }: Props) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: crumb, item: `${site.url}${path}` },
    ],
  };

  return (
    <section className="relative overflow-hidden border-b border-line bg-paper pt-[76px]">
      <div
        aria-hidden="true"
        className="blueprint pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_25%_10%,black_18%,transparent_72%)]"
      />
      <div className="container-x relative pb-14 pt-12 lg:pb-20 lg:pt-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/40">
          <Link href="/" className="transition-colors hover:text-royal">
            Home
          </Link>
          <span aria-hidden="true" className="text-ink/25">
            /
          </span>
          <span className="text-ink/65">{crumb}</span>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3.5">
              <span className="font-mono text-[0.6875rem] font-medium tracking-[0.16em] text-royal">{index}</span>
              <span aria-hidden="true" className="h-px w-7 bg-royal/40" />
              <span className="eyebrow text-ink/55">{eyebrow}</span>
            </div>
            <h1 className="mt-6 max-w-[14ch] text-[clamp(2.9rem,6.4vw,5.8rem)] leading-[0.92]">
              {title}
            </h1>
            <p className="prose-lede mt-7 max-w-[40rem]">{intro}</p>
          </div>

          {meta.length > 0 && (
            <div className="lg:col-span-4 lg:pt-14">
              <dl className="border-t border-line">
                {meta.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
                  >
                    <dt className="eyebrow text-ink/40">{item.label}</dt>
                    <dd className="text-right font-display text-[0.98rem] font-semibold tracking-tight text-ink">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </section>
  );
}
