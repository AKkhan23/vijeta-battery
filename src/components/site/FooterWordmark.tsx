"use client";

/**
 * Supplied VIJETA wordmark video. Cropped to the exact letter band so nothing
 * is cut off, with its dark background keyed to black and screen-blended into
 * the footer so no box/frame is visible.
 */
export function FooterWordmark() {
  return (
    <div aria-hidden="true" className="select-none pb-6 pt-10">
      <div
        className="relative mx-auto w-full"
        style={{ aspectRatio: "1820 / 390", mixBlendMode: "screen" }}
      >
        <video
          className="absolute inset-0 h-full w-full object-contain"
          src="/videos/vijeta-footer.mp4"
          poster="/videos/vijeta-footer-poster.jpg"
          width={1820}
          height={390}
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
