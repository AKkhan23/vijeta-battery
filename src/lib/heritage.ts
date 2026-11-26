/**
 * Heritage content layer.
 *
 * Every factual line here comes from the live vijetabattery.in site, the
 * existing project data, or the family's own brief. No founder name, licence
 * number, GeM seller ID, capacity figure or approval date is invented.
 * Where a tender needs a number we do not hold, the copy asks for the tender
 * line and promises a per-item confirmation instead of guessing.
 */

export const narrative =
  "In 1988 a family workshop in Madhya Pradesh began making accumulators and torches. In 2000 it moved into lead-acid batteries and chargers, and brought casting, pasting, assembly and testing under one roof at Vijeta Accumulators and New Technologies. Nearly four decades later the same family runs the plant, the same rule still applies, and the floor supplies power utilities, PSUs and departments across six states through open tenders.";

export const homeHero = {
  eyebrow: "Lead-acid battery manufacturers · Since 1988",
  headline: ["Powering India's", "essential services", "since 1988."],
  intro:
    "A family-run maker of inverter, automotive and industrial lead-acid batteries. For nearly four decades, departments and fleets across India have trusted the plant at Vijeta Accumulators and New Technologies to keep their power on.",
  primary: { label: "Send a tender enquiry", href: "/government-supply#tender-desk" },
  secondary: { label: "Explore products", href: "/products" },
  seal: "Est. 1988",
  trust: [
    "Family-run since 1988",
    "IS 1651 processes",
    "100% load-tested",
    "Gold 36 / Silver 24 months",
  ],
};

export type NumberStat = {
  value: number;
  suffix?: string;
  label: string;
  note: string;
  raw?: boolean;
};

export const numbers: NumberStat[] = [
  {
    value: 1988,
    suffix: "",
    label: "Year the workshop opened",
    note: "Accumulators and torches, before batteries.",
    raw: true,
  },
  {
    value: 100,
    suffix: "%",
    label: "Units load-tested",
    note: "Every battery, before it leaves the floor.",
  },
  {
    value: 6,
    suffix: "",
    label: "States supplied",
    note: "Through open tenders and institutional orders.",
  },
  {
    value: 36,
    suffix: " mo",
    label: "Gold series cover",
    note: "Silver carries 24 months.",
  },
];

export const legacyTeaser = {
  eyebrow: "Our story in thirty seconds",
  title: "It started with one workshop and one promise.",
  body: [
    "In 1988 the family opened a small unit in Madhya Pradesh with a simple rule: a battery must deliver exactly what its label promises, for as long as it promises.",
    "Nearly four decades later the next generation runs the plant. The machines are newer, the lab is bigger and the tenders are online, but the rule is still checked on every battery that leaves the floor.",
  ],
  timeline: [
    { year: "1988", label: "The workshop opens" },
    { year: "2000", label: "Lead-acid and chargers" },
    { year: "2010s", label: "Testing becomes the standard" },
    { year: "Today", label: "Six states, one rule" },
  ],
  link: { label: "Read the full story", href: "/about" },
};

export type Family = {
  tag: string;
  title: string;
  copy: string;
  href: string;
  meta: string;
};

export const families: Family[] = [
  {
    tag: "Home power",
    title: "Inverter & tubular",
    copy: "Tall tubular batteries for long power cuts and daily deep discharge. Built for homes, offices and institutions that cannot afford a dark hour.",
    href: "/products/inverter-batteries",
    meta: "Deep-cycle · low maintenance",
  },
  {
    tag: "Automotive",
    title: "Cars & SUVs",
    copy: "High-cranking starting power for petrol, diesel and CNG cars. Gold for heavier use, Silver for the everyday commute.",
    href: "/products",
    meta: "Gold 36 · Silver 24 months",
  },
  {
    tag: "Agriculture",
    title: "Tractor",
    copy: "High-torque cranking for cold dawns, long field hours and the vibration that comes with them.",
    href: "/products",
    meta: "Vibration-resistant build",
  },
  {
    tag: "Heavy duty",
    title: "Commercial & HCV",
    copy: "Trucks, buses and LCVs. Built for long hauls, rough roads and restart after restart.",
    href: "/products",
    meta: "Fleet and department supply",
  },
  {
    tag: "Industrial",
    title: "Stationary cells",
    copy: "Tubular cells and battery banks for substations, plants and critical standby power. OPzS, Plante and transparent SAN containers.",
    href: "/products/tbs-san-cell",
    meta: "IS 1651 processes",
  },
  {
    tag: "Storage",
    title: "Solar & off-grid",
    copy: "Deep-cycle storage for solar street lights, pumps and off-grid systems that cycle every day.",
    href: "/products",
    meta: "Daily charge-discharge",
  },
];

