"use client";

import { useEffect, useState } from "react";

export function ChargeRail() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const next = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(next);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const pct = Math.round(progress * 100);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 mix-blend-difference xl:flex"
    >
      <span className="font-sans font-medium text-[10px] text-white [writing-mode:vertical-rl]">
        Charge
      </span>
      <div className="relative">
        <span className="absolute -top-[5px] left-1/2 h-[5px] w-2 -translate-x-1/2 rounded-t-[1px] bg-white/70" />
        <div className="relative h-[118px] w-[17px] overflow-hidden rounded-[2px] border border-white/60 p-[3px]">
          <div className="absolute inset-[3px] flex flex-col justify-end">
            <div
              className="w-full bg-white transition-[height] duration-150 ease-out"
              style={{ height: `${pct}%` }}
            />
          </div>
          <div className="absolute inset-[3px] flex flex-col justify-between">
            {[0, 1, 2, 3, 4].map((n) => (
              <span key={n} className="h-px w-full bg-white/35" />
            ))}
          </div>
        </div>
      </div>
      <span className="font-sans font-medium text-[10px] tabular-nums text-white">{pct}%</span>
    </div>
  );
}
