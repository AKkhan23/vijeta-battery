"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { plantDetail, plantIntro, plantSteps } from "@/lib/heritage";

export function PlantProcess() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduce) {
      video.pause();
      return;
    }
    video.muted = true;
    void video.play().catch(() => {});
  }, [reduce]);

  return (
    <section id="plant" className="relative overflow-hidden bg-paper" style={{ scrollMarginTop: "5.5rem" }}>
      <div className="container-x pb-12 pt-9 sm:pb-14 sm:pt-11">
        <div className="mx-auto max-w-[64rem] text-center">
          <Reveal>
            <h2 className="text-[clamp(2.2rem,7.2vw,5.6rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-royal">
              <span className="heading-gloss">{plantIntro.title}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <Link href={plantIntro.link.href} className="link-arrow mt-3 inline-flex text-[0.85rem]">
              {plantIntro.link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-6">
          <Reveal className="lg:col-span-7">
            <div className="relative h-full min-h-[19rem] overflow-hidden rounded-3xl bg-ink">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src="/manufacturing.mp4"
                poster="/manufacturing-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Plate handling and battery assembly on the VIJETA factory floor at Pithampur"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-6 sm:p-7">
                <p className="max-w-[26ch] font-sans text-[0.74rem] leading-relaxed text-white/80">
                  {plantDetail.videoNote}
                </p>
                <span className="hidden rounded-full border border-white/25 bg-white/10 px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/75 backdrop-blur sm:inline-flex">
                  Muted loop
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-royal/12 bg-white p-6 shadow-[0_30px_70px_-60px_rgba(8,11,20,0.45)] sm:p-8">
              <p className="eyebrow text-royal">{plantDetail.eyebrow}</p>
              <h3 className="mt-3 max-w-[18ch] font-display text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
                {plantDetail.title}
              </h3>

              <div className="mt-4 flex flex-col gap-3.5">
                {plantDetail.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[0.94rem] leading-[1.82] text-ink/60">
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="mt-6 grid gap-3 border-t border-royal/10 pt-5 sm:grid-cols-2">
                {plantDetail.highlights.map((item) => (
                  <li key={item.title} className="group/highlight">
                    <p className="flex items-center gap-2 font-sans text-[0.76rem] font-semibold text-ink">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 bg-royal transition-transform duration-300 group-hover/highlight:scale-150"
                      />
                      {item.title}
                    </p>
                    <p className="mt-1 pl-3.5 text-[0.74rem] leading-snug text-ink/45">
                      {item.copy}
                    </p>
                  </li>
                ))}
              </ul>

              <Link href={plantDetail.link.href} className="link-arrow mt-auto pt-7 text-[0.8rem]">
                {plantDetail.link.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3">
              <p className="eyebrow text-royal">The line, stage by stage</p>
              <p className="font-sans text-[0.72rem] text-ink/35">Eight stages, start to finish</p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {plantSteps.map((step, index) => (
              <Reveal key={step.index} delay={(index % 4) * 0.05} y={16}>
                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-royal/25 font-sans text-[0.65rem] font-semibold text-royal transition-colors duration-300 group-hover:border-royal group-hover:bg-royal group-hover:text-white">
                      {step.index}
                    </span>
                    <span aria-hidden="true" className="h-px flex-1 bg-ink/10" />
                  </div>
                  <h3 className="mt-4 font-display text-[1.02rem] font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.86rem] leading-[1.7] text-ink/55">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
