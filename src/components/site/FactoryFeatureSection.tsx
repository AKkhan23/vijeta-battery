import type { FactoryVideo } from "@/lib/our-work-media";
import { TextIn, VideoFrame, type RevealDirection } from "@/components/site/FactoryMedia";

type Props = {
  id: string;
  /** Editorial section marker, e.g. "01 / 03". */
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  video: FactoryVideo;
  /** Swap the two columns on large screens. */
  reverse?: boolean;
  tone?: "white" | "paper";
  mediaDirection?: RevealDirection;
  textDirection?: "up" | "from-left" | "from-right";
  note?: string;
  /** Trims the gap directly under the hero. */
  compactTop?: boolean;
};

/**
 * Shared two-column editorial section for Battery Production, Battery
 * Assembly and Manufacturing Machinery. One layout, one motion language.
 */
export function FactoryFeatureSection({
  id,
  index,
  eyebrow,
  title,
  body,
  video,
  reverse = false,
  tone = "white",
  mediaDirection = "up",
  textDirection = "up",
  note = "Vijeta factory floor",
  compactTop = false,
}: Props) {
  const number = index.split("/")[0]?.trim() ?? "";
  const titleWords = title.split(" ");
  const accentWord = titleWords.pop() ?? "";
  const leadWords = titleWords.join(" ");

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative overflow-hidden border-t border-line ${
        tone === "white" ? "bg-white" : "bg-paper"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal/35 to-transparent"
      />
      {/* Even, full-section depth. No radial mask — a masked overlay made the
          section read as half-faded when it met the fold. */}
      <div aria-hidden="true" className="blueprint pointer-events-none absolute inset-0 opacity-30" />
      <div
        className={`container-x relative ${
          compactTop
            ? "pb-14 pt-9 sm:pb-16 sm:pt-11 lg:pb-20 lg:pt-12"
            : "py-14 sm:py-16 lg:py-20"
        }`}
      >
        <div className="grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-8">
          <VideoFrame
            {...video}
            direction={mediaDirection}
            className={`relative aspect-[16/9] w-full rounded-2xl shadow-[0_30px_70px_-55px_rgba(8,11,20,0.6)] ring-1 ring-ink/5 sm:rounded-3xl ${
              reverse
                ? "lg:col-start-6 lg:col-span-7 lg:row-start-1"
                : "lg:col-start-1 lg:col-span-7 lg:row-start-1"
            }`}
            imageClassName="object-[58%_center] sm:object-center"
          >
            {/* Static cinematic grade: bottom shade + vignette. No hover motion. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-ink/20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(ellipse_at_center,transparent_38%,rgba(8,11,20,0.55)_100%)]"
            />
            {/* Framing marks. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-4 h-6 w-6 rounded-tl-sm border-l border-t border-white/45 sm:left-5 sm:top-5"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-4 h-6 w-6 rounded-tr-sm border-r border-t border-white/45 sm:right-5 sm:top-5"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 rounded-bl-sm border-b border-l border-white/45 sm:bottom-5 sm:left-5"
            />
            <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/25 bg-ink/35 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm sm:bottom-5 sm:right-5">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white/85" />
              Muted loop
            </span>
          </VideoFrame>

          <div
            className={`relative ${
              reverse ? "lg:col-start-1 lg:col-span-5" : "lg:col-start-8 lg:col-span-5"
            } lg:row-start-1`}
          >
            <TextIn direction={textDirection}>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-royal/70" />
                <p className="eyebrow factory-gloss factory-line ow-label font-semibold tracking-[0.18em]">
                  {eyebrow}
                </p>
                <span className="ow-index ml-auto shrink-0 font-sans text-[0.7rem] font-bold tracking-[0.16em]">
                  {index}
                </span>
              </div>
            </TextIn>

            <TextIn direction={textDirection} delay={0.07}>
              <div className="relative mt-5">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[7rem] font-bold leading-none tracking-[-0.08em] text-royal/[0.06] sm:text-[9rem]"
                >
                  {number}
                </span>
                <h2
                  id={`${id}-title`}
                  className="relative max-w-[20ch] font-display text-[clamp(2.15rem,4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.045em]"
                >
                  {leadWords}{" "}
                  <span className="ow-accent factory-line">{accentWord}</span>
                </h2>
              </div>
            </TextIn>

            <TextIn direction={textDirection} delay={0.13}>
              <p className="mt-5 max-w-[34rem] font-sans text-[1.02rem] leading-[1.85] sm:text-[1.08rem] sm:leading-[1.9]">
                {body}
              </p>
            </TextIn>

            <TextIn direction={textDirection} delay={0.19}>
              <div className="mt-8 flex items-center gap-3 border-t border-royal/15 pt-5">
                <span aria-hidden="true" className="h-px w-5 bg-royal" />
                <p className="ow-note factory-gloss factory-line font-sans">{note}</p>
              </div>
            </TextIn>
          </div>
        </div>
      </div>
    </section>
  );
}
