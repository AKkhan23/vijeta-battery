import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { categories, site } from "@/lib/site";
import { CategoryIcon } from "./CategoryIcon";

type Category = (typeof categories)[number];

function CategoryCard({ category, tabIndex }: { category: Category; tabIndex?: number }) {
  return (
    <Link
      href="/contact"
      data-torch
      tabIndex={tabIndex}
      className="torch-card group flex h-full min-h-[15.5rem] flex-col p-6 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="icon-tile">
          <CategoryIcon name={category.icon} className="h-7 w-7" />
        </span>
        <span className="pt-1 font-sans font-medium text-[0.72rem] text-ink/38">
          {category.tag}
        </span>
      </div>

      <h3 className="mt-7 font-display text-[1.6rem] font-bold tracking-[-0.025em] text-ink">
        {category.title}
      </h3>
      <p className="mt-2.5 max-w-[36ch] text-[0.875rem] leading-relaxed text-ink/58">
        {category.copy}
      </p>

      <span className="mt-6 flex items-center justify-between border-t border-royal/15 pt-4 font-sans font-medium text-[0.72rem] text-royal">
        Enquire
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

const columns: Category[][] = [
  [categories[0], categories[2], categories[4]],
  [categories[1], categories[3], categories[5]],
];

export function Range({ index = "03" }: { index?: string }) {
  return (
    <section id="range" className="section-y bg-paper">
      <div className="container-x">
        <Reveal>
          <SectionLabel index={index} text="Applications" />
        </Reveal>

        <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <h2 className="max-w-[17ch] text-[clamp(2.45rem,5.2vw,4.7rem)]">
              Wherever the road,
              <br />
              field or <em className="heading-gloss accent-serif font-normal text-royal">floor.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-[25rem] lg:text-right">
            <p className="prose-lede">
              Six working categories, one engineering brief. Tell us what the battery has
              to do and we will point you to the right one.
            </p>
          </Reveal>
        </div>

        {/* Desktop: two kinetic columns, opposite directions, pause on hover */}
        <div className="mt-14 hidden gap-5 lg:grid lg:grid-cols-2">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="kinetic-col"
              data-dir={columnIndex === 1 ? "down" : "up"}
            >
              <div className="kinetic-track">
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    aria-hidden={copy === 1 || undefined}
                    className="flex flex-col gap-5 pb-5"
                  >
                    {column.map((category) => (
                      <CategoryCard
                        key={`${copy}-${category.title}`}
                        category={category}
                        tabIndex={copy === 1 ? -1 : undefined}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Small screens: the same cards, static */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          {categories.map((category, cardIndex) => (
            <Reveal
              key={category.title}
              delay={(cardIndex % 2) * 0.05}
              y={16}
              amount={0.1}
              className="h-full"
            >
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-col justify-between gap-4 border-t border-line pt-5 sm:flex-row sm:items-center">
          <p className="font-sans font-medium text-[0.75rem] text-ink/40">
            Also: chargers, terminals, cables and custom requirements.
          </p>
          <a href={`tel:${site.phonePrimary}`} className="link-arrow text-[0.8rem]">
            Call the sales line — {site.phonePrimaryLabel}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
