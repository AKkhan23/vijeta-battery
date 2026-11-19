import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { industrialProducts } from "@/lib/industrialProducts";
import { getGroupHref, homePowerGroups } from "@/lib/homePower";

// Temporarily hidden from the products grid at the client's request.
// Detail pages stay live so existing links keep working.
const hiddenProductSlugs = new Set(["ndp-tubular", "plante-range"]);

type GalleryCard = {
  key: string;
  href: string;
  name: string;
  category: string;
  intro: string;
  image: string;
  hoverImage?: string;
  badge?: string;
  cover?: boolean;
};

export function ProductGallery() {
  const products = industrialProducts.filter((product) => !hiddenProductSlugs.has(product.slug));
  const featured = products.find((product) => product.featured);

  const homePowerCards: GalleryCard[] = homePowerGroups
    .filter((group) => group.slug === "home-inverters" || group.slug === "inverter-batteries")
    .map((group) => ({
      key: `home-${group.slug}`,
      href: getGroupHref(group),
      name: group.name,
      category: "Home power",
      intro: group.intro,
      image: group.image!,
      cover: true,
    }));

  const cards: GalleryCard[] = [
    ...homePowerCards,
    ...products.map((product) => ({
      key: product.slug,
      href: `/products/${product.slug}`,
      name: product.name,
      category: product.category,
      intro: product.intro,
      image: product.image,
      hoverImage: product.hoverImage,
      badge: product.badge,
    })),
  ];

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

        {featured && (
          <Reveal className="mt-8">
            <Link
              href={`/products/${featured.slug}`}
              className="group relative grid overflow-hidden rounded-3xl border border-royal/15 bg-royal text-white shadow-[0_24px_60px_-30px_rgba(20,54,200,0.8)] transition-transform duration-300 hover:-translate-y-0.5 md:grid-cols-[1.25fr_0.75fr]"
            >
              <div className="relative z-10 p-6 sm:p-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 font-sans text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink">
                  ★ {featured.badge}
                </span>
                <p className="mt-5 font-sans text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white/60">
                  {featured.category}
                </p>
                <h3 className="mt-2 max-w-[24ch] text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.025em]">
                  {featured.name}
                </h3>
                <p className="mt-4 max-w-[52ch] text-[0.95rem] leading-relaxed text-white/75">
                  {featured.intro}
                </p>
                {featured.atAGlance && (
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {featured.atAGlance.map((item) => (
                      <div key={item.label} className="rounded-xl border border-white/15 bg-white/10 p-3">
                        <span className="block font-sans text-[0.68rem] uppercase tracking-[0.1em] text-white/55">{item.label}</span>
                        <span className="mt-1 block text-[0.88rem] font-semibold leading-snug">{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}
                <span className="mt-7 inline-flex items-center gap-2 font-sans text-[0.85rem] font-semibold text-white">
                  Explore the SAN cell
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
              <div className="relative min-h-[16rem] overflow-hidden bg-gradient-to-b from-[#eef3ff] to-[#dbe6ff] md:min-h-full">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-contain p-6 transition-opacity duration-500 group-hover:opacity-0"
                />
                {featured.hoverImage && (
                  <Image
                    src={featured.hoverImage}
                    alt={`${featured.name} — transparent SAN container detail`}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-contain p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cards.map((product, index) => (
            <Reveal key={product.key} delay={index * 0.06} y={18} className="h-full">
              <Link
                href={product.href}
                className="torch-card industrial-card group relative flex h-full flex-col p-5"
              >
                {product.badge && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-gold px-2.5 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink shadow-sm">
                    ★ {product.badge}
                  </span>
                )}
                <div
                  className={`industrial-card__media relative flex h-[13rem] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-white to-[#e8eefc] ${
                    product.cover ? "" : "p-4"
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 20vw"
                    className={
                      product.cover
                        ? "object-cover object-[50%_62%] transition-transform duration-700 group-hover:scale-[1.04]"
                        : product.hoverImage
                          ? "object-contain p-3 transition-opacity duration-500 group-hover:opacity-0"
                          : "industrial-card__image object-contain p-3"
                    }
                  />
                  {product.hoverImage && (
                    <Image
                      src={product.hoverImage}
                      alt={`${product.name} — transparent SAN container detail`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 20vw"
                      className="object-contain p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  )}
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