export const governmentTeaser = {
  eyebrow: "Government & institutional supply",
  title: "Built for tenders. Proven in the field.",
  body: "We supply through open tenders to state electricity boards, power utilities, PSUs, telecom operators and industrial plants. Batteries ship with test reports, warranty cards and the compliance documents your evaluation asks for.",
  points: [
    "Departments in six states supplied",
    "Central PSUs and state power utilities",
    "Test reports with every dispatched lot",
    "Buyback of old batteries where the tender allows",
  ],
  link: { label: "Government & tender supply", href: "#government" },
};

export const whyUs = [
  {
    title: "Family-owned since 1988",
    copy: "The people who own the plant are the people you speak to. No call centre in between.",
  },
  {
    title: "Made under one roof",
    copy: "Grid casting, paste mixing, assembly, formation and testing all happen at Vijeta Accumulators and New Technologies. Nothing is rebadged.",
  },
  {
    title: "Tender-ready paperwork",
    copy: "Test reports, warranty terms and past supply records are ready before the bid closes.",
  },
  {
    title: "Service after supply",
    copy: "Delivery, installation and warranty support through the dealer or directly with the plant.",
  },
];

export const plantTeaser = {
  eyebrow: "Inside the plant",
  title: "Made in our plant. Tested in our lab.",
  body: "Eight steps separate a lead ingot from a battery that carries our name. We control all eight, then test every unit before dispatch.",
  link: { label: "See the full process", href: "#plant" },
};

export const faqTeaser = {
  eyebrow: "Questions buyers ask",
  title: "The short answers, before you call.",
  items: [
    {
      q: "Do you supply through government tenders?",
      a: "Yes. A significant share of our business comes through open tenders with state electricity boards, power utilities and PSUs. Share the tender number and our desk will confirm fit and documentation.",
    },
    {
      q: "Which standards do your batteries meet?",
      a: "Industrial stationary cells are built to IS 1651, and our processes follow IS 1651 and ISO 9001. If your tender cites another standard, send the line item and we will confirm compliance and the matching test reports.",
    },
    {
      q: "What warranty do you offer?",
      a: "Gold series carries 36 months and Silver 24 months against manufacturing defects. Terms are printed on the warranty card and confirmed on the invoice.",
    },
    {
      q: "Do you buy back old batteries?",
      a: "Yes, where the tender allows it. Old units are collected at delivery and sent to authorised recyclers under the Battery Waste Management Rules.",
    },
  ],
  link: { label: "All questions", href: "/faq" },
};

export const closingCta = {
  eyebrow: "Tender or bulk requirement",
  title: "Send the specification. We will send the compliance.",
  body: "Share the tender number, the line items and the delivery location. Our desk confirms what we can meet and quotes against it, usually within one working day.",
  primary: { label: "Send a tender enquiry", href: "/contact" },
  secondary: { label: "WhatsApp the desk", href: "/contact" },
};

/* ------------------------------------------------------------------ */
/* The 1988 story                                                      */
/* ------------------------------------------------------------------ */

export type Chapter = {
  year: string;
  kicker: string;
  title: string;
  body: string;
  proof: string;
  image: string;
  alt: string;
};

export const chapters: Chapter[] = [
  {
    year: "1988",
    kicker: "Chapter one",
    title: "The first workshop",
    body: "The family opens a small manufacturing unit in Madhya Pradesh. The first products are accumulators and torches, assembled by hand and checked one by one before they leave.",
    proof: "The business begins with electrical products, not batteries.",
    image: "/about-factory.png",
    alt: "The VIJETA manufacturing unit at Vijeta Accumulators and New Technologies",
  },
  {
    year: "1988–1999",
    kicker: "Chapter two",
    title: "A name by word of mouth",
    body: "Accumulators and torches move through dealers who come back for the same reason: the product does what the label says. The unit grows across the district without a single advertisement.",
    proof: "Eleven years of electrical manufacturing before the first battery.",
    image: "/hero-battery.jpg",
    alt: "An early VIJETA battery on the workshop bench",
  },
  {
    year: "2000",
    kicker: "Chapter three",
    title: "Into lead-acid",
    body: "India's power demand is climbing and the workshop moves into lead-acid batteries and chargers. The first battery lines are set up beside the existing electrical work.",
    proof: "Batteries and chargers join the product line in 2000.",
    image: "/products-hero-final.jpg",
    alt: "Lead-acid batteries on the VIJETA line",
  },
  {
    year: "2000s",
    kicker: "Chapter four",
    title: "One roof at Vijeta Accumulators and New Technologies",
    body: "Grid casting, paste mixing, cell assembly, formation charging and load testing are brought under one roof at the Vijeta Accumulators and New Technologies plant. Control over every stage replaces bought-in parts.",
    proof: "Five production stages, one address.",
    image: "/about-factory.png",
    alt: "The Vijeta Accumulators and New Technologies plant floor",
  },
  {
    year: "2010s",
    kicker: "Chapter five",
    title: "Testing becomes the standard",
    body: "Every unit is formation-charged, load-tested and inspected before dispatch. IS 1651 and ISO 9001 processes turn quality from a promise into a test report.",
    proof: "100% of units load-tested before dispatch.",
    image: "/hero-battery.jpg",
    alt: "Battery testing at the VIJETA plant",
  },
  {
    year: "Today",
    kicker: "Chapter six",
    title: "The next generation, same rule",
    body: "The second generation runs the plant. The tenders are online, the lab is bigger and the range covers cars, tractors, fleets and substations. The founder's rule has not moved.",
    proof: "Departments in six states supplied through open tenders.",
    image: "/applications/commercial.jpeg",
    alt: "VIJETA batteries ready for dispatch",
  },
];

