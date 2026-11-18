/**
 * Live Google Business data for the VIJETA Accumulators listing.
 *
 * Google only exposes review *text* through the Places API (key + billing) or
 * to signed-in Maps users. The public place endpoint below is enough for the
 * aggregate star rating and review count, which is what we render. Individual
 * reviews are linked out to Google rather than copied or faked.
 *
 * Place reference comes from the client's own Google listing:
 * 0x3962fd935ebaf731:0xe5e099dfa7ec0a1b
 */

const PLACE_ID = "0x3962fd935ebaf731:0xe5e099dfa7ec0a1b";
const MAPS_URL = `https://www.google.com/maps?ftid=${PLACE_ID}&hl=en`;
const REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=VIJETA%20ACCUMULATORS%20AND%20NEW%20TECHNOLOGIES";

export type GoogleRating = {
  name: string;
  rating: number;
  count: number;
  url: string;
  live: boolean;
};

// Verified directly from the listing while wiring this up. Used only if
// Google is unreachable, so the section never shows invented numbers.
const FALLBACK: GoogleRating = {
  name: "VIJETA Accumulators and New Technologies",
  rating: 5,
  count: 2,
  url: REVIEWS_URL,
  live: false,
};

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

function parsePlacePayload(payload: string): Pick<GoogleRating, "rating" | "count"> | null {
  // The review block sits just before this place's ID in Google's payload.
  // Using the ID anchor avoids picking up ratings of nearby suggested places.
  const placeIndex = payload.indexOf(PLACE_ID);
  const region = placeIndex > -1 ? payload.slice(0, placeIndex + 240) : payload;
  const matches = [...region.matchAll(/\[null,"(\d+) reviews"/g)];
  if (!matches.length) return null;

  const last = matches[matches.length - 1];
  const start = last.index ?? 0;
  const tail = payload.slice(start, start + 240);
  const ratingMatch = tail.match(/,null,null,null,([0-5](?:\.\d+)?),(\d+)\]/);
  if (!ratingMatch) return null;

  const rating = Number(ratingMatch[1]);
  const count = Number(last[1]);
  if (!Number.isFinite(rating) || rating < 1 || rating > 5 || !Number.isFinite(count)) {
    return null;
  }
  return { rating, count };
}

export async function getGoogleRating(): Promise<GoogleRating> {
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
        const parsed = parsePlacePayload(await dataResponse.text());
        if (parsed) {
          return {
            name: "VIJETA Accumulators and New Technologies",
            rating: parsed.rating,
            count: parsed.count,
            url: REVIEWS_URL,
            live: true,
          };
        }
      } catch {
        /* try the next preview link from the Maps page */
      }
    }

    return FALLBACK;
  } catch {
    return FALLBACK;
  }
}
