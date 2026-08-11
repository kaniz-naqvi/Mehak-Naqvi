import Navbar from "@/components/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";
import { Metadata } from "next";
import aboutData from "@/config/user-data/about";

const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://mehak-naqvi.vercel.app"
).replace(/\/$/, "");

export const metadata: Metadata = {
  title: `Contact | ${aboutData.alias || aboutData.name}`,
  description: `Get in touch with ${aboutData.name} for freelance web development projects. Book a call or send a message, available for remote work.`,
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: `Contact | ${aboutData.alias || aboutData.name}`,
    description: `Available for remote freelance projects. Book a discovery call or drop a message.`,
    url: `${BASE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar portfolioForJob={false} />
      <main className="pt-24 pb-8 px-2">
        <ContactSection />
      </main>
      <Footer portfolioForJob={false} />
    </div>
  );
}
