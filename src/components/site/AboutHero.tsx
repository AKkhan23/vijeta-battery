"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";

const ease = [0.16, 1, 0.3, 1] as const;

export function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const copyY = useTransform(scrollYProgress, [0, 0.8], [0, -40]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="about-hero relative h-[170svh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-ink">
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { scale: imageScale, y: imageY }}
        >
          <div className="about-hero__image absolute inset-0" />
        </motion.div>
        <div aria-hidden="true" className="about-hero__veil absolute inset-0" />

        <motion.div
          style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}
          className="container-x relative z-10 flex h-full flex-col justify-end pb-[10vh] pt-32 sm:pb-[12vh]"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <p className="font-sans text-[0.75rem] font-medium tracking-[0.02em] text-white/60">
              ABOUT VIJETA BATTERIES
            </p>
          </motion.div>

          <h1 className="mt-5 max-w-[15ch] text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-white">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={reduce ? false : { opacity: 0, y: 42 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease }}
              >
                Built on experience.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={reduce ? false : { opacity: 0, y: 42 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34, ease }}
              >
                <em className="heading-gloss accent-serif font-normal not-italic text-volt">Powered by people.</em>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease }}
            className="mt-7 max-w-[36rem] text-[1.05rem] leading-[1.75] text-white/75"
          >
            Since 1988, Vijeta Batteries has been manufacturing dependable power solutions
            for vehicles and industrial applications at its Pithampur facility.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.62, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link href="#about" className="btn btn-primary">
              Discover Our Story
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/technology" className="btn btn-ghost">
              Our Manufacturing
              <span aria-hidden="true" className="text-royal">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
