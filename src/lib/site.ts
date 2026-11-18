export const site = {
  name: "VIJETA",
  wordmark: "VIJETA",
  legalName: "Aadinath Power Systems Pvt. Ltd.",
  domain: "vijetabattery.com",
  url: "https://vijetabattery.com",
  since: 1988,
  description:
    "Lead-acid batteries for cars, tractors, trucks, rickshaws and industry. Manufactured in Pithampur since 1988. Gold series with 36 months of cover, Silver with 24.",
  phonePrimary: "+919981716000",
  phonePrimaryLabel: "+91 99817 16000",
  phones: [
    { label: "+91 99817 16000", tel: "+919981716000", note: "Plant & general" },
    { label: "+91 93013 86893", tel: "+919301386893", note: "Enquiries" },
    { label: "+91 92036 66893", tel: "+919203666893", note: "Sales executive" },
  ],
  email: "vijetabatteries@gmail.com",
  address: {
    line1: "Plot No. M-52, Sector 3",
    line2: "Pithampur Growth Corridor",
    city: "Dhar",
    state: "Madhya Pradesh",
    pin: "454774",
    country: "India",
  },
  whatsapp:
    "https://wa.me/919981716000?text=Hi%20VIJETA%2C%20I%20found%20you%20on%20vijetabattery.com%20and%20I%27d%20like%20to%20enquire%20about%20a%20battery.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/technology" },
  { label: "Warranty", href: "/warranty" },
  { label: "Dealership", href: "/dealership" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About the factory", href: "/about" },
  { label: "Batteries & applications", href: "/products" },
  { label: "Inside the cell", href: "/technology" },
  { label: "Warranty & claims", href: "/warranty" },
  { label: "Dealership", href: "/dealership" },
  { label: "Questions", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const enquiryTypes = [
  "Car / SUV battery",
  "Tractor battery",
  "Auto rickshaw battery",
  "Commercial vehicle battery",
  "Industrial / solar battery",
  "Chargers & accessories",
  "Dealership",
  "Something else",
] as const;

export const categories = [
  {
    tag: "Automotive",
    title: "Car & SUV",
    copy: "Starting power for petrol, diesel and CNG cars. Hatchback to SUV, daily commute to weekend highway.",
    icon: "car",
  },
  {
    tag: "Agriculture",
    title: "Tractor",
    copy: "High-torque cranking for cold dawns, long field hours and the vibration that comes with them.",
    icon: "tractor",
  },
  {
    tag: "Urban",
    title: "Auto rickshaw",
    copy: "Compact, vibration-resistant power for three-wheelers that run from first light to last fare.",
    icon: "rickshaw",
  },
  {
    tag: "Heavy duty",
    title: "Commercial & HCV",
    copy: "Trucks, buses and LCVs. Built for long hauls, rough roads and restart after restart.",
    icon: "truck",
  },
  {
    tag: "Industrial",
    title: "Industrial & solar",
    copy: "Backup and storage for plants, telecom sites and solar setups that cannot afford a dark hour.",
    icon: "industry",
  },
  {
    tag: "Support",
    title: "Chargers & accessories",
    copy: "Chargers, terminals and the small parts that keep a working vehicle working.",
    icon: "charger",
  },
] as const;

export const capabilities = [
  {
    title: "Grid casting",
    note: "Lead grids cast in-house",
  },
  {
    title: "Paste mixing",
    note: "Controlled oxide recipe",
  },
  {
    title: "Cell assembly",
    note: "Plates, separators, welds",
  },
  {
    title: "Formation charging",
    note: "Charged and stabilised",
  },
  {
    title: "Load testing",
    note: "Every unit, before dispatch",
  },
] as const;

export const technology = [
  {
    key: "cranking",
    title: "Cranking power",
    copy:
      "A wide plate surface and a low-resistance grid deliver the burst a cold engine asks for — first turn, no hesitation. That is the whole job, and we build for it.",
    highlight: "terminals",
  },
  {
    key: "life",
    title: "Service life",
    copy:
      "Premium lead-calcium alloy resists corrosion and water loss, so capacity holds through Indian summers instead of fading quietly after the first year.",
    highlight: "plates",
  },
  {
    key: "maintenance",
    title: "Low maintenance",
    copy:
      "Tight electrolyte control and a sealed, impact-resistant case mean fewer top-ups, fewer surprises and less time with the bonnet open.",
    highlight: "case",
  },
  {
    key: "testing",
    title: "Tested, unit by unit",
    copy:
      "Every battery is formation-charged, load-tested and inspected before it leaves Pithampur. Nothing goes out on a promise.",
    highlight: "all",
  },
] as const;

export const stats = [
  { value: 1988, suffix: "", label: "Established", note: "Same plant, same standard." },
  { value: 36, suffix: "", label: "Months of cover", note: "Our longest warranty — Gold series." },
  { value: 6, suffix: "", label: "Vehicle categories", note: "Cars to commercial fleets." },
  { value: 100, suffix: "%", label: "Units load-tested", note: "Before they leave the floor." },
] as const;

export const warrantyRows = [
  { label: "Warranty", gold: "36 months", silver: "24 months" },
  { label: "Best for", gold: "Cars, SUVs & commercial", silver: "Everyday automotive" },
  { label: "Cranking", gold: "High reserve", silver: "Dependable" },
  { label: "Maintenance", gold: "Low", silver: "Low" },
  { label: "Cover", gold: "Manufacturing defects", silver: "Manufacturing defects" },
] as const;

export const claimSteps = [
  {
    title: "Buy from an authorised dealer",
    copy: "Ask for the warranty card and an invoice in your name. That is what the cover rests on.",
  },
  {
    title: "Keep the invoice",
    copy: "It is the only proof of purchase we need. Photograph it and keep it with the vehicle papers.",
  },
  {
    title: "Return to the dealer",
    copy: "They will test the battery and start the claim. Our team handles it from there.",
  },
] as const;

export const visionMission = {
  vision:
    "To be central India’s most trusted lead-acid power manufacturer by building batteries that perform consistently under severe heat, heavy load, and demanding Indian road conditions.",
  mission:
    "Manufacture high-density lead-acid batteries with rigorous internal quality control, honest warranty support, and long-term dealer partnerships built on reliability, zero excuses, and fair pricing.",
  values: [
    { title: "In-House Quality", desc: "Grid casting, paste mixing, cell assembly, and 100% load testing done under one roof at Pithampur." },
    { title: "Honest Warranty", desc: "No confusing fine print. 36 months for Gold and 24 months for Silver honored directly through our dealer network." },
    { title: "Indian Road Realities", desc: "Designed for high ambient heat, cold morning starts, high vibration, and unpaved rural routes." },
  ],
} as const;

export const faqs = [
  {
    q: "Which battery fits my car?",
    a: "Send us the make, model, fuel type and year on WhatsApp or through the enquiry form. We will confirm the right series and capacity, and point you to the nearest dealer before you buy.",
  },
  {
    q: "Gold or Silver — which one should I choose?",
    a: "Gold is the premium series with 36 months of cover, built for heavier loads and longer service. Silver gives 24 months and dependable everyday performance at a lower price. Both are made on the same line and tested the same way.",
  },
  {
    q: "How do I claim a warranty?",
    a: "Take the battery, your invoice and the warranty card to the authorised VIJETA dealer you bought it from. They will test it and process the claim. If you are unsure where to go, call us and we will guide you.",
  },
  {
    q: "Do you take back old batteries?",
    a: "Old battery exchange is handled by your nearest dealer. Ask them for the current exchange value when you enquire — it usually brings the price of the new battery down.",
  },
  {
    q: "Do you supply dealers, fleets and workshops?",
    a: "Yes. Choose Dealership in the enquiry form, or call the sales line directly. We can talk about stock, territory and support for your counter.",
  },
  {
    q: "Where are VIJETA batteries made?",
    a: "At our plant in Pithampur, Madhya Pradesh — Plot M-52, Sector 3, Pithampur Growth Corridor, Dhar. Most components are manufactured in-house and every unit is tested before dispatch.",
  },
] as const;

