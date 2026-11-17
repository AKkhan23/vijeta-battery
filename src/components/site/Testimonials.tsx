"use client";

import { useRef } from "react";
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
  const railRef = useRef<HTMLDivElement>(null);

  function move(direction: number) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-slide]");
    const step = card ? card.offsetWidth + 20 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  }

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
              actually <em className="heading-gloss accent-serif font-normal text-royal">matters.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-[25rem] lg:text-right">
            <p className="prose-lede">
              From fleet owners to workshop counters — the people who use a battery every
              day tell us whether it earned its place.
            </p>
            <div className="mt-5 flex gap-2 lg:justify-end">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous owner story"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-300 hover:border-royal hover:bg-royal hover:text-white"
              >
                <ArrowUpRight className="h-4 w-4 -rotate-[135deg]" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next owner story"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-300 hover:border-royal hover:bg-royal hover:text-white"
              >
                <ArrowUpRight className="h-4 w-4 rotate-45" />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          ref={railRef}
          role="region"
          aria-label="Owner stories"
          tabIndex={0}
          className="no-scrollbar mt-11 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-1"
        >
          {testimonials.map((item) => (
            <figure
              key={item.author}
              data-slide
              data-torch
              className="torch-card flex w-[88%] shrink-0 snap-start flex-col p-6 sm:w-[64%] sm:p-8 lg:w-[43%]"
            >
              <div className="flex items-start justify-between gap-4">
                <Stars />
                <span className="font-sans font-medium text-[0.7rem] text-royal">
                  {item.badge}
                </span>
              </div>

              <blockquote className="mt-6 flex-1 font-serif text-[clamp(1.22rem,1.7vw,1.5rem)] leading-[1.32] tracking-[-0.012em] text-ink">
                “{item.quote}”
              </blockquote>

              <figcaption className="mt-8 border-t border-royal/15 pt-4">
                <span className="block font-display text-[1rem] font-bold tracking-tight">
                  {item.author}
                </span>
                <span className="mt-1 block text-[0.8rem] text-ink/55">
                  {item.role} · {item.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <Reveal className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <p className="font-sans font-medium text-[0.75rem] text-ink/40">
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
