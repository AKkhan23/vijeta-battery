"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
  once?: boolean;
};

/**
 * Scroll reveal: content is visible by default (fail-safe).
 * JS arms it and toggles visibility on scroll — appears entering view, hides leaving.
 */
export function Reveal({ children, className = "", delay = 0, y = 26 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    el.classList.add("reveal-scroll");
    const update = () => {
      const r = el.getBoundingClientRect();
      const show = r.top < window.innerHeight * 0.85 && r.bottom > window.innerHeight * 0.1;
      el.classList.toggle("is-visible", show);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const style = {
    transitionDelay: `${delay}s`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