export const unchanged = [
  {
    index: "01",
    title: "Honest ratings",
    copy: "Rated capacity is tested, not assumed. If the label says a number, the test report carries the same number.",
  },
  {
    index: "02",
    title: "Owner accountability",
    copy: "The people who own the plant are the people you speak to. No layer of call centre between the buyer and the floor.",
  },
  {
    index: "03",
    title: "On-time supply",
    copy: "A tender deadline is treated as non-negotiable. The delivery period we write in the bid is the period we hold to.",
  },
  {
    index: "04",
    title: "Responsible lead",
    copy: "Old batteries are taken back through the dealer and sent to authorised recyclers under the Battery Waste Management Rules.",
  },
];

/* ------------------------------------------------------------------ */
/* About page                                                          */
/* ------------------------------------------------------------------ */

export const aboutHero = {
  eyebrow: "Since 1988 · Vijeta Accumulators and New Technologies",
  line1: "Since 1988,",
  line2: "one standard.",
  body: "A family workshop in Madhya Pradesh became a lead-acid battery plant at Vijeta Accumulators and New Technologies. Nearly four decades later the same family runs it, and every unit still leaves the floor load-tested.",
  primary: { label: "Read the story", href: "#story" },
  secondary: { label: "Our manufacturing", href: "#plant" },
  facts: [
    { label: "Established", value: "1988" },
    { label: "Plant", value: "Vijeta Accumulators and New Technologies" },
    { label: "Testing", value: "100% load-tested" },
  ],
};

export const aboutIntro = {
  eyebrow: "About VIJETA",
  titleLead: "We are not new to power.",
  titleAccent: "We have been building it since 1988.",
  paragraphs: [
    "VIJETA began in a small Madhya Pradesh workshop, making accumulators and torches for dealers who could return anything that failed. That return counter set the rule the company still runs on: a product must deliver exactly what its label says, for as long as it says.",
    "The range has since grown into lead-acid batteries for homes, cars, tractors, trucks, telecom sites and industry, with lithium systems alongside and government tenders served direct from the plant. Casting, pasting, assembly, formation and testing still happen under one roof at Vijeta Accumulators and New Technologies — and every unit is load-tested before dispatch.",
  ],
  closing: "Different products. Same rule since 1988.",
  facts: [
    { value: "1988", label: "First workshop" },
    { value: "8", label: "Stages under one roof" },
    { value: "100%", label: "Units load-tested" },
  ],
};

export const origin = {
  eyebrow: "The beginning",
  title: "It started with accumulators, torches, and a return counter.",
  paragraphs: [
    "In 1988 the family opened a small manufacturing unit in Madhya Pradesh. The first products were accumulators and torches — small, unglamorous electrical goods, assembled by hand and sold through dealers who could return anything that failed.",
    "That return counter taught the rule the business still runs on: a product must do exactly what its label says, for as long as it says. No inflated ratings. No quiet shortcuts.",
    "In 2000 the workshop moved into lead-acid batteries and chargers. Casting, pasting, assembly, formation and testing were brought under one roof at Vijeta Accumulators and New Technologies, so the family could control every stage instead of trusting someone else's.",
  ],
  pullQuote: "A battery is judged on the morning it must start.",
  pullNote: "The rule on our floor, since 1988.",
  caption: "The VIJETA Accumulators unit at Indore, Madhya Pradesh.",
  badge: "1988",
  badgeNote: "The year the workshop opened",
};

export const timelineIntro = {
  eyebrow: "1988 → 2026",
  title: "The road from a workshop to a battery plant.",
  body: "Ten points on the line — the product, the material, the selling and the testing, in the order they happened.",
};

