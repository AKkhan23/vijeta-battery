/**
 * Single source of truth for VIJETA home power.
 * Drives the navigation, the three category pages, the 13 series pages,
 * the products teaser and the sitemap.
 *
 * Technical data adapted from the public reference range at
 * eastmanpowersolutions.in and reworded for VIJETA. Product imagery is
 * illustrative SVG for now — add an `image` field per series to swap in
 * real photography later without touching any page template.
 */

export type PowerVisualKind = "inverter" | "battery" | "lithium" | "combo";

export type PowerStat = { label: string; value: string };

export type HomePowerSeries = {
  slug: string;
  name: string;
  navLabel: string;
  kind: PowerVisualKind;
  tagline: string;
  intro: string;
  description: string[];
  range: string;
  warranty: string;
  waveform: string;
  features: string[];
  benefits: string[];
  applications: string[];
  note?: string;
  image?: string;
  table?: { headers: string[]; rows: string[][] };
};

export type HomePowerGroup = {
  slug: string;
  name: string;
  eyebrow: string;
  intro: string;
  description: string;
  kind: PowerVisualKind;
  stats: PowerStat[];
  selectionNote: string;
  series: HomePowerSeries[];
  image?: string;
  cardImage?: string;
};

export const homePowerGroups: HomePowerGroup[] = [
  {
    slug: "home-inverters",
    name: "Home Inverters",
    eyebrow: "Home power · 01",
    intro: "Clean, appliance-safe backup — from a compact apartment to a large villa.",
    description:
      "VIJETA home inverters convert stored battery power into smooth AC for the things your home cannot do without. Pure sine wave models protect sensitive electronics and run quietly; square wave models deliver dependable backup for everyday loads. Pick the VA rating that matches your appliances, then pair it with a battery that matches your outage pattern.",
    kind: "inverter",
    image: "/home-inverter.jpg",
    cardImage: "/home-inverter-card.jpg",
    stats: [
      { label: "Series", value: "6" },
      { label: "Capacity", value: "700 VA – 15,000 VA" },
      { label: "Output", value: "Sine & square wave" },
    ],
    selectionNote:
      "Add up the wattage of the appliances you need during an outage, then choose a VA rating with headroom for starting surges. Still unsure? Send us your load list and we will size it for you.",
    series: [
      {
        slug: "sino",
        name: "Sino Series",
        navLabel: "Sino",
        kind: "inverter",
        tagline: "Pure sine wave performance for everyday homes.",
        intro:
          "Grid-quality output for sensitive electronics, LED lighting and the modern appliances that cannot tolerate rough power.",
        description: [
          "The Sino Series delivers clean pure sine wave AC, so fans, lights, routers, computers and kitchen appliances run the way they do on mains power — without hum, flicker or hesitation.",
          "A high-speed microcontroller manages changeover and voltage fluctuation, while battery protection keeps the pack out of deep discharge and overcharge. The result is quieter operation and a battery that lasts its full term.",
        ],
        range: "900 VA – 15,000 VA",
        warranty: "5 years",
        waveform: "Pure sine wave",
        features: [
          "Pure sine wave output — safe for sensitive electronics",
          "Zero-volt pickup, even after deep discharge",
          "In-a-wink static changeover — instant and silent",
          "Full rated power: VA equals Watt",
          "Battery protection against deep discharge and overcharging",
          "High-end microcontroller for stable changeover",
        ],
        benefits: [
          "Runs LED lighting, routers and computers without noise",
          "No visible flicker when the power cuts",
          "Smart charging extends battery life",
          "One inverter for the whole home",
        ],
        applications: ["Homes", "Small offices", "Retail stores", "Clinics", "Hotels", "Small schools"],
      },
      {
        slug: "electro",
        name: "Electro Series",
        navLabel: "Electro",
        kind: "inverter",
        tagline: "Dependable square wave backup for everyday loads.",
        intro:
          "Strong peak output, efficient charging and wide AC tolerance — built for homes that need reliable backup without complexity.",
        description: [
          "The Electro Series is engineered for everyday outage duty. Peak load handling covers fans, lights and small appliances, while a wide input voltage range keeps the inverter working through unstable supply.",
          "Fast charging and built-in protection make it a practical choice where power cuts are frequent but the load is familiar and predictable.",
        ],
        range: "700 VA – 1,700 VA",
        warranty: "3 years",
        waveform: "Square wave",
        features: [
          "Peak Load, Peak Output for stronger starts",
          "Wide AC voltage range with protection",
          "Fast, efficient battery charging",
          "Dependable changeover during outages",
          "Built-in overload and short-circuit protection",
        ],
        benefits: [
          "Handles everyday household loads with ease",
          "Works through wide voltage swings",
          "Quick recharge between power cuts",
          "Straightforward, low-fuss operation",
        ],
        applications: ["Homes", "Small shops", "Small offices", "Hostels", "Rural households"],
        note: "Capacity and warranty shown as listed on the reference range; confirm the exact variant with your VIJETA dealer.",
      },
      {
        slug: "omega",
        name: "Omega Series",
        navLabel: "Omega",
        kind: "inverter",
        tagline: "Smart sine wave backup for modern homes.",
        intro:
          "Efficient pure sine output with intelligent controls for smooth operation across essential appliances.",
        description: [
          "The Omega Series balances clean output with smart power management, so multiple appliances can run together without bogging the system down.",
          "Advanced battery protection and safety cut-offs keep both the inverter and the battery in their safe operating range through long outage seasons.",
        ],
        range: "1,000 VA – 2,000 VA",
        warranty: "4 years",
        waveform: "Pure sine wave",
        features: [
          "Pure sine wave output with noiseless operation",
          "Strong multi-appliance handling",
          "Advanced battery protection",
          "Intelligent charge control",
          "Safety cut-offs for overload and short circuit",
        ],
        benefits: [
          "Run several essentials at once",
          "Quiet enough for bedrooms and study rooms",
          "Battery stays protected in every cycle",
          "Efficient use of stored power",
        ],
        applications: ["Homes", "Apartments", "Small offices", "Clinics", "Retail counters"],
      },
      {
        slug: "sigma",
        name: "Sigma Series",
        navLabel: "Sigma",
        kind: "inverter",
        tagline: "Heavy-duty backup power built to last.",
        intro:
          "Rugged square wave output with a wide operating range and fast changeover for demanding household loads.",
        description: [
          "The Sigma Series is built where the load is heavier and the supply less predictable. The square wave output handles everyday appliances while a wide capacity range lets you match the inverter to the home.",
          "Fast changeover keeps connected equipment running through the transition, and the protected design stands up to repeated daily use.",
        ],
        range: "700 VA – 2,000 VA",
        warranty: "4 years",
        waveform: "Square wave",
        features: [
          "Square wave output for everyday backup",
          "Wide operating capacity range",
          "Fast changeover for uninterrupted operation",
          "Robust overload protection",
          "Designed for frequent daily cycling",
        ],
        benefits: [
          "Dependable under heavy household use",
          "Handles uncertain supply conditions",
          "Minimal interruption at switchover",
          "Long service with routine care",
        ],
        applications: ["Homes", "Small industries", "Workshops", "Retail stores", "Schools"],
      },
      {
        slug: "sinospark",
        name: "SinoSpark Series",
        navLabel: "SinoSpark",
        kind: "inverter",
        tagline: "Compact sine wave power, everyday reliability.",
        intro:
          "Pure sine output in a sleek compact chassis — steady backup for apartments and smaller homes.",
        description: [
          "The SinoSpark Series packs quiet pure sine power into a small footprint, making it easy to place in an apartment, utility corner or under-stair store.",
          "Static changeover happens in an instant, so lights, fans and Wi-Fi carry on without a noticeable break.",
        ],
        range: "950 VA – 2,300 VA",
        warranty: "3 years",
        waveform: "Pure sine wave",
        features: [
          "Pure sine wave output with noiseless operation",
          "In-a-wink static changeover",
          "Compact, durable cabinet design",
          "Efficient charging for daily backup",
          "Appliance-safe output for sensitive loads",
        ],
        benefits: [
          "Fits where space is tight",
          "No flicker at changeover",
          "Safe for electronics and LED lighting",
          "Reliable day-after-day operation",
        ],
        applications: ["Apartments", "Homes", "Home offices", "Clinics", "Retail counters"],
      },
      {
        slug: "wattrix",
        name: "Wattrix Series",
        navLabel: "Wattrix",
        kind: "inverter",
        tagline: "Sturdy square wave backup for daily power needs.",
        intro:
          "Efficient square wave performance with peak output and protection against voltage swings and lightning.",
        description: [
          "The Wattrix Series is a workhorse for everyday backup. Peak load handling supports multiple appliances, and a tolerant input stage copes with the voltage fluctuation common on Indian supply.",
          "Added lightning protection and fast charging make it a sensible fit for homes and small businesses that face regular outages.",
        ],
        range: "700 VA – 1,700 VA",
        warranty: "3 years",
        waveform: "Square wave",
        features: [
          "Peak Load, Peak Output for multi-appliance handling",
          "Wide AC voltage range",
          "Lightning and surge protection",
          "Fast battery charging",
          "Rugged design for daily use",
        ],
        benefits: [
          "Copes with unstable supply",
          "Runs everyday loads confidently",
          "Quick recovery between outages",
          "Extra protection in storm season",
        ],
        applications: ["Homes", "Small shops", "Workshops", "Rural households", "Small offices"],
      },
    ],
  },
  {
    slug: "inverter-batteries",
    name: "Inverter Batteries",
    eyebrow: "Home power · 02",
    intro: "Tall tubular deep-cycle batteries with high electrolyte reserve for Indian outage patterns.",
    description:
      "An inverter is only as good as the battery behind it. VIJETA inverter batteries use tubular plate technology for long cycle life, steady backup and slow recovery from the deep discharges that frequent power cuts cause. Choose on capacity, outage length and how much maintenance you want to do.",
    kind: "battery",
    image: "/inverter-battery.jpg",
    cardImage: "/inverter-battery-card.jpg",
    stats: [
      { label: "Series", value: "3" },
      { label: "Capacity", value: "100 Ah – 400 Ah" },
      { label: "Construction", value: "Tubular deep-cycle" },
    ],
    selectionNote:
      "Bigger capacity means longer backup, but also a longer recharge. Tell us your outage hours and connected load and we will recommend an Ah rating that recovers in time for the next cut.",
    series: [
      {
        slug: "regular",
        name: "Regular Series",
        navLabel: "Regular",
        kind: "battery",
        tagline: "Time-tested tubular power, built for Indian homes.",
        intro:
          "Conventional tubular plates, deep discharge capability and low water loss — dependable backup with minimal fuss.",
        description: [
          "The Regular Series is built around advanced tubular plate technology that recovers to full capacity even after long idle periods and keeps performing through extreme summer heat.",
          "Low water loss and low fume generation mean fewer top-ups and safer installation near living spaces, while extra rated capacity gives you more backup than the label suggests.",
        ],
        range: "135 Ah – 400 Ah",
        warranty: "Up to 20 years",
        waveform: "Deep-cycle DC",
        features: [
          "Easy recovery to full capacity after idle periods",
          "Low water loss — minimal top-ups",
          "Less fume generation, safer near living spaces",
          "Lowest electricity consumption while recharging",
          "5% extra capacity over the rated value",
          "Deep discharge capability for long outages",
        ],
        benefits: [
          "Longer backup on a single charge",
          "Lower electricity cost over its life",
          "Safe to install close to the home",
          "Ready even after months unused",
        ],
        applications: ["Homes", "Retail shops", "Clinics", "Schools", "Small offices"],
        note: "The 20-year figure is the stated service-life rating for the series; ask your dealer for the applicable warranty term in writing.",
      },
      {
        slug: "smart",
        name: "Smart Series",
        navLabel: "Smart",
        kind: "battery",
        tagline: "Smarter tubular technology for everyday backup.",
        intro:
          "Efficient charge acceptance and low fume output for homes that see frequent power cuts and heavy daily use.",
        description: [
          "The Smart Series pairs tubular plate construction with efficient charge acceptance, so the battery takes back the energy it needs quickly even when outages arrive close together.",
          "Low fume generation and minimal water loss keep maintenance low and make it suitable for installation near living areas.",
        ],
        range: "100 Ah – 400 Ah",
        warranty: "Up to 60 months (60 + 60)",
        waveform: "Deep-cycle DC",
        features: [
          "Less fume generation — safe near living spaces",
          "Lowest electricity consumption while recharging",
          "Efficient charge acceptance for frequent cuts",
          "Low water loss and low maintenance",
          "Strong performance under heavy daily usage",
        ],
        benefits: [
          "Recharges quickly between outages",
          "Lower power bill over its lifetime",
          "Cleaner and safer indoors",
          "Built for regular deep cycling",
        ],
        applications: ["Homes", "Apartments", "Retail shops", "Clinics", "Home offices"],
      },
      {
        slug: "citimax",
        name: "CitiMax Series",
        navLabel: "CitiMax",
        kind: "battery",
        tagline: "Reliable tubular backup, built for value.",
        intro:
          "A trusted, time-tested tubular battery for city homes — extra power and deep discharge at an honest price.",
        description: [
          "The CitiMax Series is made for urban households that need dependable backup without over-specifying. It handles heavy daily use and recovers cleanly after idle periods.",
          "Deep discharge up to 80% means more of the stored energy is usable, and extra capacity at no additional cost stretches the backup when it matters most.",
        ],
        range: "100 Ah – 220 Ah",
        warranty: "48 months",
        waveform: "Deep-cycle DC",
        features: [
          "Extra power at no additional cost",
          "Deep discharge capability up to 80%",
          "Easy recovery after idle periods",
          "Tubular plates for long cycle life",
          "Dependable under heavy daily usage",
        ],
        benefits: [
          "More usable energy per charge",
          "Four years of stated cover",
          "Good value for city homes",
          "Low routine maintenance",
        ],
        applications: ["City homes", "Apartments", "Retail shops", "Small offices", "Clinics"],
        note: "Capacity band shown provisionally — the reference range states the warranty and features but not a full Ah spread. Confirm with your dealer.",
      },
    ],
  },
  {
    slug: "lithtec-combo",
    name: "LithTec Combo",
    eyebrow: "Home power · 03",
    intro: "A lithium-native Home UPS matched with storage — one system, one standard, zero maintenance.",
    description:
      "The LithTec range pairs a Home UPS with a compatible lithium battery so charging, protection and changeover are designed to work together. No water topping, no fume management, faster recharge and a compact footprint — backed by a single warranty conversation.",
    kind: "combo",
    stats: [
      { label: "Products", value: "4" },
      { label: "UPS range", value: "850 VA – 5,000 VA" },
      { label: "Storage", value: "12.8 V – 51.2 V" },
    ],
    selectionNote:
      "Match the Home UPS model to the battery voltage and capacity in the pairing chart below. Pairing is indicative — final backup depends on connected load, usage pattern and battery age.",
    series: [
      {
        slug: "lithtec-combo-series",
        name: "LithTec Combo",
        navLabel: "LithTec Combo",
        kind: "combo",
        tagline: "Home UPS and lithium battery, matched as one complete system.",
        intro:
          "A matched Home UPS and lithium battery pack that installs compactly, charges faster and needs no maintenance.",
        description: [
          "The LithTec Combo brings the inverter and the storage together as one engineered system. The UPS charging profile is tuned for lithium, the BMS protects the battery, and the whole unit is backed by up to 60 months of cover on the Home UPS.",
          "Use the pairing chart to choose the right lithium battery for a sine wave or square wave Home UPS model — from a 12.8 V apartment setup to a 51.2 V full-home installation.",
        ],
        range: "850 VA – 5,000 VA",
        warranty: "Up to 60 months (Home UPS)",
        waveform: "Sine & square wave options",
        features: [
          "Matched Home UPS and lithium battery",
          "Faster charging with optimal battery performance",
          "Compact, durable and user-friendly design",
          "Smart BMS protection on the battery pack",
          "Maintenance-free operation",
        ],
        benefits: [
          "One system, one warranty conversation",
          "No water topping or fume management",
          "Lightweight and easy to install",
          "Ready for apartments through to large homes",
        ],
        applications: ["Residential", "Apartments and flats", "Clinics", "Small offices"],
        note: "Pairing is indicative. Actual backup depends on the connected load, usage pattern and battery age — confirm your combination with our team.",
        table: {
          headers: ["Lithium battery", "Capacity", "Sine wave Home UPS", "Square wave Home UPS"],
          rows: [
            ["VJ LIB 160", "12.8 V · 100 Ah", "950 / 1300 / 1650 - 12V", "850 / 1200 / 1500 VA - 12V"],
            ["VJ LIB 240", "12.8 V · 150 Ah", "950 / 1300 / 1650 - 12V", "850 / 1200 / 1500 VA - 12V"],
            ["VJ LIB 320", "25.6 V · 100 Ah", "2200 - 24V", "2000 VA - 24V"],
            ["VJ LIB 480", "25.6 V · 150 Ah", "2200 / 3125 VA - 24V", "2000 VA - 24V"],
            ["VJ LIB 960", "51.2 V · 150 Ah", "5000 VA - 48V", "—"],
          ],
        },
      },
      {
        slug: "lithium-battery",
        name: "Lithium Battery",
        navLabel: "Lithium Battery",
        kind: "lithium",
        tagline: "A smarter way to stay powered up.",
        intro:
          "A lead-acid replacement lithium pack that is lighter, faster to charge and maintenance-free.",
        description: [
          "The VIJETA lithium battery uses advanced lithium chemistry with a smart battery management system to deliver higher efficiency, faster charging and many more cycles than a conventional lead-acid pack.",
          "Health, charge state and fault alerts can be checked in the iConnect app, and the compact cabinet fits where a tall tubular battery cannot.",
        ],
        range: "12.8 V – 51.2 V · 100 Ah – 150 Ah",
        warranty: "60 months",
        waveform: "LiFePO₄ storage",
        features: [
          "Lighter in weight — easy to handle and install",
          "Smart BMS for protection and longer life",
          "Battery health monitoring through the iConnect app",
          "Maintenance-free — no water, no fumes",
          "Faster charging and higher cycle life",
        ],
        benefits: [
          "Installs in tight spaces",
          "No routine maintenance visits",
          "Longer life and lower cost over time",
          "Charge status visible on your phone",
        ],
        applications: ["Residential", "Apartments and flats", "Clinics", "Small offices"],
      },
      {
        slug: "sine-wave-home-ups",
        name: "Sine Wave Home UPS",
        navLabel: "Sine Wave Home UPS",
        kind: "inverter",
        tagline: "Pure sine wave power, engineered for lithium.",
        intro:
          "Clean, appliance-safe output with a lithium-tuned charging profile and zero-volt pickup.",
        description: [
          "The LithTec Sine Wave Home UPS delivers grid-quality AC while charging a lithium pack efficiently and safely. It is the right choice where sensitive electronics and quiet operation matter.",
          "Zero-volt pickup brings the system back even after a deep discharge, and static changeover keeps lights, fans and Wi-Fi running without a visible break.",
        ],
        range: "850 VA – 5,000 VA",
        warranty: "Up to 60 months",
        waveform: "Pure sine wave",
        features: [
          "Pure sine wave output with noiseless operation",
          "Zero-volt pickup after deep discharge",
          "Lithium-compatible fast charging",
          "Static changeover — instant and silent",
          "Wide capacity range up to 5,000 VA",
        ],
        benefits: [
          "Safe for computers and sensitive appliances",
          "Recovers even at very low battery voltage",
          "Works as part of a matched LithTec system",
          "Scales from one room to the whole home",
        ],
        applications: ["Homes", "Apartments", "Clinics", "Home offices", "Retail counters"],
      },
      {
        slug: "square-wave-home-ups",
        name: "Square Wave Home UPS",
        navLabel: "Square Wave Home UPS",
        kind: "inverter",
        tagline: "Efficient square wave power, built for lithium.",
        intro:
          "Dependable backup with peak output and fast charging for everyday household loads.",
        description: [
          "The LithTec Square Wave Home UPS is tuned for lithium storage and everyday loads. Peak output handles multiple appliances starting together, while fast charging shortens the gap between outages.",
          "Static changeover happens in an instant, so routine lighting and fans keep running with no noticeable interruption.",
        ],
        range: "850 VA – 2,000 VA",
        warranty: "Up to 60 months",
        waveform: "Square wave",
        features: [
          "Peak Load, Peak Output for multi-appliance handling",
          "In-a-wink static changeover — instant and silent",
          "Lithium-compatible fast charging",
          "Compact, durable cabinet",
          "Designed for everyday household loads",
        ],
        benefits: [
          "Handles common home appliances confidently",
          "Quick recharge between power cuts",
          "Pairs with VJ LIB 160 to 480 packs",
          "Simple, dependable daily operation",
        ],
        applications: ["Homes", "Apartments", "Small shops", "Small offices"],
      },
    ],
  },
];

export const homePowerSeries: HomePowerSeries[] = homePowerGroups.flatMap((group) => group.series);

export function getHomePowerGroup(slug: string): HomePowerGroup | undefined {
  return homePowerGroups.find((group) => group.slug === slug);
}

export function getHomePowerSeries(slug: string): HomePowerSeries | undefined {
  return homePowerSeries.find((series) => series.slug === slug);
}

export function getGroupForSeries(slug: string): HomePowerGroup | undefined {
  return homePowerGroups.find((group) => group.series.some((series) => series.slug === slug));
}

export function getRelatedSeries(series: HomePowerSeries, limit = 3): HomePowerSeries[] {
  const group = getGroupForSeries(series.slug);
  if (!group) return [];
  return group.series.filter((item) => item.slug !== series.slug).slice(0, limit);
}

export function getSeriesHref(series: HomePowerSeries): string {
  return `/products/${series.slug}`;
}

export function getGroupHref(group: HomePowerGroup): string {
  return `/products/${group.slug}`;
}
