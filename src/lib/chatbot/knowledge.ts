import { site } from "@/lib/site";

export type ChatLink = { label: string; href: string };
export type KnowledgeEntry = {
  id: string;
  keywords: string[]; // lowercase tokens or phrases, including Hindi/Hinglish spellings so the bot still understands them
  answer: string; // short plain-text English answer, 1-4 sentences, no invented facts
  links?: ChatLink[];
  chips?: string[];
  weight?: number;
};

const whatsappLink = site.whatsapp;
const callLink = `tel:${site.phonePrimary}`;

export const greeting =
  "Hello 👋 I'm VIJETA's service assistant. How can I help you today?";

export const suggestedPrompts: string[] = [
  "Which battery fits my car?",
  "Gold vs Silver warranty",
  "How to claim warranty",
  "Dealer near me",
];

export const fallbackAnswer =
  "I'm sorry, but that detail isn't available on vijetabattery.com. I can help with batteries, warranty, dealers and contact details — or connect you with our team on call or WhatsApp for a confirmed answer.";

export const fallbackLinks: ChatLink[] = [
  { label: "Call us", href: callLink },
  { label: "WhatsApp", href: whatsappLink },
  { label: "Contact page", href: "/contact" },
];

export const closingMessage =
  "Thank you for visiting VIJETA. If any problem comes up, I'm here to help — call or WhatsApp us anytime. Have a great day!";

