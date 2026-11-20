"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stats } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const reduce = useReducedMotion();
  const from = value > 1000 ? value - 88 : 0;
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (reduce) return;
    if (!inView) {
      const reset = requestAnimationFrame(() => setDisplay(from));
      return () => cancelAnimationFrame(reset);
    }

    let frame = 0;
    const started = performance.now();
    const duration = value > 1000 ? 1100 : 1400;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value, from]);

  const shown = reduce ? value : display;

  return (
    <span ref={ref} className="tick">
      <span aria-hidden="true">
        {shown}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </span>
  );
}

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
  note: string;
};

type Props = {
  index?: string;
  items?: readonly StatItem[];
  cta?: { href: string; label: string };
};

export function StatsBand({
  index = "05",
  items = stats,
  cta = { href: "/warranty", label: "Read the warranty" },
}: Props) {
  const reduce = useReducedMotion();

  return (
    <section
      id="stats"
      aria-labelledby="stats-title"
      className="relative overflow-hidden border-y border-royal/10 bg-[linear-gradient(180deg,#e9efff_0%,#f4f8ff_55%,#ffffff_100%)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(20,54,200,0.10),transparent_64%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(20,54,200,0.06),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[340px] w-[340px] -translate-y-1/2 rounded-full border border-royal/10 lg:block"
      />

      <div className="container-x relative py-14 sm:py-16 lg:py-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.65, ease }}
        >
          <SectionLabel index={index} text="On record" />
        </motion.div>

        <div className="mt-7 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <motion.h2
            id="stats-title"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.75, ease }}
            className="max-w-[15ch] text-[clamp(2.4rem,4.8vw,4.1rem)] leading-[1.02] tracking-[-0.03em] text-ink"
          >
            Numbers we can
            <br />
            stand <em className="heading-gloss accent-serif font-normal text-royal">behind.</em>
          </motion.h2>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            className="max-w-[23rem] lg:text-right"
          >
            <p className="text-[0.92rem] leading-relaxed text-ink/60">
              Every figure comes off the same factory floor. No outsourced shortcuts,
              no skipped tests.
            </p>
            <Link
              href={cta.href}
              className="mt-4 inline-flex items-center gap-2 border-b border-royal/30 pb-1 text-[0.8rem] font-semibold text-royal transition-colors hover:border-royal"
            >
              {cta.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-11 grid grid-cols-2 gap-x-6 gap-y-9 lg:mt-14 lg:grid-cols-4 lg:gap-x-8">
          {items.map((stat, statIndex) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: statIndex * 0.07, ease }}
              className="group border-t border-royal/20 pt-5 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="display text-[clamp(2.8rem,5.2vw,4.7rem)] leading-[0.82] text-royal">
                  <Counter value={stat.value} suffix={stat.suffix ?? ""} />
                </p>
                <span className="mt-1 font-sans text-[0.6rem] font-semibold tracking-[0.18em] text-royal/35">
                  {String(statIndex + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 font-sans font-medium text-[0.75rem] text-ink/70">
                {stat.label}
              </p>
              <p className="mt-2 max-w-[18ch] text-[0.78rem] leading-relaxed text-ink/45">
                {stat.note}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 border-t border-royal/15 pt-5 font-sans font-medium text-[0.72rem] text-ink/40 lg:mt-14">
          VIJETA · Vijeta Accumulators and New Technologies · M.P. · India — manufacturing since 1988
        </p>
      </div>
    </section>
  );
}
