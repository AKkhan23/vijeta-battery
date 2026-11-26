"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { useLazyVideo } from "@/components/site/use-lazy-video";
import { aboutHero } from "@/lib/heritage";

const ease = [0.16, 1, 0.3, 1] as const;

export function AboutHero() {
  const reduce = useReducedMotion();
  const video = useLazyVideo("/videos/about-banner.mp4");

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="blueprint-dark pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(20,54,200,0.28),transparent_66%)]"
      />

      <div className="container-x relative pb-14 pt-24 sm:pb-16 lg:pb-20 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="font-sans text-[0.75rem] font-medium tracking-[0.02em] text-white/60"
            >
              {aboutHero.eyebrow}
            </motion.p>

            <h1 className="mt-5 max-w-[15ch] text-[clamp(2.5rem,4.6vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-white">
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : { opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.16, ease }}
                >
                  {aboutHero.line1}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : { opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.28, ease }}
                >
                  <em className="heading-gloss accent-serif font-normal not-italic text-volt-light">
                    {aboutHero.line2}
                  </em>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.42, ease }}
              className="mt-6 max-w-[33rem] text-[0.98rem] leading-[1.75] text-white/65 sm:text-[1.02rem]"
            >
              {aboutHero.body}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.54, ease }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start"
            >
              <Link href={aboutHero.primary.href} className="btn btn-primary w-full sm:w-auto">
                {aboutHero.primary.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href={aboutHero.secondary.href} className="btn btn-ghost w-full sm:w-auto">
                {aboutHero.secondary.label}
                <span aria-hidden="true" className="text-royal">→</span>
              </Link>
            </motion.div>

            <motion.dl
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.66, ease }}
              className="mt-9 hidden max-w-[30rem] grid-cols-3 gap-5 border-t border-white/15 pt-5 sm:grid"
            >
              {aboutHero.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-sans text-[0.68rem] font-medium text-white/40">{fact.label}</dt>
                  <dd className="mt-1.5 font-display text-[0.9rem] font-semibold tracking-tight text-white/90">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease }}
            className="order-first lg:order-none lg:col-span-6"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white/12 bg-ink-soft shadow-[0_50px_100px_-55px_rgba(20,54,200,0.75)] sm:aspect-[16/9] lg:aspect-[4/3]">
              <video
                ref={video.ref}
                src={video.src}
                poster="/about-banner-poster-v2.jpg"
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
