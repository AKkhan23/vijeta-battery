import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bolt } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { StaticBattery } from "./StaticBattery";

const applications = [
  {
    image: "/applications/car-suv.jpeg",
    category: "Automotive",
    title: "Car & SUV",
    copy: "Reliable starting power for petrol, diesel and CNG vehicles, from everyday commutes to long journeys.",
    benefits: ["Quick & reliable start", "Up to 36 months cover"],
  },
  {
    image: "/applications/tractor.jpeg",
    category: "Agriculture",
    title: "Tractor",
    copy: "Dependable cranking power for demanding agricultural work, long field hours and tough conditions.",
    benefits: ["High cranking power", "Built for heavy load"],
  },
  {
    image: "/applications/auto-rickshaw.jpeg",
    category: "Urban Mobility",
    title: "Auto Rickshaw",
    copy: "Reliable power for everyday three-wheeler operations, from early starts to busy daily routes.",
    benefits: ["Vibration resistant", "Low maintenance"],
  },
  {
    image: "/applications/commercial.jpeg",
    category: "Commercial",
    title: "Commercial & HCV",
    copy: "Dependable battery performance for trucks, buses and commercial vehicles operating under demanding conditions.",
    benefits: ["High durability", "Longer backup"],
  },
];

function CheckMark() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3.5 w-3.5 shrink-0">
      <circle cx="8" cy="8" r="7" fill="#1436C8" />
      <path d="m4.9 8.1 2 2 4.2-4.3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M10 2.3 16.5 5v5.1c0 4-2.7 6.5-6.5 7.6-3.8-1.1-6.5-3.6-6.5-7.6V5L10 2.3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="m7.2 10 1.9 1.9 3.8-3.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LifeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 6v4.3l2.8 1.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WarrantyIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="m10 2 2.1 1.5 2.6-.2.8 2.5 2.1 1.5-1 2.5 1 2.5-2.1 1.5-.8 2.5-2.6-.2L10 18l-2.1-1.5-2.6.2-.8-2.5L2.4 12.7l1-2.5-1-2.5 2.1-1.5.8-2.5 2.6.2L10 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M7.6 10.1 9.3 12l3.2-3.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const benefits = [
  { icon: <Bolt className="h-5 w-5" />, label: "Strong Starting Power" },
  { icon: <ShieldIcon />, label: "Built for Indian Conditions" },
  { icon: <LifeIcon />, label: "Longer Service Life" },
  { icon: <WarrantyIcon />, label: "Up to 36 Months Warranty" },
];

export function RangePreview() {
  return (
    <section id="range" className="section-y bg-white">
      <div className="container-x">
        <Reveal className="flex justify-center">
          <span className="inline-flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-7 bg-royal/45" />
            <span className="rounded-full bg-[#eaf0ff] px-4 py-1.5 font-sans text-[0.75rem] font-medium text-royal">
              Applications
            </span>
            <span aria-hidden="true" className="h-px w-7 bg-royal/45" />
          </span>
        </Reveal>

        <div className="mx-auto mt-6 max-w-[52rem] text-center">
          <Reveal>
            <h2 className="text-[clamp(2.1rem,4.4vw,3.9rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              Powering Every <em className="heading-gloss accent-serif font-normal text-royal">Journey.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-3 text-[1.15rem] font-semibold tracking-tight text-ink/70">
              One <em className="heading-gloss accent-serif font-normal text-royal">Trusted</em> Battery Brand.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-[44rem] text-[1rem] leading-[1.75] text-ink/58">
              From everyday cars to heavy-duty vehicles, Vijeta Batteries delivers
              dependable starting power, reliable performance and lasting confidence for
              every journey.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              y={16}
              amount={0.12}
              className="h-full"
            >
              <Link
                href="/products"
                data-torch
                className="torch-card application-card group flex h-full min-h-[28rem] flex-col p-5 sm:p-6"
              >
                <div className="application-card__media relative flex h-[11rem] w-full items-center justify-center gap-1 overflow-hidden rounded-[1rem] px-2 sm:h-[11.5rem]">
                  <div className="relative h-full w-[70%]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 24vw"
                      className={`application-card__image object-contain p-1 mix-blend-multiply ${
                        index === 2 ? "application-card__image--bright" : ""
                      }`}
                      priority={index === 0}
                    />
                  </div>
                  <span className="application-card__battery flex h-[5.2rem] w-[4.6rem] shrink-0 items-center justify-center">
                    <StaticBattery variant="blue" className="h-[5rem] w-auto" />
                  </span>
                </div>

                <span className="mt-5 inline-flex w-fit rounded-full bg-[#eaf0ff] px-3 py-1.5 font-sans text-[0.72rem] font-medium text-royal">
                  {item.category}
                </span>

                <h3 className="mt-3 font-display text-[1.4rem] font-bold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>

                <p className="mt-2 text-[0.84rem] leading-relaxed text-ink/55">{item.copy}</p>

                <span className="application-card__footer mt-auto flex items-end justify-between gap-3">
                  <span className="flex flex-col gap-1.5">
                    {item.benefits.map((benefit) => (
                      <span key={benefit} className="flex items-center gap-2 text-[0.76rem] font-medium text-ink/65">
                        <CheckMark />
                        {benefit}
                      </span>
                    ))}
                  </span>
                  <span className="application-card__arrow flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="application-benefits grid grid-cols-1 gap-y-5 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-3 text-ink/65 lg:border-r lg:border-line last:lg:border-r-0">
                <span className="text-royal">{item.icon}</span>
                <span className="font-sans text-[0.85rem] font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
