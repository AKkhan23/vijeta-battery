import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

type Props = {
  eyebrow: string;
  index: string;
  title: ReactNode;
  intro: string;
  crumb: string;
  path: string;
  meta?: { label: string; value: string }[];
  image?: string;
};

export function PageHeader({ eyebrow, index, title, intro, crumb, path, meta = [], image }: Props) {
  const overlay = Boolean(image);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: crumb, item: `${site.url}${path}` },
    ],
  };

  return (
    <section
      className={`relative overflow-hidden border-b border-line pt-[76px] xl:pt-[112px] ${
        overlay ? "min-h-[clamp(20rem,24vw,22rem)] bg-[#031321]" : "bg-paper"
      }`}
    >
      {overlay ? (
        <>
          <Image
            src={image!}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-transparent"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="blueprint pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_25%_10%,black_18%,transparent_72%)]"
        />
      )}

      <div className={`container-x relative ${overlay ? "flex min-h-[calc(clamp(20rem,24vw,22rem)-76px)] flex-col justify-end pb-6 pt-9 lg:pb-8 xl:min-h-[calc(clamp(20rem,24vw,22rem)-112px)]" : "pb-14 pt-12 lg:pb-20 lg:pt-16"}`}>
        <nav
          aria-label="Breadcrumb"
          className={`flex items-center gap-2 font-sans font-medium text-[0.75rem] ${overlay ? "text-white/55" : "text-ink/40"}`}
        >
          <Link href="/" className={`transition-colors ${overlay ? "hover:text-white" : "hover:text-royal"}`}>
            Home
          </Link>
          <span aria-hidden="true" className={overlay ? "text-white/30" : "text-ink/25"}>
            /
          </span>
          <span className={overlay ? "text-white" : "text-ink/65"}>{crumb}</span>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3.5">
              <span className={`font-sans font-medium text-[0.78rem] ${overlay ? "text-white/80" : "text-royal"}`}>
                {index}
              </span>
              <span aria-hidden="true" className={`h-px w-7 ${overlay ? "bg-white/40" : "bg-royal/40"}`} />
              <span className={`eyebrow ${overlay ? "text-white/60" : "text-ink/55"}`}>{eyebrow}</span>
            </div>
            <h1
              className={`mt-6 max-w-[14ch] leading-[0.95] ${
                overlay
                  ? "text-[clamp(2rem,3.8vw,3.2rem)] text-white"
                  : "text-[clamp(2.9rem,6.4vw,5.8rem)]"
              }`}
            >
              {title}
            </h1>
            <p className={`prose-lede mt-6 max-w-[38rem] text-[0.95rem] ${overlay ? "!text-white/75" : ""}`}>{intro}</p>
          </div>

          {!overlay && meta.length > 0 && (
            <div className="lg:col-span-4 lg:pt-14">
              <dl className="grid grid-cols-2 gap-px border border-line bg-line">
                {meta.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col-reverse gap-1.5 bg-paper p-4 transition-colors duration-300 hover:bg-card sm:p-5"
                  >
                    <dt className="eyebrow text-ink/40">{item.label}</dt>
                    <dd className="font-display text-[1.3rem] font-semibold leading-tight tracking-tight text-royal">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>

        {overlay && meta.length > 0 && (
          <dl className="mt-7 grid w-full grid-cols-2 gap-px border border-white/15 bg-white/15 sm:grid-cols-4">
            {meta.map((item) => (
              <div
                key={item.label}
                className="flex flex-col-reverse gap-1 bg-ink/55 px-4 py-3 transition-colors duration-300 hover:bg-ink/75 sm:px-5"
              >
                <dt className="eyebrow text-white/55">{item.label}</dt>
                <dd className="font-display text-[1.3rem] font-semibold leading-tight tracking-tight text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </section>
  );
}