export const knowledgeEntries: KnowledgeEntry[] = [
  {
    id: "greeting",
    keywords: ["namaste", "hello", "hi", "hey", "namaskar", "good morning", "good afternoon", "good evening", "nice to meet you", "start", "hey there", "hlo"],
    answer: "Hello 👋 I'm VIJETA's service assistant. How can I help you today?",
    links: [{ label: "All products", href: "/products" }],
    chips: ["Which battery fits my car?", "Gold vs Silver", "Warranty claim", "Dealer near me"],
    weight: 1,
  },
  {
    id: "how-are-you",
    keywords: ["how are you", "how r u", "how are u", "how you doing", "kaise ho", "kaise hain", "kya haal", "sab theek", "all good", "are you ok", "how do you do"],
    answer: "I'm doing well, thank you! How may I help you with batteries, warranty or dealers today?",
    chips: ["Which battery fits my car?", "Gold vs Silver", "Warranty claim"],
    weight: 3,
  },
  {
    id: "sorry",
    keywords: ["sorry", "maafi", "maaf", "pardon", "my apologies", "apologies", "oops", "galti", "galti ho gayi", "sorry yaar", "so sorry"],
    answer: "No worries at all! 😊 How can I help you today?",
    chips: ["Which battery fits my car?", "Gold vs Silver", "Warranty claim"],
    weight: 3,
  },
  {
    id: "ack-ok",
    keywords: ["ok", "okay", "okay fine", "theek hai", "thik hai", "accha", "alright", "fine", "sure", "haan", "han", "yes", "ok then", "hmm ok"],
    answer: "Sure! Is there anything else I can help you with?",
    chips: ["Which battery fits my car?", "Gold vs Silver", "Dealer near me"],
    weight: 3,
  },
  {
    id: "car-suv",
    keywords: ["car & suv", "car and suv", "car suv", "suv", "hatchback", "sedan", "cars", "car category", "car battery details", "suv battery"],
    answer: "Car and SUV batteries deliver starting power for petrol, diesel and CNG vehicles — from hatchbacks to SUVs, for daily commutes and highway drives. Gold offers 36 months of cover for heavier use; Silver offers 24 months for everyday driving. For an exact fit, send the make, model, fuel type and year.",
    links: [{ label: "WhatsApp", href: whatsappLink }],
    weight: 3,
  },
  {
    id: "assistant-identity",
    keywords: ["what is your name", "your name", "who are you", "kaun ho", "tum kaun", "kya naam", "are you ai", "are you a robot", "tu ai hai", "kya tu robot", "who am i talking to"],
    answer: "I'm VIJETA's virtual service assistant here on the website. I can help with products, warranty, dealers and contact details — what would you like to know?",
    links: [{ label: "All products", href: "/products" }, { label: "Contact", href: "/contact" }],
    weight: 3,
  },
  {
    id: "confused",
    keywords: ["confused", "not understanding", "samajh nahi", "kya bol rahe", "what do you mean", "pagal", "idiot", "stupid", "galat jawab", "wrong answer", "repeat", "phir se"],
    answer: "No problem — let me make it simple. I can help with batteries, warranty, dealers, inverters and industrial cells. Tell me what you need, or reach our team directly on call or WhatsApp.",
    links: [{ label: "Call us", href: callLink }, { label: "WhatsApp", href: whatsappLink }],
    weight: 3,
  },
  {
    id: "end-chat",
    keywords: ["end chat", "close chat", "that's all", "thats all", "no more", "nothing else", "done", "exit", "finish"],
    answer: "Thank you for visiting VIJETA. Is there anything else I can help you with before you go?",
    links: [{ label: "Call us", href: callLink }, { label: "WhatsApp", href: whatsappLink }],
    weight: 3,
  },
  {
    id: "what-can-you-do",
    keywords: ["what can you do", "kaam", "help", "madad", "kya kar sakte ho", "kya bata sakte ho", "capabilities", "features", "kaise madad", "what do you do"],
    answer: "I can tell you about VIJETA batteries and their applications, Gold and Silver warranty, warranty claims, dealers, home inverters, inverter batteries, LithTec and industrial products. Prices and model-specific fitment aren't on the website — I'll direct you to call or WhatsApp for those.",
    links: [{ label: "All products", href: "/products" }, { label: "FAQ", href: "/faq" }],
    weight: 1,
  },
  {
    id: "car-fitment",
    keywords: ["car", "suv", "hatchback", "sedan", "petrol", "diesel", "cng", "fitment", "which battery", "kaun si battery", "kaunsi battery", "kaunsa battery", "swift", "dzire", "baleno", "alto", "car battery", "meri gaadi", "my car", "replace", "vehicle", "gaadi"],
    answer: "To confirm the right battery for your car or SUV, please share the make, model, fuel type (petrol/diesel/CNG) and year. I can't verify the exact series and capacity myself — send the details on WhatsApp and our team will confirm the right battery and the nearest dealer.",
    links: [{ label: "Car & SUV", href: "/products" }, { label: "WhatsApp", href: whatsappLink }],
    chips: ["Send my car details on WhatsApp"],
    weight: 3,
  },
  {
    id: "bike-motorcycle",
    keywords: ["bike", "bike battery", "motorcycle", "moto", "scooty", "scooter", "two wheeler", "2 wheeler", "bajaj", "hero", "honda bike", "bike mein", "bike ke liye"],
    answer: "To be honest, bike, motorcycle and scooter batteries are not in VIJETA's range. We make batteries for cars, tractors, auto rickshaws, trucks and industry. For a bike battery, please check with your local battery dealer or workshop.",
    links: [{ label: "Our range", href: "/products" }],
    weight: 3,
  },
  {
    id: "tractor-battery",
    keywords: ["tractor", "tractor battery", "agriculture", "farm", "khet", "high torque", "cold dawn", "field", "tractor ke liye", " agriculture battery"],
    answer: "Tractor batteries are built for high-torque cranking — cold mornings, long field hours and heavy vibration. The Gold series carries 36 months of cover for heavy use. For an exact fit, send the tractor's make, model, fuel type and year on WhatsApp.",
    links: [{ label: "Products", href: "/products" }, { label: "Warranty", href: "/warranty" }],
    weight: 2,
  },
  {
    id: "auto-rickshaw",
    keywords: ["auto", "auto rickshaw", "rickshaw", "ricksha", "three wheeler", "3 wheeler", "tempo", "auto battery", "rickshaw battery", "auto ke liye"],
    answer: "For auto rickshaws we make compact, vibration-resistant batteries — built for three-wheelers running from first light to the last fare. Send your vehicle model and year on WhatsApp and our team will confirm the right series.",
    links: [{ label: "Products", href: "/products" }, { label: "WhatsApp", href: whatsappLink }],
    weight: 2,
  },
  {
    id: "truck-bus-hcv",
    keywords: ["truck", "trk", "bus", "hcv", "commercial", "commercial vehicle", "heavy duty", "lcv", "fleet", "truck battery", "bus battery", "long haul"],
    answer: "For trucks, buses and LCVs we offer heavy-duty batteries built for long hauls, rough roads and repeated restarts. The Gold series carries 36 months of cover for heavy use. Send fleet or fitment details on WhatsApp and our team will help.",
    links: [{ label: "Commercial vehicles", href: "/products" }, { label: "Bulk enquiry", href: "/contact" }],
    weight: 2,
  },
  {
    id: "vehicle-comparison",
    keywords: ["compare", "comparison", "difference", "bike vs truck", "rickshaw vs car", "tractor vs car", "which vehicle", "kaunsa", "all categories", "vehicle types"],
    answer: "A simple comparison: Car/SUV — starting power for petrol, diesel and CNG. Tractor — high-torque cranking with field vibration. Auto rickshaw — compact, vibration-resistant power. Truck/bus (HCV) — long hauls and rough roads. Bikes and scooters are not in our range. What vehicle do you have?",
    links: [{ label: "All categories", href: "/products" }],
    weight: 2,
  },
  {
    id: "gold-vs-silver",
    keywords: ["gold vs silver", "gold or silver", "gold silver", "difference", "compare series", "kaunsa series", "premium", "gold", "silver", "which one"],
    answer: "Gold is the premium series — 36 months of cover for heavier loads and longer service. Silver offers 24 months and dependable everyday performance. Both are made on the same line and tested the same way. Gold suits cars, SUVs and commercial vehicles; Silver suits everyday driving.",
    links: [{ label: "Warranty details", href: "/warranty" }, { label: "FAQ", href: "/faq" }],
    weight: 3,
  },
  {
    id: "gold-warranty",
    keywords: ["gold warranty", "gold months", "36 months", "36 month", "gold guarantee", "gold cover", "gold warranty period", "longest warranty", "gold garantee", "three year"],
    answer: "The Gold series carries 36 months of warranty — our longest cover. It covers manufacturing defects. To claim, buy from an authorised dealer, keep the invoice and warranty card, and take the battery back to the dealer.",
    links: [{ label: "Warranty", href: "/warranty" }],
    weight: 3,
  },
  {
    id: "silver-warranty",
    keywords: ["silver warranty", "silver months", "24 months", "24 month", "silver guarantee", "silver cover", "silver warranty period", "two year", "silver garantee"],
    answer: "The Silver series carries 24 months of warranty. It also covers manufacturing defects. Keep the invoice and warranty card from your authorised dealer, then take the battery back to the dealer — they will test it and start the claim.",
    links: [{ label: "Warranty", href: "/warranty" }],
    weight: 3,
  },
  {
    id: "warranty-coverage",
    keywords: ["warranty cover", "what does warranty cover", "manufacturing defect", "defects", "cover kya hai", "warranty kya cover", "claim scope", "garantee kya"],
    answer: "Both Gold and Silver warranties cover manufacturing defects — a fault in how the battery was made. The exact terms and claim steps are on our warranty page.",
    links: [{ label: "Warranty & claims", href: "/warranty" }],
    weight: 2,
  },
  {
    id: "warranty-claim-steps",
    keywords: ["warranty claim", "claim steps", "how to claim", "claim kaise", "warranty claim kaise", "return battery", "claim process", "warrnty claim", "garantee claim"],
    answer: "There are three steps: (1) buy from an authorised VIJETA dealer and collect the warranty card and invoice, (2) keep the invoice safe, (3) take the battery back to that dealer — they test it and start the claim, and our team handles the rest.",
    links: [{ label: "Warranty claim steps", href: "/warranty" }, { label: "FAQ", href: "/faq" }],
    weight: 3,
  },
  {
    id: "warranty-card-invoice",
    keywords: ["warranty card", "invoice", "bill", "proof of purchase", "receipt", "warrnty card", "garantee card", "card nahi", "invoice nahi", "bill nahi"],
    answer: "The warranty card and invoice are your proof of purchase — a claim depends on them. Collect both from the authorised dealer when you buy, and keep a photo of the invoice with your vehicle papers. If a document is lost, contact the dealer you bought from.",
    links: [{ label: "Warranty", href: "/warranty" }],
    weight: 3,
  },
  {
    id: "old-battery-exchange",
    keywords: ["old battery", "exchange", "exchange value", "purani battery", "take back", "buyback", "old battery exchange", "purana battery", "exchange offer"],
    answer: "Your nearest authorised dealer handles the old-battery exchange. Ask them for the current exchange value when you enquire — it usually lowers the price of the new battery. Exact values are not published on the website.",
    links: [{ label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }],
    weight: 2,
  },
  {
    id: "price",
    keywords: ["price", "daam", "kitna paisa", "kitna", "cost", "rate", "how much", "kimat", "keemat", "paisa", "bhav", "discount", "offer", "sasta"],
    answer: "Battery prices are not published on the website, so I can't quote a rate. For the current price and any offers, please ask your nearest authorised dealer or send an enquiry to our team on WhatsApp.",
    links: [{ label: "WhatsApp", href: whatsappLink }, { label: "Call us", href: callLink }, { label: "Contact", href: "/contact" }],
    weight: 3,
  },
  {
    id: "dealer-near-me",
    keywords: ["dealer", "dealer near me", "near me", "dukan", "shop", "store", "where to buy", "kahan mile", "closest dealer", " authorised dealer", "retailer", "nearby"],
    answer: "We don't publish a dealer list on the website, so I can't name a dealer near you. Call or WhatsApp us with your city and our team will share the nearest authorised dealer's address. Please confirm before you travel.",
    links: [{ label: "Call us", href: callLink }, { label: "WhatsApp", href: whatsappLink }, { label: "Dealership", href: "/dealership" }],
    weight: 3,
  },
  {
    id: "become-dealer",
    keywords: ["become a dealer", "dealership", "dealer banna", "dealer banan", "distributor", "retailer apply", "become distributor", "dealership apply", "business", "stock", "territory"],
    answer: "Yes — we supply dealers, fleets and workshops. Choose Dealership in the enquiry form or call the sales line, and we'll discuss stock, territory and support for your counter.",
    links: [{ label: "Dealership", href: "/dealership" }, { label: "Call us", href: callLink }, { label: "Contact", href: "/contact" }],
    weight: 3,
  },
  {
    id: "contact-address",
    keywords: ["contact", "phone", "number", "address", "vijeta accumulators", "indore", "chandan nagar", "plant", "factory", "location", "email", "call", "telephone", "where made", "head office"],
    answer: "VIJETA's plant is at Plot No. 7-A, Industrial Estate, Near Chandan Nagar Police Station, Scheme Number 71, Indore, Madhya Pradesh 452002 — the Vijeta Accumulators and New Technologies plant. Call +91 99817 18000 (plant & general) or email vijetabatteries@gmail.com. For enquiries, +91 93025 30420 is also available.",
    links: [{ label: "Contact page", href: "/contact" }, { label: "Call us", href: callLink }],
    weight: 3,
  },
  {
    id: "whatsapp-link",
    keywords: ["whatsapp", "wa", "whats app", "whatsapp number", "chat on whatsapp", "whatsapp link", "message", "whatsapp par", "wa link", "whatsapp se"],
    answer: "You can chat with us directly on WhatsApp — click here to ask about batteries, prices or dealers. Our team will be happy to help.",
    links: [{ label: "Chat on WhatsApp", href: whatsappLink }],
    weight: 3,
  },
  {
    id: "company-history",
    keywords: ["history", "since 1988", "1988", "established", "founded", "old company", "years", "four decades", "kitne saal", "kab se", "journey", "legacy"],
    answer: "VIJETA has been making lead-acid batteries since 1988 — starting with accumulators and torches, then moving into lead-acid batteries and chargers after 2000. Today the plant at Vijeta Accumulators and New Technologies in Indore, Madhya Pradesh, makes them, and the Gold (36 months) and Silver (24 months) series power cars, tractors, fleets and industry.",
    links: [{ label: "Our story", href: "/about" }],
    weight: 2,
  },
  {
    id: "who-we-are",
    keywords: ["who are you", "who we are", "about", "about company", "vi jeta", "vijeta", "vijeta accumulators", "company", "kya company", "about us", "brand"],
    answer: "VIJETA is the battery brand of Vijeta Accumulators and New Technologies. We have made reliable, long-lasting lead-acid batteries since 1988 — for cars, commercial vehicles, tractors and industrial applications. Manufacturing is in-house, and every unit is tested before dispatch.",
    links: [{ label: "About us", href: "/about" }],
    weight: 2,
  },
  {
    id: "manufacturing-quality",
    keywords: ["manufacturing", "quality", "testing", "in house", "in-house", "load test", "100% load", "grid casting", "paste mixing", "cell assembly", "factory", "how made", "quality control"],
    answer: "We manufacture in-house at Vijeta Accumulators and New Technologies — grid casting, paste mixing, cell assembly and formation charging all under one roof. Every battery is 100% load-tested and inspected before dispatch. Our processes are IS 1651:1991 and ISO 9001:2008 certified.",
    links: [{ label: "Technology", href: "/technology" }, { label: "About", href: "/about" }],
    weight: 2,
  },
  {
    id: "technology-cranking",
    keywords: ["technology", "cranking", "cranking power", "low maintenance", "plate", "grid", "sealed", "battery technology", "start power", "why vijeta", "features"],
    answer: "A wide plate surface and a low-resistance grid give the burst a cold engine needs on the first turn. A lead-calcium alloy resists corrosion and water loss. The sealed, impact-resistant case and tight electrolyte control mean fewer top-ups and fewer surprises.",
    links: [{ label: "Technology", href: "/technology" }],
    weight: 2,
  },
  {
    id: "full-product-list",
    keywords: ["full product list", "all products", "products", "product list", "range", "kya products", "sab products", "catalog", "series", "what do you make", "list"],
    answer: "Our range includes automotive batteries (car/SUV, tractor, rickshaw, commercial), the Gold and Silver series, home inverters (700 VA–15,000 VA), inverter batteries (100–400 Ah), the LithTec lithium combo, industrial cells (TBS SAN, OPzS, HDP, NDP, Plante), and chargers and accessories.",
    links: [{ label: "All products", href: "/products" }],
    weight: 2,
  },
  {
    id: "inverter-va-sizing",
    keywords: ["inverter", "va", "va sizing", "which inverter", "kaun sa inverter", "home inverter", "sizing", "load", "wattage", "backup sizing", "inverter size"],
    answer: "Home inverters range from 700 VA to 15,000 VA. Add up the wattage of the appliances you want to run during an outage, then allow extra headroom for starting surges. Send us your load list on WhatsApp and we'll confirm the right size.",
    links: [{ label: "Home inverters", href: "/products/home-inverters" }, { label: "WhatsApp", href: whatsappLink }],
    weight: 3,
  },
  {
    id: "inverter-series-warranty",
    keywords: ["sino", "electro", "omega", "sigma", "sinospark", "wattrix", "inverter series", "inverter warranty", "pure sine", "square wave", "inverter model"],
    answer: "Sino: 900 VA–15,000 VA, 5 years, pure sine wave. Electro: 700–1,700 VA, 3 years, square wave. Omega: 4 years. Sigma: 4 years. SinoSpark: 3 years. Wattrix: 3 years. Please confirm the exact variant and warranty with your dealer.",
    links: [{ label: "Home inverters", href: "/products/home-inverters" }],
    weight: 2,
  },
  {
    id: "inverter-batteries-ah",
    keywords: ["inverter battery", "ah", "backup", "backup hours", "kitne ghante", "tubular", "deep cycle", "inverter battery capacity", "100 ah", "400 ah", "battery ah"],
    answer: "Inverter batteries are tubular deep-cycle types from 100 Ah to 400 Ah. A higher Ah gives longer backup but also a longer recharge time. The Regular series is described with a 20-year service-life figure — confirm the warranty term with your dealer. Smart offers up to 60 months; CitiMax 48 months, with a provisional 100–220 Ah range — please confirm with your dealer.",
    links: [{ label: "Inverter batteries", href: "/products/inverter-batteries" }],
    weight: 3,
  },
  {
    id: "lithtec-lithium",
    keywords: ["lithtec", "lithium", "lithium battery", "combo", "lithium combo", "lifepo", "bms", "iconnect", "maintenance free", "li ion", "lithtec combo"],
    answer: "LithTec is a matched Home UPS and lithium battery system — 850 VA to 5,000 VA with 12.8 V to 51.2 V storage. Examples from the pairing chart: VJ LIB 160 (12.8 V/100 Ah) with 850–1,650 VA UPS; LIB 320 (25.6 V/100 Ah) with 2,000–2,200 VA; LIB 960 (51.2 V/150 Ah) with a 5,000 VA sine-wave UPS. Pairing is indicative — please confirm with our team.",
    links: [{ label: "LithTec combo", href: "/products/lithtec-combo" }],
    weight: 3,
  },
  {
    id: "industrial-products",
    keywords: ["industrial", "industrial battery", "tbs", "san", "opzs", "hdp", "ndp", "plante", "stationary cell", "power plant", "substation", "industrial cells"],
    answer: "Our industrial range includes TBS cells in transparent SAN containers (OPzS 100–1,000 Ah), TBS/OPzS standby cells (around 15 years of service), NDP and HDP tubular cells for cyclic duty, and Plante cells (99.99% pure lead, 20+ years of service). They are used in power plants, substations, UPS, solar, telecom and railway signalling.",
    links: [{ label: "Products", href: "/products" }, { label: "TBS SAN cell", href: "/products/tbs-san-cell" }, { label: "Plante", href: "/products/plante-range" }],
    weight: 3,
  },
  {
    id: "solar-ups-applications",
    keywords: ["solar", "ups", "solar battery", "backup power", "telecom", "telecommunication", "non conventional energy", "inverter application", "storage", "renewable"],
    answer: "Industrial cells provide standby and cyclic power for solar, UPS systems, telecom sites, power plants, substations and railway signalling. TBS SAN, OPzS, HDP, NDP and Plante cells use transparent SAN containers so electrolyte level and plate condition can be checked visually.",
    links: [{ label: "Products", href: "/products" }, { label: "LithTec combo", href: "/products/lithtec-combo" }],
    weight: 2,
  },
  {
    id: "chargers-accessories",
    keywords: ["charger", "chargers", "accessories", "terminals", "cable", "small parts", "battery charger", "charger accessories", "spare parts", "parts"],
    answer: "We also carry chargers, terminals and the small parts that keep a working vehicle running. For availability and the exact variant of a charger or accessory, please ask your nearest dealer or our sales team.",
    links: [{ label: "Products", href: "/products" }, { label: "Contact", href: "/contact" }],
    weight: 2,
  },
  {
    id: "battery-care-tips",
    keywords: ["battery care", "tips", "maintenance tips", "battery life", "extend battery life", "kaise sambhal", "care", "battery healthy", "long life", "dhyan"],
    answer: "From our blog: keep terminals clean and tight; avoid short trips; switch off headlights, the blower and accessories before cranking; check the electrolyte level where applicable; disconnect the negative terminal or use a trickle charger during long parking; and have the charging system checked if you repeatedly need a jump start.",
    links: [{ label: "FAQ", href: "/faq" }],
    weight: 2,
  },
  {
    id: "acid-topup-safety",
    keywords: ["acid", "top up", "topup", "distilled water", "water", "acid add", "safety", "electrolyte", "acid dalna", "paani", "top-up"],
    answer: "Where applicable, check the electrolyte level and top up with distilled water only. Never add acid to a battery already in service. Use protection when handling acid, and confirm any doubt with your dealer or the FAQ page.",
    links: [{ label: "FAQ", href: "/faq" }],
    weight: 3,
  },
  {
    id: "certifications",
    keywords: ["certification", "certified", "iso", "is 1651", "is 1652", "iec", "bs 6290", "standards", "quality certificate", "iso 9001", "1651"],
    answer: "Our processes are IS 1651:1991 and ISO 9001:2008 certified. Industrial cells conform to IS 1651:2013; Plante cells meet BS 6290 Part 2:1999, IS 1652:2013 and IEC 60896. Details are on the technology and product pages.",
    links: [{ label: "Technology", href: "/technology" }, { label: "About", href: "/about" }],
    weight: 3,
  },
  {
    id: "bulk-fleet-enquiry",
    keywords: ["bulk", "fleet", "fleet enquiry", "wholesale", "large order", "company order", "commercial fleet", "multiple batteries", "order", "supply", "workshop"],
    answer: "Yes — we supply dealers, fleets and workshops. Choose Dealership in the enquiry form or call/WhatsApp the sales line, and we can discuss stock, territory and support. Prices are not on the website; the team will provide a quote.",
    links: [{ label: "Contact", href: "/contact" }, { label: "Dealership", href: "/dealership" }, { label: "WhatsApp", href: whatsappLink }],
    weight: 2,
  },
  {
    id: "complaint-escalation",
    keywords: ["complaint", "problem", "issue", "dispute", "claim rejected", "claim nahi", "shikayat", "complain", "bad battery", "not working", "escalate", "support"],
    answer: "If there's a problem with a claim or a battery, first speak to the authorised dealer you bought from — they test it and start the claim. If it isn't resolved there, contact our team on call or WhatsApp with your invoice and warranty card, and we'll guide you on the next step.",
    links: [{ label: "Warranty", href: "/warranty" }, { label: "Call us", href: callLink }, { label: "WhatsApp", href: whatsappLink }],
    weight: 2,
  },
  {
    id: "delivery-time",
    keywords: ["delivery", "delivery time", "ship", "shipping", "kab milega", "kitne din", "dispatch", "when will it arrive", "transport", "lead time"],
    answer: "Delivery times are not stated on the website, so I can't give an estimate. Please confirm with your nearest dealer or our sales team when your order will arrive.",
    links: [{ label: "Contact", href: "/contact" }, { label: "WhatsApp", href: whatsappLink }],
    weight: 2,
  },
  {
    id: "off-topic",
    keywords: ["weather", "news", "joke", "movie", "game", "sports", "recipe", "random", "kuch bhi", "ghanta", "time", "date", "who is", "abdul"],
    answer: "I'm built to answer questions about VIJETA batteries and this website, so I don't have an answer for that. Please ask about batteries, warranty, inverters or dealers and I'll be happy to help.",
    weight: 1,
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "dhanyavaad", "dhanyavad", "shukriya", "thanks a lot", "thanku", "thnkx", "badhiya", "great", "thanks for the help", "thank you for help", "thanks for help", "thanks for your help"],
    answer: "You're welcome! Thank you for visiting VIJETA. If you need any more help, I'm right here.",
    weight: 3,
  },
  {
    id: "goodbye",
    keywords: ["bye", "goodbye", "see you", "alvida", "bye bye", "later", "nice talking", "att chalta hoon", "chalta hoon"],
    answer: closingMessage,
    weight: 1,
  },
];
