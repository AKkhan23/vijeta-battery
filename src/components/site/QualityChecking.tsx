"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { qualityChecks, qualityDetail, qualityIntro } from "@/lib/heritage";

export function QualityChecking() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      void video.play().catch(() => {});
    };

    // Autoplay can be refused until data is ready or the tab is focused.
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    tryPlay();

    return () => {
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
    };
  }, []);

  return (
    <section
      id="quality"
      className="relative overflow-hidden border-t border-line bg-paper"
      style={{ scrollMarginTop: "5.5rem" }}
    >
      <div className="container-x pb-12 pt-10 sm:pb-14 sm:pt-12">
        <div className="mx-auto max-w-[64rem] text-center">
          <Reveal>
            <h2 className="text-[clamp(2.2rem,7.2vw,5.6rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-royal">
              <span className="heading-gloss">{qualityIntro.headline}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mx-auto mt-4 max-w-[42rem] text-balance text-[0.98rem] leading-[1.8] text-ink/60 sm:text-[1.04rem]">
              {qualityIntro.body}
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-[45fr_55fr] md:gap-4 lg:gap-6">
          {/* Left: inspection content */}
          <Reveal className="min-w-0">
            <div className="flex h-full flex-col rounded-3xl border border-royal/12 bg-white p-6 shadow-[0_30px_70px_-60px_rgba(8,11,20,0.45)] lg:p-8">
              <p className="eyebrow text-royal">{qualityDetail.eyebrow}</p>
              <h3 className="mt-3 max-w-[20ch] font-display text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
                {qualityDetail.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.8] text-ink/60">
                {qualityDetail.body}
              </p>

              <ul className="mt-6 grid gap-4 border-t border-royal/10 pt-6">
                {qualityChecks.map((item) => (
                  <li key={item.title} className="group/check flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-2 w-2 shrink-0 border border-royal/35 bg-royal transition-transform duration-300 group-hover/check:scale-125"
                    />
                    <div>
                      <p className="font-sans text-[0.82rem] font-semibold text-ink">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[0.78rem] leading-snug text-ink/50">
                        {item.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href={qualityDetail.link.href}
                className="link-arrow mt-auto hidden pt-8 text-[0.82rem] md:inline-flex"
              >
                {qualityDetail.link.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          {/* Right: factory media */}
          <Reveal delay={0.08} className="min-w-0">
            <div className="grid h-full grid-cols-1 overflow-hidden rounded-3xl bg-ink shadow-[0_30px_70px_-60px_rgba(8,11,20,0.45)] md:grid-cols-[45fr_55fr]">
              <figure className="group relative aspect-video overflow-hidden md:aspect-auto md:h-full">
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover object-[50%_32%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  src="/quality-checking.mp4?v=4"
                  poster="/quality-checking-poster.jpg?v=4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onTimeUpdate={() => setPlaying(true)}
                  aria-label="Battery assembly and checking on the VIJETA factory floor at Vijeta Accumulators and New Technologies"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
                />
                <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-ink/35 px-2.5 py-1 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur">
                  Muted loop
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="max-w-[30ch] font-sans text-[0.72rem] leading-relaxed text-white/80">
                    {qualityDetail.videoNote}
                  </p>
                </figcaption>
                {!playing && (
                  <button
                    type="button"
                    aria-label="Play quality checking video"
                    onClick={() => {
                      const video = videoRef.current;
                      if (!video) return;
                      video.muted = true;
                      void video.play().catch(() => {});
                    }}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-ink/25 transition-colors hover:bg-ink/10"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/20 backdrop-blur transition-transform hover:scale-105">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-0.5 h-4 w-4 fill-white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                )}
              </figure>

              <figure className="group relative aspect-video overflow-hidden border-t border-white/10 md:aspect-auto md:h-full md:border-l md:border-t-0">
                <Image
                  src="/quality-checking-tall.jpg"
                  alt="Workers assembling lead-acid battery elements on the VIJETA factory floor."
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 40vw, 30vw"
                  className="object-cover object-[50%_25%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="max-w-[26ch] font-sans text-[0.72rem] leading-relaxed text-white/80">
                    {qualityDetail.imageNote}
                  </p>
                </figcaption>
              </figure>
            </div>
          </Reveal>

          {/* Mobile CTA, after the media per the stacked order */}
          <Reveal delay={0.1} className="md:hidden">
            <Link href={qualityDetail.link.href} className="link-arrow text-[0.82rem]">
              {qualityDetail.link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
