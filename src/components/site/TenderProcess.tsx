import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import {
  clientGroups,
  documentKit,
  governmentClientLogos,
  tenderIntro,
  tenderSteps,
} from "@/lib/heritage";

export function TenderProcess() {
  const government = clientGroups[0];

  return (
    <section
      id="government"
      className="relative overflow-hidden bg-white"
      style={{ scrollMarginTop: "5.5rem" }}
    >
      <div className="container-x section-y">
        <div className="mx-auto max-w-[62rem] text-center">
          <div className="grid grid-cols-2 items-center gap-x-4 gap-y-6 sm:gap-x-10 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
            <Reveal className="order-2 flex justify-center lg:order-1">
              <Image
                src={governmentClientLogos[0].src}
                alt={governmentClientLogos[0].alt}
                width={governmentClientLogos[0].width}
                height={governmentClientLogos[0].height}
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 128px"
                className="h-20 w-auto max-w-full object-contain mix-blend-multiply sm:h-24 lg:h-28"
              />
            </Reveal>

            <Reveal className="order-1 col-span-2 lg:order-2 lg:col-span-1">
              <h2 className="text-balance text-[clamp(2.05rem,5vw,4rem)] font-semibold leading-[1.03] tracking-[-0.035em]">
                <span className="heading-gloss text-royal">{tenderIntro.eyebrow}</span>
              </h2>
            </Reveal>

            <Reveal className="order-3 flex justify-center">
              <Image
                src={governmentClientLogos[1].src}
                alt={governmentClientLogos[1].alt}
                width={governmentClientLogos[1].width}
                height={governmentClientLogos[1].height}
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 128px"
                className="h-20 w-auto max-w-full object-contain mix-blend-multiply sm:h-24 lg:h-28"
              />
            </Reveal>
          </div>

          <Reveal delay={0.06}>
            <p className="mx-auto mt-5 max-w-[46rem] text-balance text-[0.98rem] leading-[1.8] text-ink/60 sm:text-[1.04rem]">
              {tenderIntro.body}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 border-b border-royal/30 pb-1 text-[0.82rem] font-semibold text-royal transition-colors hover:border-royal"
            >
              Talk to the tender desk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3">
              <p className="eyebrow text-ink">How a tender runs</p>
              <p className="font-sans text-[0.72rem] text-ink/35">Five stages, plant to site</p>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {tenderSteps.map((step, index) => (
              <Reveal key={step.index} delay={index * 0.05} y={14}>
                <div className="group relative h-full overflow-hidden rounded-lg border border-line bg-white p-5 transition-colors duration-300 hover:border-ink/30">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(240px_circle_at_50%_-10%,rgba(20,54,200,0.07),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <span className="font-sans text-[0.7rem] font-medium text-ink/35">
                      {step.index}
                    </span>
                    <h3 className="mt-3 text-[0.98rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.8rem] leading-[1.65] text-ink/55">{step.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 border-t border-ink/10 pt-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-ink">Documents in the bid set</p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {documentKit.map((doc) => (
                <li
                  key={doc.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-2.5"
                >
                  <span className="text-[0.82rem] leading-snug text-ink/75">{doc.label}</span>
                  <span className="text-[0.68rem] text-ink/35">{doc.access}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6">
            <p className="eyebrow text-ink">{government.label}</p>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {government.names.map((name) => (
                <li
                  key={name}
                  className="border-b border-line py-2 text-[0.78rem] leading-snug text-ink/60 transition-colors duration-200 hover:text-ink"
                >
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.72rem] leading-relaxed text-ink/35">
              Telecom, private power and EPC buyers are supplied the same way.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="group relative flex flex-wrap items-center justify-between gap-4 overflow-hidden rounded-lg border border-line bg-paper p-5 transition-colors duration-300 hover:border-ink/25">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_circle_at_15%_0%,rgba(20,54,200,0.08),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <p className="relative max-w-[46ch] text-[0.85rem] leading-relaxed text-ink/60">
              Send the tender number and line items. The desk confirms fit and documentation before
              you bid.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[0.82rem] font-semibold text-ink transition-colors hover:border-ink"
            >
              Send a tender enquiry
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
