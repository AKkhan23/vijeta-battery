# VIJETA Batteries — website

Premium single-page website for VIJETA Batteries (Vijeta Accumulators and New Technologies),
built with Next.js 16, React 19, Tailwind CSS 4, Motion and a Three.js hero cell.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Enquiry form / mail setup

The form posts to `src/app/api/enquiry/route.ts`.

- With no SMTP credentials, enquiries are validated and appended to
  `.data/enquiries.jsonl` so nothing is lost during review. This folder is ignored
  by git and is not persistent on serverless hosts.
- Add SMTP credentials in `.env.local` (copy `.env.example`) and the same endpoint
  will email every enquiry to `MAIL_TO`.

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your@email.com
SMTP_PASS=app-password
MAIL_TO=vijetabatteries@gmail.com
MAIL_FROM="VIJETA Website <your@email.com>"
```

For Gmail use an App Password (2-step verification required), not the normal
account password. For shared hosting (cPanel/Hostinger/Zoho) use the mailbox SMTP
details from the host. On Vercel, add the same variables under Project → Settings →
Environment Variables, and keep SMTP configured because the serverless filesystem
is temporary.

## Pages

This is a multi-page site. Each URL renders its own page with its own metadata,
canonical tag and breadcrumb:

| Route | What is on it |
|---|---|
| `/` | Hero, factory intro, series preview, applications preview, technology teaser, stats, owner stories, CTAs |
| `/about` | Factory story, capabilities, vision & mission, stats |
| `/products` | Gold & Silver series, all six applications |
| `/technology` | Exploded-cell diagram and four engineering features |
| `/warranty` | Gold vs Silver cover, exclusions, claim steps |
| `/dealership` | Dealer benefits and a dealership enquiry form |
| `/faq` | Full FAQ with FAQPage structured data |
| `/contact` | Phones, WhatsApp, plant address and enquiry form |

The header is shared across pages (active link is highlighted), and the footer
links to every route. `src/components/site/PageHeader.tsx` and `PageCta.tsx`
provide the common masthead and closing CTA.

## Where things live

- `src/app/page.tsx` — home page composition and business structured data
- `src/app/<route>/page.tsx` — one file per route
- `src/components/site/` — sections, 3D hero, form, footer, page shell
- `src/lib/site.ts` — navigation, phones, address, products, FAQs, copy data
- `src/lib/seo.ts` — per-page metadata helper
- `src/app/api/enquiry/route.ts` — validation, rate limit, mail + local log
- `src/app/globals.css` — design tokens, type, buttons, marquee, texture

## Notes for the client

- Phone numbers, address and email are wired from `src/lib/site.ts`.
- Real product photography can replace the drawn battery illustrations later
  without touching layout.
- **Replace the sample owner stories in `testimonials` (`src/lib/site.ts`) with
  real, permissioned customer quotes before publishing.** They are there to
  show the design and tone, not to be presented as verified reviews.
- Vision & Mission copy lives in `visionMission` in `src/lib/site.ts`.
