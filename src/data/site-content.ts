export type NavSectionId = "manifesto" | "work" | "contact";

export interface ProjectItem {
  name: string;
  desc: string;
  tags: string[];
  hasLink: boolean;
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
    hasLink: true,
  },
  {
    name: "Finalists",
    desc: "Recruitment platform prototype for household staff",
    tags: ["SaaS", "Prototype", "Vibe-coded"],
    hasLink: true,
  },
  {
    name: "Smart Home",
    desc: "Home Assistant + ESP32 – climate, air quality, automation",
    tags: ["IoT", "Hardware", "Home Assistant"],
    hasLink: true,
  },
  {
    name: "Cat Dresser",
    desc: "Solid pine cabinet with cat entrance. Built by hand",
    tags: ["Industrial Design", "Woodworking"],
    hasLink: true,
  },
  {
    name: "AI Game",
    desc: "Godot-based game that teaches AI thinking patterns",
    tags: ["Game Dev", "AI", "In Progress"],
    hasLink: false,
  },
  {
    name: "Smart Greenhouse",
    desc: "Automated growing with ESP32, irrigation & climate",
    tags: ["IoT", "Agriculture", "Coming Soon"],
    hasLink: false,
  },
];

export const experience: ExperienceItem[] = [
  { year: "2024", role: "Unit Lead", company: "Avito", note: "Trust & Safety · 3 teams" },
  {
    year: "2022",
    role: "CPO",
    company: "Mitgo",
    note: "Admitad + Tapfiliate · 5 markets",
  },
  {
    year: "2020",
    role: "CPO",
    company: "Karuna",
    note: "Fintech · 570k users · 15× growth",
  },
  {
    year: "2018",
    role: "Product Director",
    company: "Pilki",
    note: "65+ locations · CRM rollout",
  },
  {
    year: "2016",
    role: "PM → Director",
    company: "Babadu",
    note: "Top-100 e-com · 6× mobile sales",
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
    value: "@sabitsky",
    href: "https://t.me/sabitsky",
  },
];

export const siteMeta = {
  logo: "c.sabitsky",
  owner: "Constantine Sabitsky",
  location: "Belgrade, Serbia · GMT+1",
  copyright: "© 2026 Constantine Sabitsky",
  builtWith: "craft + claude + terracotta",
};
