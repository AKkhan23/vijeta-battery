"use client";

import { useEffect, useRef } from "react";
import { ourWorkMedia } from "@/lib/our-work-media";
import { ImageFrame, TextIn } from "@/components/site/FactoryMedia";

export function FactoryMachineryGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const reveal = () => node.classList.add("is-visible");

    // No observer support (or reduced motion) → show straight away.
    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="equipment"
      aria-labelledby="equipment-title"
      className="ow-scroll-reveal relative overflow-hidden border-t border-line bg-paper"
    >
      <div className="container-x relative py-14 sm:py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <TextIn>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-royal/60" />
                <p className="eyebrow factory-line ow-label font-medium text-royal">PRODUCTION EQUIPMENT</p>
              </div>
            </TextIn>
            <TextIn delay={0.07}>
              <h2
                id="equipment-title"
                className="mt-4 max-w-[20ch] font-display text-[clamp(2.2rem,4.8vw,3.7rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-royal"
              >
                The Equipment Behind Every <span className="ow-accent factory-line">Build</span>
              </h2>
            </TextIn>
          </div>
          <TextIn delay={0.13} className="lg:col-span-4">
            <p className="prose-lede !text-[0.95rem] lg:pb-1">
              A closer look at the machinery that supports our battery manufacturing
              operations.
            </p>
          </TextIn>
        </div>

        <div className="mt-9 grid gap-4 sm:gap-5 md:grid-cols-2 lg:mt-11">
          {ourWorkMedia.machinery.map((image, index) => (
            <TextIn key={image.src} delay={0.05 + index * 0.09}>
              <figure className="group/card">
                <ImageFrame
                  image={image}
                  className="aspect-[3/2] w-full rounded-2xl shadow-[0_30px_70px_-60px_rgba(8,11,20,0.65)] sm:rounded-3xl"
                  imageClassName="group-hover/card:scale-[1.06]"
                  sizes="(max-width: 768px) 92vw, 46vw"
                  direction={index % 2 === 0 ? "from-left" : "from-right"}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-ink/35 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm sm:left-5 sm:top-5">
                    {String(index + 1).padStart(2, "0")} / 02
                  </span>
                </ImageFrame>
                <figcaption className="mt-4 flex items-center justify-between gap-3 border-b border-ink/10 pb-3">
                  <p className="font-display text-[0.95rem] font-semibold tracking-tight text-ink">
                    {image.caption}
                  </p>
                  <span className="eyebrow ow-label">VIJETA · PLANT</span>
                </figcaption>
              </figure>
            </TextIn>
          ))}
        </div>
      </div>
    </section>
  );
}
