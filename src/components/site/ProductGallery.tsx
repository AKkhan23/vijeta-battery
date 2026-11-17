import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { industrialProducts } from "@/lib/industrialProducts";

export function ProductGallery() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-sans text-[0.78rem] font-medium text-royal">Customer trusted</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] leading-[1.05]">
              Power you can <em className="heading-gloss accent-serif font-normal text-royal">count on.</em>
            </h2>
          </div>
          <Link href="#series" className="link-arrow">
            Explore the range
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industrialProducts.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.06} y={18} className="h-full">
              <Link
                href={`/products/${product.slug}`}
                className="torch-card industrial-card group flex h-full flex-col p-5"
              >
                <div className="industrial-card__media relative flex h-[13rem] items-center justify-center rounded-xl bg-gradient-to-b from-white to-[#e8eefc] p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 24vw"
                    className="industrial-card__image object-contain p-3"
                  />
                </div>
                <span className="mt-5 font-sans text-[0.72rem] font-medium text-royal">
                  {product.category}
                </span>
                <h3 className="mt-2 text-[1.1rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
                  {product.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-[0.84rem] leading-relaxed text-ink/55">
                  {product.intro}
                </p>
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
