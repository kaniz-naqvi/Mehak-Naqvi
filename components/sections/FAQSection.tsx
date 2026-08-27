"use client";

import { useState } from "react";
import { faq } from "@/config/user-data/services";
import Link from "next/link";
import { CaretDown } from "phosphor-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Questions I get asked
          </h2>
        </div>

        <div className="flex flex-col">
          {faq.map((item, i) => (
            <div
              key={i}
              className="border border-primary/10 rounded-xl mb-3 overflow-hidden bg-primary-light"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-sm text-foreground">
                  {item.q}
                </span>
                <CaretDown
                  size={16}
                  weight="bold"
                  className={`shrink-0 text-primary transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <p className="px-5 pb-4 text-sm text-black-light leading-relaxed border-t border-primary/10 pt-3">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="text-sm text-primary font-semibold underline underline-offset-4 hover:text-primary-dark transition-colors"
          >
            See all services I offer
          </Link>
        </div>
      </div>
    </section>
  );
}
