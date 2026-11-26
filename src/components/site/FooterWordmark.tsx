"use client";

import { useEffect, useRef } from "react";

/**
 * Supplied VIJETA wordmark video, shown compact and blended into the footer.
 * The video's dark navy background is toned down with a CSS filter so it
 * matches the footer colour, and an edge mask removes any hard boundary.
 * No re-encode: the original pixels of the letters and wave stay untouched.
 */
const EDGE_MASK =
  "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)";

export function FooterWordmark() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div aria-hidden="true" className="select-none pb-6 pt-10">
      <div
        className="relative mx-auto w-full"
        style={{ aspectRatio: "1920 / 530", mixBlendMode: "screen" }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            filter: "brightness(0.7) contrast(1.25)",
            maskImage: EDGE_MASK,
            WebkitMaskImage: EDGE_MASK,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
          src="/videos/vijeta-footer.mp4"
          poster="/videos/vijeta-footer-poster.jpg"
          width={1920}
          height={1080}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </div>
  );
}
