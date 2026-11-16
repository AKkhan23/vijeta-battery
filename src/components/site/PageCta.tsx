import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  copy: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function PageCta({
  eyebrow = "Next step",
  title,
  copy,
  primary,
  secondary,
}: Props) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-paper-deep/60">
      <div aria-hidden="true" className="blueprint pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(22,56,198,0.12),transparent_65%)]"
      />
      <div className="container-x relative section-y">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow text-royal">{eyebrow}</p>
            <h2 className="mt-5 max-w-[18ch] text-[clamp(2.6rem,5vw,4.4rem)]">{title}</h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-4">
            <p className="prose-lede max-w-[26rem]">{copy}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href={primary.href} className="btn btn-primary">
                {primary.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {secondary && (
                <Link href={secondary.href} className="btn btn-ghost">
                  {secondary.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
