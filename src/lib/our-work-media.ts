/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  OUR WORK / FACTORY TOUR — CENTRAL MEDIA MANIFEST
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every video, poster and photograph used on /our-work is declared here.
 *
 *  WHEN THE ORIGINAL ASSETS ARRIVE:
 *    • Videos — drop the file in /public/our-work/ and set `videoSrc` to its
 *      path, e.g. videoSrc: "/our-work/hero.mp4". While `videoSrc` is an empty
 *      string the component intentionally renders no <source>, so the poster
 *      placeholder is shown cleanly (no broken media icon, no collapsed box).
 *    • Images — replace the file at the listed path, or change `src` below.
 *
 *  Nothing else needs to change: aspect ratios, object-fit, cropping, spacing
 *  and motion are all defined by the components, not by the asset files.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type FactoryVideo = {
  /** Real video path. Empty string = show the poster placeholder only. */
  videoSrc: string;
  /** Poster / fallback placeholder — keeps the frame filled before playback. */
  poster: string;
  /** Accessible description of the footage. */
  label: string;
};

export type FactoryImage = {
  src: string;
  alt: string;
  /** Short caption rendered under machinery photographs. */
  caption?: string;
};

export const ourWorkMedia = {
  hero: {
    videoSrc: "/our-work/hero-compressed.mp4",
    poster: "/our-work/hero-poster.jpg",
    label: "Factory workers on the VIJETA production floor",
  } satisfies FactoryVideo,

  production: {
    videoSrc: "/our-work/production-compressed.mp4",
    poster: "/our-work/production-poster.jpg",
    label: "Battery production on the VIJETA factory floor",
  } satisfies FactoryVideo,

  assembly: {
    videoSrc: "/our-work/assembly-compressed.mp4",
    poster: "/our-work/assembly-poster.jpg",
    label: "Battery assembly on the VIJETA factory floor",
  } satisfies FactoryVideo,

  process: {
    videoSrc: "/our-work/process-compressed.mp4",
    poster: "/our-work/assembly-poster.jpg",
    label: "A closer look at battery assembly on the VIJETA factory floor",
  } satisfies FactoryVideo,

  machineryVideo: {
    videoSrc: "/our-work/machinery-video.mp4",
    poster: "/our-work/machinery-video-poster.jpg",
    label: "Manufacturing machinery operating on the VIJETA factory floor",
  } satisfies FactoryVideo,

  /** Real charger photographs from the Vijeta factory floor. */
  chargers: {
    bench: {
      src: "/our-work/charger-bench.jpg",
      alt: "A Vijeta worker preparing charger wiring harnesses by hand at the workbench",
    } satisfies FactoryImage,
    complete: {
      src: "/our-work/charger-complete.jpg",
      alt: "A completed Vijeta battery charger with its transformer and wiring in place",
    } satisfies FactoryImage,
    controls: {
      src: "/our-work/charger-controls.jpg",
      alt: "The control board and wiring loom inside a Vijeta charger enclosure",
    } satisfies FactoryImage,
    power: {
      src: "/our-work/charger-power.jpg",
      alt: "The transformer and rectifier assembly inside a larger Vijeta charger",
    } satisfies FactoryImage,
    enclosures: {
      src: "/our-work/charger-enclosures.jpg",
      alt: "Formed and vented Vijeta charger enclosures waiting to be assembled",
    } satisfies FactoryImage,
  },

  machinery: [
    {
      src: "/our-work/machinery-conveyor.jpg",
      alt: "Control panel and conveyor line on a Vijeta production machine",
      caption: "Control panel & conveyor line",
    },
    {
      src: "/our-work/machinery-sealmach.jpg",
      alt: "Sealmach battery sealing press on the Vijeta factory floor",
      caption: "Battery sealing press · Sealmach",
    },
  ] satisfies FactoryImage[],
};

/**
 * B2B charging showcase. Copy describes only what the factory photographs
 * actually show — no invented ratings, capacities or certifications.
 */
export const chargerProducts = [
  {
    code: "01",
    tag: "Finished unit",
    title: "Complete Charger Assembly",
    detail:
      "Transformer, control card and cabling seated inside the cabinet — the finished unit, ready for its final check before dispatch.",
    image: ourWorkMedia.chargers.complete,
  },
  {
    code: "02",
    tag: "Control electronics",
    title: "Control & Metering Build",
    detail:
      "Control board, meters and switchgear laid out and wired by hand inside the enclosure before the unit moves on.",
    image: ourWorkMedia.chargers.controls,
  },
  {
    code: "03",
    tag: "Power stage",
    title: "Transformer & Rectifier Stage",
    detail:
      "A larger cabinet built around its transformer and rectifier stack, with cables routed, terminated and dressed into place.",
    image: ourWorkMedia.chargers.power,
  },
  {
    code: "04",
    tag: "Fabrication",
    title: "Cabinet Enclosures",
    detail:
      "Formed, cut and vented cabinets prepared and stacked before assembly begins — the shell that starts every build.",
    image: ourWorkMedia.chargers.enclosures,
  },
  {
    code: "05",
    tag: "Workbench craft",
    title: "Wiring Harness Assembly",
    detail:
      "Wires cut, terminals fitted and harnesses prepared by hand at the bench — the patient detail behind every charger.",
    image: ourWorkMedia.chargers.bench,
  },
];