export type Milestone = {
  year: string;
  label: string;
  title: string;
  body: string;
  icon: "spark" | "store" | "battery" | "flask" | "grid" | "shield" | "layers" | "medal" | "file" | "factory";
};

export const milestones: Milestone[] = [
  {
    year: "1988",
    label: "The beginning",
    title: "Accumulators and torches",
    body: "A small family unit opens in Madhya Pradesh, building accumulators and torches checked by hand.",
    icon: "spark",
  },
  {
    year: "1994",
    label: "Selling",
    title: "A counter that took returns",
    body: "Sales move through local dealers, and anything that fails comes back to the counter. That rule still runs the plant.",
    icon: "store",
  },
  {
    year: "2000",
    label: "Lead-acid",
    title: "Batteries and chargers",
    body: "The workshop moves into lead-acid batteries and chargers. Casting, paste and assembly come under one roof.",
    icon: "battery",
  },
  {
    year: "2005",
    label: "Material",
    title: "Lead cast in-house",
    body: "Grid casting and paste mixing move in-house, so alloy, grid thickness and cure stay under one roof.",
    icon: "flask",
  },
  {
    year: "2010",
    label: "Technology",
    title: "Plates built for Indian roads",
    body: "Denser grids and higher-purity lead alloy lift cranking power for Indian heat and cold starts.",
    icon: "grid",
  },
  {
    year: "2016",
    label: "Quality",
    title: "Testing becomes the habit",
    body: "Every unit is load-tested before dispatch. IS 1651 and ISO 9001 processes put a test report in the box with the battery.",
    icon: "shield",
  },
  {
    year: "2019",
    label: "Range",
    title: "One line, many duties",
    body: "The same plant builds for cars, tractors, trucks, rickshaws, inverters and industrial backup.",
    icon: "layers",
  },
  {
    year: "2021",
    label: "Two series",
    title: "Gold and Silver",
    body: "The range splits into Gold with 36 months of cover and Silver with 24. Same line, same tests, two clear promises.",
    icon: "medal",
  },
  {
    year: "2023",
    label: "Tenders",
    title: "Into government supply",
    body: "State power utilities, transmission and generation companies and central PSUs are supplied through tenders.",
    icon: "file",
  },
  {
    year: "2026",
    label: "Today",
    title: "The next generation",
    body: "The second generation runs the plant. The range runs from cars to substations, and every unit still leaves load-tested.",
    icon: "factory",
  },
];

export const ownerNote = {
  eyebrow: "The family",
  title: "The name on the door is the name on the floor.",
  paragraphs: [
    "VIJETA is made by the family company Vijeta Accumulators and New Technologies, which has run this plant since 1988. The people who own the plant are the people a buyer can call.",
    "The second generation now works in the business the founder built. The machines are newer and the lab is bigger, but the same family signs off on every battery that carries its name.",
  ],
  quote: "We do not sell a battery we would not put on our own vehicle.",
  quoteNote: "The family behind VIJETA Batteries",
  owner: {
    name: "Ajay Kumar Jain",
    place: "Vijeta Accumulators and New Technologies",
    generation: "Second generation",
  },
};

export const whyIntro = {
  eyebrow: "Why VIJETA",
  title: "Four reasons buyers keep the file open.",
  body: "Most battery makers can quote a price. Fewer can show you the floor it was built on, the test report that cleared it, and the family that stands behind it.",
};

export const plantIntro = {
  title: "Our Manufacturing",
  link: { label: "Book a plant visit", href: "/contact" },
};

export const plantDetail = {
  eyebrow: "On the floor",
  title: "Nothing here is a black box.",
  paragraphs: [
    "The day starts with lead alloy and ends with a sealed battery on a test bench. Grids are cast in-house, oxide paste is mixed and applied to a controlled recipe, and plates are cured under set humidity and temperature before they are formed.",
    "That is why casting, pasting, assembly, formation and testing sit under one roof. If a plate is wrong, the floor knows before the case is sealed — and the report that travels with your battery was written at the same address it was built.",
  ],
  highlights: [
    { title: "Alloy to grid", copy: "Lead-calcium grids cast on site." },
    { title: "Paste under control", copy: "Oxide, water and acid measured per batch." },
    { title: "Formation decides life", copy: "First charge run under controlled current." },
    { title: "Tested before dispatch", copy: "Every unit, not just a sample." },
  ],
  videoNote: "Filmed on the VIJETA floor, Vijeta Accumulators and New Technologies.",
  link: { label: "Ask about a plant visit", href: "/contact" },
};

export const tenderIntro = {
  eyebrow: "Government & institutional supply",
  body: "From spec review to delivery and warranty. Here is how a government or institutional requirement runs through the plant.",
};

