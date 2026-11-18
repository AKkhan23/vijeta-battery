"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight } from "@/components/ui/Icons";
import { homePowerGroups } from "@/lib/homePower";
import { site } from "@/lib/site";

const powerMenus = homePowerGroups.map((group) => ({
  label: group.name,
  href: `/products/${group.slug}`,
  items: group.series.map((series) => ({
    label: series.navLabel,
    href: `/products/${series.slug}`,
    meta: series.range,
  })),
}));

const utilityLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/technology" },
  { label: "Warranty", href: "/warranty" },
  { label: "Dealership", href: "/dealership" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const mobileLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Warranty", href: "/warranty" },
  { label: "Dealership", href: "/dealership" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
      <path d="m2.5 4.5 3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type PowerMenuType = (typeof powerMenus)[number];

function PowerMenu({ menu, light }: { menu: PowerMenuType; light: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const active =
    pathname === menu.href || menu.items.some((item) => item.href === pathname);

  const clear = () => {
    if (timer.current) clearTimeout(timer.current);
  };
  const show = () => {
    clear();
    timer.current = setTimeout(() => setOpen(true), 90);
  };
  const hide = () => {
    clear();
    timer.current = setTimeout(() => setOpen(false), 160);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => clear, []);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) hide();
      }}
    >
      <Link
        href={menu.href}
        aria-current={active ? "page" : undefined}
        aria-expanded={open}
        onClick={() => {
          clear();
          setOpen(false);
        }}
        className={`group relative border-b pb-0.5 font-sans text-[0.85rem] font-semibold tracking-[-0.01em] transition-colors ${
          active
            ? light ? "border-white text-white" : "border-royal text-royal"
            : light
              ? "border-white/40 text-white/90 hover:border-white hover:text-white"
              : "border-royal/40 text-royal hover:border-royal hover:text-royal-deep"
        }`}
      >
        {menu.label}
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full z-[60] w-[23rem] -translate-x-1/2 pt-3"
          >
            <div className="border border-line bg-white p-2 shadow-[0_28px_60px_-32px_rgba(8,11,20,0.35)]">
              <div className="flex items-center justify-between px-3 pb-2.5 pt-2">
                <span className="eyebrow text-royal">{menu.label}</span>
                <span className="font-sans text-[0.72rem] text-ink/40">
                  {menu.items.length} series
                </span>
              </div>

              {menu.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-3 border-t border-line px-3 py-3 transition-colors hover:bg-[#f5f8ff]"
                >
                  <span>
                    <span className="block text-[0.9rem] font-medium text-ink transition-colors group-hover:text-royal">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block font-sans text-[0.72rem] text-ink/45">
                      {item.meta}
                    </span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-royal/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-royal" />
                </Link>
              ))}

              <Link
                href={menu.href}
                className="mt-1 flex items-center justify-between gap-3 bg-[#f5f8ff] px-3 py-3 font-sans text-[0.78rem] font-medium text-royal transition-colors hover:bg-[#eaf0ff]"
              >
                View all {menu.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const darkTop = pathname === "/" || pathname === "/products" || pathname === "/about";
  const lightText = darkTop && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-line/70 bg-paper/95 text-ink backdrop-blur-xl"
            : lightText
              ? "border-transparent bg-transparent text-white"
              : "border-transparent bg-transparent text-ink"
        }`}
      >
        <div className="container-x relative flex h-[76px] items-center justify-between gap-4">
          <Logo light={lightText} />

          <nav aria-label="Primary" className="absolute left-1/2 top-0 hidden h-[50px] -translate-x-1/2 items-center gap-5 xl:flex">
            <Link
              href="/"
              aria-current={isActive("/") ? "page" : undefined}
              className={`group relative py-2 font-sans text-[0.85rem] font-medium transition-colors ${
                isActive("/")
                  ? lightText ? "text-white" : "text-royal"
                  : lightText ? "text-white/75 hover:text-white" : "text-ink/70 hover:text-ink"
              }`}
            >
              Home
              <span
                className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 group-hover:w-full ${
                  lightText ? "bg-white" : "bg-royal"
                } ${isActive("/") ? "w-full" : "w-0"}`}
              />
            </Link>
            {utilityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`group relative py-2 font-sans text-[0.85rem] font-medium transition-colors ${
                  isActive(link.href)
                    ? lightText ? "text-white" : "text-royal"
                    : lightText ? "text-white/75 hover:text-white" : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 group-hover:w-full ${
                    lightText ? "bg-white" : "bg-royal"
                  } ${isActive(link.href) ? "w-full" : "w-0"}`}
                />
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-[4px] left-[calc(50%+3rem)] hidden items-center gap-5 xl:flex">
            {powerMenus.map((menu) => (
              <PowerMenu key={menu.href} menu={menu} light={lightText} />
            ))}
            <Link
              href="/products/tbs-san-cell"
              className={`group relative border-b pb-0.5 font-sans text-[0.85rem] font-semibold tracking-[-0.01em] transition-colors ${
                pathname === "/products/tbs-san-cell"
                  ? "border-gold text-ink"
                  : lightText
                    ? "border-gold/60 text-white hover:border-gold hover:text-white"
                    : "border-gold/60 text-[#7a5c1f] hover:border-gold hover:text-ink"
              }`}
            >
              ★ TBS SAN Cell
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${site.phonePrimary}`}
              className={`hidden font-sans font-medium text-[0.76rem] transition-colors xl:block ${
                lightText ? "text-white/70 hover:text-white" : "text-ink/60 hover:text-royal"
              }`}
            >
              {site.phonePrimaryLabel}
            </a>
            <Link href="/contact" className="btn btn-primary hidden h-[42px] px-5 py-0 text-[0.85rem] sm:inline-flex">
              Enquire
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-line bg-white/50 transition-colors hover:border-ink/40 xl:hidden"
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

              <nav aria-label="Mobile products" className="mt-5 flex flex-col">
                {powerMenus.map((menu, index) => {
                  const isOpen = expanded === menu.href;
                  const menuActive =
                    pathname === menu.href ||
                    menu.items.some((item) => item.href === pathname);
                  return (
                    <motion.div
                      key={menu.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + index * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="border-b border-white/12"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <Link
                          href={menu.href}
                          onClick={() => setOpen(false)}
                          className={`display flex-1 py-3.5 text-[clamp(1.6rem,6vw,2.6rem)] transition-colors hover:text-volt ${
                            menuActive ? "text-volt" : "text-white"
                          }`}
                        >
                          {menu.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : menu.href)}
                          aria-expanded={isOpen}
                          aria-label={`${isOpen ? "Collapse" : "Expand"} ${menu.label} series`}
                          className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white transition-colors hover:border-white/60"
                        >
                          <Chevron className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-4 pl-1">
                              {menu.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center justify-between gap-3 py-2.5 pr-2 text-[0.92rem] text-white/65 transition-colors hover:text-volt"
                                >
                                  <span>{item.label}</span>
                                  <span className="font-sans text-[0.72rem] text-white/30">{item.meta}</span>
                                </Link>
                              ))}
                              <Link
                                href={menu.href}
                                onClick={() => setOpen(false)}
                                className="mt-1 inline-flex w-fit items-center gap-2 font-sans text-[0.8rem] font-medium text-volt"
                              >
                                View all {menu.label}
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </nav>

              <Link
                href="/products/tbs-san-cell"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 border-b border-gold/60 pb-1 font-sans text-[0.9rem] font-semibold text-gold transition-colors hover:text-white"
              >
                ★ TBS SAN Cell · Best Seller
              </Link>

              <p className="eyebrow mt-9 text-white/40">Explore</p>
              <nav aria-label="Mobile" className="mt-3 flex flex-col">
                {mobileLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32 + index * 0.035, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className="group flex items-baseline justify-between border-b border-white/12 py-3"
                    >
                      <span
                        className={`display text-[clamp(1.4rem,5vw,2.1rem)] transition-colors group-hover:text-volt ${
                          isActive(link.href) ? "text-volt" : "text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                      <span className="font-sans font-medium text-[0.7rem] text-white/35">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.64, duration: 0.6 }}
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
                transition={{ delay: 0.7, duration: 0.5 }}
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
