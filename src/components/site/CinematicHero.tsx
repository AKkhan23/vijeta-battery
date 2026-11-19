"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@/components/ui/Icons";

export function CinematicHero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="cinema-hero relative h-[80svh] min-h-[540px] overflow-hidden bg-ink sm:h-[100svh] sm:min-h-[620px]">
      <div className="absolute inset-0">
        <Image
          src="/hero-mobile-lifestyle.webp?hero=1"
          alt=""
          aria-hidden="true"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center sm:hidden"
        />
        <Image
          src="/hero-lifestyle.webp?hero=1"
          alt=""
          aria-hidden="true"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="hidden object-cover object-[64%_center] sm:block"
        />
      </div>

      {/* Subtle blue cinematic ambience, kept on the right and behind the copy */}
      <div aria-hidden="true" className="cinema-hero__glow pointer-events-none absolute inset-0 z-[1]" />
      <div aria-hidden="true" className="cinema-hero__gloss pointer-events-none absolute inset-0 z-[2]" />
      <div aria-hidden="true" className="cinema-hero__veil pointer-events-none absolute inset-0 z-[3]" />

      <motion.div
        className="container-x relative z-10 flex h-full flex-col justify-end pb-[3vh] pt-4 sm:justify-start sm:pb-[9vh] sm:pt-28"
        initial={reduce ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full sm:max-w-[34rem]">
          <p className="font-sans text-[0.9rem] font-medium text-white/60">
            Vijeta Batteries | Powering India Since 1988
          </p>
          <h1 className="mt-2 max-w-[16ch] text-[clamp(1.75rem,7vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white/90 sm:mt-4">
            The first crank
            <br />
            is the whole <em className="heading-gloss accent-serif font-normal text-white">story.</em>
          </h1>
          <p className="mt-2 max-w-[30rem] text-[0.86rem] leading-[1.6] text-white/65 sm:mt-4 sm:text-[1rem] sm:leading-[1.7]">
            Built in Pithampur. Tested unit by unit. Backed for <strong className="font-semibold text-white">36 months</strong>.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <Link href="/products" className="btn btn-primary">
              Explore the range
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Talk to us
              <span aria-hidden="true" className="text-royal">→</span>
            </Link>
          </div>
        </div>
      </motion.div>

      <div aria-hidden="true" className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 font-sans text-[0.68rem] font-medium tracking-[0.18em] text-white/50 sm:block">
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}
