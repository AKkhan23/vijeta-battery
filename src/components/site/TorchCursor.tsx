"use client";

import { useEffect } from "react";

/**
 * One rAF-throttled pointer listener for every [data-torch] surface on the page.
 * Sets --mx / --my (px, relative to the hovered card) so the blue spotlight in
 * .torch-card can follow the cursor without each card owning its own listener.
 */
export function TorchCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let pending: { el: HTMLElement; x: number; y: number } | null = null;

    const paint = () => {
      frame = 0;
      if (!pending) return;
      const { el, x, y } = pending;
      pending = null;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest("[data-torch]") : null;
      if (!(target instanceof HTMLElement)) return;

      const rect = target.getBoundingClientRect();
      pending = { el: target, x: event.clientX - rect.left, y: event.clientY - rect.top };
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
