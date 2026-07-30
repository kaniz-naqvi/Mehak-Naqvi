import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Miss Kniz — Freelance Full-Stack Developer",
  description:
    "Freelance full-stack web development services: SaaS applications, landing pages, REST APIs, performance optimization, and Figma to code. Available for remote projects.",
  alternates: {
    canonical: "https://mehak-naqvi.vercel.app/services",
  },
  openGraph: {
    title: "Services | Miss Kniz — Freelance Full-Stack Developer",
    description:
      "Full-stack development services for startups and product teams. React, Next.js, Node.js, PostgreSQL. Available for remote freelance projects.",
    url: "https://mehak-naqvi.vercel.app/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar showNavLinks={false} />
      <main className="pt-20 pb-8 px-2 space-y-16">
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
