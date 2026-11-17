"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { faqs, site } from "@/lib/site";

export function FAQ({ index = "07" }: { index?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y border-y border-line bg-white">
      <div className="container-x">
        <SectionLabel index={index} text="Questions" />

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="max-w-[12ch] text-[clamp(2.6rem,4.6vw,4rem)]">
                The things
                <br />
                people <em className="heading-gloss accent-serif font-normal text-royal">ask.</em>
              </h2>
              <p className="mt-6 max-w-[24rem] text-[0.92rem] leading-relaxed text-ink/60">
                If your question is not here, the sales line is faster than a form.
                We would rather answer once and get it right.
              </p>
              <div data-torch className="torch-card mt-7 p-4">
                <p className="eyebrow text-ink/40">Still unsure?</p>
                <a
                  href={`tel:${site.phonePrimary}`}
                  className="mt-2 block font-display text-[1.15rem] font-semibold tracking-tight text-ink"
                >
                  {site.phonePrimaryLabel}
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow mt-3 text-[0.8rem]"
                >
                  Message on WhatsApp
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {faqs.map((item, index) => {
                const isOpen = open === index;
                return (
                  <div key={item.q} className="border-b border-line">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${index}`}
                        className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                      >
                        <span
                          className={`font-display text-[1.05rem] font-semibold leading-snug tracking-tight transition-colors sm:text-[1.15rem] ${
                            isOpen ? "text-royal" : "text-ink group-hover:text-royal"
                          }`}
                        >
                          {item.q}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border transition-colors ${
                            isOpen ? "border-royal text-royal" : "border-line text-ink/45"
                          }`}
                        >
                          <svg
                            viewBox="0 0 12 12"
                            className={`h-2.5 w-2.5 transition-transform duration-300 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                            fill="none"
                          >
                            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.2" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[46rem] pb-6 pr-10 text-[0.9rem] leading-relaxed text-ink/60">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
