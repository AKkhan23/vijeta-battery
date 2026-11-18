import { site } from "@/lib/site";

export type ChatLink = { label: string; href: string };
export type KnowledgeEntry = {
  id: string;
  keywords: string[]; // lowercase tokens or phrases, include English + Hindi + Hinglish + common typos
  answer: string; // short plain text, 1-4 sentences, NO markdown tables, no invented facts
  links?: ChatLink[];
  chips?: string[];
  weight?: number; // 1-3, higher for very specific intents
};

const whatsappLink = site.whatsapp;
const callLink = `tel:${site.phonePrimary}`;

export const greeting =
  "Namaste! Main VIJETA ka battery dost hoon — car, tractor, truck, inverter ya industrial battery ke sawal ka jawab de sakta hoon. Kuch bhi poochhiye, aur agar main na jaan paun to aapko seedha call ya WhatsApp par bhej dunga. Bataiye, aaj kya jaanna hai?";

export const suggestedPrompts: string[] = [
  "Which battery fits my car?",
  "Gold vs Silver warranty",
  "How to claim warranty",
  "Dealer near me",
];

export const fallbackAnswer =
  "Samajh gaya, lekin yeh jaankari website par available nahi hai. Main sirf vijetabattery.com par di gayi cheezon ke baare mein bata sakta hoon. Is sawal ka pakka jawab humari team WhatsApp ya phone par de sakti hai — woh zaroor madad karengi.";

export const fallbackLinks: ChatLink[] = [
  { label: "Call us", href: callLink },
  { label: "WhatsApp", href: whatsappLink },
  { label: "Contact page", href: "/contact" },
];

