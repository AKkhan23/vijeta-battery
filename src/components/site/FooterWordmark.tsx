"use client";

/**
 * Supplied VIJETA wordmark video at its original resolution. CSS crops only
 * the empty margins, so the letters and the flowing wave stay pixel-for-pixel
 * identical to the source and the section keeps its original, compact height.
 * Screen blending plus an edge mask folds the dark navy background into the
 * footer without a visible box.
 */
const EDGE_MASK =
  "linear-gradient(to right, transparent 0%, #000 2%, #000 99.5%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 3%, #000 96%, transparent 100%)";

export function FooterWordmark() {
  return (
    <div aria-hidden="true" className="select-none pb-6 pt-10">
      <div
        className="relative mx-auto w-full"
        style={{ aspectRatio: "1920 / 530", mixBlendMode: "screen" }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{
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
