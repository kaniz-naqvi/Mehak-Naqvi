"use client";
import React from "react";
import Heading from "./Heading";
import aboutData from "@/config/user-data/about";
import SocialLinks from "./SocialLinks";
import { cn } from "@/helpers/merge-helper";
import { usePathname, useRouter } from "next/navigation";

interface FooterProps {
  portfolioForJob?: boolean;
  className?: string;
}

const navRoutes: Record<string, string> = {
  Home: "/",
  About: "/#about",
  Projects: "/projects",
  Services: "/services",
  Skills: "/#skills",
};

const Footer: React.FC<FooterProps> = ({ portfolioForJob, className }) => {
  const currentYear = new Date().getFullYear();
  const firstName = aboutData.name.split(" ")[0];
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const navItems = [
    "Home",
    "About",
    "Projects",
    portfolioForJob ? "Skills" : "Services",
  ];

  const handleNavClick = (item: string) => {
    if (isHome) {
      const el = document.getElementById(item.toLowerCase());
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      router.push(navRoutes[item] || "/");
    }
  };

  return (
    <footer className={cn(`w-full mb-16 md:mb-0 bg-primary-light ${className}`)}>
      <div className="max-w-7xl mx-auto py-10 flex flex-col items-center gap-6">
        {/* Logo / Name */}
        <Heading as="h2" normalText={firstName} />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm tracking-wide text-gray-600 font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="relative transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:text-primary after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:origin-center after:scale-x-0 after:bg-primary/40 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4">
          <SocialLinks links={aboutData.socialLinks} />
        </div>

        {/* Divider */}
        <div className="w-full h-[0.2px] shadow-sm"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center">
          © {currentYear} {aboutData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
