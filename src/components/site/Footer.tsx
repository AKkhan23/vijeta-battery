import Link from "next/link";
import { ArrowUpRight, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { FooterWordmark } from "@/components/site/FooterWordmark";
import { categories, pageLinks, site } from "@/lib/site";

const companyLinks = pageLinks.filter((link) => link.href !== "/");

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="blueprint-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-x relative pt-16">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0 lg:pb-12">
          <div className="col-span-2 border border-white/10 bg-white/[0.025] p-4 lg:col-span-4 lg:border-0 lg:bg-transparent lg:p-0">
            <Logo light />
            <p className="mt-6 max-w-[24rem] text-[0.88rem] leading-relaxed text-white/50">
              Lead-acid batteries for the vehicles India runs on. Manufactured in
              Pithampur since 1988, tested unit by unit, and sold through authorised
              dealers.
            </p>
            <p className="mt-5 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/30">
              Aadinath Power Systems Pvt. Ltd.
            </p>
          </div>

          <div className="border border-white/10 bg-white/[0.025] p-4 lg:col-span-3 lg:border-0 lg:bg-transparent lg:p-0">
            <p className="eyebrow text-white/35">Applications</p>
            <ul className="mt-4 space-y-2.5">
              {categories.map((category) => (
                <li key={category.title}>
                  <Link href="/products" className="text-[0.85rem] text-white/60 transition-colors hover:text-white">
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 bg-white/[0.025] p-4 lg:col-span-2 lg:border-0 lg:bg-transparent lg:p-0">
            <p className="eyebrow text-white/35">Company</p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[0.85rem] text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 border border-white/10 bg-white/[0.025] p-4 lg:col-span-3 lg:border-0 lg:bg-transparent lg:p-0">
            <p className="eyebrow text-white/35">Contact</p>
            <ul className="mt-4 space-y-3 text-[0.82rem] text-white/60">
              <li className="flex gap-2.5">
                <PhoneIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-volt" />
                <span className="flex flex-col gap-1">
                  {site.phones.map((phone) => (
                    <a key={phone.tel} href={`tel:${phone.tel}`} className="transition-colors hover:text-white">
                      {phone.label}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-2.5">
                <MailIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-volt" />
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <PinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-volt" />
                <address className="not-italic leading-relaxed text-white/50">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city} (M.P.) {site.address.pin}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-b border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-white/30">
            © 2026 VIJETA Battery · {site.legalName}
          </p>
          <div className="flex items-center gap-5">
            <Link href="/" className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-white/40 transition-colors hover:text-white">
              {site.domain}
            </Link>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-white/40 transition-colors hover:text-white"
            >
              Back to top
              <span className="flex h-6 w-6 items-center justify-center border border-white/20 transition-colors group-hover:border-white/60">
                <ArrowUpRight className="h-3 w-3 -rotate-45" />
              </span>
            </a>
          </div>
        </div>

        <FooterWordmark />
      </div>
    </footer>
  );
}
