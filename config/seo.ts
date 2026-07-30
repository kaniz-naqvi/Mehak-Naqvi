import { Metadata } from "next";
import aboutData from "./user-data/about";

const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://mehak-naqvi.vercel.app"
).replace(/\/$/, "");

const pageTitle = aboutData.alias
  ? `${aboutData.name} | ${aboutData.alias} — ${aboutData.title}`
  : `${aboutData.name} — ${aboutData.title}`;

export const metadataSEO: Metadata = {
  title: pageTitle,
  metadataBase: new URL(BASE_URL),
  description: aboutData.hero.heroPara,
  verification: {
    google: "8cGWQBP5rucbnE3RCQoMp_D6RxaVKbrSaVhm18o_oxE",
  },
  keywords: [
    // Name / brand
    "Mehak Fatima Naqvi",
    "Mehak Naqvi",
    "Mehak Fatima",
    "Miss Kniz",
    "miss-kniz",
    "kniz",
    // Primary role — what clients search
    "Full-Stack Developer",
    "full-stack web developer",
    "freelance full-stack developer",
    "hire full-stack developer",
    // Tech-specific hire terms
    "Next.js developer for hire",
    "freelance React developer",
    "React Next.js developer",
    "Node.js developer",
    "SaaS developer",
    // Location + remote
    "Full-Stack Developer Pakistan",
    "remote full-stack developer",
    "PERN Stack Developer",
    "Pakistan developer for hire",
    // Services
    "web application development",
    "SaaS application development",
    "freelance web developer",
    "React developer for hire",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: aboutData.alias
      ? `${aboutData.name} | ${aboutData.alias}`
      : aboutData.name,
    description: aboutData.hero.heroPara,
    url: BASE_URL,
    siteName: `${aboutData.name} Portfolio`,
    images: [
      {
        url: `${BASE_URL}/photo-gallery/portfolio.jpg`,
        width: 1200,
        height: 630,
        alt: `${aboutData.name} - ${aboutData.title}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