/** Client marks shown either side of the government section heading. */
export const governmentClientLogos = [
  {
    src: "/gov-client-prakash-vikas.webp",
    alt: "Prakash evam Vikas logo",
    width: 1043,
    height: 1020,
  },
  {
    src: "/gov-client-mpez.png",
    alt: "MPEZ — Madhya Pradesh Eastern Region Power Distribution logo",
    width: 337,
    height: 337,
  },
];

export const openingStory = {
  eyebrow: "A family business",
  title: "A family business, built one battery at a time.",
  intro:
    "Since 1988, VIJETA has made lead-acid batteries in Madhya Pradesh the way the founder taught: honest ratings, tested batches, and promises kept.",
  paragraphs: [
    "The first products were accumulators and torches. Small, unglamorous electrical goods sold through dealers who could return anything that failed. That return counter taught the family the rule it still runs on: a product must do what its label says, for as long as it says.",
    "In 2000 the workshop moved into lead-acid batteries and chargers. The plant at Vijeta Accumulators and New Technologies grew around that decision, with casting, pasting, assembly, formation and testing brought under one roof. Dealers noticed. Then institutions noticed. Then the departments did.",
    "Nearly four decades later the second generation runs the plant. The machines are newer, the lab is bigger and the tenders are online, but every battery is still tested before it leaves, and the family still answers the phone.",
  ],
  signature: "The family behind VIJETA Batteries",
  note: "Vijeta Accumulators and New Technologies · Indore, Madhya Pradesh",
};

/* ------------------------------------------------------------------ */
/* Manufacturing                                                       */
/* ------------------------------------------------------------------ */

export const plantStats: NumberStat[] = [
  { value: 1988, label: "Manufacturing since", note: "Same family, same plant town.", raw: true },
  { value: 8, label: "Production stages under one roof", note: "Casting through dispatch." },
  { value: 100, suffix: "%", label: "Units load-tested", note: "Before they leave the floor." },
  { value: 5, label: "Product families built", note: "Home, auto, tractor, fleet, industry." },
];

export const plantSteps = [
  {
    index: "01",
    title: "Grid casting",
    copy: "Lead alloy is cast into grids, the skeleton that carries current through the battery.",
  },
  {
    index: "02",
    title: "Oxide & paste",
    copy: "Lead oxide is mixed into an active paste with controlled water and acid ratios.",
  },
  {
    index: "03",
    title: "Pasting & curing",
    copy: "Paste is applied to the grids and cured under controlled humidity and heat so it bonds for the long term.",
  },
  {
    index: "04",
    title: "Formation",
    copy: "Plates are charged for the first time under controlled current. This is the step that decides a battery's life.",
  },
  {
    index: "05",
    title: "Assembly",
    copy: "Plates and separators are stacked, welded and sealed into the container.",
  },
  {
    index: "06",
    title: "Filling & charging",
    copy: "Electrolyte is filled and every battery receives its initial charge.",
  },
  {
    index: "07",
    title: "Testing",
    copy: "Every lot is checked for capacity, voltage and leaks before it is cleared for dispatch.",
  },
  {
    index: "08",
    title: "Dispatch",
    copy: "Batteries are labelled, packed and shipped with their test reports.",
  },
];

export const labTests = [
  "Load test on every unit",
  "Capacity check at the rated hour rate",
  "Voltage and specific gravity checks",
  "Leak and seal check on sealed batteries",
  "Dimensional check against the standard",
  "Batch test reports filed with dispatch",
];

export const responsible = [
  {
    title: "Clean air",
    copy: "Fume extraction over lead-handling areas, with scrubbers on the exhaust.",
  },
  {
    title: "Clean water",
    copy: "Process water is treated before discharge, and plate-wash water is returned to the line where it can be.",
  },
  {
    title: "Closed loop",
    copy: "Old batteries are bought back and sent to authorised recyclers under the Battery Waste Management Rules.",
  },
];

/* ------------------------------------------------------------------ */
/* Government & institutional supply                                   */
/* ------------------------------------------------------------------ */

export const tenderCapabilities = [
  {
    index: "01",
    title: "Documentation",
    copy: "Test reports, warranty terms, GST and PAN, past supply records and the declarations your tender asks for, assembled as one set.",
  },
  {
    index: "02",
    title: "Technical compliance",
    copy: "We read the line item, not just the headline. If a clause cannot be met, you hear it before evaluation, not after.",
  },
  {
    index: "03",
    title: "Batch testing",
    copy: "Your order is built and tested in our own plant. Reports travel with the lot, not weeks behind it.",
  },
  {
    index: "04",
    title: "Delivery & service",
    copy: "Delivery to site, installation and commissioning where the tender requires it, plus a named contact for warranty claims.",
  },
];

