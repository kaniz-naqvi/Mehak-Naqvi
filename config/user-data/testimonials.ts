export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  projectRef?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We needed a resume builder that felt polished enough for real users and technically solid enough to grow. Mehak built EchoMe from scratch: editor, templates, PDF export, auth, admin panel. The product is live, works exactly as expected, and the codebase is clean enough that we can keep building on it without issues.",
    name: "Team Kniz",
    role: "Product Team",
    company: "Kniz",
    projectRef: "EchoMe",
  },
];
