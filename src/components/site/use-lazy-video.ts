"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Autoplay video with broad browser support.
 *
 * The source is attached from the very first render, so the browser can begin
 * loading and autoplaying immediately instead of waiting for JavaScript to
 * decide the clip is "near" the viewport. An IntersectionObserver still pauses
 * clips that scroll well out of view, which keeps a page with several videos
 * light. Two fallbacks make playback reliable everywhere:
 *   1. a canplay/loadeddata retry — a single play() on mount can fail on slow
 *      connections and leave the poster frozen forever;
 *   2. a first-interaction retry — browsers that block even muted autoplay
 *      start the clip as soon as the visitor taps or clicks the page.
 */
export function useLazyVideo(src: string, enabled = true) {
  const ref = useRef<HTMLVideoElement>(null);
  const inViewRef = useRef(false);
  const [inView, setInView] = useState(false);
  const active = enabled && Boolean(src);

  useEffect(() => {
    const video = ref.current;
    if (!active || !video) return;

    // Be explicit: a conservative preload must not stop the first frame.
    video.preload = "auto";

    const tryPlay = () => {
      video.muted = true;
      try {
        const result = video.play();
        if (result && typeof (result as Promise<void>).catch === "function") {
          (result as Promise<void>).catch(() => {});
        }
      } catch {
        /* the interaction fallback below covers blocked autoplay */
      }
    };

    const retry = () => {
      if (inViewRef.current) tryPlay();
    };
    video.addEventListener("canplay", retry);
    video.addEventListener("loadeddata", retry);

    const onInteract = () => {
      if (inViewRef.current) tryPlay();
    };
    document.addEventListener("pointerdown", onInteract, { passive: true });
    document.addEventListener("touchstart", onInteract, { passive: true });

    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          const visible = entry.isIntersecting;
          inViewRef.current = visible;
          setInView(visible);
        },
        { threshold: 0.01 },
      );
      observer.observe(video);
    } else {
      inViewRef.current = true;
      setInView(true);
    }

    return () => {
      observer?.disconnect();
      video.removeEventListener("canplay", retry);
      video.removeEventListener("loadeddata", retry);
      document.removeEventListener("pointerdown", onInteract);
      document.removeEventListener("touchstart", onInteract);
    };
  }, [active, src]);

  useEffect(() => {
    const video = ref.current;
    if (!video || !active) return;
    if (inView) {
      video.muted = true;
      try {
        const result = video.play();
        if (result && typeof (result as Promise<void>).catch === "function") {
          (result as Promise<void>).catch(() => {});
        }
      } catch {
        /* no-op */
      }
    } else {
      video.pause();
    }
  }, [inView, active]);

  // Expose the source unconditionally: autoplay is only dependable when src is
  // present on the element from the start.
  return { ref, src };
}