export const tenderSteps = [
  {
    index: "01",
    title: "Spec review",
    copy: "Share the tender number or specification. We confirm what we can meet and flag any clause we cannot.",
  },
  {
    index: "02",
    title: "Bid with documents",
    copy: "Certificates, test reports and declarations go in with the bid the first time, not in a second round.",
  },
  {
    index: "03",
    title: "Manufacture & test",
    copy: "Your order is built and batch-tested at Vijeta Accumulators and New Technologies, with reports for every lot.",
  },
  {
    index: "04",
    title: "Deliver & install",
    copy: "Delivered to your site, installed and commissioned where the tender requires it.",
  },
  {
    index: "05",
    title: "Buyback & warranty",
    copy: "Old units collected for authorised recycling, and a named contact for claims through the cover period.",
  },
];

export const clientGroups = [
  {
    label: "Government & power",
    note: "State electricity boards, transmission and generation companies, and central PSUs.",
    names: [
      "Madhya Pradesh State Electricity Board",
      "MP Power Transmission Co. Ltd.",
      "MP Power Generating Co. Ltd.",
      "NTPC Ltd.",
      "Chhattisgarh State Power Distribution Co. Ltd.",
      "Chhattisgarh State Power Transmission Co. Ltd.",
      "POWERGRID Corporation Ltd.",
      "Bihar State Electricity Board",
      "Rajasthan State Electricity Board",
      "Gujarat Energy Transmission Corporation Ltd.",
      "Maharashtra State Electricity Board",
    ],
  },
  {
    label: "Industry & infrastructure",
    note: "Private power, EPC and process plants that run continuous operations.",
    names: [
      "Reliance Industries",
      "Tata Power",
      "Torrent Power",
      "Adani Power",
      "Reliance Power",
      "L&T Power",
      "Crompton Greaves",
      "Offshore Infrastructure",
      "Punj Lloyd",
      "Nilshikkha Infrastructure",
    ],
  },
  {
    label: "Telecom",
    note: "Operators and network builders with sites that cannot go dark.",
    names: ["Airtel", "BSNL", "Vodafone", "Idea"],
  },
];

export const documentKit = [
  { label: "Test reports by product line", access: "With the bid set" },
  { label: "Warranty terms and claim process", access: "With the bid set" },
  { label: "GST and PAN registration", access: "With the bid set" },
  { label: "Past supply orders and performance records", access: "On request, buyer names masked where required" },
  { label: "ISO 9001 and IS 1651 process records", access: "On request" },
  { label: "Non-blacklisting and other declarations", access: "As the tender requires" },
];

/* ------------------------------------------------------------------ */
/* Quality checking & dispatch                                         */
/* ------------------------------------------------------------------ */

export const qualityIntro = {
  headline: "Quality Checking",
  body: "From plate assembly to the final load test, every battery is checked before it is packed.",
};

export const qualityDetail = {
  eyebrow: "On the line",
  title: "Checked at every stage, not at the end.",
  body: "Checking starts before the case is sealed. Elements are inspected as they are stacked, units after filling, and every finished battery goes to the test bench before it is cleared for packing.",
  videoNote: "Assembly and checking on the VIJETA floor.",
  imageNote: "Plate and element assembly.",
  link: { label: "Ask about test reports", href: "/contact" },   
};

export const qualityChecks = [
  {
    title: "Plate stack",
    copy: "Alignment, welding and terminal fit.",
  },
  {
    title: "Seal & fill",
    copy: "Lid, vent and electrolyte level.",
  },
  {
    title: "Formation",
    copy: "Voltage and current on the first charge.",
  },
  {
    title: "Final test",
    copy: "Load, capacity and leak checks.",
  },
];

export const dispatchIntro = {
  headline: "Dispatch & Packaging",
  body: "Tested, packed and documented before it leaves Vijeta Accumulators and New Technologies.",
};

export const dispatchPacking = {
  eyebrow: "Packing",
  title: "Packed for the road, not the shelf.",
  body: "Batteries are packed only after the test report is closed. Terminals are protected, cartons reinforced, and every box is marked for handling before it is stacked.",
  points: ["Terminal protection", "Reinforced cartons", "Batch-marked boxes"],
  imageNote: "Packed and stacked for dispatch, Vijeta Accumulators and New Technologies.",
};

