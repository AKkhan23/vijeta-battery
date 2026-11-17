"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { homeStoryPanels, storyPanels } from "@/lib/company";

export function StoryScroll({ variant = "about" }: { variant?: "about" | "home" }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const panels = variant === "home" ? homeStoryPanels : storyPanels;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(panels.length - 1, Math.max(0, Math.floor(v * panels.length)));
    setActive(next);
  });

  const panel = panels[active];

  return (
    <section ref={ref} className={`story-scroll relative h-[300svh] text-white ${variant === "home" ? "story-scroll--home" : "bg-ink"}`}>
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="container-x grid w-full gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="self-start">
            <p className="font-sans text-[0.75rem] font-medium text-white/50">
              {variant === "home" ? "Why VIJETA" : "Why VIJETA"}
            </p>
            <h2 className="mt-4 max-w-[14ch] text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.12] tracking-[-0.02em]">
              {variant === "home" ? "Made for the long run." : "Built on the details that matter."}
            </h2>
            <div className="mt-10 flex flex-col">
              {panels.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActive(index)}
                  data-active={index === active ? "true" : "false"}
                  className={`story-option flex items-center gap-4 border-b border-white/10 py-5 text-left font-sans text-[0.95rem] font-medium transition-colors duration-300 ${
                    index === active ? "text-white" : "text-white/35 hover:text-white/70"
                  }`}
                >
                  <span className={`font-sans text-[0.7rem] ${index === active ? "text-volt" : "text-white/25"}`}>
                    0{index + 1}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex min-h-[24rem] items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.16em] text-volt">
                  {panel.label}
                </p>
                <h3 className="mt-4 max-w-[18ch] text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
                  {panel.title}
                </h3>
                <div className="mt-8 flex flex-col">
                  {panel.lines.map((line, index) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.12 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-4 border-t border-white/10 py-5"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-volt" />
                      <p className="text-[1.02rem] leading-relaxed text-white/70">{line}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
