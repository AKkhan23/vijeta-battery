import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bolt } from "@/components/ui/Icons";
import { ourWorkMedia } from "@/lib/our-work-media";

/**
 * Compact charging banner for the factory tour. One real photo, a short
 * heading and a clear route through to /chargers. No gloss, no motion.
 */
export function FactoryChargers() {
  return (
    <section
      id="chargers"
      aria-labelledby="chargers-title"
      className="relative overflow-hidden border-t border-line bg-white"
    >
      <div className="container-x grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-royal/10 bg-[#eef2fb] sm:aspect-[5/4] lg:aspect-[4/3]">
            <Image
              src={ourWorkMedia.chargers.bench.src}
              alt={ourWorkMedia.chargers.bench.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-royal">
            At the workbench · Vijeta factory floor
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-royal text-white"
            >
              <Bolt className="h-4 w-4" />
            </span>
            <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.2em] text-royal">
              Charging solutions
            </p>
          </div>

          <h2
            id="chargers-title"
            className="ow-static mt-5 max-w-[19ch] font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.035em]"
          >
            Built for the work behind every charge.
          </h2>

          <p className="mt-5 max-w-[34rem] font-sans text-[0.98rem] leading-[1.75]">
            Hand-wired controls, formed cabinets and bench-built harnesses — assembled on the same
            floor as our batteries.
          </p>

          <Link href="/chargers" className="btn btn-primary mt-7 w-fit">
            Explore charging solutions
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
