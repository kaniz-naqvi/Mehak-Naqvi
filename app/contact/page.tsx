import Navbar from "@/components/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Miss Kniz — Freelance Full-Stack Developer",
  description:
    "Get in touch with Mehak Fatima Naqvi for freelance full-stack web development projects. Book a call or send a message — available for remote work.",
  alternates: {
    canonical: "https://mehak-naqvi.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Miss Kniz — Freelance Full-Stack Developer",
    description:
      "Available for remote freelance projects. Book a discovery call or drop a message — let's discuss your project.",
    url: "https://mehak-naqvi.vercel.app/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar showNavLinks={false} />
      <main className="pt-24 pb-8 px-2">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
