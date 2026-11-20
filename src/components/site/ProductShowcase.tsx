import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { StaticBattery } from "./StaticBattery";

const products = [
  {
    tag: "Premium range",
    title: "Gold Series",
    copy: "Powerful starting performance, longer backup and extended battery life for cars, SUVs and commercial vehicles.",
    note: "36 months warranty",
    variant: "gold" as const,
    href: "/products",
  },
  {
    tag: "Everyday range",
    title: "Silver Series",
    copy: "Reliable and cost-effective power for daily automotive use, with stable performance and low maintenance.",
    note: "24 months warranty",
    variant: "silver" as const,
    href: "/products",
  },
  {
    tag: "Heavy duty",
    title: "12V Heavy Duty",
    copy: "Built for trucks, buses and commercial fleets that need dependable cranking, restart after restart.",
    note: "High cranking power",
    variant: "blue" as const,
    href: "/products",
  },
  {
    tag: "Industrial",
    title: "Industrial & Solar",
    copy: "Backup and storage for plants, telecom sites and solar setups that cannot afford a dark hour.",
    note: "In-house tested",
    variant: "blue" as const,
    href: "/contact",
  },
];

export function ProductShowcase() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="font-sans text-[0.78rem] font-medium text-royal">What we make</p>
          <h2 className="product-heading mx-auto mt-4 max-w-[24ch] text-[clamp(2.4rem,5.2vw,4.6rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-ink">
            Batteries built for
            <br />
            <em className="heading-gloss accent-serif not-italic text-royal">The Way</em>{" "}
            <span className="text-volt">India</span>{" "}
            <span className="text-royal-deep">moves.</span>
          </h2>
          <span aria-hidden="true" className="product-heading__line mx-auto mt-6 block h-[3px] w-20 rounded-full bg-royal" />
          <p className="mx-auto mt-5 max-w-[40rem] text-[1rem] leading-[1.7] text-ink/55">
            Lead-acid power for cars, tractors, commercial vehicles and industry —
            manufactured at Vijeta Accumulators and New Technologies and tested unit by unit.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.title} delay={index * 0.05} y={16} amount={0.12} className="h-full">
              <Link href={product.href} className="torch-card product-card group flex h-full flex-col p-5">
                <div className="product-card__media relative flex h-[12rem] items-center justify-center rounded-xl bg-gradient-to-b from-white to-[#eaf0ff]">
                  <span aria-hidden="true" className="product-card__charge" />
                  <StaticBattery variant={product.variant} className="product-card__battery h-[9.5rem] w-auto" />
                </div>
                <span className="product-card__tag mt-5 font-sans text-[0.72rem] font-medium text-royal">{product.tag}</span>
                <h3 className="mt-2 text-[1.2rem] font-semibold tracking-[-0.015em] text-ink">{product.title}</h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-ink/55">{product.copy}</p>
                <span className="product-card__footer mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="font-sans text-[0.72rem] font-medium text-ink/45">{product.note}</span>
                  <ArrowUpRight className="product-card__arrow h-4 w-4 text-royal" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 text-center">
          <Link href="/products" className="btn btn-primary">
            Explore all batteries
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
