import { Bolt } from "@/components/ui/Icons";

const items = [
  "Cars & SUVs",
  "Tractors",
  "Trucks & buses",
  "Auto rickshaws",
  "Industrial backup",
  "Solar storage",
  "Chargers",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-7 font-sans font-medium text-[0.78rem] text-white/75">
            {item}
          </span>
          <Bolt className="h-3 w-3 shrink-0 text-volt" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Applications" className="marquee border-y border-white/10 bg-ink py-4">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
