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
      "Working with Mehak on EchoMe was a great experience. She understood what we were going for without needing much explanation and just got it done. The product turned out exactly how we envisioned it, and honestly better in some areas. We are still building on it and everything holds up.",
    name: "Team Kniz",
    role: "Product Team",
    company: "Kniz",
    projectRef: "EchoMe",
  },
  {
    quote:
      "An amazing job from start to finish. A true partner in helping build out the webapp. What I appreciated most was the communication, the deep understanding of our product, really taking the time to understand our industry. In the end, they created exactly what we wanted and some. Amazing experience and will work with them time and time again.",
    name: "Coach AK Ikwuakor",
    role: "CEO",
    company: "LeadLyft",
    projectRef: "LeadLyft",
  },
  {
    quote:
      "Mehak took what was a very personal and emotionally sensitive product and treated it with real care. Cherished Lives needed to feel right, not just work right. She understood that without me having to explain it twice. The platform is live, families are using it, and it looks and feels exactly like what we had in mind.",
    name: "Eric",
    role: "Founder",
    company: "Cherished Lives",
    projectRef: "Cherished Lives",
  },
];
