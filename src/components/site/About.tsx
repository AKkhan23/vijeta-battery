import { ArrowUpRight, PinIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { capabilities, site } from "@/lib/site";

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.state} ${site.address.pin}`,
)}`;

export function About() {
  return (
    <section id="about" className="section-y relative overflow-hidden bg-paper">
      <div className="container-x">
        <Reveal>
          <SectionLabel index="01" text="The factory" />
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="max-w-[15ch] text-[clamp(2.45rem,5vw,4.7rem)]">
                Lead and acid.
                <br />
                Thirty-eight years
                <br />
                of <em className="heading-gloss accent-serif font-normal text-royal">getting it right.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 border-l-2 border-royal pl-5">
              <p className="max-w-[24ch] font-serif text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.15] tracking-[-0.02em] text-ink">
                “A battery is judged on the morning it must start.”
              </p>
              <p className="mt-3 font-sans font-medium text-[0.75rem] text-ink/40">
                The rule on our floor
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 flex items-center gap-4">
              <span className="display text-[3.4rem] leading-none text-ink">38</span>
              <span className="max-w-[10rem] text-[0.8rem] leading-snug text-ink/55">
                years of manufacturing, in the same industrial corridor.
              </span>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <div className="space-y-5 text-[1.02rem] leading-relaxed text-ink/72">
                <p>
                  VIJETA began in 1988 with a straightforward brief: make a battery that
                  survives India. Not a showroom battery — one that sits under a bonnet in
                  45°C heat, cranks a cold tractor at dawn, and still holds its charge two
                  summers later.
                </p>
                <p>
                  From our plant at Pithampur, we cast grids, mix paste, assemble cells and
                  load-test every unit before it leaves the gate. Most components are made
                  in-house, which is how we keep the quality close and the excuses few.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 border-t border-line">
              <p className="eyebrow py-4 text-ink/40">What we control, start to finish</p>
              {capabilities.map((step, index) => (
                <Reveal key={step.title} delay={0.04 * index} y={14}>
                  <div className="group flex items-baseline justify-between gap-6 border-t border-line py-3.5 transition-colors hover:bg-white/60">
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans font-medium text-[0.75rem] text-royal/70">
                        0{index + 1}
                      </span>
                      <span className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
                        {step.title}
                      </span>
                    </div>
                    <span className="text-right font-sans font-medium text-[0.75rem] text-ink/40">
                      {step.note}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-2">
              <div data-torch className="torch-card p-5">
                <div className="flex items-center gap-2 text-royal">
                  <PinIcon className="h-3.5 w-3.5" />
                  <span className="eyebrow">The plant</span>
                </div>
                <address className="mt-3 text-[0.86rem] not-italic leading-relaxed text-ink/65">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city} (M.P.) {site.address.pin}, India
                </address>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow mt-4 text-[0.78rem]"
                >
                  Get directions
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div data-torch className="torch-card torch-card-ink relative overflow-hidden p-5 text-white">
                <div aria-hidden="true" className="blueprint-dark absolute inset-0 opacity-70" />
                <div className="relative">
                  <p className="eyebrow text-white/45">On record</p>
                  <p className="mt-3 font-display text-[1.05rem] leading-snug tracking-tight">
                    Founded 1988.
                    <br />
                    Still on the same floor.
                  </p>
                  <p className="mt-4 text-[0.8rem] leading-relaxed text-white/55">
                    Aadinath Power Systems Pvt. Ltd.
                    <br />
                    Pithampur, Dhar — M.P.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
