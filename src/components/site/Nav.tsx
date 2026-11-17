"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight } from "@/components/ui/Icons";
import { navLinks, site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const original = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper text-ink backdrop-blur-xl"
      >
        <div className="container-x flex h-[76px] items-center justify-between gap-5">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`group relative py-2 text-[0.82rem] font-medium transition-colors ${
                  isActive(link.href) ? "text-royal" : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-royal transition-all duration-300 group-hover:w-full ${
                    isActive(link.href) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <nav aria-label="Primary compact" className="hidden items-center gap-5 lg:flex xl:hidden">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-[0.8rem] font-medium transition-colors ${
                  isActive(link.href) ? "text-royal" : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${site.phonePrimary}`}
              className="hidden font-sans font-medium text-[0.72rem] text-ink/60 transition-colors hover:text-royal xl:block"
            >
              {site.phonePrimaryLabel}
            </a>
            <Link href="/contact" className="btn btn-primary hidden h-[42px] px-5 py-0 text-[0.82rem] sm:inline-flex">
              Enquire
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-line bg-white/50 transition-colors hover:border-ink/40 lg:hidden"
            >
              <span className="h-px w-5 bg-ink" />
              <span className="h-px w-5 bg-ink" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="blueprint-dark fixed inset-0 z-[70] overflow-y-auto bg-ink text-white"
          >
            <div className="container-x flex h-[76px] items-center justify-between">
              <Logo light />
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-white/60"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="m4 4 12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
            </div>

            <div className="container-x pb-14 pt-8 sm:pt-12">
              <p className="eyebrow text-white/40">Menu</p>
              <nav aria-label="Mobile" className="mt-5 flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.14 + index * 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className="group flex items-baseline justify-between border-b border-white/12 py-3.5"
                    >
                      <span
                        className={`display text-[clamp(1.8rem,7vw,3rem)] transition-colors group-hover:text-volt ${
                          isActive(link.href) ? "text-volt" : "text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                      <span className="font-sans font-medium text-[0.75rem] text-white/35">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.58, duration: 0.6 }}
                className="mt-9 grid gap-6 sm:grid-cols-2"
              >
                <div>
                  <p className="eyebrow text-white/40">Talk to us</p>
                  <a href={`tel:${site.phonePrimary}`} className="mt-2 block font-display text-xl font-semibold tracking-tight text-white">
                    {site.phonePrimaryLabel}
                  </a>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-white/60 underline-offset-4 hover:underline">
                    {site.email}
                  </a>
                </div>
                <div className="sm:text-right">
                  <p className="eyebrow text-white/40">Plant</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {site.address.line1}
                    <br />
                    {site.address.line2}, {site.address.city} (M.P.) {site.address.pin}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.66, duration: 0.5 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-light">
                  Send an enquiry
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/dealership" onClick={() => setOpen(false)} className="btn btn-ghost border-white/25 text-white hover:border-white hover:bg-white/5">
                  Become a dealer
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
