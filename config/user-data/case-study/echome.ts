import { CaseStudy } from "./cherished-lives";

export const echomeCaseStudy: CaseStudy = {
  bgImageUrl: "projects/case-study/echome.jpg",

  introduction:
    "EchoMe is a resume builder SaaS I co-built from scratch, designed to help job seekers create recruiter-ready resumes in minutes. The core idea: most resume builders are either too rigid or too complex. EchoMe gives users a live preview editor, multiple professional templates, and PDF/DOCX export, all in one clean flow.",

  overview:
    "I led the full-stack development of EchoMe: architecture decisions, authentication system, the resume editor state, export pipeline, and the admin panel. The product is live on Vercel with email and Google OAuth auth, real-time editing backed by Redux, and a Prisma/PostgreSQL database handling resumes, users, and content.",

  overviewImage: "/projects/echome.png",

  architecture: {
    description:
      "Next.js App Router with a clear separation: all business logic lives in custom hooks, all UI state in Redux Toolkit, and all API calls go through RTK Query. The export pipeline handles both PDF (html2pdf + Puppeteer) and DOCX (docx library) with template-specific formatters for each of the three resume templates.",

    structure: `app/
  auth/           (login, signup, email verify, reset)
  editor/[id]/    (live resume editor - works unauthenticated)
  dashboard/      (protected: home, templates, admin)
  preview/        (public resume sharing by URL)
  landing/        (marketing page)
  api/            (auth, resumes, export, admin routes)

components/
  atoms/          (Button, Input, Badge - primitives)
  molecules/      (FormField, Card - compound)
  organisms/      (editor toolbar, resume sections)
  templates/      (Brand, Minimal, Classic + registry)

store/            (Redux slices: resume, auth, api)
hooks/            (all side effects and API logic)
lib/              (Prisma, NextAuth, export helpers, Zod schemas)`,
  },

  challenges: [
    {
      title: "Live preview editor with complex state",
      body: "The resume editor tracks dozens of nested fields (experience, education, projects, skills, custom sections, drag-and-drop ordering), all updating a live preview in real time. Keeping Redux state clean and avoiding unnecessary re-renders on every keystroke required careful slice design and memoization.",
    },
    {
      title: "Template-aware export pipeline",
      body: "Each of the three templates (Brand, Minimal, Classic) needed its own PDF and DOCX export formatter. A generic export would break layout assumptions baked into each template. Building three separate docx formatters and a Puppeteer-based PDF renderer that matched the on-screen output was the most technically involved part of the build.",
    },
    {
      title: "Dual authentication system",
      body: "The app uses both NextAuth (for Google OAuth) and a custom JWT flow (for email/password with verification and refresh token rotation). Keeping these two systems consistent (same session shape, same role checks, same middleware) without coupling them took careful design.",
    },
    {
      title: "Public resume sharing",
      body: "Resumes can be shared via public URLs without requiring the viewer to log in. Handling the split between authenticated editor state (Redux) and server-rendered public preview required a clean data mapping layer between the two rendering paths.",
    },
  ],

  process: [
    {
      title: "Architecture first",
      body: "Before writing any UI, I defined the Redux slice shape, the Prisma schema, and the route structure. A 51KB CLAUDE.md engineering guidelines file documented every decision: max file sizes, no console.log, centralized routes, strict hook boundaries.",
    },
    {
      title: "Editor and state before templates",
      body: "Built the resume state and live preview engine first, with a single template. Once the data flow was solid, adding the second and third templates was a matter of plugging into the same state.",
    },
    {
      title: "Export pipeline as a separate concern",
      body: "PDF and DOCX export were built as isolated hooks and lib modules, each with their own template formatter. This kept the editor code clean and made it easy to iterate on export quality without touching UI.",
    },
    {
      title: "Auth hardened before launch",
      body: "Email verification, refresh token rotation, Google OAuth, and role-based middleware were all completed and tested before the product went to production on Vercel.",
    },
  ],

  features: [
    {
      title: "Live preview resume editor",
      body: "Edit any field and see changes reflected in the resume preview instantly. Supports drag-and-drop section reordering, accent color theming, and per-template layout options.",
    },
    {
      title: "3 professional templates",
      body: "Brand, Minimal, and Classic, each with its own layout, typography, and optional features like education sidebar and skill categorization toggle.",
    },
    {
      title: "PDF and DOCX export",
      body: "Export to both formats with template-aware rendering, so the exported file matches what the user sees on screen rather than a generic fallback.",
    },
    {
      title: "Public resume sharing",
      body: "Every resume gets a public URL that renders a clean read-only version, shareable with recruiters without requiring any login.",
    },
    {
      title: "Authentication and dashboard",
      body: "Email/password with verification, Google OAuth, and a user dashboard for managing multiple resumes with daily resume writing tips.",
    },
    {
      title: "Admin panel",
      body: "Internal tooling for managing daily tips, viewing download analytics, and handling user feedback.",
    },
  ],

  featuresImage: "/projects/case-study/echome-features.png",

  outcomes: [
    {
      value: "Live",
      desc: "Deployed to production on Vercel with full auth and export pipeline",
    },
    {
      value: "3 templates",
      desc: "Each with PDF and DOCX export, theme customization, and layout options",
    },
    {
      value: "14 models",
      desc: "PostgreSQL schema covering resumes, users, auth tokens, analytics, and admin content",
    },
  ],

  reflection:
    "EchoMe pushed me into areas I had not spent much time in before: document generation, complex nested editor state, and a dual-auth system. The constraint of building something I would actually want to use kept the quality bar high throughout.",
};
