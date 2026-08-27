"use client";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";
import Button from "@/components/ui/Button";
import { services, workProcess } from "@/config/user-data/services";
import aboutData from "@/config/user-data/about";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar portfolioForJob={false} />

      <main className="pt-24 pb-8">

        {/* PAGE HEADER */}
        <section className="max-w-7xl mx-auto px-4 text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Freelance Full-Stack Developer
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            I Build Products <span className="text-primary">People Use</span>
          </h1>
          <p className="text-lg text-black-light max-w-2xl mx-auto">
            SaaS apps, MVPs, dashboards, APIs. I work with founders and product
            teams who need someone to take ownership and ship, not just write
            code.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a href={aboutData.hero.primaryCtaLink}>
              <Button>{aboutData.hero.primaryCtaText}</Button>
            </a>
            <Link href="/#projects">
              <Button variant="secondary">See my work</Button>
            </Link>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-primary-light border border-primary/10 rounded-2xl p-6 flex flex-col gap-3"
              >
                <h2 className="text-base font-bold text-foreground">
                  {service.title}
                </h2>

                <p className="text-sm text-black-light leading-relaxed">
                  {service.description}
                </p>

                {service.idealFor && (
                  <p className="text-xs text-primary/80 font-medium">
                    Best for: {service.idealFor}
                  </p>
                )}

                {service.tags && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-background/70 text-black-light border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* HOW I WORK */}
        <section className="bg-primary-light py-16 mb-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              How it works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {workProcess.map((step) => (
                <div key={step.step} className="flex flex-col gap-3">
                  <span className="text-4xl font-extrabold text-primary/20">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <div className="max-w-7xl mx-auto px-4">
          <ContactSection />
        </div>
      </main>

      <Footer portfolioForJob={false} />
    </div>
  );
}
