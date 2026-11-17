import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { industrialProducts } from "@/lib/industrialProducts";

export function IndustrialProducts() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="font-sans text-[0.78rem] font-medium text-royal">Industrial power</p>
          <h2 className="mx-auto mt-3 max-w-[22ch] text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
            Built for the <em className="heading-gloss accent-serif font-normal text-royal">long haul.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[42rem] text-[1rem] leading-[1.7] text-ink/55">
            Tubular and OPzS battery cells for power plants, substations, UPS and industry.
            Select a product to see the full technical detail.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industrialProducts.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.05} y={16} amount={0.12} className="h-full">
              <Link href={`/products/${product.slug}`} className="torch-card industrial-card group flex h-full flex-col p-5">
                <div className="industrial-card__media relative flex h-[13rem] items-center justify-center rounded-xl bg-gradient-to-b from-white to-[#e8eefc] p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 24vw"
                    className="industrial-card__image object-contain p-3"
                  />
                </div>
                <span className="mt-5 font-sans text-[0.72rem] font-medium text-royal">{product.category}</span>
                <h3 className="mt-2 text-[1.15rem] font-semibold leading-snug tracking-[-0.015em] text-ink">{product.name}</h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-ink/55">{product.intro}</p>
                <span className="industrial-card__footer mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="font-sans text-[0.76rem] font-medium text-ink/45">View details</span>
                  <ArrowUpRight className="industrial-card__arrow h-4 w-4 text-royal" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
