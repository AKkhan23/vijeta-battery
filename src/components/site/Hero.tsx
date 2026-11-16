"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { HeroVisual } from "./HeroVisual";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.085, delayChildren: 0.08 },
  },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const line: Variants = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: 0.95, ease } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-[76px]">
      <div
        aria-hidden="true"
        className="blueprint pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_60%_35%,black_20%,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(22,56,198,0.1),transparent_65%)]"
      />

      <div className="container-x relative grid min-h-[calc(100svh-76px)] items-center gap-6 pb-14 pt-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-4 lg:pb-10 lg:pt-6">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={container}
          className="relative z-10 max-w-[46rem]"
        >
          <motion.div variants={fade} className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-royal" />
            </span>
            <span className="eyebrow whitespace-nowrap text-ink/50">Pithampur, India — since 1988</span>
            <span aria-hidden="true" className="hidden h-px w-10 bg-ink/20 xl:block" />
            <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink/35 xl:block">
              22.60° N / 75.67° E
            </span>
          </motion.div>

          <h1 className="mt-6 text-[clamp(2.6rem,5.9vw,5.7rem)] leading-[0.9] tracking-[-0.045em] text-ink">
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span variants={line} className="block">
                The first crank
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span variants={line} className="block">
                is the whole
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={line} className="block">
                <em className="accent-serif font-normal text-royal">story.</em>
              </motion.span>
            </span>
          </h1>

          <motion.p variants={fade} className="prose-lede mt-7 max-w-[33rem]">
            Lead-acid batteries for the vehicles India runs on. Built in Pithampur,
            tested one by one, and backed for up to <strong className="font-semibold text-ink">36 months</strong>.
          </motion.p>

          <motion.div variants={fade} className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/products" className="btn btn-primary">
              Explore the range
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Talk to us
              <span aria-hidden="true" className="text-royal">
                →
              </span>
            </Link>
          </motion.div>

          <motion.div
            variants={fade}
            className="mt-10 grid max-w-[33rem] grid-cols-3 border-t border-line pt-5"
          >
            {[
              { value: "36 mo", label: "Longest warranty" },
              { value: "In-house", label: "Made & tested" },
              { value: "1988", label: "Same plant since" },
            ].map((item) => (
              <div key={item.label} className="pr-3">
                <p className="font-display text-[1.05rem] font-bold tracking-tight text-ink">
                  {item.value}
                </p>
                <p className="mt-0.5 font-mono text-[0.54rem] uppercase tracking-[0.09em] text-ink/45 sm:text-[0.58rem] sm:tracking-[0.16em]">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <div className="container-x relative hidden items-center justify-between border-t border-line py-4 lg:flex">
        <a
          href="#about"
          className="group flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink/40 transition-colors hover:text-royal"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-colors group-hover:border-royal/40">
            <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
              <path d="M6 2v8M2.6 6.6 6 10l3.4-3.4" stroke="currentColor" strokeWidth="1.1" />
            </svg>
          </span>
          Scroll — the factory floor
        </a>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink/30">
          Lead-acid power systems · M-52, Sector 3
        </span>
      </div>
    </section>
  );
}
