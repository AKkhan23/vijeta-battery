"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { milestones, timelineIntro } from "@/lib/heritage";
import type { Milestone } from "@/lib/heritage";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<Milestone["icon"], ReactNode> = {
  spark: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 3c2.4 2.8 3.8 4.8 3.8 6.8A3.8 3.8 0 0 1 12 13.6a3.8 3.8 0 0 1-3.8-3.8C8.2 7.8 9.6 5.8 12 3Z"
        {...stroke}
      />
      <path d="M12 13.6V21" {...stroke} />
    </svg>
  ),
  store: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M4 10v10h16V10" {...stroke} />
      <path d="M3 6.5 5 3h14l2 3.5a2.5 2.5 0 0 1-4.7 1.2 2.5 2.5 0 0 1-4.6 0 2.5 2.5 0 0 1-4.7-1.2Z" {...stroke} />
      <path d="M9.5 20v-5.5h5V20" {...stroke} />
    </svg>
  ),
  battery: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <rect x="3" y="7" width="15" height="10" rx="2" {...stroke} />
      <path d="M21 10.5v3" {...stroke} />
      <path d="M7.6 12h4.8M10 9.6v4.8" {...stroke} />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M9.5 3h5M10.5 3v6L5.4 18a2.2 2.2 0 0 0 1.9 3h9.4a2.2 2.2 0 0 0 1.9-3L13.5 9V3" {...stroke} />
      <path d="M7.6 15.5h8.8" {...stroke} />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <rect x="4" y="4" width="16" height="16" rx="2" {...stroke} />
      <path d="M4 9.3h16M4 14.7h16M9.3 4v16M14.7 4v16" {...stroke} />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M12 3 5 6v5.4c0 4 2.9 7.4 7 8.6 4.1-1.2 7-4.6 7-8.6V6l-7-3Z" {...stroke} />
      <path d="m9.1 11.9 2.1 2.1 3.9-4" {...stroke} />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="m12 3 8 4.4-8 4.4-8-4.4L12 3Z" {...stroke} />
      <path d="m4 12 8 4.4 8-4.4M4 16.4 12 20.8l8-4.4" {...stroke} />
    </svg>
  ),
  medal: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="12" cy="14.5" r="5.5" {...stroke} />
      <path d="m9 9.6-2.6-6M15 9.6l2.6-6M12 12.4l.8 1.7 1.9.2-1.4 1.3.4 1.8-1.7-.9-1.7.9.4-1.8-1.4-1.3 1.9-.2.8-1.7Z" {...stroke} />
    </svg>
  ),
  file: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M13 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V9l-6-6Z" {...stroke} />
      <path d="M13 3v6h6M8.5 13h7M8.5 16.5h5" {...stroke} />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M3 21h18M4 21V10l5 3v-3l5 3V7l6 4v10" {...stroke} />
      <path d="M8 21v-3M12 21v-3M16 21v-3" {...stroke} />
    </svg>
  ),
};

