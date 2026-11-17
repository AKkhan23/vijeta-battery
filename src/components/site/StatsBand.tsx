"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stats } from "@/lib/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value > 1000 ? value : 0);

  useEffect(() => {
    if (!inView || reduce || value > 1000) return;
    let frame = 0;
    const started = performance.now();
    const duration = 1350;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tick">
      <span aria-hidden="true">
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </span>
  );
}

export function StatsBand({ index = "05" }: { index?: string }) {
  return (
    <section id="stats" aria-labelledby="stats-title" className="relative overflow-hidden bg-royal text-white">
      <div aria-hidden="true" className="blueprint-dark pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.13),transparent_65%)]"
      />

      <div className="container-x relative section-y">
        <SectionLabel index={index} text="On record" light />

        <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2
            id="stats-title"
            className="max-w-[15ch] text-[clamp(2.6rem,5.2vw,4.5rem)] text-white"
          >
            Numbers we can
            <br />
            stand <em className="heading-gloss accent-serif font-normal text-white/85">behind.</em>
          </h2>
          <div className="max-w-[23rem] lg:text-right">
            <p className="text-[0.92rem] leading-relaxed text-white/65">
              Every figure comes off the same factory floor. No outsourced shortcuts,
              no skipped tests.
            </p>
            <Link
              href="/warranty"
              className="mt-4 inline-flex items-center gap-2 border-b border-white/30 pb-1 text-[0.8rem] font-semibold text-white transition-colors hover:border-white"
            >
              Read the warranty
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-white/25 pt-5">
              <p className="display text-[clamp(3.2rem,6.2vw,5.4rem)] leading-[0.82] text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-4 font-sans font-medium text-[0.75rem] text-white/70">
                {stat.label}
              </p>
              <p className="mt-2 max-w-[18ch] text-[0.78rem] leading-relaxed text-white/45">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-white/15 pt-5 font-sans font-medium text-[0.75rem] text-white/40">
          VIJETA · Pithampur · M.P. · India — manufacturing since 1988
        </p>
      </div>
    </section>
  );
}
