/**
 * Live Google Business reviews for the VIJETA Accumulators listing.
 *
 * Every value returned here is parsed from Google's public place payload at
 * request time. There is NO hardcoded fallback data — if Google cannot be
 * reached, the section simply shows an empty state with a link to the listing.
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

export const GOOGLE_URL = REVIEWS_URL;

function empty(): GoogleRating {
  return {
    name: "VIJETA Accumulators and New Technologies",
    rating: 0,
    count: 0,
    url: REVIEWS_URL,
    live: false,
    reviews: [],
  };
}

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
    // Stars can sit a little further out; read them from the whole review
    // window. Text is read from a tight window around the timestamp so the
    // business address later in the payload can never become review text.
    // Google writes this as [[4],null,...], [[5]] or occasionally a decimal.
    const starMatch = blockAll.match(/\[\[([1-5](?:\.\d+)?)(?:,|\])/);
    const parsedRating = starMatch ? Number(starMatch[1]) : 0;
    const rating = Math.min(5, Math.max(0, Math.round(parsedRating * 10) / 10));

    // Google stores the written text as [["review text",null,[0,length]]].
    const direct = blockAll.match(/\[\["([^"\\]{5,600})",null,\[0,\d+\]\]\]/);
    const candidates = direct
      ? [direct[1]]
      : [...blockAll.matchAll(/"([^"\\]{12,600})"/g)]
          .map((match) => match[1])
      .filter((value) => {
        if (value === name || value.split(/\s+/).length < 3) return false;
        if (/^https?:|^www\.|^2ah|^0ah|^Ci9|^ChI|^[\d\s\-:.]+$/.test(value)) return false;
        if (/\bago\b|review|Google|Contributor|https|lh3\.googleusercontent/i.test(value)) return false;
        if (/Scheme no|Industrial Estate|Chandan Nagar|Indore|Madhya Pradesh|Plot No|PR4H|452002/i.test(value)) return false;
        return /[a-zA-Z]{3,}/.test(value) && /\s/.test(value);
      });

    if (result.some((item) => item.name === name)) continue;
    result.push({
      name,
      rating: Number.isFinite(rating) ? rating : 0,
      time: timeMatch ? timeMatch[1] : "",
      text: candidates[0],
    });
    if (result.length >= 50) break;
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
    if (!pageResponse.ok) return empty();

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

        const ratings = reviews.map((item) => item.rating).filter((value) => value > 0);
        const average = ratings.length
          ? Math.round((ratings.reduce((sum, value) => sum + value, 0) / ratings.length) * 10) / 10
          : 0;

        return {
          name: "VIJETA Accumulators and New Technologies",
          rating: aggregate?.rating ?? average,
          count: Math.max(aggregate?.count ?? 0, reviews.length),
          url: REVIEWS_URL,
          live: true,
          reviews,
        };
      } catch {
        /* try the next preview link from the Maps page */
      }
    }

    return empty();
  } catch {
    return empty();
  }
}

// Short in-process cache so a busy site doesn't hammer Google. A newly posted
// review appears within ~10 seconds. Empty results are never cached.
const CACHE_TTL = 5_000;
let cached: { value: GoogleRating; at: number } | null = null;

export async function getGoogleRating(): Promise<GoogleRating> {
  const now = Date.now();
  if (cached && now - cached.at < CACHE_TTL) return cached.value;
  const value = await fetchGoogleRating();
  if (value.live) cached = { value, at: Date.now() };
  return value;
}
