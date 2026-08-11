# Freelancer Mode Guide

This portfolio supports two modes: **job-seeker** and **freelancer**. This guide covers everything you need to set up the freelancer version.

---

## 1. Enable Freelancer Mode

Open `config/user-data/about.ts` and set:

```ts
export const portfolioForJob = false;
```

This single toggle activates:
- Services section (instead of Skills)
- FAQ section on the home page
- Testimonials section on the home page
- Contact form on the home page
- Light purple footer background
- `/services` and `/contact` pages in the sitemap

---

## 2. Configure Your Services

Edit `config/user-data/services.ts`:

```ts
export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Your Service Title",
    description: "One punchy line about what you do.",
    imageUrl: "services/your-image.webp",
    tags: ["Next.js", "React", "Node.js"],
    idealFor: "Who this service is best for",
  },
  // add more...
];
```

Each service shows on both the home page services section and the `/services` page.

---

## 3. Update the FAQ

Also in `config/user-data/services.ts`:

```ts
export const faq = [
  {
    q: "Your question here?",
    a: "Your answer here.",
  },
  // add more...
];
```

FAQ only shows on the home page when `portfolioForJob = false`. Arrows and dots appear automatically when there are more than 2 items.

---

## 4. Add Testimonials

Edit `config/user-data/testimonials.ts`:

```ts
export const testimonials: Testimonial[] = [
  {
    quote: "What your client said.",
    name: "Client Name",
    role: "CEO",
    company: "Company Name",
    projectRef: "Project Name", // optional
  },
];
```

- Testimonials only show when `portfolioForJob = false`
- Leave the array empty (`[]`) to hide the section entirely
- Navigation dots and arrows appear automatically when there is more than 1 testimonial

---

## 5. Set Up the How It Works Process

Also in `config/user-data/services.ts`:

```ts
export const workProcess = [
  {
    step: "01",
    title: "Discovery call",
    body: "Describe step one.",
  },
  // add more steps...
];
```

This shows in the "How it works" section on the `/services` page.

---

## 6. Update CTAs for Freelance

In `config/user-data/about.ts`, update the hero section:

```ts
hero: {
  primaryCtaText: "Book a Call",
  primaryCtaLink: "https://calendar.app.google/your-link",
  secondaryCtaText: "Start a Project",
  secondaryCtaLink: "mailto:your@email.com?subject=Project%20Inquiry",
  topText: "Available for New Projects",
  highlightsFromTopText: ["New Projects"],
}
```

The `primaryCtaLink` is also used for the "Book a Call" button in the contact section.

---

## 7. SEO for Freelancer Discovery

Edit `config/seo.ts` to target hire-intent keywords:

```ts
title: "Freelance Full-Stack Developer for Hire | Your Name",
description: "Freelance developer specializing in Next.js, React, and Node.js. I build SaaS products and MVPs for startups. Remote. Book a discovery call.",
keywords: [
  "freelance full-stack developer",
  "hire freelance web developer",
  "Next.js developer for hire",
  "SaaS developer for hire",
  "MVP development freelancer",
  "freelance web developer UK",
  "freelance web developer US",
  // add your target markets
],
```

Key rule: put hire-intent keywords first, your name last. Nobody searches your name until they already know you.

---

## 8. Standalone Pages

When in freelancer mode, two dedicated pages are available:

| Page | Route | Purpose |
|------|-------|---------|
| Services | `/services` | Full services page with process section |
| Contact | `/contact` | Standalone contact page |

These are linked from the navbar automatically when `portfolioForJob = false`.

---

## 9. Social Links

In `config/user-data/about.ts`, social icons with no URL are automatically hidden:

```ts
socialLinks: [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile", // shown
    icon: "ri-linkedin-fill",
  },
  {
    platform: "Twitter",
    icon: "ri-twitter-x-fill", // no url = hidden automatically
  },
],
```

---

## Files to Edit (Freelancer Checklist)

| File | What to update |
|------|---------------|
| `config/user-data/about.ts` | `portfolioForJob`, name, CTAs, topText, contact info |
| `config/user-data/services.ts` | services list, FAQ, workProcess |
| `config/user-data/testimonials.ts` | client testimonials |
| `config/seo.ts` | page title, description, keywords |
| `app/services/page.tsx` | page header copy (h1, subtitle) |
| `app/contact/page.tsx` | metadata auto-generates from aboutData |
