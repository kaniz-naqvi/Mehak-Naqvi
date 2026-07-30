export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Full-Stack Web App Development",
    description:
      "I design and build complete web applications from database to user interface — REST APIs, authentication, database schema, and responsive frontend. Whether you need a SaaS product, dashboard, or internal tool, I handle the full stack and ship it production-ready.",
    imageUrl: "services/SaaS.webp",
  },
  {
    id: 2,
    title: "Landing Page & Marketing Site",
    description:
      "Fast, conversion-focused landing pages built to rank and load instantly on any device. I handle mobile-first implementation, clean design, SEO structure, and Core Web Vitals so your page works as hard as you do.",
    imageUrl: "services/landing-page.webp",
  },
  {
    id: 3,
    title: "API & Backend Development",
    description:
      "I build the server-side infrastructure your product needs to scale — REST APIs, PostgreSQL or MongoDB database design, user authentication (email, OAuth, sessions), and backend logic. Ideal for teams that need the engine behind the UI.",
    imageUrl: "services/ui-fixes.webp",
  },
  {
    id: 4,
    title: "Website Performance Optimization",
    description:
      "Slow websites lose users and rankings. I audit your application, find the bottlenecks, and fix them — improving Core Web Vitals, cutting load times, and making your product feel fast on any device or connection.",
    imageUrl: "services/optimization.webp",
  },
  {
    id: 5,
    title: "Figma / Design to Code",
    description:
      "I turn your design files into pixel-perfect, responsive, production-ready code. Whether it is a full redesign or specific screens, I deliver clean, maintainable React or Next.js implementation with no layout surprises.",
    imageUrl: "services/figma-to-code.webp",
  },
];
