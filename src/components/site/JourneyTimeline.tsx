"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { journey } from "@/lib/company";

export function JourneyTimeline() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const reduce = useReducedMotion();

  function goTo(index: number) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelectorAll<HTMLElement>("[data-year-card]")[index];
    if (!card) return;
    rail.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    setActive(index);
  }

  function move(direction: number) {
    const next = Math.min(journey.length - 1, Math.max(0, active + direction));
    goTo(next);
  }

  function onScroll() {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-year-card]");
    if (!card) return;
    const index = Math.round(rail.scrollLeft / (card.offsetWidth + 20));
    setActive(Math.min(journey.length - 1, Math.max(0, index)));
  }

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      if (pausedRef.current) return;
      setActive((current) => {
        const next = current >= journey.length - 1 ? 0 : current + 1;
        const rail = railRef.current;
        const card = rail?.querySelectorAll<HTMLElement>("[data-year-card]")[next];
        if (rail && card) rail.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
        return next;
      });
    }, 2200);
    return () => window.clearInterval(timer);
  }, [reduce]);

  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <p className="text-center font-sans text-[0.78rem] font-medium text-royal">Our journey</p>
        <h2 className="mx-auto mt-3 max-w-[24ch] text-center text-[clamp(2.6rem,5.6vw,4.8rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
          Four decades of <em className="heading-gloss accent-serif font-normal text-royal">power.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[44rem] text-center text-[1.02rem] leading-[1.7] text-ink/55">
          From accumulators and torches to lead-acid batteries for every Indian road —
          see how the technology evolved, decade by decade.
        </p>

        <div className="mt-12 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous year"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-royal hover:bg-royal hover:text-white"
          >
            <span aria-hidden="true" className="rotate-180">→</span>
          </button>
          <div className="no-scrollbar flex flex-1 items-center gap-1.5 overflow-x-auto py-2">
            {journey.map((item, index) => (
              <button
                key={item.year}
                type="button"
                onClick={() => goTo(index)}
                className="story-year shrink-0 px-3 py-1.5 font-sans text-[0.72rem] font-medium text-ink/40"
              >
                {item.year.split(" — ")[0]}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next year"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-royal hover:bg-royal hover:text-white"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div
          className="relative mt-8"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          onFocus={() => { pausedRef.current = true; }}
          onBlur={() => { pausedRef.current = false; }}
        >
          <div aria-hidden="true" className="journey-wire pointer-events-none absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2">
            <span className="journey-wire__spark" />
          </div>
          <div ref={railRef} onScroll={onScroll} className="no-scrollbar relative flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pt-4">
            {journey.map((item, index) => {
              const above = index % 2 === 0;
              return (
                <motion.article
                  key={item.year}
                  data-year-card
                  initial={reduce ? false : { opacity: 0, y: above ? -18 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={`journey-slide relative flex w-[19rem] shrink-0 snap-center flex-col justify-end sm:w-[22rem] ${
                    above ? "pb-[3.5rem]" : "pt-[3.5rem]"
                  }`}
                >
                  <div className="journey-card flex h-[15rem] flex-col justify-between rounded-2xl border border-royal/12 bg-paper p-6">
                    <div>
                      <span className="font-display text-[2.6rem] font-semibold leading-none text-royal/15">{item.year}</span>
                    </div>
                    <div>
                      <h3 className="text-[1.2rem] font-semibold leading-tight tracking-[-0.015em] text-ink">{item.title}</h3>
                      <p className="mt-2 text-[0.84rem] leading-relaxed text-ink/55">{item.copy}</p>
                    </div>
                  </div>
                  <span aria-hidden="true" className={`absolute left-8 h-3 w-px bg-royal/40 ${above ? "bottom-[2rem]" : "top-[2rem]"}`} />
                  <span aria-hidden="true" className={`absolute left-[1.7rem] h-2 w-2 rounded-full border-2 border-white bg-royal shadow ${above ? "bottom-[1.45rem]" : "top-[1.45rem]"}`} />
                </motion.article>
              );
            })}
          </div>
        </div>

        <p className="mt-4 text-center font-sans text-[0.72rem] font-medium text-ink/35">
          Auto-playing · select an era or use the arrows · 1988 — 2026
        </p>
      </div>
    </section>
  );
}
