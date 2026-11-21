"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useLazyVideo } from "@/components/site/use-lazy-video";
import { ourWorkMedia } from "@/lib/our-work-media";

const EASE = [0.16, 1, 0.3, 1] as const;

function ScrollCue() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute bottom-8 right-5 hidden items-center gap-3 sm:flex sm:right-[clamp(1.25rem,4.5vw,4.25rem)]"
    >
      <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/55">
        Scroll
      </span>
      <span className="relative block h-11 w-px overflow-hidden bg-white/20">
        <motion.span
          className="absolute inset-x-0 top-0 h-4 bg-white/80"
          animate={reduce ? undefined : { y: ["-100%", "280%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.35 }}
        />
      </span>
    </div>
  );
}

export function FactoryHero() {
  const media = ourWorkMedia.hero;
  const reduce = useReducedMotion();
  const video = useLazyVideo(media.videoSrc);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-4%", "4%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.04, 1.1]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0.35]);

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.95, delay, ease: EASE },
  });

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-labelledby="factory-tour-title"
      className="ow-hero relative h-[100svh] min-h-[600px] overflow-hidden bg-ink"
    >
      {/* Cinematic media layer — real factory video, poster shows before playback. */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.video
          ref={video.ref}
          src={video.src}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label={media.label}
          style={{ y: mediaY, scale: mediaScale }}
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
        >
          {media.label}
        </motion.video>
      </div>

      {/* Navy cinematic grade with a stronger floor so type stays legible over footage. */}
      <div aria-hidden="true" className="cinema-hero__veil absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5"
      />
      <div aria-hidden="true" className="blueprint-dark pointer-events-none absolute inset-0 opacity-30" />

      {/* Oversized, low-opacity "FACTORY TOUR" watermark reinforces the section identity. */}
      <div aria-hidden="true" className="ow-hero-watermark pointer-events-none absolute inset-x-0 top-[9%] overflow-hidden">
        <p className="whitespace-nowrap text-center font-display text-[clamp(4.5rem,15vw,16rem)] font-bold uppercase leading-none tracking-[-0.06em] text-white/[0.05]">
          Factory Tour
        </p>
      </div>

      <div className="container-x relative flex h-full flex-col justify-end pb-16 pt-28 sm:pb-20">
        <motion.div style={{ opacity: copyOpacity }} className="ow-hero-copy max-w-[54rem]">
          <motion.div {...rise(0.05)} className="ow-hero-eyebrow flex items-center gap-3 sm:gap-4">
            <span aria-hidden="true" className="h-px w-8 bg-white/70 sm:w-12" />
            <p className="font-sans text-[0.78rem] font-bold uppercase tracking-[0.24em] text-white sm:text-[0.92rem]">
              Our Work <span className="mx-1.5 font-normal text-white/45">/</span> Factory Tour
            </p>
          </motion.div>

          <motion.h1
            {...rise(0.16)}
            id="factory-tour-title"
            className="mt-5 font-display text-[clamp(2.35rem,6.4vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.35)] sm:mt-6"
          >
            Built by skilled hands.
            <br />
            <span className="heading-gloss">Powered by precision.</span>
          </motion.h1>

          <motion.p
            {...rise(0.28)}
            className="prose-lede mt-5 max-w-[44rem] !text-white/90 sm:mt-7"
          >
            Step inside our manufacturing floor and discover the people, processes and
            equipment behind every Vijeta battery.
          </motion.p>
        </motion.div>
      </div>

      <ScrollCue />
    </section>
  );
}
