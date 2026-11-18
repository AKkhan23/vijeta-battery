import Link from "next/link";
import { PowerVisual } from "@/components/site/PowerVisual";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { getGroupHref, homePowerGroups } from "@/lib/homePower";

export function HomePowerTeaser() {
  return (
    <section className="section-y bg-paper-deep/50">
      <div className="container-x">
        <Reveal className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-sans text-[0.78rem] font-medium text-royal">For the home</p>
            <h2 className="mt-3 max-w-[26ch] text-[clamp(2rem,4vw,3.2rem)] leading-[1.05]">
              Power that keeps the home running.
            </h2>
          </div>
          <p className="prose-lede max-w-[25rem]">
            Inverters, tubular batteries and lithium systems — matched for Indian outages and backed by VIJETA support.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {homePowerGroups.map((group, index) => (
            <Reveal key={group.slug} delay={index * 0.06} y={18} className="h-full">
              <Link
                href={getGroupHref(group)}
                className="torch-card group flex h-full flex-col border border-royal/12 bg-white p-5"
              >
                <div className="flex h-[11rem] items-center justify-center bg-gradient-to-b from-white to-[#e8eefc] p-3">
                  <PowerVisual kind={group.kind} uid={`teaser-${group.slug}`} className="h-full w-full" title={`${group.name} illustration`} />
                </div>
                <p className="mt-5 font-sans text-[0.72rem] font-medium text-royal">
                  {group.series.length} series · {group.stats[1]?.value}
                </p>
                <h3 className="mt-2 text-[1.3rem] font-semibold tracking-[-0.02em] text-ink">
                  {group.name}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink/60">{group.intro}</p>
                <span className="mt-auto flex items-center justify-between gap-3 border-t border-royal/12 pt-5 font-sans text-[0.78rem] font-medium text-royal">
                  Explore {group.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
