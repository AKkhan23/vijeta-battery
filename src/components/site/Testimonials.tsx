import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/site";

function Stars() {
  return (
    <span className="inline-flex items-center gap-0.5 text-gold" aria-label="5 out of 5">
      {[0, 1, 2, 3, 4].map((n) => (
        <svg key={n} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
          <path d="m10 1.8 2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.6-5 2.6 1-5.6-4.1-4 5.6-.8L10 1.8Z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  const [lead, ...rest] = testimonials;

  return (
    <section className="section-y border-y border-line bg-white">
      <div className="container-x">
        <Reveal>
          <SectionLabel index="06" text="Owner stories" />
        </Reveal>

        <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <h2 className="max-w-[16ch] text-[clamp(2.6rem,5vw,4.4rem)]">
              Trusted where it
              <br />
              actually <em className="accent-serif font-normal text-royal">matters.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-[25rem] lg:text-right">
            <p className="prose-lede">
              From fleet owners to workshop counters — the people who use a battery every
              day tell us whether it earned its place.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" amount={0.12}>
            <figure className="relative flex h-full flex-col overflow-hidden border border-line bg-paper p-7 sm:p-10">
              <span
                aria-hidden="true"
                className="display pointer-events-none absolute -right-2 -top-10 text-[16rem] leading-none text-royal/[0.06]"
              >
                “
              </span>
              <Stars />
              <blockquote className="relative mt-7 max-w-[28ch] font-serif text-[clamp(1.6rem,2.7vw,2.3rem)] leading-[1.18] tracking-[-0.015em] text-ink">
                {lead.quote}
              </blockquote>
              <figcaption className="relative mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-line pt-6">
                <span>
                  <span className="block font-display text-[1.05rem] font-bold tracking-tight">
                    {lead.author}
                  </span>
                  <span className="mt-1 block text-[0.82rem] text-ink/55">
                    {lead.role} · {lead.location}
                  </span>
                </span>
                <span className="border border-royal/25 bg-royal/[0.05] px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-royal">
                  {lead.badge}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.map((item, index) => (
              <Reveal key={item.author} delay={0.06 + index * 0.06} y={16} amount={0.12}>
                <figure className="flex h-full flex-col border border-line bg-paper p-6">
                  <Stars />
                  <blockquote className="mt-4 text-[0.9rem] leading-relaxed text-ink/75">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-auto border-t border-line pt-4">
                    <span className="block font-display text-[0.95rem] font-semibold tracking-tight">
                      {item.author}
                    </span>
                    <span className="mt-0.5 block font-mono text-[0.56rem] uppercase tracking-[0.13em] text-ink/40">
                      {item.badge} · {item.location}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink/40">
            Looking for the nearest authorised dealer?
          </p>
          <Link href="/contact" className="link-arrow">
            Ask our team
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
