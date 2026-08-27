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
    title: "SaaS & Web App Development",
    description:
      "From database schema to polished frontend. I build the whole product and ship it production-ready.",
    imageUrl: "services/SaaS.webp",
    tags: ["Next.js", "Node.js", "PostgreSQL", "React", "Prisma"],
    idealFor: "Startups and founders who need a working product, not just a prototype",
  },
  {
    id: 2,
    title: "MVP Development",
    description:
      "Get your idea live fast. I build the core, ship it, and help you iterate based on real user feedback.",
    imageUrl: "services/landing-page.webp",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    idealFor: "Founders who want to validate an idea before committing to a full build",
  },
  {
    id: 3,
    title: "Landing Page & Marketing Site",
    description:
      "Fast, conversion-focused pages built to rank on Google and load instantly on any device.",
    imageUrl: "services/landing-page.webp",
    tags: ["Next.js", "Tailwind", "SEO", "Core Web Vitals"],
    idealFor: "Businesses that need a professional online presence that actually converts",
  },
  {
    id: 4,
    title: "API & Backend Development",
    description:
      "REST APIs, authentication, and database design. The engine behind your product, built right.",
    imageUrl: "services/ui-fixes.webp",
    tags: ["Node.js", "Express", "PostgreSQL", "MongoDB", "NextAuth"],
    idealFor: "Teams with a frontend who need a reliable backend built alongside it",
  },
  {
    id: 5,
    title: "Ongoing Development & Feature Updates",
    description:
      "Already live? I join as your dev, add features monthly, fix bugs, and keep the product moving forward.",
    imageUrl: "services/optimization.webp",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    idealFor: "Products that launched and need continuous development without hiring full-time",
  },
  {
    id: 6,
    title: "Desktop to Responsive / Cross-Browser Fix",
    description:
      "Got a site that only works on desktop or breaks in certain browsers? I make it fully responsive and consistent everywhere.",
    imageUrl: "services/figma-to-code.webp",
    tags: ["React", "CSS", "Tailwind", "Cross-Browser", "Mobile-First"],
    idealFor: "Products built desktop-first that need to work properly on mobile and all browsers",
  },
  {
    id: 7,
    title: "Figma to Code",
    description:
      "Your designs turned into clean, responsive React code. Pixel-perfect, no layout surprises.",
    imageUrl: "services/figma-to-code.webp",
    tags: ["React", "Next.js", "Tailwind", "Figma"],
    idealFor: "Designers and product teams who need accurate, clean implementation",
  },
];

export const faq = [
  {
    q: "How long does a typical project take?",
    a: "Depends on scope. A landing page is usually 1 to 2 weeks. A full-stack web app is typically 4 to 8 weeks. I give you a clear timeline before we start, and I stick to it.",
  },
  {
    q: "What does working with you actually look like?",
    a: "We start with a short call. I send a proposal. You approve it. Then I build, check in regularly, and deliver. No disappearing acts, no surprises.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. I work fully remote and have collaborated with clients across the UK, Europe, and beyond. Time zones have never been a blocker.",
  },
  {
    q: "Can you work with an existing codebase?",
    a: "Absolutely. I jump into existing projects regularly. I read the code first, ask what I need to, and get up to speed before touching anything.",
  },
  {
    q: "Can we keep building the product after launch?",
    a: "Yes. We build an MVP first, ship it, and bring in real users. From there, we keep improving and adding features based on daily usage and feedback. Products grow best when real people are using them and telling you what to fix next.",
  },
  {
    q: "What happens after the project is done?",
    a: "Depends on what you need. Some clients take the code and run with it, and I make sure the handoff is clean and documented. Others keep me on to add features, fix things, and grow the product. Both work.",
  },
  {
    q: "Do you sign NDAs (Non-Disclosure Agreements)?",
    a: "Yes, no problem. Send it over before we start and I will review and sign.",
  },
];

export const workProcess = [
  {
    step: "01",
    title: "Discovery call",
    body: "We talk through what you need, what you have, and what success looks like. No forms, no back-and-forth. One focused conversation.",
  },
  {
    step: "02",
    title: "Proposal and timeline",
    body: "I send a clear scope, timeline, and price. No vague estimates. You know exactly what you are getting and when.",
  },
  {
    step: "03",
    title: "Build and deliver",
    body: "I build, keep you updated, and ship. You get a production-ready codebase with documentation, not a handoff you have to decode.",
  },
];
