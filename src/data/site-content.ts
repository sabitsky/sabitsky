export type NavSectionId = "manifesto" | "work" | "contact";

export interface ProjectItem {
  name: string;
  desc: string;
  tags: string[];
  href?: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  note: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  primary?: boolean;
  openInNewTab?: boolean;
}

export const navItems: Array<{ id: NavSectionId; label: string }> = [
  { id: "manifesto", label: "Manifesto" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const heroKeywords = [
  "Product Strategy",
  "Applied AI",
  "IoT & Hardware",
  "Vibe-coding",
  "0 → 1",
] as const;

export const projects: ProjectItem[] = [
  {
    name: "Hearitage",
    desc: "AI-powered museum guide with conversational storytelling",
    tags: ["AI", "Mobile Web", "Vibe-coded"],
    href: "https://www.hearitage.com/",
  },
  {
    name: "Finalists",
    desc: "Recruitment platform prototype for household staff",
    tags: ["SaaS", "Prototype", "Vibe-coded"],
    href: "https://finalists-app.vercel.app/",
  },
  {
    name: "Smart Home",
    desc: "Home Assistant + ESP32 – climate, air quality, automation",
    tags: ["IoT", "Hardware", "Home Assistant"],
  },
  {
    name: "Cat Dresser",
    desc: "Solid pine cabinet with cat entrance. Built by hand",
    tags: ["Industrial Design", "Woodworking"],
  },
  {
    name: "AI Game",
    desc: "Godot-based game that teaches AI thinking patterns",
    tags: ["Game Dev", "AI", "In Progress"],
  },
  {
    name: "Smart Greenhouse",
    desc: "Automated growing with ESP32, irrigation & climate",
    tags: ["IoT", "Agriculture", "Coming Soon"],
  },
];

export const experience: ExperienceItem[] = [
  {
    year: "2024",
    role: "Unit Lead",
    company: "Avito",
    note: "Moderation Systems in Trust & Safety · 3 teams. End-to-end ownership of the UGC content moderation pipeline, internal tooling for moderation staff, QoC frameworks, and anti-fraud detective workflows.",
  },
  {
    year: "2022",
    role: "CPO",
    company: "Mitgo",
    note: "Admitad + Tapfiliate · 5 markets. ML-driven product features and martech integrations across affiliate marketing platforms serving 3,000+ advertisers and 100k+ publishers.",
  },
  {
    year: "2020",
    role: "CPO",
    company: "Karuna",
    note: "Fintech · 570k users · 15× growth. Markets: Indonesia, India, LATAM, MENA. Built and scaled a 12-person product org from scratch.",
  },
  {
    year: "2018",
    role: "Product Director",
    company: "Pilki",
    note: "65+ locations · Launched online sales for Pilki school.",
  },
  {
    year: "2016",
    role: "PM → Director",
    company: "Babadu",
    note: "Top-100 e-com in RU · 6× mobile sales through new mobile app and overall funnel optimization.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "c.sabitsky@gmail.com",
    href: "mailto:c.sabitsky@gmail.com",
    primary: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sabitsky",
    href: "https://www.linkedin.com/in/sabitsky",
  },
  {
    label: "Telegram",
    value: "@c_sabitsky",
    href: "https://t.me/c_sabitsky",
    openInNewTab: true,
  },
];

export const siteMeta = {
  logo: "c.sabitsky",
  owner: "Constantine Sabitsky",
  location: "Belgrade, Serbia",
  copyright: "© 2026 Constantine Sabitsky",
  builtWith: "Crafted with Claude",
};
