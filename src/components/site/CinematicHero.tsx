"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";

export function CinematicHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="cinema-hero relative h-[80svh] min-h-[540px] overflow-hidden bg-ink sm:h-[100svh] sm:min-h-[620px]">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { scale: imageScale, opacity: imageOpacity }}>
        <img
          src="/hero-mobile.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center sm:hidden"
        />
        <img
          src="/hero-new.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover object-[32%_center] sm:block"
        />
      </motion.div>

      <div aria-hidden="true" className="cinema-hero__veil absolute inset-0" />

      <motion.div
        style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}
        className="container-x relative z-10 flex h-full flex-col justify-end pb-[7vh] pt-24 sm:pb-[11vh] sm:pt-32"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-sans text-[0.9rem] font-medium text-white/75">
            Vijeta Batteries | Powering India Since 1988
          </p>
          <h1 className="mt-4 max-w-[17ch] text-[clamp(2.1rem,8vw,5.4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:mt-5">
            The first crank
            <br />
            is the whole <em className="heading-gloss accent-serif font-normal text-white">story.</em>
          </h1>
          <p className="mt-4 max-w-[34rem] text-[0.92rem] leading-[1.65] text-white/75 sm:mt-6 sm:text-[1.02rem] sm:leading-[1.7]">
            Vijeta Batteries powers the vehicles India runs on. Built in Pithampur,
            quality-tested and backed by up to <strong className="font-semibold text-white">36 months</strong> of warranty.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <Link href="/products" className="btn btn-primary">
              Explore the range
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Talk to us
              <span aria-hidden="true" className="text-royal">→</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-sans text-[0.68rem] font-medium tracking-[0.18em] text-white/50">
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}