export const knowledgeEntries: KnowledgeEntry[] = [
  {
    id: "greeting",
    keywords: ["namaste", "hello", "hi", "hey", "namaskar", "good morning", "good evening", "start", "hey there", "hlo"],
    answer:
      "Namaste! Main VIJETA ka battery assistant hoon. Car, tractor, truck, inverter aur industrial battery — sabke baare mein madad kar sakta hoon. Bataiye, aaj kya jaanna chahte hain?",
    chips: ["Which battery fits my car?", "Gold vs Silver warranty", "Dealer near me"],
    weight: 1,
  },
  {
    id: "what-can-you-do",
    keywords: ["what can you do", "kaam", "help", "madad", "kya kar sakte ho", "kya bata sakte ho", "capabilities", "features", "kaise madad", "what do you do"],
    answer:
      "Main aapko VIJETA batteries, unke applications, Gold aur Silver warranty, warranty claim, dealers, home inverters, inverter batteries, LithTec aur industrial products ke baare mein bata sakta hoon. Prices ya model-specific fitment website par nahi hain — unke liye main aapko call ya WhatsApp par bhej dunga.",
    links: [{ label: "All products", href: "/products" }, { label: "FAQ", href: "/faq" }],
    weight: 1,
  },
  {
    id: "car-fitment",
    keywords: ["car", "suv", "hatchback", "sedan", "petrol", "diesel", "cng", "fitment", "which battery", "kaun si battery", "kaunsi battery", "kaunsa battery", "swift", "dzire", "baleno", "alto", "car battery", "meri gaadi", "my car", "replace", "vehicle", "gaadi"],
    answer:
      "Car ya SUV ke liye sahi battery confirm karne ke liye mujhe aapki gaadi ka make, model, fuel type (petrol/diesel/CNG) aur year bataiye. Main series aur capacity verify nahi kar sakta — WhatsApp par details bhejein to humari team sahi battery aur nearest dealer confirm karke bataegi.",
    links: [{ label: "Car & SUV", href: "/products" }, { label: "WhatsApp", href: whatsappLink }],
    chips: ["Send my car details on WhatsApp"],
    weight: 3,
  },
  {
    id: "bike-motorcycle",
    keywords: ["bike", "bike battery", "motorcycle", "moto", "scooty", "scooter", "two wheeler", "2 wheeler", "bajaj", "hero", "honda bike", "bike mein", "bike ke liye"],
    answer:
      "Sach bataun — bike, motorcycle aur scooty batteries VIJETA ke range mein nahi hain. Hum car, tractor, auto rickshaw, truck aur industrial batteries banate hain. Bike battery ke liye aap apne local battery dealer ya workshop se poochh sakte hain.",
    links: [{ label: "Our range", href: "/products" }],
    weight: 3,
  },
  {
    id: "tractor-battery",
    keywords: ["tractor", "tractor battery", "agriculture", "farm", "khet", "high torque", "cold dawn", "field", "tractor ke liye", " agriculture battery"],
    answer:
      "Tractor batteries high-torque cranking ke liye bani hain — cold dawns, lambhe field hours aur vibration ke liye. Gold series heavy use ke liye 36 months cover ke saath hai. Exact fitment ke liye tractor ka make, model, fuel aur year WhatsApp par bhejein.",
    links: [{ label: "Products", href: "/products" }, { label: "Warranty", href: "/warranty" }],
    weight: 2,
  },
  {
    id: "auto-rickshaw",
    keywords: ["auto", "auto rickshaw", "rickshaw", "ricksha", "three wheeler", "3 wheeler", "tempo", "auto battery", "rickshaw battery", "auto ke liye"],
    answer:
      "Auto rickshaw ke liye hum compact, vibration-resistant batteries banate hain — teesre wheeler jo first light se last fare tak chalte hain. Sahi series confirm karne ke liye aapka vehicle model aur year WhatsApp par bhejein, humari team bata degi.",
    links: [{ label: "Products", href: "/products" }, { label: "WhatsApp", href: whatsappLink }],
    weight: 2,
  },
  {
    id: "truck-bus-hcv",
    keywords: ["truck", "trk", "bus", "hcv", "commercial", "commercial vehicle", "heavy duty", "lcv", "fleet", "truck battery", "bus battery", "long haul"],
    answer:
      "Truck, bus aur LCV (heavy duty) ke liye hum long hauls, rough roads aur baar-baar restart ke liye built batteries rakhte hain. Gold series heavy use ke liye 36 months cover ke saath hai. Fleet ya exact fitment ke liye WhatsApp par details bhejein.",
    links: [{ label: "Commercial vehicles", href: "/products" }, { label: "Bulk enquiry", href: "/contact" }],
    weight: 2,
  },
  {
    id: "vehicle-comparison",
    keywords: ["compare", "comparison", "difference", "bike vs truck", "rickshaw vs car", "tractor vs car", "which vehicle", "kaunsa", "all categories", "vehicle types"],
    answer:
      "Simple comparison: Car/SUV = petrol, diesel, CNG ke liye starting power. Tractor = high-torque cranking aur field vibration. Auto rickshaw = compact, vibration-resistant power. Truck/bus (HCV) = long hauls aur rough roads. Bike/scooty humare range mein nahi. Aapka vehicle kya hai?",
    links: [{ label: "All categories", href: "/products" }],
    weight: 2,
  },
  {
    id: "gold-vs-silver",
    keywords: ["gold vs silver", "gold or silver", "gold silver", "difference", "compare series", "kaunsa series", "premium", "gold", "silver", "which one"],
    answer:
      "Gold premium series hai — 36 months cover, heavy loads aur lambe service ke liye. Silver 24 months deta hai aur roz ki driving ke liye dependable hai. Dono ek hi line par bante aur ek hi tarah test hote hain. Gold cars, SUVs aur commercial ke liye; Silver everyday automotive ke liye.",
    links: [{ label: "Warranty details", href: "/warranty" }, { label: "FAQ", href: "/faq" }],
    weight: 3,
  },
  {
    id: "gold-warranty",
    keywords: ["gold warranty", "gold months", "36 months", "36 month", "gold guarantee", "gold cover", "gold warranty period", "longest warranty", "gold garantee", "three year"],
    answer:
      "Gold series par 36 months warranty hai — humari sabse lambi cover. Yeh manufacturing defects ko cover karta hai. Claim ke liye battery authorised dealer se khareediye, invoice aur warranty card rakhiye, aur battery dealer ke paas le jaiye.",
    links: [{ label: "Warranty", href: "/warranty" }],
    weight: 3,
  },
  {
    id: "silver-warranty",
    keywords: ["silver warranty", "silver months", "24 months", "24 month", "silver guarantee", "silver cover", "silver warranty period", "two year", "silver garantee"],
    answer:
      "Silver series par 24 months warranty hai. Yeh bhi manufacturing defects ko cover karta hai. Claim ke liye authorised dealer se khareed ka invoice aur warranty card safe rakhiye, phir battery dealer ke paas le jaiye — woh test karke claim start karega.",
    links: [{ label: "Warranty", href: "/warranty" }],
    weight: 3,
  },
  {
    id: "warranty-coverage",
    keywords: ["warranty cover", "what does warranty cover", "manufacturing defect", "defects", "cover kya hai", "warranty kya cover", "claim scope", "garantee kya"],
    answer:
      "Gold aur Silver dono ki warranty manufacturing defects ko cover karti hai. Warranty ka matlab agar battery banane mein koi defect ho to claim hota hai. Exact terms aur steps website ke warranty page par hain.",
    links: [{ label: "Warranty & claims", href: "/warranty" }],
    weight: 2,
  },
  {
    id: "warranty-claim-steps",
    keywords: ["warranty claim", "claim steps", "how to claim", "claim kaise", "warranty claim kaise", "return battery", "claim process", "warrnty claim", "garantee claim"],
    answer:
      "Warranty claim ke 3 step hain: (1) Battery authorised VIJETA dealer se khareediye aur warranty card + invoice lijiye, (2) invoice safe rakhiye, (3) battery dealer ke paas le jaiye — woh test karke claim start karega, baaki humari team sambhalegi.",
    links: [{ label: "Warranty claim steps", href: "/warranty" }, { label: "FAQ", href: "/faq" }],
    weight: 3,
  },
  {
    id: "warranty-card-invoice",
    keywords: ["warranty card", "invoice", "bill", "proof of purchase", "receipt", "warrnty card", "garantee card", "card nahi", "invoice nahi", "bill nahi"],
    answer:
      "Warranty card aur invoice aapke purchase ke proof hain — claim inhi par chalata hai. Battery khareedte waqt authorised dealer se dono lijiye aur invoice ka photo apne vehicle papers ke saath rakhiye. Agar koi document kho jaye to khareedne wale dealer se contact karein.",
    links: [{ label: "Warranty", href: "/warranty" }],
    weight: 3,
  },
  {
    id: "old-battery-exchange",
    keywords: ["old battery", "exchange", "exchange value", "purani battery", "take back", "buyback", "old battery exchange", "purana battery", "exchange offer"],
    answer:
      "Purani battery ka exchange nearest authorised dealer handle karta hai. Jab aap enquire karein to unse current exchange value poochhiye — isse nayi battery ka price kam ho jata hai. Exact value website par nahi hai, dealer hi bata sakta hai.",
    links: [{ label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }],
    weight: 2,
  },
  {
    id: "price",
    keywords: ["price", "daam", "kitna paisa", "kitna", "cost", "rate", "how much", "kimat", "keemat", "paisa", "bhav", "discount", "offer", "sasta"],
    answer:
      "Battery ke prices website par publish nahi hain — isliye main koi rate nahi bata sakta. Sahi price aur current offer ke liye aap nearest authorised dealer se poochh sakte hain ya WhatsApp par humari team se enquiry kar sakte hain.",
    links: [{ label: "WhatsApp", href: whatsappLink }, { label: "Call us", href: callLink }, { label: "Contact", href: "/contact" }],
    weight: 3,
  },
  {
    id: "dealer-near-me",
    keywords: ["dealer", "dealer near me", "near me", "dukan", "shop", "store", "where to buy", "kahan mile", "closest dealer", " authorised dealer", "retailer", "nearby"],
    answer:
      "Humari website par dealer list nahi hai, isliye main aapke paas ka dealer nahi bata sakta. Aap call ya WhatsApp par apna city/sheer bataiye — humari team nearest authorised dealer ka address bhej degi. Safar shuru karne se pehle ek baar confirm zaroor kar lijiye.",
    links: [{ label: "Call us", href: callLink }, { label: "WhatsApp", href: whatsappLink }, { label: "Dealership", href: "/dealership" }],
    weight: 3,
  },
  {
    id: "become-dealer",
    keywords: ["become a dealer", "dealership", "dealer banna", "dealer banan", "distributor", "retailer apply", "become distributor", "dealership apply", "business", "stock", "territory"],
    answer:
      "Haan, hum dealers, fleets aur workshops ko supply karte hain. Dealership ke liye enquiry form mein Dealership chuniye ya sales line par call karein — hum stock, territory aur aapke counter ke support ke baare mein baat karenge.",
    links: [{ label: "Dealership", href: "/dealership" }, { label: "Call us", href: callLink }, { label: "Contact", href: "/contact" }],
    weight: 3,
  },
  {
    id: "contact-address",
    keywords: ["contact", "phone", "number", "address", "pithampur", "dhar", "plant", "factory", "location", "email", "call", "telephone", "where made", "head office"],
    answer:
      "VIJETA ka plant: Plot No. M-52, Sector 3, Pithampur Growth Corridor, Dhar, Madhya Pradesh 454774. Call karein +91 99817 16000 (plant & general) ya email vijetabatteries@gmail.com. Enquiries ke liye +91 93013 86893 bhi hai.",
    links: [{ label: "Contact page", href: "/contact" }, { label: "Call us", href: callLink }],
    weight: 3,
  },
  {
    id: "whatsapp-link",
    keywords: ["whatsapp", "wa", "whats app", "whatsapp number", "chat on whatsapp", "whatsapp link", "message", "whatsapp par", "wa link", "whatsapp se"],
    answer:
      "Aap humse WhatsApp par seedha chat kar sakte hain — yahaan click karein aur battery, price ya dealer ke baare mein poochhein. Humari team aapki madad karegi.",
    links: [{ label: "Chat on WhatsApp", href: whatsappLink }],
    weight: 3,
  },
  {
    id: "company-history",
    keywords: ["history", "since 1988", "1988", "established", "founded", "old company", "years", "four decades", "kitne saal", "kab se", "journey", "legacy"],
    answer:
      "VIJETA 1988 se lead-acid batteries bana raha hai — pehle accumulators aur torches, phir 2000 ke baad lead-acid aur chargers. Aaj plant Pithampur, Madhya Pradesh mein hai aur Gold (36 months) aur Silver (24 months) series cars, tractors, fleets aur industry ko power dete hain.",
    links: [{ label: "Our story", href: "/about" }],
    weight: 2,
  },
  {
    id: "who-we-are",
    keywords: ["who are you", "who we are", "about", "about company", "vi jeta", "vijeta", "aadinath", "company", "kya company", "about us", "brand"],
    answer:
      "VIJETA (Aadinath Power Systems Pvt. Ltd.) 1988 se reliable, long-lasting lead-acid batteries banata hai — cars, commercial vehicles, tractors aur industrial applications ke liye. Manufacturing Pithampur mein in-house quality ke saath hoti hai, aur har unit dispatch se pehle test hoti hai.",
    links: [{ label: "About us", href: "/about" }],
    weight: 2,
  },
  {
    id: "manufacturing-quality",
    keywords: ["manufacturing", "quality", "testing", "in house", "in-house", "load test", "100% load", "grid casting", "paste mixing", "cell assembly", "factory", "how made", "quality control"],
    answer:
      "Hum Pithampur mein in-house banate hain — grid casting, paste mixing, cell assembly aur formation charging ek hi chhat ke neeche. Har battery 100% load-tested aur inspect hoti hai dispatch se pehle. Processes IS 1651:1991 aur ISO 9001:2008 certified hain.",
    links: [{ label: "Technology", href: "/technology" }, { label: "About", href: "/about" }],
    weight: 2,
  },
  {
    id: "technology-cranking",
    keywords: ["technology", "cranking", "cranking power", "low maintenance", "plate", "grid", "sealed", "battery technology", "start power", "why vijeta", "features"],
    answer:
      "Cranking power ke liye wide plate surface aur low-resistance grid cold engine ko pehle turn mein start dete hain. Lead-calcium alloy corrosion aur water loss kam karta hai. Sealed, impact-resistant case aur tight electrolyte control se kam top-ups aur kam surprises hote hain.",
    links: [{ label: "Technology", href: "/technology" }],
    weight: 2,
  },
  {
    id: "full-product-list",
    keywords: ["full product list", "all products", "products", "product list", "range", "kya products", "sab products", "catalog", "series", "what do you make", "list"],
    answer:
      "Humare paas automotive batteries (car/SUV, tractor, rickshaw, commercial), Gold aur Silver series, home inverters (700 VA–15,000 VA), inverter batteries (100–400 Ah), LithTec lithium combo, industrial cells (TBS SAN, OPzS, HDP, NDP, Plante), aur chargers & accessories hain.",
    links: [{ label: "All products", href: "/products" }],
    weight: 2,
  },
  {
    id: "inverter-va-sizing",
    keywords: ["inverter", "va", "va sizing", "which inverter", "kaun sa inverter", "home inverter", "sizing", "load", "wattage", "backup sizing", "inverter size"],
    answer:
      "Home inverters 700 VA se 15,000 VA tak hain. Pehle outage ke dauran chalane wale appliances ka wattage jodein, phir starting surge ke liye thoda extra VA rakhein. Load list WhatsApp par bhejein to hum aapke liye size confirm kar denge.",
    links: [{ label: "Home inverters", href: "/products/home-inverters" }, { label: "WhatsApp", href: whatsappLink }],
    weight: 3,
  },
  {
    id: "inverter-series-warranty",
    keywords: ["sino", "electro", "omega", "sigma", "sinospark", "wattrix", "inverter series", "inverter warranty", "pure sine", "square wave", "inverter model"],
    answer:
      "Sino 900 VA–15,000 VA, 5 saal pure sine; Electro 700–1700 VA, 3 saal square wave; Omega 4 saal, Sigma 4 saal, SinoSpark 3 saal, Wattrix 3 saal. Exact variant aur warranty apne dealer se confirm kar lijiye.",
    links: [{ label: "Home inverters", href: "/products/home-inverters" }],
    weight: 2,
  },
  {
    id: "inverter-batteries-ah",
    keywords: ["inverter battery", "ah", "backup", "backup hours", "kitne ghante", "tubular", "deep cycle", "inverter battery capacity", "100 ah", "400 ah", "battery ah"],
    answer:
      "Inverter batteries 100–400 Ah mein tubular deep-cycle hain. Zyada Ah matlab lambe backup, lekin zyada recharge time bhi. Regular (135–400 Ah) ka 20 saal service-life figure hai — warranty term dealer se confirm karein. Smart 60 months, CitiMax 48 months (100–220 Ah provisional, dealer se confirm).",
    links: [{ label: "Inverter batteries", href: "/products/inverter-batteries" }],
    weight: 3,
  },
  {
    id: "lithtec-lithium",
    keywords: ["lithtec", "lithium", "lithium battery", "combo", "lithium combo", "lifepo", "bms", "iconnect", "maintenance free", "li ion", "lithtec combo"],
    answer:
      "LithTec combo ek matched Home UPS + lithium battery system hai — 850 VA–5,000 VA, 12.8 V–51.2 V storage. Pairing table: VJ LIB 160 (12.8V/100Ah) 850–1650 VA UPS se, LIB 320 (25.6V/100Ah) 2000–2200 VA, LIB 960 (51.2V/150Ah) 5000 VA sine se. Pairing indicative hai, team se confirm karein.",
    links: [{ label: "LithTec combo", href: "/products/lithtec-combo" }],
    weight: 3,
  },
  {
    id: "industrial-products",
    keywords: ["industrial", "industrial battery", "tbs", "san", "opzs", "hdp", "ndp", "plante", "stationary cell", "power plant", "substation", "industrial cells"],
    answer:
      "Industrial range: TBS cells in transparent SAN containers (OPzS 100–1000 Ah), TBS/OPzS standby cells (~15 saal service), NDP & HDP tubular for cyclic use, aur Plante cells (99.99% pure lead, 20+ saal service). Yeh power plants, substations, UPS, solar, telecom aur railway signalling mein kaam aate hain.",
    links: [{ label: "Products", href: "/products" }, { label: "TBS SAN cell", href: "/products/tbs-san-cell" }, { label: "Plante", href: "/products/plante-range" }],
    weight: 3,
  },
  {
    id: "solar-ups-applications",
    keywords: ["solar", "ups", "solar battery", "backup power", "telecom", "telecommunication", "non conventional energy", "inverter application", "storage", "renewable"],
    answer:
      "Industrial cells solar, UPS systems, telecom sites, power plants, substations aur railway signalling ke liye standby aur cyclic power dete hain. TBS SAN, OPzS, HDP, NDP aur Plante transparent SAN containers mein aate hain taaki electrolyte level aur plate condition visually check ho sake.",
    links: [{ label: "Products", href: "/products" }, { label: "LithTec combo", href: "/products/lithtec-combo" }],
    weight: 2,
  },
  {
    id: "chargers-accessories",
    keywords: ["charger", "chargers", "accessories", "terminals", "cable", "small parts", "battery charger", "charger accessories", "spare parts", "parts"],
    answer:
      "Hum chargers, terminals aur chhote parts bhi rakhte hain — yehi cheezein ek chalte vehicle ko chalati rehti hain. Charger ya accessory ki availability aur exact variant ke liye nearest dealer ya hamari sales team se poochh sakte hain.",
    links: [{ label: "Products", href: "/products" }, { label: "Contact", href: "/contact" }],
    weight: 2,
  },
  {
    id: "battery-care-tips",
    keywords: ["battery care", "tips", "maintenance tips", "battery life", "extend battery life", "kaise sambhal", "care", "battery healthy", "long life", "dhyan"],
    answer:
      "Blog ke tips: terminals clean aur tight rakhein; short trips se bachein; crank karne se pehle headlights, blower aur accessories band karein; electrolyte level check karein; lambe parking par negative terminal disconnect karein ya trickle charger use karein; baar-baar jump start par charging system check karayein.",
    links: [{ label: "FAQ", href: "/faq" }],
    weight: 2,
  },
  {
    id: "acid-topup-safety",
    keywords: ["acid", "top up", "topup", "distilled water", "water", "acid add", "safety", "electrolyte", "acid dalna", "paani", "top-up"],
    answer:
      "Jahan applicable ho, electrolyte level check karein aur sirf distilled water se top up karein. Battery already service mein ho to usmein kabhi acid na dalein. Acid handle karte waqt protection use karein — confirm ke liye apne dealer ya FAQ page ko dekhein.",
    links: [{ label: "FAQ", href: "/faq" }],
    weight: 3,
  },
  {
    id: "certifications",
    keywords: ["certification", "certified", "iso", "is 1651", "is 1652", "iec", "bs 6290", "standards", "quality certificate", "iso 9001", "1651"],
    answer:
      "Humare processes IS 1651:1991 aur ISO 9001:2008 certified hain. Industrial cells IS 1651:2013 ke according hain; Plante BS 6290 Part 2:1999, IS 1652:2013 aur IEC 60896 se milkte hain. Details technology aur product pages par hain.",
    links: [{ label: "Technology", href: "/technology" }, { label: "About", href: "/about" }],
    weight: 3,
  },
  {
    id: "bulk-fleet-enquiry",
    keywords: ["bulk", "fleet", "fleet enquiry", "wholesale", "large order", "company order", "commercial fleet", "multiple batteries", "order", "supply", "workshop"],
    answer:
      "Haan, hum dealers, fleets aur workshops ko supply karte hain. Enquiry form mein Dealership chuniye ya sales line par call/WhatsApp karein — stock, territory aur support ke baare mein baat kar sakte hain. Prices website par nahi hain, team hi quote degi.",
    links: [{ label: "Contact", href: "/contact" }, { label: "Dealership", href: "/dealership" }, { label: "WhatsApp", href: whatsappLink }],
    weight: 2,
  },
  {
    id: "complaint-escalation",
    keywords: ["complaint", "problem", "issue", "dispute", "claim rejected", "claim nahi", "shikayat", "complain", "bad battery", "not working", "escalate", "support"],
    answer:
      "Agar claim ya battery ke saath koi problem ho to sabse pehle khareedne wale authorised dealer se baat karein — woh test karke claim start karta hai. Agar wahan niptan na ho to invoice aur warranty card ke saath hamari team se call ya WhatsApp par contact karein; woh aapko aage ka raasta batayegi.",
    links: [{ label: "Warranty", href: "/warranty" }, { label: "Call us", href: callLink }, { label: "WhatsApp", href: whatsappLink }],
    weight: 2,
  },
  {
    id: "delivery-time",
    keywords: ["delivery", "delivery time", "ship", "shipping", "kab milega", "kitne din", "dispatch", "when will it arrive", "transport", "lead time"],
    answer:
      "Delivery time website par nahi bataya gaya hai — main koi estimate nahi de sakta. Aapka order kahan aur kab pahuchega yeh aapke nearest dealer ya hamari sales team se confirm karein.",
    links: [{ label: "Contact", href: "/contact" }, { label: "WhatsApp", href: whatsappLink }],
    weight: 2,
  },
  {
    id: "off-topic",
    keywords: ["weather", "news", "joke", "movie", "game", "sports", "recipe", "random", "kuch bhi", "ghanta", "time", "date", "who is", "abdul"],
    answer:
      "Main sirf VIJETA batteries aur website ki jaankari ke liye bana hoon — is sawal ka jawab mere paas nahi hai. Koi battery, warranty, inverter ya dealer ka sawal ho to zaroor poochhiye!",
    weight: 1,
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "dhanyavaad", "dhanyavad", "shukriya", "thanks a lot", "thanku", "thnkx", "badhiya", "great"],
    answer:
      "Koi baat nahi! Khush ki madad ho payi. Aur koi sawal ho to main yahin hoon — Namaste!",
    weight: 1,
  },
  {
    id: "goodbye",
    keywords: ["bye", "goodbye", "see you", "alvida", "bye bye", "later", "nice talking", "att chalta hoon", "chalta hoon"],
    answer:
      "Alvida! Aapki safalta ke liye shubhkaamnaayein — battery, warranty ya dealer se juda koi bhi sawal ho to wapas aa kar poochh sakte hain. Namaste!",
    weight: 1,
  },
];
