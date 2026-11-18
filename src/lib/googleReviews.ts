/**
 * Live Google Business data for the VIJETA Accumulators listing.
 *
 * Google exposes review text only through the Places API (key + billing) or to
 * signed-in Maps users. The public place endpoint still exposes the real
 * reviewer names, star ratings, timestamps and profile photos, which is what
 * we render. If Google ever adds text to a review, it is picked up too.
 *
 * Place reference from the client's own Google listing:
 * 0x3962fd935ebaf731:0xe5e099dfa7ec0a1b
 */

const PLACE_ID = "0x3962fd935ebaf731:0xe5e099dfa7ec0a1b";
const MAPS_URL = `https://www.google.com/maps?ftid=${PLACE_ID}&hl=en&gl=in`;
const REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=VIJETA%20ACCUMULATORS%20AND%20NEW%20TECHNOLOGIES";

export type GoogleReview = {
  name: string;
  rating: number;
  time: string;
  text?: string;
};

export type GoogleRating = {
  name: string;
  rating: number;
  count: number;
  url: string;
  live: boolean;
  reviews: GoogleReview[];
};

// Verified directly from the live listing while wiring this up. Used only when
// Google is unreachable, so the section never shows invented people or stars.
const FALLBACK: GoogleRating = {
  name: "VIJETA Accumulators and New Technologies",
  rating: 5,
  count: 2,
  url: REVIEWS_URL,
  live: false,
  reviews: [
    { name: "Azim Khan", rating: 5, time: "Google review" },
    { name: "Prashant Kumar", rating: 5, time: "Google review" },
  ],
};

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

function parseAggregate(payload: string): Pick<GoogleRating, "rating" | "count"> | null {
  const reviews = [...payload.matchAll(/\[null,"(\d+) reviews"/g)];
  if (!reviews.length) return null;

  const match = reviews[reviews.length - 1];
  const start = match.index ?? 0;
  const tail = payload.slice(start, start + 240);
  const ratingMatch = tail.match(/,null,null,null,([0-5](?:\.\d+)?),(\d+)\]/);
  if (!ratingMatch) return null;

  const rating = Number(ratingMatch[1]);
  const count = Number(match[1]);
  if (!Number.isFinite(rating) || rating < 1 || rating > 5 || !Number.isFinite(count)) return null;
  return { rating, count };
}

function parseReviews(payload: string): GoogleReview[] {
  const start = payload.indexOf("Rate and review");
  const end = payload.indexOf("other_user_google_review_posts");
  const region = payload.slice(start > -1 ? start : 0, end > -1 ? end : payload.length);
  if (!region) return [];

  const result: GoogleReview[] = [];
  const names = [...region.matchAll(/\["([^"\\]{2,70})","https:\/\/lh3\.googleusercontent\.com/g)];

  for (const found of names) {
    const name = found[1];
    if (!name || /^(Google|VIJETA)/i.test(name)) continue;
    const from = found.index ?? 0;
    const blockAll = region.slice(from, from + 4000);

    const timeMatch = blockAll.match(/"([^"\\]{1,40}(?:ago|hour|hours|day|days|week|weeks|month|months|year|years))"/);
    // Keep the search window inside this single review; the business address
    // appears much later in the payload and must never become review text.
    const block = timeMatch
      ? blockAll.slice(0, (timeMatch.index ?? 0) + 80)
      : blockAll.slice(0, 1200);
    const starMatch = block.match(/\[\[([1-5])\]\]/);
    const rating = starMatch ? Number(starMatch[1]) : 5;

    // Most reviews here are star-only. If Google ever stores written text,
    // pick the first human sentence in the block that is not a token/URL/label.
    const candidates = [...block.matchAll(/"([^"\\]{12,600})"/g)]
      .map((match) => match[1])
      .filter((value) => {
        if (value === name || value.split(/\s+/).length < 3) return false;
        if (/^https?:|^www\.|^2ah|^0ah|^Ci9|^ChI|^[\d\s\-:.]+$/.test(value)) return false;
        if (/\bago\b|review|Google|Contributor|https|lh3\.googleusercontent/i.test(value)) return false;
        return /[a-zA-Z]{3,}/.test(value) && /\s/.test(value);
      });
    const text = candidates[0];

    if (result.some((item) => item.name === name)) continue;
    result.push({
      name,
      rating: Number.isFinite(rating) ? rating : 5,
      time: timeMatch ? timeMatch[1] : "Google review",
      text,
    });
    if (result.length >= 6) break;
  }

  return result;
}

async function fetchGoogleRating(): Promise<GoogleRating> {
  try {
    const pageResponse = await fetch(MAPS_URL, {
      headers: { "User-Agent": UA, "Accept-Language": "en-IN,en" },
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
    if (!pageResponse.ok) return FALLBACK;

    const html = await pageResponse.text();
    const hrefs = [
      ...new Set(
        [...html.matchAll(/href="(\/maps\/preview\/place\?[^"]+)"/g)].map((match) =>
          match[1].replaceAll("&amp;", "&"),
        ),
      ),
    ];

    for (const href of hrefs) {
      try {
        const dataResponse = await fetch(`https://www.google.com${href}`, {
          headers: { "User-Agent": UA, "Accept-Language": "en-IN,en" },
          signal: AbortSignal.timeout(8000),
          cache: "no-store",
        });
        if (!dataResponse.ok) continue;

        const payload = await dataResponse.text();
        const aggregate = parseAggregate(payload);
        const reviews = parseReviews(payload);
        if (!reviews.length) continue;

        // Google's payload varies: sometimes the "N reviews" label is present,
        // sometimes only the review objects are. Derive from the reviews
        // themselves when the label is missing.
        const fallbackCount = Math.max(aggregate?.count ?? 0, reviews.length);
        const fallbackRating = reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length;

        return {
          name: "VIJETA Accumulators and New Technologies",
          rating: aggregate?.rating ?? Math.round(fallbackRating * 10) / 10,
          count: fallbackCount,
          url: REVIEWS_URL,
          live: true,
          reviews,
        };
      } catch {
        /* try the next preview link from the Maps page */
      }
    }

    return FALLBACK;
  } catch {
    return FALLBACK;
  }
}

// Short in-process cache: keeps Google from being hammered by every visitor
// while still surfacing a newly published review within ~10 seconds.
const CACHE_TTL = 10_000;
let cached: { value: GoogleRating; at: number } | null = null;

export async function getGoogleRating(): Promise<GoogleRating> {
  const now = Date.now();
  if (cached && now - cached.at < CACHE_TTL) return cached.value;
  const value = await fetchGoogleRating();
  // Never cache a fallback — one transient Google hiccup must not freeze the
  // section while a new review is being published.
  if (value.live) cached = { value, at: Date.now() };
  return value;
}
