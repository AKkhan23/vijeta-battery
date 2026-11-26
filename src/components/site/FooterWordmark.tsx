"use client";

/**
 * The footer wordmark is supplied as a video (VIJETA letters filled with
 * factory footage). It replaces the old outlined text wordmark in the exact
 * same slot at the bottom of the footer. The wide, short frame crops the
 * video's empty top/bottom so the lettering keeps the same visual size as
 * the text it replaced.
 */
export function FooterWordmark() {
  return (
    <div aria-hidden="true" className="select-none overflow-hidden pb-10 pt-12">
      <div
        className="relative mx-auto w-full"
        style={{ aspectRatio: "4.6 / 1" }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
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
