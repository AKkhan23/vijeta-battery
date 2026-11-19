import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { dispatchDetail, dispatchIntro, dispatchPacking } from "@/lib/heritage";

export function DispatchPackaging() {
  return (
    <section
      id="dispatch"
      className="relative overflow-hidden border-t border-line bg-white"
      style={{ scrollMarginTop: "5.5rem" }}
    >
      <div className="container-x pb-12 pt-10 sm:pb-14 sm:pt-12">
        <div className="mx-auto max-w-[64rem] text-center">
          <Reveal>
            <h2 className="text-[clamp(2.2rem,7.2vw,5.6rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-royal">
              <span className="heading-gloss">{dispatchIntro.headline}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mx-auto mt-4 max-w-[42rem] text-balance text-[0.98rem] leading-[1.8] text-ink/60 sm:text-[1.04rem]">
              {dispatchIntro.body}
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-6">
          <Reveal className="lg:col-span-7">
            <figure className="group relative h-[18rem] overflow-hidden rounded-2xl bg-ink sm:h-[24rem] sm:rounded-3xl lg:h-full lg:min-h-[24rem]">
              <Image
                src="/dispatch-packaging.jpg"
                alt="Stacks of sealed VIJETA battery cartons marked handle with care."
                fill
                sizes="(max-width: 1024px) 92vw, 55vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="max-w-[26ch] font-sans text-[0.72rem] leading-relaxed text-white/80 sm:text-[0.76rem]">
                  {dispatchPacking.imageNote}
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 sm:rounded-3xl sm:p-8">
              <p className="eyebrow text-royal">{dispatchPacking.eyebrow}</p>
              <h3 className="mt-3 max-w-[18ch] font-display text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
                {dispatchPacking.title}
              </h3>
              <p className="mt-4 text-[0.94rem] leading-[1.82] text-ink/60">
                {dispatchPacking.body}
              </p>

              <ul className="mt-auto flex flex-wrap gap-2 border-t border-ink/10 pt-5 sm:pt-6">
                {dispatchPacking.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-royal/15 bg-white px-3 py-1.5 font-sans text-[0.68rem] font-semibold text-ink/60"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-6">
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 sm:rounded-3xl sm:p-8">
              <p className="eyebrow text-royal">{dispatchDetail.eyebrow}</p>
              <h3 className="mt-3 max-w-[18ch] font-display text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
                {dispatchDetail.title}
              </h3>
              <p className="mt-4 text-[0.94rem] leading-[1.82] text-ink/60">
                {dispatchDetail.body}
              </p>

              <ul className="mt-6 grid gap-2.5 border-t border-ink/10 pt-5 sm:grid-cols-2">
                {dispatchDetail.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[0.84rem] leading-snug text-ink/65"
                  >
                    <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-royal" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link href={dispatchDetail.link.href} className="link-arrow mt-auto pt-7 text-[0.8rem]">
                {dispatchDetail.link.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <figure className="group relative h-[16rem] overflow-hidden rounded-2xl bg-ink sm:h-[22rem] sm:rounded-3xl lg:h-full lg:min-h-[22rem]">
              <Image
                src="/dispatch-packaging-detail.jpg"
                alt="Close view of packed battery cartons marked and shrink-wrapped before dispatch."
                fill
                sizes="(max-width: 1024px) 92vw, 55vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="max-w-[28ch] font-sans text-[0.72rem] leading-relaxed text-white/80 sm:text-[0.76rem]">
                  {dispatchDetail.imageNote}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
