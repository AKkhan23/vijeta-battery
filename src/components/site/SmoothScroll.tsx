"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type LenisInstance = InstanceType<typeof import("lenis").default>;

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<LenisInstance | null>(null);
  const firstRender = useRef(true);

  // The factory tour is long and video-heavy. Lenis adds wheel inertia that
  // makes it feel laggy, so that one route uses native, instant scrolling.
  // Every other page keeps the original Lenis behaviour untouched.
  const isFactoryTour = pathname === "/our-work";

  useEffect(() => {
    if (isFactoryTour) {
      document.documentElement.style.scrollBehavior = "auto";
      return () => {
        document.documentElement.style.scrollBehavior = "";
      };
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        anchors: { offset: -76 },
      });
      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [isFactoryTour]);

  // Reset scroll on route change (including back/forward), but honour direct hash links.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (window.location.hash) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}
