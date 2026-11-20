"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { technology } from "@/lib/site";
import { CellDiagram } from "./CellDiagram";

export function Technology({ index = "04" }: { index?: string }) {
  const [active, setActive] = useState(0);
  const current = technology[active];

  return (
    <section id="technology" className="section-y border-y border-line bg-white">
      <div className="container-x">
        <SectionLabel index={index} text="Inside the cell" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <h2 className="max-w-[11ch] text-[clamp(2.7rem,5.2vw,4.6rem)]">
              Good starts
              <br />
              aren’t <em className="heading-gloss accent-serif font-normal text-royal">luck.</em>
            </h2>
            <p className="prose-lede mt-6 max-w-[28rem]">
              Four things decide whether a battery cranks on the morning you need it.
              We build for all four — then test every unit before it leaves.
            </p>

            <div className="mt-10 border-t border-line">
              {technology.map((item, index) => {
                const isActive = index === active;
                return (
                  <div key={item.key} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      aria-expanded={isActive}
                      aria-controls={`tech-panel-${item.key}`}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-royal"
                    >
                      <span className="flex items-center gap-4">
                        <span
                          aria-hidden="true"
                          className={`h-1.5 w-1.5 shrink-0 transition-colors ${
                            isActive ? "bg-royal" : "bg-ink/20"
                          }`}
                        />
                        <span
                          className={`font-display text-[1.15rem] font-semibold tracking-tight transition-colors ${
                            isActive ? "text-ink" : "text-ink/55"
                          }`}
                        >
                          {item.title}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex h-6 w-6 shrink-0 items-center justify-center border transition-colors ${
                          isActive ? "border-royal text-royal" : "border-line text-ink/40"
                        }`}
                      >
                        <svg
                          viewBox="0 0 12 12"
                          className={`h-2.5 w-2.5 transition-transform duration-300 ${
                            isActive ? "rotate-45" : ""
                          }`}
                          fill="none"
                        >
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          id={`tech-panel-${item.key}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 pl-3.5 pr-8 text-[0.88rem] leading-relaxed text-ink/60">
                            {item.copy}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-line">
              {[
                ["Voltage", "12 V"],
                ["Cells", "6"],
                ["Case", "PP"],
                ["Grid alloy", "Lead-calcium"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-line py-2.5"
                >
                  <span className="font-sans font-medium text-[0.72rem] text-ink/40">
                    {label}
                  </span>
                  <span className="text-[0.8rem] font-medium text-ink/75">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div data-torch className="torch-card torch-card-ink relative overflow-hidden shadow-[0_40px_90px_-60px_rgba(7,11,24,0.65)]">
              <div aria-hidden="true" className="blueprint-dark pointer-events-none absolute inset-0 opacity-70" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(47,92,255,0.3),transparent_65%)]"
              />
              <div className="relative flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="font-sans font-medium text-[0.72rem] text-white/55">
                  Cell assembly / {current.title}
                </span>
                <span className="flex items-center gap-1.5 font-sans font-medium text-[0.72rem] text-white/40">
                  <span className="h-1 w-1 rounded-full bg-volt" />
                  Live section
                </span>
              </div>

              <div className="relative overflow-hidden px-4 py-2 sm:px-8">
                <div
                  aria-hidden="true"
                  className="scanline-vertical pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-volt/70 to-transparent"
                />
                <CellDiagram highlight={current.highlight} />
              </div>

              <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-3">
                <span className="font-sans font-medium text-[0.72rem] text-white/35">
                  In-house assembly · Vijeta Accumulators and New Technologies
                </span>
                <span className="font-sans font-medium text-[0.72rem] text-volt">
                  QC 100%
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-start gap-2 text-ink/40">
              <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 bg-royal" />
              <p className="text-[0.72rem] leading-relaxed">
                The diagram follows the selected feature. Every battery is formation-charged
                and load-tested before dispatch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
