"use client";

import { useRef } from "react";
import type { PointerEvent } from "react";

export function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div aria-hidden="true" className="select-none overflow-hidden pb-10 pt-12">
      <div ref={ref} onPointerMove={handleMove} className="wordmark-torch relative text-center">
        <p className="wordmark-base display whitespace-nowrap text-[clamp(4rem,20vw,18rem)] leading-[0.9] tracking-[0.12em]">
          VIJETA
        </p>
        <p className="wordmark-shine display pointer-events-none absolute inset-0 whitespace-nowrap text-[clamp(4rem,20vw,18rem)] leading-[0.9] tracking-[0.12em]">
          VIJETA
        </p>
        <p className="wordmark-torch-glow display pointer-events-none absolute inset-0 whitespace-nowrap text-[clamp(4rem,20vw,18rem)] leading-[0.9] tracking-[0.12em]">
          VIJETA
        </p>
      </div>
    </div>
  );
}
