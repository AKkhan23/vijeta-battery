"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GOOGLE_URL, type GoogleRating } from "@/lib/googleReviews";

function Stars({ rating, large = false }: { rating: number; large?: boolean }) {
  const filled = Math.round(rating);
  const size = large ? "h-[18px] w-[18px]" : "h-[13px] w-[13px]";
  return (
    <span
      className="inline-flex items-center justify-center gap-0.5 text-gold"
      aria-label={`${rating} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((n) => (
        <svg key={n} viewBox="0 0 20 20" className={`${size} ${n < filled ? "fill-current" : "fill-ink/10"}`} aria-hidden="true">
          <path d="m10 1.8 2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.6-5 2.6 1-5.6-4.1-4 5.6-.8L10 1.8Z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleMark() {
  return (
    <span
      aria-hidden="true"
      className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-white font-display text-[0.85rem] font-extrabold text-royal"
    >
      G
    </span>
  );
}

export function Testimonials() {
  const [data, setData] = useState<GoogleRating | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    const load = () => {
      fetch("/api/google-reviews", { cache: "no-store" })
        .then((res) => (res.ok ? res.json() : null))
        .then((json: GoogleRating | null) => {
          if (!active || !json || !Array.isArray(json.reviews)) return;
          setData((prev) => {
            const same =
              prev &&
              prev.count === json.count &&
              prev.rating === json.rating &&
              JSON.stringify(prev.reviews) === JSON.stringify(json.reviews);
            return same ? prev : json;
          });
        })
        .catch(() => {
          /* keep the last known real data */
        });
    };

    load();
    const timer = setInterval(load, 5000);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, []);

  function move(direction: number) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-rating]");
    const step = card ? card.offsetWidth + 12 : rail.clientWidth * 0.7;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  const reviews = data?.reviews ?? [];

  return (
    <section className="section-y border-y border-line bg-white">
      <div className="container-x">
        <Reveal>
          <SectionLabel index="06" text="Google reviews" />
        </Reveal>

        <Reveal className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="max-w-[20ch] text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.025em]">
              Rated by the people who <em className="heading-gloss accent-serif font-normal text-royal">use us.</em>
            </h2>
            <div className="mt-3 flex items-center gap-2.5">
              <span className="font-display text-[1.6rem] font-bold leading-none text-ink">
                {data && data.rating > 0 ? data.rating.toFixed(1) : "—"}
              </span>
              <Stars rating={data?.rating ?? 0} large />
              <span className="font-sans text-[0.72rem] text-ink/45">
                {data ? `${data.count} Google ratings` : "loading…"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous rating"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-royal hover:bg-royal hover:text-white"
            >
              <ArrowUpRight className="h-4 w-4 -rotate-[135deg]" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next rating"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-royal hover:bg-royal hover:text-white"
            >
              <ArrowUpRight className="h-4 w-4 rotate-45" />
            </button>
            <a
              href={data?.url ?? GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group ml-1 inline-flex items-center gap-2 rounded-full bg-royal px-4 py-2.5 font-sans text-[0.8rem] font-semibold text-white shadow-[0_12px_28px_-14px_rgba(20,54,200,0.95)] ring-2 ring-gold/45 transition-all hover:bg-royal-deep hover:ring-gold"
            >
              <GoogleMark />
              Live Google rating
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <div
          ref={railRef}
          role="region"
          aria-label="Google rating tiles"
          tabIndex={0}
          className="no-scrollbar mt-7 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2"
          data-lenis-prevent
        >
          {reviews.length > 0
            ? reviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  data-rating={review.rating}
                  title={`${review.rating} out of 5 on Google`}
                  className="flex w-[7.5rem] shrink-0 snap-start flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-paper px-3 py-4 transition-colors hover:border-royal/30 sm:w-[8.5rem]"
                >
                  <span className="font-display text-[1.45rem] font-bold leading-none text-ink">
                    {review.rating.toFixed(1)}
                  </span>
                  <Stars rating={review.rating} />
                </div>
              ))
            : [0, 1, 2, 3, 4].map((n) => (
                <div key={n} className="flex w-[7.5rem] shrink-0 snap-start flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-paper px-3 py-4 sm:w-[8.5rem]">
                  <span className="font-display text-[1.45rem] font-bold leading-none text-ink/25">—</span>
                  <span className="h-[13px] w-[68px] rounded-full bg-ink/10" />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
