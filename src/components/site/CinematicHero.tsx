import Image from "next/image";

/**
 * Home banner.
 *
 * The artwork already carries the headline ("Power Beyond the Power Cut.")
 * and the supporting line, so nothing is overlaid on top of it. Small screens
 * use the portrait mobile artwork in full; desktop keeps the wide banner.
 * The <h1> stays in the markup for search engines and screen readers but is
 * visually hidden.
 */
export function CinematicHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-[76px]">
      <h1 className="sr-only">
        Power Beyond the Power Cut — reliable inverter batteries from VIJETA
      </h1>

      <div className="relative aspect-[1086/1448] w-full sm:hidden">
        <Image
          src="/367d95b4-5820-4f57-8d3b-8a52a1d649c4.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative hidden aspect-[1470/563] w-full sm:block">
        <Image
          src="/home-banner-vijeta.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
