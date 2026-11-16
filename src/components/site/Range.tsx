import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { categories, site } from "@/lib/site";
import { CategoryIcon } from "./CategoryIcon";

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
              field or <em className="accent-serif font-normal text-royal">floor.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-[25rem] lg:text-right">
            <p className="prose-lede">
              Six working categories, one engineering brief. Tell us what the battery has
              to do and we will point you to the right one.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 3) * 0.06} y={18} amount={0.12}>
              <Link
                href="/contact"
                className="group relative flex h-full min-h-[15.5rem] flex-col overflow-hidden border border-line bg-white p-6 transition-colors duration-300 hover:border-royal sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-y-full bg-royal transition-transform duration-[520ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
                />
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-ink/45 transition-colors duration-300 group-hover:text-white/60">
                      {category.tag}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>

                  <CategoryIcon
                    name={category.icon}
                    className="mt-8 h-12 w-12 text-royal transition-colors duration-300 group-hover:text-white"
                  />

                  <h3 className="mt-5 font-display text-[1.45rem] font-bold tracking-tight transition-colors duration-300 group-hover:text-white">
                    {category.title}
                  </h3>
                  <p className="mt-2 max-w-[28ch] text-[0.85rem] leading-relaxed text-ink/58 transition-colors duration-300 group-hover:text-white/72">
                    {category.copy}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.78rem] font-semibold text-royal transition-colors duration-300 group-hover:text-white">
                    Enquire
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 flex flex-col justify-between gap-4 border-t border-line pt-5 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink/40">
            Also: chargers, terminals, cables and custom requirements.
          </p>
          <a
            href={`tel:${site.phonePrimary}`}
            className="link-arrow text-[0.8rem]"
          >
            Call the sales line — {site.phonePrimaryLabel}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
