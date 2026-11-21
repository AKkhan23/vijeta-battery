import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowUpRight, Bolt } from "@/components/ui/Icons";
import { chargerProducts } from "@/lib/our-work-media";
import { pageMetadata } from "@/lib/seo";

/** Supplied panoramic banner — the same image used across the site's product headers. */
const CHARGERS_HERO =
  "/battery-charging-car-glow-charging-icon-panoramic-banner-copy-space-black-background_41472-1427.avif";

export const metadata = pageMetadata({
  title: "Charging solutions — for business",
  description:
    "Vijeta battery chargers, built on our factory floor. Explore the control electronics, power stage, cabinets and bench assembly behind every unit — and talk to us about bulk supply.",
  path: "/chargers",
});

/** Application types drawn from the battery ranges Vijeta already builds for. */
const chargingTypes = [
  {
    label: "Workshop & counter",
    detail: "Day-to-day top-ups for batteries on the bench or at the dealer counter.",
  },
  {
    label: "Two-wheelers & rickshaws",
    detail: "Compact cabinets for the small battery sets that run the daily route.",
  },
  {
    label: "Cars & SUVs",
    detail: "Chargers matched to the automotive battery range we build in-house.",
  },
  {
    label: "Trucks & industry",
    detail: "Larger transformer-based units for commercial and industrial battery banks.",
  },
];

export default function ChargersPage() {
  return (
    <main id="main" className="chargers-page">
      {/* ── Product-style image banner: short copy, no gloss, no motion ──── */}
      <PageHeader
        eyebrow="Charging solutions"
        index="01"
        crumb="Chargers"
        path="/chargers"
        image={CHARGERS_HERO}
        imageFit="cover"
        compact
        title={
          <>
            Power for every <span className="text-[#bcd6ff]">charge.</span>
          </>
        }
        intro="Assembled on the same floor as our batteries — dependable, repeatable charging for dealers, fleets and industrial sites."
        meta={[
          { label: "Built", value: "In-house" },
          { label: "Controls", value: "Hand-wired" },
          { label: "Power stage", value: "Transformer" },
          { label: "Before dispatch", value: "Final check" },
        ]}
      />

      {/* ── Charging types ───────────────────────────────────────────────── */}
      <section aria-labelledby="charge-types-title" className="border-b border-line bg-white">
        <div className="container-x py-10 sm:py-12 lg:py-16">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-royal text-white"
            >
              <Bolt className="h-4 w-4" />
            </span>
            <p className="eyebrow font-semibold text-royal">CHARGING TYPES</p>
          </div>

          <h2
            id="charge-types-title"
            className="mt-4 max-w-[26ch] font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.04em]"
          >
            Chargers for the batteries you work with.
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {chargingTypes.map((type, i) => (
              <article key={type.label} className="rounded-2xl border border-royal/10 bg-[#f6f8fe] p-4 sm:p-5">
                <span className="font-sans text-[0.7rem] font-bold tracking-[0.18em] text-royal">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-[1.2rem] font-semibold leading-tight">
                  {type.label}
                </h3>
                <p className="mt-2 font-sans text-[0.86rem] leading-relaxed text-ink/60">
                  {type.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product cards: real photographs, photo-grounded detail ───────── */}
      <section aria-labelledby="charger-range-title" className="bg-white">
        <div className="container-x py-10 sm:py-12 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow font-medium text-royal">THE RANGE</p>
              <h2
                id="charger-range-title"
                className="mt-3 max-w-[24ch] font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.04em]"
              >
                Every stage, up close
              </h2>
            </div>
            <p className="max-w-[22rem] font-sans text-[0.85rem] leading-relaxed">
              A look at the enclosures, electronics and workmanship that go into every Vijeta charger.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chargerProducts.map((product) => (
              <article
                key={product.code}
                className="flex h-full flex-col overflow-hidden rounded-[24px] border border-royal/10 bg-white shadow-[0_24px_60px_-48px_rgba(20,54,200,0.5)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#eef2fb]">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-ink/70 px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {product.code} · {product.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="max-w-[18ch] font-display text-[1.3rem] font-semibold leading-tight tracking-[-0.025em] sm:text-[1.4rem]">
                    {product.title}
                  </h3>
                  <p className="mt-3 font-sans text-[0.86rem] leading-relaxed sm:text-[0.9rem]">
                    {product.detail}
                  </p>
                  <div className="mt-5 border-t border-royal/10 pt-4">
                    <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-royal">
                      Vijeta charging range
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2B enquiry band ──────────────────────────────────────────────── */}
      <section className="border-t border-line bg-[#f6f8fe]">
        <div className="container-x flex flex-col gap-4 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-[26ch] font-display text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
              Need chargers for your business?
            </h2>
            <p className="prose-lede mt-3 max-w-[36rem] !text-[0.94rem] sm:!text-[1rem]">
              Talk to us about bulk orders, dealer supply and matching a charger to your battery range.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary w-fit">
            Talk to our team
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
