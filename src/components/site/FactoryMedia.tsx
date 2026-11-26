"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useLazyVideo } from "@/components/site/use-lazy-video";
import type { FactoryImage } from "@/lib/our-work-media";

export type RevealDirection = "up" | "from-left" | "from-right";

/**
 * Media frame. Content is ALWAYS rendered visible — no scroll-gated hiding.
 * A zero-area clip reveal could leave media blank when the page was scrolled
 * quickly (or back upwards), so the frame is now plain and dependable. The
 * cinematic feel comes from the video grade, gloss and layout instead.
 */
export function MediaClip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  /** Kept for API compatibility; reveals are intentionally always visible. */
  direction?: RevealDirection;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

/**
 * Text block. A one-time, CSS-only entrance runs when the page mounts, so by
 * the time a visitor scrolls to a section the copy is already in place — text
 * never disappears when scrolling back up.
 */
export function TextIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
}) {
  return <div className={`ow-text-in ${className}`}>{children}</div>;
}

/**
 * Video frame. The clip loads as it approaches the viewport and pauses once it
 * is scrolled well away, so a page with several videos does not fetch or decode
 * them all at once. The poster fills the frame until playback starts, and the
 * clip resumes when the section comes back into view.
 */
export function VideoFrame({
  videoSrc,
  poster,
  label,
  className = "",
  imageClassName = "",
  direction = "up",
  delay = 0,
  children,
}: {
  videoSrc: string;
  poster: string;
  label: string;
  className?: string;
  imageClassName?: string;
  direction?: RevealDirection;
  delay?: number;
  children?: ReactNode;
}) {
  const video = useLazyVideo(videoSrc);

  return (
    <MediaClip className={className} direction={direction} delay={delay}>
      <div className="relative h-full w-full overflow-hidden bg-ink">
        <video
          ref={video.ref}
          src={video.src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={label}
          className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
        >
          {label}
        </video>
        {children}
      </div>
    </MediaClip>
  );
}

/** Consistent image frame with contain/cover control and a soft hover zoom. */
export function ImageFrame({
  image,
  fit = "cover",
  className = "",
  imageClassName = "",
  sizes = "(max-width: 1024px) 92vw, 46vw",
  priority = false,
  direction = "up",
  delay = 0,
  children,
}: {
  image: FactoryImage;
  fit?: "contain" | "cover";
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  direction?: RevealDirection;
  delay?: number;
  children?: ReactNode;
}) {
  return (
    <MediaClip className={className} direction={direction} delay={delay}>
      <div className="group relative h-full w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`${
            fit === "contain" ? "object-contain" : "object-cover"
          } transition-transform duration-700 ease-out group-hover:scale-[1.05] ${imageClassName}`}
        />
        {children}
      </div>
    </MediaClip>
  );
}
