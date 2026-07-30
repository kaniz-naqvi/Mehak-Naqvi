import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/ui/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Miss Kniz — Full-Stack Developer",
  description:
    "Full-stack web projects by Mehak Fatima Naqvi: SaaS platforms, memorial apps, meal planning, and more. View case studies with architecture, challenges, and outcomes.",
  alternates: {
    canonical: "https://mehak-naqvi.vercel.app/projects",
  },
  openGraph: {
    title: "Projects & Case Studies | Miss Kniz",
    description:
      "Real-world projects built with React, Next.js, Node.js, and PostgreSQL. Client work, SaaS products, and full-stack case studies.",
    url: "https://mehak-naqvi.vercel.app/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar showNavLinks={false} />
      <main className="pt-20 pb-8 px-2">
        <ProjectsSection showAllByDefault={true} />
      </main>
      <Footer />
    </div>
  );
}
