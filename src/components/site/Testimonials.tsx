"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { GoogleRating } from "@/lib/googleReviews";

function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating);
  return (
    <span className="inline-flex items-center gap-0.5 text-gold" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((n) => (
        <svg key={n} viewBox="0 0 20 20" className={`h-3.5 w-3.5 ${n < filled ? "fill-current" : "fill-ink/10"}`} aria-hidden="true">
          <path d="m10 1.8 2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.6-5 2.6 1-5.6-4.1-4 5.6-.8L10 1.8Z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  const [data, setData] = useState<GoogleRating | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    const load = () => {
      // No point polling a background tab.
      if (document.hidden) return;
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
    const timer = setInterval(load, 10000);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, []);

  function move(direction: number) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-slide]");
    const step = card ? card.offsetWidth + 20 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  const reviews = data?.reviews ?? [];

  return (
    <section className="section-y border-y border-line bg-white">
      <div className="container-x">
        <Reveal>
          <SectionLabel index="06" text="Google reviews" />
        </Reveal>

        <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <h2 className="max-w-[16ch] text-[clamp(2.6rem,5vw,4.4rem)]">
              Trusted where it
              <br />
              actually <em className="heading-gloss accent-serif font-normal text-royal">matters.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-[25rem] lg:text-right">
            <p className="prose-lede">
              Real customers, real ratings — pulled straight from our Google listing.
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 lg:justify-end">
              <span className="font-display text-[1.2rem] font-bold leading-none text-ink">
                {data ? data.rating.toFixed(1) : "5.0"}
              </span>
              <Stars rating={data?.rating ?? 5} />
              <span className="font-sans text-[0.78rem] text-ink/50">
                {data ? `${data.count} Google reviews` : "Google reviews"}
              </span>
            </div>
            <div className="mt-5 flex gap-2 lg:justify-end">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous Google review"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-300 hover:border-royal hover:bg-royal hover:text-white"
              >
                <ArrowUpRight className="h-4 w-4 -rotate-[135deg]" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next Google review"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-300 hover:border-royal hover:bg-royal hover:text-white"
              >
                <ArrowUpRight className="h-4 w-4 rotate-45" />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          ref={railRef}
          role="region"
          aria-label="Google reviews"
          tabIndex={0}
          className="no-scrollbar mt-11 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-1"
        >
          {reviews.map((review, index) => (
            <figure
              key={`${review.name}-${index}`}
              data-slide
              data-torch
              className="torch-card flex w-[88%] shrink-0 snap-start flex-col p-6 sm:w-[64%] sm:p-8 lg:w-[43%]"
            >
              <div className="flex items-start justify-between gap-4">
                <Stars rating={review.rating} />
                <span className="font-sans font-medium text-[0.7rem] text-royal">GOOGLE REVIEW</span>
              </div>

              <blockquote className="mt-6 flex-1 font-serif text-[clamp(1.22rem,1.7vw,1.5rem)] leading-[1.32] tracking-[-0.012em] text-ink">
                “{review.text ?? `Gave a ${review.rating}-star rating on Google.`}”
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-royal/15 pt-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-royal font-display text-[0.85rem] font-bold text-white">
                  {review.name.slice(0, 1).toUpperCase()}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[1rem] font-bold tracking-tight">{review.name}</span>
                  <span className="mt-1 block text-[0.8rem] text-ink/55">
                    Verified Google review · {review.time}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <Reveal className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <a
            href={data?.url ?? "https://www.google.com/maps/search/?api=1&query=VIJETA%20ACCUMULATORS%20AND%20NEW%20TECHNOLOGIES"}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            Read all reviews on Google
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="font-sans font-medium text-[0.75rem] text-ink/40">
            Ratings shown exactly as they appear on Google.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
