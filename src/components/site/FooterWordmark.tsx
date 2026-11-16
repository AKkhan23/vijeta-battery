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
    <div aria-hidden="true" className="select-none overflow-hidden pb-6 pt-10">
      <div ref={ref} onPointerMove={handleMove} className="wordmark-torch relative">
        <p
          className="display whitespace-nowrap text-[clamp(5rem,18.5vw,18rem)] leading-[0.72] tracking-[-0.05em] text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.14)" }}
        >
          VIJETA
        </p>
        <p className="wordmark-torch-glow display pointer-events-none absolute inset-0 whitespace-nowrap text-[clamp(5rem,18.5vw,18rem)] leading-[0.72] tracking-[-0.05em] text-transparent">
          VIJETA
        </p>
      </div>
    </div>
  );
}
