export type IndustrialProduct = {
  slug: string;
  name: string;
  category: string;
  image: string;
  intro: string;
  details?: string[];
  note?: string;
  applications: string[];
  features: string[];
  userBenefits?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export const industrialProducts: IndustrialProduct[] = [
  {
    slug: "tbs-san-cell",
    name: "TBS Battery Cells in Transparent SAN Containers",
    category: "TBS / OPzS — Transparent SAN",
    image: "/products/tbs-san-cell.jpg",
    intro:
      "Tubular battery cells in transparent SAN containers, built for dependable standby and cyclic power in industrial applications.",
    note:
      "Currently these cells in SAN Containers are available equivalent to OPzS 100 to OPzS 1000 Ah range. For any requirement above 1000 Ah please write or contact us.",
    details: [
      "The cells use tubular positive plates cast on high-pressure HADI machines to resist corrosion and deliver long service life. Transparent SAN containers make electrolyte level, plate condition and separators easy to inspect visually.",
      "Low self-discharge, rapid recharge and high Ampere-hour and Watt-hour efficiencies make these cells suitable for both standby float and frequent charge/discharge duties.",
      "The design withstands high ambient temperatures and conforms to IS 1651:2013.",
    ],
    applications: ["Power Plants", "Substations", "UPS Systems", "Process Industries", "C & I", "Solar", "Railway Signalling", "Telecommunication"],
    features: [
      "Transparent SAN container for clear visual monitoring",
      "Tubular positive plates cast on high-pressure HADI machines",
      "High tensile, acid-resistant polyester gauntlets",
      "High porosity envelope separators",
      "Electrolyte level indicator and micro porous ceramic vent plug",
      "Low maintenance with conforming IS 1651:2013 performance",
    ],
    table: {
      headers: [
        "Type / Designation",
        "C-10 Capacity upto 1.80 V/Cell (AH)",
        "Charging Current — Starting rate (A)",
        "Charging Current — Finishing rate (A)",
        "Total Min. Input during Initial Charging (AH)",
        "Weight ±5% — Dry (Kg)",
        "Weight ±5% — With Acid filled (Kg)",
        "App. Qty. of Acid 1.230 Sp. Gr. (Liters)",
        "Length ±5 (mm)",
        "Width ±5 (mm)",
        "Height ±5 (mm)",
      ],
      rows: [
        ["2 TBS 100", "100", "12", "6", "600", "9", "13.7", "3.8", "206", "103", "345/430"],
        ["3 TBS 120", "120", "14.4", "7.2", "720", "9.2", "13.7", "3.6", "206", "103", "345/430"],
        ["3 TBS 150", "150", "18", "9", "900", "11", "15", "3.3", "206", "103", "345/430"],
        ["4 TBS 200", "200", "24", "12", "1200", "13.2", "17", "3", "206", "103", "345/430"],
        ["5 TBS 250", "250", "30", "15", "1500", "14.5", "18.2", "3", "206", "103", "345/430"],
        ["7 TBS 300", "300", "36", "18", "1800", "18.3", "24.7", "5.3", "206", "145", "345/430"],
        ["6 TBS 400", "400", "48", "24", "2400", "22.1", "28.9", "5.9", "206", "124", "461/546"],
        ["6 TBS 500", "500", "60", "30", "3000", "27.1", "35.1", "6.5", "206", "145", "636/721"],
        ["7 TBS 535", "535", "64.2", "32.1", "3210", "31.5", "41", "8", "206", "145", "636/721"],
        ["7 TBS 600", "600", "72", "36", "3600", "31.5", "41.5", "8", "206", "145", "636/721"],
      ],
    },
  },
  {
    slug: "ndp-tubular",
    name: "NDP & HDP Tubular Range",
    category: "DP & HDP Tubular",
    image: "/products/ndp-tubular.png",
    intro:
      "Time-tested tubular batteries in PP and transparent SAN containers with an outstanding track record in industrial standby and cyclic applications.",
    details: [
      "The batteries have tubular plates specially cast in high-pressure HADI machines to battle corrosion effectively and ensure longevity. These low-maintenance batteries are extremely abuse-resistant and operate under arduous conditions with great reliability and efficiency.",
      "Tubular cells have built their reputation on the ability to provide instant power to equipment. They offer excellent discharge performance, long and reliable service life, low self-discharge, a superior all-round voltage profile and high energy (Wh) output. They recharge rapidly with higher Ampere-hour and Watt-hour efficiencies and conform to IS 1651:2013.",
      "Ideal for cyclic applications, these batteries are widely used in Transmission & Distribution, Power, Cement, Steel, Oil & Gas and Petrochemical sectors.",
    ],
    applications: ["Power Plants", "Substations", "UPS Systems", "Process Industries", "C & I", "Solar", "Railway Signalling", "Telecommunication"],
    features: [
      "PP & Transparent SAN container",
      "Tubular positive plates",
      "Pasted negative plates",
      "High tensile, acid-resistant polyester gauntlets",
      "High porosity envelope separators",
      "Electrolyte level indicator",
      "Micro porous ceramic vent plug",
      "Superior high discharge performance conforming to IS:1651",
      "Low maintenance",
    ],
  },
  {
    slug: "hdp-tubular",
    name: "HDP Tubular Range",
    category: "DP & HDP Tubular",
    image: "/products/hdp-tubular.png",
    intro:
      "Heavy-duty tubular batteries engineered for frequent charge-discharge cycles, rapid recharge and dependable operation under demanding industrial conditions.",
    details: [
      "High-pressure cast tubular plates resist corrosion and ensure longevity, even under arduous operating conditions. The batteries are abuse-resistant, low-maintenance and deliver excellent discharge performance.",
      "They are ideal for cyclic applications and widely used in Transmission & Distribution, Power, Cement, Steel, Oil & Gas and Petrochemical sectors. Conforms to IS 1651:2013.",
    ],
    applications: ["Power Plants", "Substations", "UPS Systems", "Process Industries", "C & I", "Solar", "Railway Signalling", "Telecommunication"],
    features: [
      "PP & Transparent SAN container",
      "Tubular positive plates cast on high-pressure HADI machines",
      "High tensile, acid-resistant polyester gauntlets",
      "High porosity envelope separators",
      "Electrolyte level indicator and ceramic vent plug",
      "Low maintenance, rapid recharge and long service life",
    ],
  },
  {
    slug: "opzs-tbs",
    name: "TBS / OPzS Range",
    category: "TBS / OPzS Stationary Cells",
    image: "/products/opzs-tbs.png",
    intro:
      "Rugged tubular standby batteries with Torr tubular technology, designed for critical float applications and long service life.",
    details: [
      "A truly reliable standby battery has to account for load, duration, DC bus voltage window, frequency and depth of discharge, ambient temperature, criticality of operations and charging facility. These cells are tailored to meet all of these needs.",
      "The facility to measure specific gravity, voltage and cell temperature allows anomalies to be detected well in advance, making preventive maintenance easy and readiness during emergency discharge assured.",
      "They offer around 15 years of service in diverse standby float applications, withstand high ambient temperatures, require very low maintenance and conform to IS 1651:2013.",
    ],
    applications: ["Power Plants", "Substations", "Oil and Gas Pipelines", "Switchgear Operations", "UPS Systems", "Non-Conventional Energy Systems", "Railway Signalling", "Telecommunications"],
    features: [
      "Positive tubular plates cast at 100 Bar in imported HADI machines",
      "Lead Antimony alloy spines for low water loss and less topping up",
      "In-house non-woven gauntlet from special imported cloth",
      "Imported micro porous separators for high temperature stability",
      "Plastic encapsulated moulded bolt-on terminals",
      "Ceramic vent plugs trap fumes and reduce top-up frequency",
      "Transparent SAN containers for clear visual monitoring",
      "Completely insulated inter-cell connectors",
    ],
    userBenefits: [
      "Withstands high ambient temperatures",
      "Service life of around 15 years in standby float applications",
      "Low footprint",
      "Insulated connectors protect operators from electric shocks",
      "Only once-in-a-year topping up",
      "Suitable for cyclic and standby duties",
      "Satisfactory operation up to 45°C electrolyte temperature",
      "Rapid charging",
    ],
  },
  {
    slug: "plante-range",
    name: "Plante Range",
    category: "Plante — Stationary Cells",
    image: "/products/plante-range.png",
    intro:
      "Plante batteries are synonymous with reliability — the first choice in power plants, substations and core industries wherever standby power is critical.",
    details: [
      "With proper care, Plante batteries can last 20 years or more. They use 99.99% pure lead in the positive plate and low antimony lead alloy in the negative plate, ensuring long life and ruggedness under extreme conditions.",
      "They handle extreme temperatures, offer excellent discharge capabilities and operate within a narrow charge-discharge voltage window. Transparent SAN containers allow visual monitoring of electrolyte level, plate colour and separator condition, while the vent system makes specific gravity measurements easy.",
      "Conforms to BS 6290: Part 2: 1999, IS 1652:2013 and IEC 60896.",
    ],
    applications: ["Power Plants", "Substations", "Process Industries", "UPS Systems", "C & I", "Emergency Lighting", "Telecommunication"],
    features: [
      "Excellent high rate discharge performance",
      "Transparent containers for easy maintenance",
      "Expected service life greater than 20 years at 27°C",
      "No aging margin required as per IEEE 485:1997",
      "Topping up once in 12/18 months",
      "Capable of rapid charging",
      "Insulated inter-cell connectors",
      "Superior voltage profile and energy (Wh) output",
      "Higher Ah and Wh efficiencies than tubular cells of similar capacity",
    ],
  },
];
