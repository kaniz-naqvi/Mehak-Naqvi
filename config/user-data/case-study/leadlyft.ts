import { CaseStudy } from "./cherished-lives";

export const leadlyftCaseStudy: CaseStudy = {
  bgImageUrl: "projects/case-study/leadlyft.jpg",

  introduction:
    "LeadLyft was built by an independent life and performance coach who wanted a real product — not a patchwork of spreadsheets and booking tools — to manage their clients and grow their practice. What started as a single-coach platform grew into a multi-coach SaaS with 500+ registered users, monthly subscription plans for individuals, and enterprise licenses sold to companies for their employees.",

  overview:
    "I joined the project after the initial MVP was shipped and took ownership of the frontend architecture as the product scaled. My work covered building out the coaching and analytics workflows, standardizing the component system across the application, integrating APIs, handling complex state management, and improving performance as the feature set and user base grew.",

  overviewImage: "/projects/case-study/leadlyft-overview.png",

  architecture: {
    description:
      "As the product grew, I moved the codebase toward an atomic, feature-based structure. The goal was simple: keep things scalable without making the system harder to understand. Every feature had its own space, and reusable UI stayed consistent across the app.",

    structure: `src/
components/
    atoms/ (buttons, inputs, icons, typography)
    molecules/ (form groups, cards, modals, dropdowns)
    templates/ (layout structures for pages)
    pages/ (final composed screens)

utils/
    api/ (RTK Query services)
    hooks/ (custom reusable hooks)
    store/ (Redux state management)
    helpers/ (helper functions)
    routes/ (role-based dynamic routing)`,
  },

  challenges: [
    {
      title: "Keeping everything in sync",
      body: "Different dashboards were pulling and updating shared data in real time. The challenge was making sure everything stayed consistent without overloading the system with unnecessary requests.",
    },
    {
      title: "Making updates feel instant",
      body: "When users updated goals or progress, the UI needed to respond immediately. I implemented optimistic updates so the experience felt smooth and natural, even when network calls were still processing in the background.",
    },
    {
      title: "Avoiding UI chaos as features grew",
      body: "As more features were added, I had to make sure the UI didn’t turn into a collection of random components. I enforced a strict structure so everything was built from reusable building blocks.",
    },
    {
      title: "Keeping dashboards fast",
      body: "Some pages became data-heavy very quickly. I focused on performance improvements like lazy loading and memoization to keep the experience smooth even under load.",
    },
  ],

  process: [
    {
      title: "Starting with structure, not screens",
      body: "Instead of jumping into UI, I first mapped out how the system should be organized across coaching, analytics, and user management. This made everything that followed much easier to scale.",
    },
    {
      title: "Building the foundation first",
      body: "I created a reusable component system before touching features. Buttons, inputs, modals, and layouts were all standardized so every new screen felt consistent by default.",
    },
    {
      title: "Shipping features end-to-end",
      body: "Each feature was built completely before moving to the next, including UI, API integration, loading states, and error handling. This helped keep the product stable as it grew.",
    },
    {
      title: "Improving performance at the end",
      body: "Once features were in place, I went back and optimized performance, focusing on reducing unnecessary renders and improving navigation speed across dashboards.",
    },
  ],

  features: [
    {
      title: "Performance dashboard",
      body: "A centralized view of progress, key metrics, and actionable insights to guide daily focus.",
    },
    {
      title: "Coaching & communication",
      body: "Direct interaction between companies, coaches, and clients with structured guidance and real-time conversations.",
    },
    {
      title: "Goal & habit tracking",
      body: "Set meaningful goals and track daily habits with clear, measurable progress over time.",
    },
    {
      title: "Daily logs & analytics",
      body: "Log activities with categories and reasons, then turn them into visual insights to understand behavior and trends.",
    },
  ],
  featuresImage: "/projects/case-study/leadlyft-features.png",

  outcomes: [
    {
      value: "500+",
      desc: "Registered users on the platform across coaches, clients, and organizations",
    },
    {
      value: "5 roles",
      desc: "Coaches, clients, practitioners, organizations, and admins — all in one system",
    },
    {
      value: "B2B + B2C",
      desc: "Monthly user subscriptions alongside enterprise plans sold to companies for their employees",
    },
    {
      value: "6-figure",
      desc: "Revenue run-rate supported through enterprise organization plans",
    },
  ],

  reflection:
    "LeadLyft taught me that building a SaaS product is not just about writing components. It is about understanding how people interact with systems over time. The more I worked on it, the more I focused on clarity, structure, and long-term maintainability instead of just shipping features quickly.",
};
