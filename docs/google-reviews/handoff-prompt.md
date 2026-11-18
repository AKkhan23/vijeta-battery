# Handoff Prompt — Dynamic Google Rating & Reviews Section (Next.js 16)

Copy this whole document and give it to the developer/AI working on the other website. It already contains every bug we hit and the exact fixes, so do not re-discover them.

---

## Goal

Replace a static/hardcoded testimonial section with a **live Google Business reviews section**:

- Show the real aggregate star rating and review count.
- Show review cards in the SAME design as the existing testimonial section (carousel arrows, quote card, author line).
- Each card must show the **reviewer's real name**, their **real star rating**, **relative time**, and **written text if Google has any**.
- When a user posts a new review or **edits an existing rating (e.g. 5★ → 4★, 3★ → 5★, 5★ → 2.5)**, the site must reflect it automatically within seconds.
- **Absolutely no hardcoded review data** — no fake names, no fake ratings, no static fallback quotes.

## Environment assumptions

- Next.js 16 App Router, React 19, TypeScript strict, Tailwind v4.
- Theme tokens in `src/app/globals.css` (paper/ink/royal/gold/mist/line). Reuse the existing testimonial markup and classes so the design does not change.
- The Google listing is identified by its place reference from the client's Google URL fragment `lrd=0x...:0x...` (example: `0x3962fd935ebaf731:0xe5e099dfa7ec0a1b`). Do not use a Places API key unless the client explicitly provides one.

## Architecture to implement

### 1. Server lib — `src/lib/googleReviews.ts`

Export types:

```ts
export type GoogleReview = { name: string; rating: number; time: string; text?: string };
export type GoogleRating = {
  name: string; rating: number; count: number; url: string;
  live: boolean; reviews: GoogleReview[];
};
export const GOOGLE_URL = "https://www.google.com/maps/search/?api=1&query=<URL-encoded business name>";
```

Flow:

1. `GET https://www.google.com/maps?ftid=<PLACE_ID>&hl=en&gl=in` with a browser User-Agent.
2. Extract **all** `href="/maps/preview/place?..."` links (decode `&amp;`), dedupe them.
3. For each link, `GET https://www.google.com` + href. The response is a JSONP-ish payload starting with `)]}'`.
4. Parse and return live data. If anything fails, return an **empty** result (`rating:0, count:0, reviews:[]`) — never static names or stars.

### 2. Parsing rules — ALREADY SOLVED, copy these exactly

**Aggregate rating/count** — Google sometimes omits the label:

```ts
const m = payload.match(/\[null,"(\d+) reviews"/);
// rating/count follow as ,null,null,null,5,2]
// If the label is missing, derive:
// count = Math.max(aggregateCount, reviews.length)
// rating = average of parsed review ratings, rounded to 1 decimal
```

**Review region:**

```ts
const start = payload.indexOf("Rate and review");
const end = payload.indexOf("other_user_google_review_posts");
const region = payload.slice(start > -1 ? start : 0, end > -1 ? end : payload.length);
```

**Reviewer names** (this is how Google encodes them):

```ts
const names = [...region.matchAll(/\["([^"\\]{2,70})","https:\/\/lh3\.googleusercontent\.com/g)];
```

**CRITICAL — star parsing bug we already fixed.** Google writes stars as `[[4],null,...]` or `[[5]]`. A naive `/\[\[([1-5])\]\]/` only matches `[[5]]` and silently makes every review 5★. Use:

```ts
const starMatch = block.match(/\[\[([1-5](?:\.\d+)?)(?:,|\])/);
const rating = Math.min(5, Math.max(0, Math.round(Number(starMatch?.[1] ?? 0) * 10) / 10));
```

This handles 1–5 and decimals such as 2.5. Never default to 5.

**Review text** — Google stores it as `[["text",null,[0,length]]]`:

```ts
const direct = block.match(/\[\["([^"\\]{5,600})",null,\[0,\d+\]\]\]/);
```

Use `direct[1]` when present. Only if absent, fall back to a heuristic that EXCLUDES: URLs, tokens (`2ah…`, `0ah…`, `Ci9…`, `ChI…`), timestamps (`ago`), the words `review/Google/Contributor`, the reviewer's own name, and address fragments (`Scheme no`, `Industrial Estate`, `Chandan Nagar`, `Indore`, `Madhya Pradesh`, `Plot No`, `PR4H`, `452002`). Without these filters an address or another reviewer's name becomes the quote.

