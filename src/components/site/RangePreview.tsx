import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { categories } from "@/lib/site";
import { CategoryIcon } from "./CategoryIcon";

export function RangePreview() {
  return (
    <section id="range" className="section-y bg-white">
      <div className="container-x">
        <Reveal>
          <SectionLabel index="03" text="Applications" />
        </Reveal>

        <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <h2 className="max-w-[17ch] text-[clamp(2.45rem,5vw,4.4rem)]">
              Wherever the road,
              <br />
              field or <em className="accent-serif font-normal text-royal">floor.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-[24rem] lg:text-right">
            <p className="prose-lede">
              Six working categories, one engineering brief. Tell us what the battery has
              to do and we will point you to the right one.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 3).map((category, index) => (
            <Reveal key={category.title} delay={index * 0.06} y={16} amount={0.12}>
              <article className="group h-full min-h-[15rem] border border-line bg-paper p-6 transition-colors hover:border-royal">
                <CategoryIcon name={category.icon} className="h-10 w-10 text-royal" />
                <p className="mt-7 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-ink/40">
                  {category.tag}
                </p>
                <h3 className="mt-2 font-display text-[1.3rem] font-bold tracking-tight">
                  {category.title}
                </h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-ink/55">{category.copy}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.18} y={16} amount={0.12}>
            <Link
              href="/products"
              className="group flex h-full min-h-[15rem] flex-col justify-between bg-royal p-6 text-white transition-colors hover:bg-royal-deep"
            >
              <span className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-white/60">
                All applications
              </span>
              <span className="display text-[2.6rem] leading-[0.9]">6</span>
              <span className="flex items-end justify-between gap-4">
                <span className="text-[0.95rem] font-semibold leading-snug">
                  Cars to commercial fleets
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
