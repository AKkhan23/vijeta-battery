import type { ReactNode } from "react";
import {
  ArrowUpRight,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/site";
import { EnquiryForm } from "./EnquiryForm";

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.state} ${site.address.pin}`,
)}`;

type Props = {
  id?: string;
  index?: string;
  title?: ReactNode;
  intro?: string;
  defaultType?: string;
};

export function Contact({
  id = "contact",
  index = "08",
  title = (
    <>
      Tell us what
      <br />
      you <em className="accent-serif font-normal text-royal">drive.</em>
    </>
  ),
  intro = "Send the details and we will come back with the right battery, the right series and the nearest authorised dealer. A phone call works too.",
  defaultType,
}: Props) {
  return (
    <section id={id} className="section-y bg-paper">
      <div className="container-x">
        <Reveal>
          <SectionLabel index={index} text="Contact" />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="max-w-[12ch] text-[clamp(2.8rem,5.4vw,4.7rem)]">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-[26rem] text-[0.95rem] leading-relaxed text-ink/60">
                {intro}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-8 border-t border-line">
              <div className="flex gap-4 border-b border-line py-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-line bg-white text-royal">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="eyebrow text-ink/40">Call</p>
                  <div className="mt-2 space-y-1.5">
                    {site.phones.map((phone) => (
                      <div key={phone.tel} className="flex flex-wrap items-baseline gap-x-3">
                        <a
                          href={`tel:${phone.tel}`}
                          className="font-display text-[1.02rem] font-semibold tracking-tight text-ink transition-colors hover:text-royal"
                        >
                          {phone.label}
                        </a>
                        <span className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-ink/35">
                          {phone.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 border-b border-line py-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-line bg-white text-royal">
                  <MailIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="eyebrow text-ink/40">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-2 block break-all text-[0.92rem] font-medium text-ink transition-colors hover:text-royal"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 border-b border-line py-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-line bg-white text-royal">
                  <PinIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="eyebrow text-ink/40">Plant</p>
                  <address className="mt-2 text-[0.88rem] not-italic leading-relaxed text-ink/65">
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
                    className="link-arrow mt-2 text-[0.75rem]"
                  >
                    Get directions
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16} className="mt-6">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border border-royal/25 bg-royal/[0.04] px-4 py-3.5 transition-colors hover:border-royal hover:bg-royal/[0.07]"
              >
                <span className="flex items-center gap-3">
                  <WhatsAppIcon className="h-5 w-5 text-royal" />
                  <span>
                    <span className="block text-[0.85rem] font-semibold text-ink">
                      WhatsApp is fastest
                    </span>
                    <span className="block font-mono text-[0.55rem] uppercase tracking-[0.14em] text-ink/40">
                      {site.phonePrimaryLabel}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-royal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <p className="mt-3 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-ink/30">
                We reply as soon as we can, during working hours.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal amount={0.08}>
              <EnquiryForm defaultType={defaultType} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
