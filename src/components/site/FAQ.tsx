"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { faqCategories, faqItems } from "@/lib/heritage";
import { site } from "@/lib/site";

type Group = { id: string; label: string; blurb?: string; items: typeof faqItems };

export function FAQ() {
  const [category, setCategory] = useState("all");
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  const filtered = useMemo(
    () => faqItems.filter((item) => category === "all" || item.category === category),
    [category],
  );

  const groups: Group[] = useMemo(() => {
    if (category !== "all") {
      return [{ id: "results", label: "Questions", items: filtered }];
    }
    return faqCategories
      .map((cat) => ({
        id: cat.id,
        label: cat.label,
        blurb: cat.blurb,
        items: filtered.filter((item) => item.category === cat.id),
      }))
      .filter((group) => group.items.length > 0);
  }, [filtered, category]);

  return (
    <section id="faq" className="relative bg-white" style={{ scrollMarginTop: "5.5rem" }}>
      {/* Help-centre hero */}
      <div className="relative overflow-hidden bg-ink">
        <Image
          src="/manufacturing-poster.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-center opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/90 to-ink"
        />
        <div
          aria-hidden="true"
          className="blueprint-dark pointer-events-none absolute inset-0 opacity-30"
        />
        <div className="container-x relative py-16 text-center sm:py-20 lg:py-24">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/55"
          >
            Questions · Help centre
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06 }}
            className="mx-auto mt-4 max-w-[20ch] text-[clamp(2.4rem,5.4vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white"
          >
            How can we <em className="heading-gloss accent-serif font-normal not-italic text-volt">help you?</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-5 max-w-[44rem] text-balance text-[0.95rem] leading-relaxed text-white/65 sm:text-[1rem]"
          >
            Answers from the people who build and sell VIJETA batteries — from choosing a
            battery and reading a tender to warranty claims and safe care. Pick a topic below.
          </motion.p>
        </div>
      </div>

      {/* Questions */}
      <div className="section-y">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-4" y={20}>
              <div className="lg:sticky lg:top-24">
                <p className="font-sans text-[0.78rem] font-medium text-royal">Support</p>
                <h2 className="mt-3 text-[clamp(2.4rem,4.4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
                  FAQS
                </h2>
                <p className="mt-5 max-w-[24rem] text-[0.92rem] leading-relaxed text-ink/60">
                  Have questions? We have answers. Check the questions we hear most at the
                  counter and on the phone — and save time by getting it right the first time.
                </p>
                <div data-torch className="torch-card mt-7 p-5">
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
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-2 block break-all text-[0.8rem] text-ink/55 transition-colors hover:text-royal"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal className="min-w-0 lg:col-span-8" delay={0.08} amount={0.05} y={22}>
              <div className="flex flex-wrap gap-2 border-b border-line pb-6">
                <motion.button
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setCategory("all")}
                  className={`rounded-full border px-3.5 py-2 font-sans text-[0.76rem] font-semibold transition-colors ${
                    category === "all"
                      ? "border-royal bg-royal text-white"
                      : "border-royal/15 bg-white text-ink/60 hover:border-royal/40 hover:text-royal"
                  }`}
                >
                  All questions
                </motion.button>
                {faqCategories.map((cat) => (
                  <motion.button
                    key={cat.id}
                    type="button"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setCategory(cat.id)}
                    className={`rounded-full border px-3.5 py-2 font-sans text-[0.76rem] font-semibold transition-colors ${
                      category === cat.id
                        ? "border-royal bg-royal text-white"
                        : "border-royal/15 bg-white text-ink/60 hover:border-royal/40 hover:text-royal"
                    }`}
                  >
                    {cat.label}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {groups.length === 0 ? (
                    <div className="mt-8 rounded-2xl border border-line bg-paper p-8 text-center">
                      <p className="font-display text-[1.2rem] font-semibold text-ink">No match here.</p>
                      <p className="mt-2 text-[0.88rem] leading-relaxed text-ink/55">
                        Pick another topic, or call the sales line — someone will answer directly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setCategory("all")}
                        className="link-arrow mt-5 text-[0.8rem]"
                      >
                        Clear filters
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : (
                    groups.map((group) => (
                      <div key={group.id} className="mt-8 first:mt-6">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <p className="eyebrow text-royal">{group.label}</p>
                          {group.blurb && (
                            <p className="text-[0.78rem] text-ink/40">{group.blurb}</p>
                          )}
                          <span className="ml-auto font-sans text-[0.72rem] text-ink/35">
                            {group.items.length}
                          </span>
                        </div>
                        <div className="mt-4 border-t border-line">
                          {group.items.map((item) => {
                            const isOpen = openId === item.id;
                            return (
                              <div key={item.id} className="border-b border-line">
                                <h3>
                                  <button
                                    type="button"
                                    onClick={() => setOpenId(isOpen ? null : item.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-${item.id}`}
                                    className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                                  >
                                    <span
                                      className={`font-display text-[1.02rem] font-semibold leading-snug tracking-tight transition-colors sm:text-[1.12rem] ${
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
                                      id={`faq-${item.id}`}
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
                    ))
                  )}
                </motion.div>
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
