"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutIntro } from "@/lib/heritage";

const ease = [0.16, 1, 0.3, 1] as const;

export function AboutIntro() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-royal/10 bg-paper"
      style={{ scrollMarginTop: "5.5rem" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(20,54,200,0.07),transparent_68%)]"
      />

      <div className="container-x section-y relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, ease }}
            >
              <SectionLabel text={aboutIntro.eyebrow} />
            </motion.div>

            <div className="mt-7 grid grid-cols-3 gap-4 border-t border-royal/20 pt-4 lg:mt-9 lg:flex lg:flex-col lg:gap-6 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
              {aboutIntro.facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={reduce ? false : { opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease }}
                >
                  <p className="display text-[clamp(1.5rem,2.2vw,1.95rem)] leading-none text-royal">
                    {fact.value}
                  </p>
                  <p className="mt-1.5 max-w-[12ch] font-sans text-[0.7rem] leading-snug text-ink/45">
                    {fact.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9">
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.8, ease }}
              className="max-w-[28ch] text-[clamp(1.85rem,3.4vw,3.05rem)] font-semibold leading-[1.16] tracking-[-0.025em] text-ink"
            >
              {aboutIntro.titleLead}{" "}
              <em className="accent-serif font-normal not-italic text-royal">
                {aboutIntro.titleAccent}
              </em>
            </motion.h2>

            <div className="mt-9 grid gap-6 md:grid-cols-2 md:gap-10">
              {aboutIntro.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: 0.08 + index * 0.1, ease }}
                  className="text-[0.98rem] leading-[1.85] text-ink/65"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.65, delay: 0.16, ease }}
              className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-royal/15 pt-5"
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-royal" />
              <p className="font-sans text-[0.86rem] font-medium tracking-[0.01em] text-royal">
                {aboutIntro.closing}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
