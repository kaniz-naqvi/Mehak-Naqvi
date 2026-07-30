export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  idealFor?: string;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Full-Stack Web App Development",
    description:
      "I design and build complete web applications from database to user interface — REST APIs, authentication, database schema, and responsive frontend. Whether you need a SaaS product, dashboard, or internal tool, I handle the full stack and ship it production-ready.",
    imageUrl: "services/SaaS.webp",
    tags: ["Next.js", "Node.js", "PostgreSQL", "React", "Prisma"],
    idealFor: "Startups and founders who need a working product, not just a prototype",
  },
  {
    id: 2,
    title: "Landing Page & Marketing Site",
    description:
      "Fast, conversion-focused landing pages built to rank and load instantly on any device. I handle mobile-first implementation, clean design, SEO structure, and Core Web Vitals so your page works as hard as you do.",
    imageUrl: "services/landing-page.webp",
    tags: ["Next.js", "Tailwind", "SEO", "Core Web Vitals"],
    idealFor: "Businesses that need a professional online presence that actually converts",
  },
  {
    id: 3,
    title: "API & Backend Development",
    description:
      "I build the server-side infrastructure your product needs — REST APIs, PostgreSQL or MongoDB database design, user authentication (email, OAuth, sessions), and backend logic. Ideal for teams that need the engine behind the UI.",
    imageUrl: "services/ui-fixes.webp",
    tags: ["Node.js", "Express", "PostgreSQL", "MongoDB", "NextAuth"],
    idealFor: "Teams with a frontend who need a reliable backend built alongside it",
  },
  {
    id: 4,
    title: "Website Performance Optimization",
    description:
      "Slow websites lose users and rankings. I audit your application, find the bottlenecks, and fix them — improving Core Web Vitals, cutting load times, and making your product feel fast on any device or connection.",
    imageUrl: "services/optimization.webp",
    tags: ["Core Web Vitals", "Next.js", "React", "Lighthouse"],
    idealFor: "Products that are built but feeling slow or losing users at load time",
  },
  {
    id: 5,
    title: "Figma / Design to Code",
    description:
      "I turn your design files into pixel-perfect, responsive, production-ready code. Whether it is a full redesign or specific screens, I deliver clean, maintainable React or Next.js implementation with no layout surprises.",
    imageUrl: "services/figma-to-code.webp",
    tags: ["React", "Next.js", "Tailwind", "Figma"],
    idealFor: "Designers and product teams who need accurate, clean implementation",
  },
];

export const workProcess = [
  {
    step: "01",
    title: "Discovery call",
    body: "We talk through what you need, what you have, and what success looks like. No forms, no back-and-forth — one focused conversation.",
  },
  {
    step: "02",
    title: "Proposal and timeline",
    body: "I send a clear scope, timeline, and price. No vague estimates. You know exactly what you are getting and when.",
  },
  {
    step: "03",
    title: "Build and deliver",
    body: "I build, keep you updated, and ship. You get a production-ready codebase with documentation — not a handoff you have to decode.",
  },
];
