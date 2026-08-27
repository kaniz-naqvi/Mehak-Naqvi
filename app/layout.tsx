import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { metadataSEO } from "@/config/seo";
import { RouteTransition } from "@/components/motion/Reveal";
import aboutData from "@/config/user-data/about";

export const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://mehak-naqvi.vercel.app"
).replace(/\/$/, "");

export const metadata: Metadata = metadataSEO;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: aboutData.name,
    ...(aboutData.alias && { alternateName: aboutData.alias }),
    url: BASE_URL,
    image: `${BASE_URL}/photo-gallery/my-picture.png`,
    jobTitle: aboutData.title,
    ...(aboutData.experience[0]?.company && {
      worksFor: {
        "@type": "Organization",
        name: aboutData.experience[0].company.split(" - ")[0].trim(),
      },
    }),
    sameAs: aboutData.socialLinks
      .filter((s) => Boolean(s.url))
      .map((s) => s.url as string),
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and PostgreSQL. Available for freelance projects building web applications end-to-end.",
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "REST API Design",
      "SaaS Development",
      "Full-Stack Web Development",
      "Prisma ORM",
      "Redux Toolkit",
      "Authentication Systems",
      "Express.js",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Web Developer",
      occupationLocation: { "@type": "Country", name: "Pakistan" },
      description:
        "Building full-stack web applications end-to-end for startups and product teams",
    },
    offers: {
      "@type": "Offer",
      name: "Freelance Full-Stack Web Development",
      description:
        "Web application development services including SaaS products, landing pages, backend APIs, authentication systems, and performance optimization.",
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Pakistan" },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${aboutData.name} | Full Stack Developer Portfolio`,
    url: BASE_URL,
    description: `Portfolio and freelance services of ${aboutData.name}${aboutData.alias ? ` (${aboutData.alias})` : ""}, a Full-Stack Developer specializing in React, Next.js, Node.js, and PostgreSQL.`,
    author: {
      "@type": "Person",
      name: aboutData.name,
      ...(aboutData.alias && { alternateName: aboutData.alias }),
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased" suppressHydrationWarning>
        <RouteTransition>{children}</RouteTransition>

        {/* Structured Data: inline so crawlers read it from initial HTML */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