**Star position:** stars appear *after* the timestamp in the payload. Do not truncate the review block too early (we tried `time + 80` and lost the rating). Use the whole per-review window (~4000 chars) for stars and text, with the filters above to keep the address out.

**Time:** `/"([^"\\]{1,40}(?:ago|hour|hours|day|days|week|weeks|month|months|year|years))"/` → e.g. `13 minutes ago`, `a week ago`.

**Completeness:** do not cap at 6 reviews; use 50. Keep Google's order.

### 3. API route — `src/app/api/google-reviews/route.ts`

```ts
import { connection, NextResponse } from "next/server";
import { getGoogleRating } from "@/lib/googleReviews";

export async function GET() {
  await connection(); // REQUIRED with Next 16 cacheComponents;
                      // `export const dynamic = "force-dynamic"` is REJECTED at build.
  return NextResponse.json(await getGoogleRating(), {
    headers: { "Cache-Control": "no-store" },
  });
}
```

- No CDN cache (`no-store`). 
- In-process cache TTL = **5 seconds**, and **cache only successful live results**. Never cache an empty result — one transient Google hiccup would freeze a newly published review.

### 4. Client component — reuse the old testimonial UI

- In `useEffect`: fetch `/api/google-reviews` with `cache: "no-store"` immediately, then `setInterval(load, 5000)`.
- **Do not check `document.hidden`** — the client explicitly wants polling to keep running.
- Only call `setData` when rating/count/reviews actually changed (compare with `JSON.stringify`), otherwise keep the previous state reference to avoid needless re-renders.
- Render `rating` with one decimal, stars from `Math.round(rating)`, and one card per review.
- FINAL DESIGN (client changed it): only stars are shown in the review area. Render a 3-across horizontal slider of SMALL rounded tiles; each tile contains ONLY the rating NUMBER (e.g. `4.0`) and its stars — no reviewer name, no review text, no timestamp anywhere. Add prev/next round arrow buttons for the slider. Add one prominent highlighted button "Live Google rating" (Google G mark + arrow, royal bg + gold ring) that opens the Google listing in a new tab. Show the aggregate number + stars above the slider.
- If `reviews.length === 0`: show a neutral loading state with small placeholder tiles and the Google button — no fake numbers and no fake names.
- Keep `role="region"`, focusable rail, snap-x scrolling, and `prefers-reduced-motion`.
- MOBILE GOTCHA: any chat/input inside a full-screen panel must use `text-base sm:text-[13px]` (16px minimum on mobile). A 13px input makes iOS/mobile Chrome auto-zoom on focus, which changes `documentElement.scrollWidth` (390 → 496) and looks like a horizontal-overflow bug.

### 5. Next 16 dev-server gotcha (we hit this)

The page kept reloading itself and the preloader flashed repeatedly because Next 16 blocks the HMR websocket for `127.0.0.1`/LAN origins. Add to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ["127.0.0.1", "<LAN-IP-if-used>"],
};
```

If HMR still misbehaves, delete `.next` and restart `npm run dev`.

## Verification checklist

1. `npm run build` passes.
2. `GET /api/google-reviews` returns `live:true`, real `count`, real `rating`, and `reviews[]` with **actual per-review ratings**.
3. Edit a Google review from 5★ → 4★ (or any value); within ~5–15 s the card shows 4 stars and the aggregate recalculates (e.g. 4.7).
4. Post a new review with text; within seconds a new card appears with name, stars, time and text.
5. No hardcoded review names or ratings anywhere in `src/` (grep for them).
6. Browser test: no console errors, no horizontal overflow, mobile works.

## Honest limitation to tell the client

This reads Google's **public anonymous** place payload. A brand-new or edited review appears on our site only after Google itself publishes it publicly — that can take minutes. Guaranteed instant access to edits/new reviews requires the **official Google Places API** (API key + billing). No code trick can display data Google does not serve.

## Rules

- No API keys in client code or in prompts; keys only in server env vars, never printed.
- Never fabricate a review, reviewer, star rating or quote.
- Keep the existing site design and navigation untouched.
