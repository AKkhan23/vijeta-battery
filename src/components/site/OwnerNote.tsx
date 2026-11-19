import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ownerNote } from "@/lib/heritage";

export function OwnerNote() {
  const { owner } = ownerNote;

  return (
    <section
      id="owner"
      className="relative overflow-hidden border-t border-line bg-white"
      style={{ scrollMarginTop: "5.5rem" }}
    >
      <div className="container-x section-y">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
          <Reveal className="lg:col-span-4">
            <figure className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-line bg-paper transition-[border-color,box-shadow] duration-500 group-hover:border-royal/25 group-hover:shadow-[0_36px_70px_-50px_rgba(20,54,200,0.45)]">
                <Image
                  src="/owner-apurv-jain-office.jpg"
                  alt="Apurv Singh Jain at his desk in the VIJETA office."
                  fill
                  sizes="(max-width: 1024px) 92vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                />

                <span className="absolute right-4 top-4 rounded-full border border-white/60 bg-white/85 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/55 backdrop-blur">
                  Est. 1988
                </span>

                <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-[0_18px_40px_-30px_rgba(8,11,20,0.45)] backdrop-blur-md">
                  <p className="font-sans text-[0.86rem] font-semibold text-ink">{owner.name}</p>
                  <p className="mt-0.5 font-sans text-[0.7rem] leading-snug text-ink/50">{owner.role}</p>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <SectionLabel text={ownerNote.eyebrow} />
              <h2 className="mt-5 max-w-[17ch] text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-ink">
                {ownerNote.title}
              </h2>
            </Reveal>

            <div className="mt-6 flex max-w-[36rem] flex-col gap-4">
              {ownerNote.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={0.05 + index * 0.05}>
                  <p className="text-[0.98rem] leading-[1.8] text-ink/60">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.16} className="mt-7 border-l-2 border-royal/70 pl-5">
              <p className="accent-serif max-w-[26ch] text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.25] text-ink">
                “{ownerNote.quote}”
              </p>
              <p className="mt-2 font-sans text-[0.68rem] uppercase tracking-[0.14em] text-ink/35">
                {ownerNote.quoteNote}
              </p>
            </Reveal>

            <Reveal
              delay={0.2}
              className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 sm:grid-cols-3"
            >
              <div>
                <p className="eyebrow text-ink/40">On record</p>
                <p className="display mt-2.5 text-[1.9rem] leading-none text-royal">Est. 1988</p>
              </div>
              <div>
                <p className="eyebrow text-ink/40">Owner</p>
                <p className="mt-2.5 text-[0.86rem] font-semibold text-ink">{owner.name}</p>
                <p className="mt-1 text-[0.72rem] leading-snug text-ink/45">{owner.role}</p>
              </div>
              <div>
                <p className="eyebrow text-ink/40">Plant</p>
                <p className="mt-2.5 text-[0.86rem] font-semibold text-ink">{owner.place}</p>
                <p className="mt-1 text-[0.72rem] text-ink/45">{owner.generation}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