export function JourneySlider() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const reduce = useReducedMotion();

  const update = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    const ratio = max > 0 ? Math.min(1, Math.max(0, rail.scrollLeft / max)) : 0;
    setProgress(ratio);
    setAtStart(rail.scrollLeft <= 2);
    setAtEnd(rail.scrollLeft >= max - 2);

    const pages = max > 0 ? Math.max(1, Math.ceil(max / rail.clientWidth) + 1) : 1;
    setPageCount(pages);
    setPage(pages > 1 ? Math.round(ratio * (pages - 1)) : 0);

    const columns = rail.querySelectorAll<HTMLElement>("[data-milestone]");
    if (!columns.length) return;
    const step = columns[0].getBoundingClientRect().width || 1;
    const railLeft = rail.getBoundingClientRect().left;
    let index = 0;
    columns.forEach((column, position) => {
      if (column.getBoundingClientRect().left - railLeft < step * 0.5) index = position;
    });
    setActive(index);
  }, []);

  useEffect(() => {
    update();
    const rail = railRef.current;
    if (!rail) return;
    const observer = new ResizeObserver(update);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [update]);

  function goTo(index: number) {
    const rail = railRef.current;
    if (!rail) return;
    const column = rail.querySelectorAll<HTMLElement>("[data-milestone]")[index];
    if (!column) return;
    rail.scrollTo({
      left: index * column.getBoundingClientRect().width,
      behavior: reduce ? "auto" : "smooth",
    });
  }

  function goToPage(index: number) {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    const left = pageCount > 1 ? (index / (pageCount - 1)) * max : 0;
    rail.scrollTo({ left, behavior: reduce ? "auto" : "smooth" });
  }

  function move(direction: number) {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    rail.scrollTo({
      left: Math.max(0, Math.min(max, rail.scrollLeft + direction * rail.clientWidth)),
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-paper"
      style={{ scrollMarginTop: "5.5rem" }}
    >
      <div className="container-x section-y">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionLabel text={timelineIntro.eyebrow} />
            <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,3.8vw,3.15rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              {timelineIntro.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 lg:pb-1">
            <p className="max-w-[30rem] text-[0.94rem] leading-[1.75] text-ink/55">{timelineIntro.body}</p>
          </Reveal>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
          <div className="no-scrollbar -mx-1 flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-line bg-white/70 p-1 px-1.5">
            {milestones.map((milestone, index) => (
              <button
                key={milestone.year}
                type="button"
                onClick={() => goTo(index)}
                className="shrink-0 rounded-full px-2.5 py-1.5 font-sans text-[0.72rem] font-medium text-ink/45 transition-colors duration-200 hover:bg-paper hover:text-royal"
              >
                {milestone.year}
              </button>
            ))}
          </div>
          <p className="hidden font-sans text-[0.72rem] text-ink/35 sm:block">
            Swipe, scroll or use the arrows
          </p>
        </div>

        <div className="relative mt-2">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={atStart}
            aria-label="Previous milestone"
            className="absolute left-0 top-1/2 z-10 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-[0_10px_30px_-18px_rgba(8,11,20,0.55)] transition-colors hover:border-royal hover:bg-royal hover:text-white disabled:pointer-events-none disabled:opacity-30 md:flex"
          >
            <Chevron className="h-4 w-4 rotate-180" />
          </button>

          <button
            type="button"
            onClick={() => move(1)}
            disabled={atEnd}
            aria-label="Next milestone"
            className="absolute right-0 top-1/2 z-10 hidden h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-[0_10px_30px_-18px_rgba(8,11,20,0.55)] transition-colors hover:border-royal hover:bg-royal hover:text-white disabled:pointer-events-none disabled:opacity-30 md:flex"
          >
            <Chevron className="h-4 w-4" />
          </button>

          <div
            ref={railRef}
            onScroll={update}
            tabIndex={0}
            aria-label="VIJETA milestones, 1988 to 2026"
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto pt-6 pb-2 outline-none focus-visible:ring-2 focus-visible:ring-royal/40 md:pt-3"
          >
            {milestones.map((milestone, index) => {
              const top = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  data-milestone
                  className="grid w-[80vw] shrink-0 snap-start grid-rows-[1fr] sm:w-[17rem] md:h-[31.5rem] md:grid-rows-[1fr_3.5rem_1fr] lg:w-[18.5rem] lg:h-[32rem]"
                >
                  <article
                    className={`group relative mx-2.5 row-start-1 self-center overflow-hidden rounded-[1.75rem] border border-line bg-gradient-to-b from-white to-[#fbfbf7] p-[1.05rem] transition-all duration-300 hover:-translate-y-1 hover:border-royal/25 hover:shadow-[0_30px_60px_-45px_rgba(20,54,200,0.65)] sm:p-[1.15rem] ${
                      top ? "md:row-start-1 md:self-end" : "md:row-start-3 md:self-start"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-14 -right-12 h-36 w-36 rounded-full border border-royal/10"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full border border-royal/[0.06]"
                    />

                    <div className="relative flex items-start justify-between gap-3">
                      <div>
                        <p className="display text-[2.15rem] leading-[0.9] tracking-[-0.02em] text-royal">
                          {milestone.year}
                        </p>
                        <p className="mt-1.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
                          {milestone.label}
                        </p>
                      </div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[0.95rem] border border-royal/10 bg-royal/[0.04] text-royal/75 transition-colors duration-300 group-hover:border-royal/25 group-hover:bg-royal/[0.08] group-hover:text-royal">
                        {icons[milestone.icon]}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className="relative mt-3.5 block h-px w-9 bg-gradient-to-r from-royal/50 to-transparent"
                    />

                    <h3 className="relative mt-3 text-[0.94rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
                      {milestone.title}
                    </h3>
                    <p className="relative mt-1.5 text-[0.79rem] leading-[1.65] text-ink/55">
                      {milestone.body}
                    </p>
                  </article>

                  <div className="relative hidden items-center md:row-start-2 md:flex">
                    <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-ink/12" />
                    <span
                      aria-hidden="true"
                      className="absolute left-[24%] top-1/2 h-1.5 w-px -translate-y-1/2 bg-ink/15"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-[76%] top-1/2 h-1.5 w-px -translate-y-1/2 bg-ink/15"
                    />
                    <span
                      aria-hidden="true"
                      className={`absolute left-1/2 w-px -translate-x-1/2 bg-ink/20 ${
                        top ? "top-0 h-[calc(50%-0.3rem)]" : "bottom-0 h-[calc(50%-0.3rem)]"
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className={`absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 border-ink/30 ${
                        top
                          ? "top-1/2 -translate-y-[calc(100%+0.35rem)] border-b border-r"
                          : "top-1/2 translate-y-[0.35rem] border-l border-t"
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className={`relative mx-auto h-2.5 w-2.5 rounded-full ring-4 ring-paper transition-colors duration-300 ${
                        active === index ? "bg-royal" : "bg-ink/25"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 h-px w-full bg-ink/10">
            <div
              className="h-full origin-left bg-royal/70 transition-transform duration-150 ease-out"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>

          <div className="mt-4 hidden items-center justify-center gap-2 md:flex">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToPage(index)}
                aria-label={`Go to timeline page ${index + 1}`}
                aria-current={page === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  page === index ? "w-6 bg-royal" : "w-1.5 bg-ink/20 hover:bg-ink/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Chevron({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="m6 3.5 4.5 4.5L6 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
