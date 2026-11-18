"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { GoogleRating } from "@/lib/googleReviews";

function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating);
  return (
    <span className="inline-flex items-center gap-0.5 text-gold" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((n) => (
        <svg
          key={n}
          viewBox="0 0 20 20"
          className={`h-[18px] w-[18px] ${n < filled ? "fill-current" : "fill-ink/10"}`}
          aria-hidden="true"
        >
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
      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#4285f4] via-[#34a853] to-[#ea4335] font-display text-[1.5rem] font-extrabold text-white shadow-sm"
    >
      G
    </span>
  );
}

export function Testimonials() {
  const [data, setData] = useState<GoogleRating | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/google-reviews", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((json: GoogleRating | null) => {
        if (active && json && typeof json.rating === "number") setData(json);
      })
      .catch(() => {
        /* the section keeps its link-only state */
      });
    return () => {
      active = false;
    };
  }, []);

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
              Our Google rating is shown live — real customers, real reviews, no cherry-picking.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-11">
          <div className="torch-card flex flex-col gap-6 rounded-3xl border border-line bg-paper p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-5">
              <GoogleMark />
              <div>
                <p className="font-sans text-[0.75rem] font-medium uppercase tracking-[0.12em] text-ink/45">
                  Google Business listing
                </p>
                <h3 className="mt-1 text-[1.05rem] font-semibold tracking-tight text-ink">
                  {data?.name ?? "VIJETA Accumulators and New Technologies"}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <span className="font-display text-[2rem] font-bold leading-none tracking-tight text-ink">
                    {data ? data.rating.toFixed(1) : "—"}
                  </span>
                  <Stars rating={data?.rating ?? 0} />
                  <span className="font-sans text-[0.82rem] text-ink/55">
                    {data ? `${data.count} Google review${data.count === 1 ? "" : "s"}` : "Loading rating…"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 sm:items-end">
              <span className="inline-flex items-center gap-2 font-sans text-[0.72rem] font-medium text-ink/45">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                From Google · refreshed hourly
              </span>
              <a
                href={data?.url ?? "https://www.google.com/maps/search/?api=1&query=VIJETA%20ACCUMULATORS%20AND%20NEW%20TECHNOLOGIES"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary h-11 px-5 text-[0.85rem]"
              >
                Read all reviews on Google
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <p className="max-w-[24rem] text-right font-sans text-[0.7rem] leading-relaxed text-ink/40">
                Individual review text is shown on Google, so nothing here is edited or invented.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <p className="font-sans font-medium text-[0.75rem] text-ink/40">
            Looking for the nearest authorised dealer?
          </p>
          <Link href="/contact" className="link-arrow">
            Ask our team
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