export const dispatchDetail = {
  eyebrow: "Dispatch",
  title: "The report leaves with the battery.",
  body: "Each dispatch carries its batch test report and warranty terms. Delivery is scheduled against the order, and the site gets a named contact for receipt and claims.",
  points: ["Batch test report", "Warranty terms", "Packing list and invoice", "Named site contact"],
  link: { label: "Plan a dispatch", href: "/contact" },
  imageNote: "Marked and shrink-wrapped before loading.",
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export type FaqCategory = {
  id: string;
  label: string;
  blurb: string;
};

export const faqCategories: FaqCategory[] = [
  { id: "about", label: "About VIJETA", blurb: "Who makes the battery, and where." },
  { id: "tenders", label: "Tenders & GeM", blurb: "Documents, standards and institutional supply." },
  { id: "products", label: "Products & technical", blurb: "Choosing the right chemistry and capacity." },
  { id: "warranty", label: "Warranty & service", blurb: "Cover, claims and what is excluded." },
  { id: "care", label: "Care & safety", blurb: "Top-ups, installation and disposal." },
  { id: "orders", label: "Orders & dealership", blurb: "Quotes, minimums and territory." },
];

export type FaqItem = {
  id: string;
  category: string;
  q: string;
  a: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "how-long",
    category: "about",
    q: "How long have you been making batteries?",
    a: "Since 1988. The family began with accumulators and torches, moved into lead-acid batteries and chargers in 2000, and still runs the plant at Vijeta Accumulators and New Technologies today.",
  },
  {
    id: "manufacture",
    category: "about",
    q: "Do you manufacture the batteries yourselves?",
    a: "Yes. Grid casting, paste mixing, cell assembly, formation charging and load testing happen under one roof at Vijeta Accumulators and New Technologies. We do not rebrand another maker's battery.",
  },
  {
    id: "customers",
    category: "about",
    q: "Who are your main customers?",
    a: "State electricity boards, power utilities, PSUs and public institutions through open tenders, along with telecom operators, industrial plants and an authorised dealer network.",
  },
  {
    id: "plant-visit",
    category: "about",
    q: "Can we visit the plant before ordering?",
    a: "Yes. Plant visits and pre-dispatch inspections are welcome by appointment. Call the plant line and we will fix a time with the team on the floor.",
  },
  {
    id: "tenders",
    category: "tenders",
    q: "Do you supply through government tenders?",
    a: "Yes. A significant share of our business comes through open tenders with state electricity boards, power utilities and PSUs. Share the tender number and our desk will confirm fit, quantity and documentation.",
  },
  {
    id: "gem",
    category: "tenders",
    q: "Do you bid on GeM?",
    a: "We participate in institutional procurement and open tenders. Send the GeM bid ID or tender number and we will confirm whether we are participating and exactly which documents we will submit.",
  },
  {
    id: "standards",
    category: "tenders",
    q: "Which standards do your batteries meet?",
    a: "Industrial stationary cells are built to IS 1651, and our processes follow IS 1651 and ISO 9001. If your tender cites IS 13369, IS 15549 or IS 14257, send the line item and we will confirm compliance and the matching test reports before evaluation.",
  },
  {
    id: "exact-spec",
    category: "tenders",
    q: "Can you supply to our exact tender specification?",
    a: "Yes, for quantities that justify a production run. Send the specification, quantity and delivery location. We will flag any clause we cannot meet before you evaluate, rather than after.",
  },
  {
    id: "documents",
    category: "tenders",
    q: "What documents do you submit with a bid?",
    a: "Test reports, warranty terms, GST and PAN, past supply orders and the declarations your tender asks for. Performance certificates from past orders are available on request, with buyer names masked unless the buyer has agreed to be named.",
  },
  {
    id: "outside-mp",
    category: "tenders",
    q: "Do you supply outside Madhya Pradesh?",
    a: "Yes. We have supplied departments in Madhya Pradesh, Chhattisgarh, Bihar, Rajasthan, Gujarat and Maharashtra, and we deliver anywhere in India.",
  },
  {
    id: "buyback",
    category: "tenders",
    q: "Do you buy back old batteries?",
    a: "Yes, where the tender allows it. Old units are collected at delivery and sent to authorised recyclers under the Battery Waste Management Rules.",
  },
  {
    id: "delivery-time",
    category: "tenders",
    q: "How soon can you deliver after an order?",
    a: "It depends on quantity and location. We state a firm delivery period in the bid and hold to it. For urgent departmental requirements, tell us the deadline before the bid and we will confirm feasibility.",
  },
  {
    id: "chemistry",
    category: "products",
    q: "Tubular, flat-plate or VRLA — what is the difference?",
    a: "Tubular batteries hold active material in tubes, handle deep discharge and last longest, but need water top-ups. Flat-plate costs less and has a shorter life. VRLA or SMF is sealed and maintenance-free, which suits UPS systems and indoor rooms, but it is more sensitive to heat.",
  },
  {
    id: "ups",
    category: "products",
    q: "Which battery should we use for a UPS or server room?",
    a: "Usually a sealed VRLA battery, because there is no water to top up and no fume to manage. Share the UPS rating and the backup time you need and we will size the bank.",
  },
  {
    id: "long-cuts",
    category: "products",
    q: "Which battery is best for long power cuts?",
    a: "A tall tubular battery for homes and offices, or 2V stationary cells for larger banks. Both are built for deep, repeated discharge rather than occasional starting.",
  },
  {
    id: "c10-c20",
    category: "products",
    q: "What does Ah at C10 or C20 mean?",
    a: "It is the capacity measured over a 10-hour or 20-hour discharge. The same battery shows a higher Ah figure at C20 than at C10, so always compare two batteries at the same rate.",
  },
  {
    id: "capacity",
    category: "products",
    q: "How do we work out the capacity we need?",
    a: "A quick estimate: Ah is roughly (load in watts × backup hours) ÷ (battery voltage × 0.8). For example, 500 W for 2 hours on 12 V needs about 104 Ah, so choose 120–150 Ah. Send us the load list and we will check it.",
  },
  {
    id: "solar",
    category: "products",
    q: "Do you make solar batteries?",
    a: "Yes. Deep-cycle batteries for solar street lights, pumps and off-grid systems. Share the panel size, load and nightly backup requirement and we will size the bank.",
  },
  {
    id: "custom",
    category: "products",
    q: "Can you make custom sizes?",
    a: "Yes, for tender or bulk quantities. Send the dimensions, capacity and terminal requirements, and we will confirm what can be built and the lead time.",
  },
  {
    id: "warranty",
    category: "warranty",
    q: "What warranty do you offer?",
    a: "Gold series carries 36 months and Silver 24 months against manufacturing defects. The exact terms are printed on the warranty card and confirmed on the invoice at the time of sale.",
  },
  {
    id: "claim",
    category: "warranty",
    q: "How do we raise a warranty claim?",
    a: "Take the battery, the invoice and the warranty card to the authorised dealer you bought it from. They will test it and start the claim. If you cannot reach the dealer, call us and we will guide you.",
  },
  {
    id: "not-covered",
    category: "warranty",
    q: "What is not covered by warranty?",
    a: "Physical damage, tampering, broken seals, damage from a faulty charger or inverter, running a flooded battery without water, and use outside the stated application.",
  },
  {
    id: "serial",
    category: "warranty",
    q: "Where do we find the serial number?",
    a: "On the label on the top or side of the battery. Share it with the invoice number when you call or message, and the team can trace the batch.",
  },
  {
    id: "amc",
    category: "warranty",
    q: "Do you offer maintenance contracts?",
    a: "For battery banks and institutional sites we can quote periodic checks and reports alongside the supply. Ask for it in the tender or in your enquiry so it is priced into the same order.",
  },
  {
    id: "top-up",
    category: "care",
    q: "How often should a tubular battery be topped up?",
    a: "Check the level every one to three months and top up only with distilled or DM water, up to the maximum mark. Never add acid or tap water.",
  },
  {
    id: "install",
    category: "care",
    q: "Where should batteries be installed?",
    a: "In a dry, ventilated space away from direct sunlight, heaters and open flames. Flooded batteries give off hydrogen while charging, so never seal them in a cupboard.",
  },
  {
    id: "indoors",
    category: "care",
    q: "Is it safe to keep batteries indoors?",
    a: "Yes, with ventilation. Sealed VRLA batteries are the better choice for indoor rooms and offices because they do not need water top-ups and do not vent the same way.",
  },
  {
    id: "disposal",
    category: "care",
    q: "How should old batteries be disposed of?",
    a: "Never in household waste. Lead and acid are hazardous. Return them to us, to your dealer, or to an authorised recycler.",
  },
  {
    id: "individuals",
    category: "orders",
    q: "Do you sell to individuals?",
    a: "We supply dealers, fleets and institutions. For a single battery, your nearest authorised dealer is the right counter. Call us and we will point you to one.",
  },
  {
    id: "dealers",
    category: "orders",
    q: "Do you appoint new dealers?",
    a: "Yes, in territories where the network has room. Send your location, the lines you already carry and your expected monthly volume through the dealer enquiry.",
  },
  {
    id: "moq",
    category: "orders",
    q: "Is there a minimum order quantity?",
    a: "For tender orders, the tender quantity governs. For private bulk orders it depends on the line and the specification. Send the requirement and we will confirm.",
  },
  {
    id: "quote",
    category: "orders",
    q: "How do we get a quote?",
    a: "Use the enquiry form or WhatsApp with the product, quantity and delivery location. Our desk replies within one working day.",
  },
  {
    id: "dealer-support",
    category: "orders",
    q: "What support does a dealer get?",
    a: "Stock planning, warranty handling through the plant, and technical help matching a battery to the vehicle or application. Territory and pricing are discussed directly with the sales desk.",
  },
];
