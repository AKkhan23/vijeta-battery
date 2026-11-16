import Link from "next/link";
import { ArrowUpRight, WhatsAppIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const dealerWhatsApp =
  "https://wa.me/919981716000?text=Hi%20VIJETA%2C%20I%27d%20like%20to%20discuss%20a%20dealership%20in%20my%20area.";

type Props = {
  href?: string;
  label?: string;
};

export function DealerCTA({ href = "/dealership", label = "Explore dealership" }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="blueprint-dark pointer-events-none absolute inset-0 opacity-80" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(22,56,198,0.45),transparent_65%)]"
      />

      <div className="container-x relative section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-white/40">For the trade</p>
              <h2 className="mt-5 max-w-[16ch] text-[clamp(2.8rem,6vw,5.4rem)] text-white">
                Sell batteries that
                <br />
                <em className="accent-serif font-normal text-volt">don’t come back.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[32rem] text-[0.98rem] leading-relaxed text-white/58">
                We are expanding our dealer network across central India. If you run a
                workshop, garage or auto-parts counter, let’s talk about territory,
                margins and stocking a brand your customers will return for.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-12">
            <Reveal delay={0.12}>
              <div className="border border-white/15 p-6 backdrop-blur-[2px]">
                <p className="eyebrow text-white/35">The conversation</p>
                <ul className="mt-4 space-y-3">
                  {["Territory & distribution", "Stock planning", "Warranty support"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-white/10 pb-3 text-[0.88rem] text-white/75">
                        <span aria-hidden="true" className="h-1 w-1 bg-volt" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>

                <div className="mt-6 flex flex-col gap-2.5">
                  <Link href={href} className="btn btn-light w-full">
                    {label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={dealerWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 py-3 text-[0.82rem] font-medium text-white/75 transition-colors hover:border-white/50 hover:text-white"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Or message the sales line
                  </a>
                </div>
                <p className="mt-4 text-center font-mono text-[0.55rem] uppercase tracking-[0.14em] text-white/30">
                  {site.phonePrimaryLabel}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
