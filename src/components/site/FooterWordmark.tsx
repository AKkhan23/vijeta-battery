"use client";

/**
 * Supplied VIJETA wordmark video, used at its original 1920x1080 framing with
 * no crop and no colour keying, so the letter edges and the flowing wave below
 * stay pixel-for-pixel identical to the source. Screen blending folds the dark
 * navy background into the footer without a visible box.
 */
export function FooterWordmark() {
  return (
    <div aria-hidden="true" className="select-none pb-6 pt-4">
      <div
        className="relative mx-auto w-full"
        style={{ aspectRatio: "1920 / 1080", mixBlendMode: "screen" }}
      >
        <video
          className="absolute inset-0 h-full w-full object-contain"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 3%, #000 97%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 4%, #000 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 3%, #000 97%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 4%, #000 90%, transparent 100%)",
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
