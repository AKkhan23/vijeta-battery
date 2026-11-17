"use client";

import dynamic from "next/dynamic";
import { useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { StaticBattery } from "./StaticBattery";

const Scene = dynamic(
  () => import("./BatteryScene").then((mod) => mod.BatteryScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <StaticBattery className="h-[86%] w-auto opacity-90" />
      </div>
    ),
  },
);

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "180px 0px" });
  const reduce = useReducedMotion();

  return (
    <div
      ref={ref}
      className="relative mx-auto h-[400px] w-full max-w-[580px] sm:h-[500px] lg:h-[610px]"
    >
      {/* technical stage */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/8" />
        <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/10" />
        <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-ink/8 to-transparent" />
        <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/50" />
        <span className="absolute left-[9%] top-[13%] h-2 w-2 border-l border-t border-ink/25" />
        <span className="absolute right-[9%] bottom-[13%] h-2 w-2 border-b border-r border-ink/25" />
      </div>

      {/* 3D cell */}
      <div className="absolute inset-0">
        {reduce ? (
          <div className="flex h-full w-full items-center justify-center">
            <StaticBattery className="h-[86%] w-auto" />
          </div>
        ) : (
          <Scene active={inView} />
        )}
      </div>

      {/* annotations */}
      <div className="pointer-events-none absolute left-0 top-3 hidden flex-col gap-1 sm:flex">
        <span className="eyebrow text-ink/40">12 volt · 6 cell</span>
        <span className="font-sans font-medium text-[0.75rem] text-ink/30">
          Lead-acid / low maintenance
        </span>
      </div>
      <div className="pointer-events-none absolute right-0 top-3 hidden flex-col items-end gap-1 sm:flex">
        <span className="eyebrow text-ink/40">Pb–Ca alloy</span>
        <span className="font-sans font-medium text-[0.75rem] text-ink/30">
          In-house grid casting
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 flex items-center gap-3 border border-line bg-white/85 p-3 pr-4 backdrop-blur-sm">
        <span className="flex h-9 w-9 items-center justify-center bg-royal text-white">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M13.2 2 4.5 13.2h5.3L8.7 22l8.8-11.3h-5.2L13.2 2Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="flex flex-col leading-tight">
          <span className="eyebrow text-ink/45">Gold series</span>
          <span className="mt-1 text-[0.78rem] font-semibold tracking-tight">
            36 months of cover
          </span>
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-1 right-0 hidden flex-col items-end gap-1 xl:flex">
        <span className="font-sans font-medium text-[0.75rem] text-ink/35">
          Drag to rotate 360° · Scroll to zoom
        </span>
        <span className="h-px w-12 bg-ink/20" />
      </div>
    </div>
  );
}
