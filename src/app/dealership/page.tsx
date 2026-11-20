import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Contact } from "@/components/site/Contact";
import { DealerCTA } from "@/components/site/DealerCTA";
import { PageHeader } from "@/components/site/PageHeader";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Dealership",
  description:
    "Become a VIJETA Batteries dealer in Madhya Pradesh and central India. Territory support, stock planning, warranty backing and direct factory contact.",
  path: "/dealership",
});

const benefits = [
  {
    title: "Territory & distribution",
    copy: "We talk through your area, the vehicles your customers run and the stock mix that makes sense for your counter.",
  },
  {
    title: "Stock planning",
    copy: "Gold and Silver, six applications and the fast-moving sizes — planned with you so capital is not sitting still.",
  },
  {
    title: "Warranty support",
    copy: "Clear claim handling through Vijeta Accumulators and New Technologies. Your customers deal with you, and you deal with a team that answers.",
  },
  {
    title: "Factory-direct contact",
    copy: "No layers between your counter and the plant. If a batch or a claim needs attention, we pick up the phone.",
  },
];

export default function DealershipPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="For the trade"
        index="01"
        crumb="Dealership"
        path="/dealership"
        title={
          <>
            A counter worth
            <br />
            <em className="heading-gloss accent-serif font-normal text-royal">standing behind.</em>
          </>
        }
        intro="We are expanding our dealer network across central India. If you run a workshop, garage or auto-parts counter, let us talk about territory, margins and stocking a brand customers come back for."
        meta={[
          { label: "Network", value: "Central India" },
          { label: "Series", value: "Gold & Silver" },
          { label: "Support", value: "Direct from Vijeta Accumulators and New Technologies" },
          { label: "Sales line", value: site.phones[2].label },
        ]}
      />

      <section className="section-y bg-paper">
        <div className="container-x">
          <Reveal>
            <SectionLabel index="01" text="What we bring" />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-8 max-w-[18ch] text-[clamp(2.5rem,4.6vw,4rem)]">
              A partnership, not
              <br />
              just a <em className="heading-gloss accent-serif font-normal text-royal">supply line.</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.06} y={16} className="h-full">
                <div data-torch className="torch-card h-full p-5">
                  <span className="font-sans font-medium text-[0.75rem] text-royal">0{index + 1}</span>
                  <h3 className="mt-4 font-display text-[1.1rem] font-semibold tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-ink/60">{benefit.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <p className="font-sans font-medium text-[0.75rem] text-ink/40">
              Prefer to talk first? The sales line is the fastest route.
            </p>
            <a href={`tel:${site.phones[2].tel}`} className="link-arrow">
              Call {site.phones[2].label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <DealerCTA href="#enquiry" label="Start a dealer enquiry" />

      <Contact
        id="enquiry"
        index="02"
        defaultType="Dealership"
        title={
          <>
            Let’s talk
            <br />
            <em className="heading-gloss accent-serif font-normal text-royal">territory.</em>
          </>
        }
        intro="Tell us your city, your counter and what you stock today. We will come back with territory, series and stock details — no waiting on a call centre."
      />

      <section className="border-t border-line bg-white py-8">
        <div className="container-x flex flex-wrap items-center justify-between gap-4">
          <p className="text-[0.88rem] text-ink/60">
            Just looking for a battery for your own vehicle?
          </p>
          <Link href="/contact" className="link-arrow">
            Use the regular enquiry form
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
