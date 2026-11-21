"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Defers a video until it approaches the viewport, then plays it automatically
 * only while it is on screen. A page with several clips therefore downloads the
 * first one immediately and the rest as the visitor scrolls, instead of pulling
 * every file (and decoding every frame) on load. Playback is always automatic —
 * there is no play button to press.
 *
 * Visitors who prefer reduced motion get the poster only; no file is fetched
 * and nothing moves. The poster attribute stays on the <video>, so the frame is
 * never blank while the clip is waiting to load.
 */
export function useLazyVideo(src: string, enabled = true) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [near, setNear] = useState(false);
  const [inView, setInView] = useState(false);

  const active = enabled && Boolean(src);
  const shouldLoad = active && near && !reduce;

  useEffect(() => {
    if (!active) return;
    const video = ref.current;
    if (!video) return;

    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      setInView(true);
      return;
    }

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          // Once the file has been requested there is nothing left to watch for.
          loadObserver.disconnect();
        }
      },
      // Start fetching a little before the clip scrolls into view.
      { rootMargin: "300px 0px" },
    );

    // Playback follows actual visibility, not the prefetch margin, so a clip
    // waiting just below the fold is loaded but not decoding frames.
    const playObserver = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.01 },
    );

    loadObserver.observe(video);
    playObserver.observe(video);
    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
    };
  }, [active]);

  useEffect(() => {
    const video = ref.current;
    if (!video || !shouldLoad) return;

    if (inView) {
      video.muted = true;
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [shouldLoad, inView]);

  return {
    ref,
    /** Pass as <video src>. Stays undefined until the clip should load. */
    src: shouldLoad ? src : undefined,
  };
}
