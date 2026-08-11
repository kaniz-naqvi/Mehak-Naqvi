"use client";

import { useState } from "react";
import { testimonials } from "@/config/user-data/testimonials";
import { Quotes, ArrowLeft, ArrowRight } from "phosphor-react";

export default function TestimonialsSection() {
  if (!testimonials.length) return null;

  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const showArrows = testimonials.length > 1;

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Recommendations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">What people say</h2>
        </div>

        <div className="flex items-center gap-4">
          {showArrows && (
            <button
              onClick={prev}
              className="shrink-0 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary-light transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft size={18} weight="bold" />
            </button>
          )}

          <div className="flex-1 bg-primary-light border border-primary/10 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-6 min-h-[360px]">
            <Quotes size={40} className="text-primary/30" weight="fill" />

            <p className="text-base md:text-lg leading-relaxed text-foreground max-w-2xl">
              {t.quote}
            </p>

            <div className="flex flex-col items-center gap-1 pt-4 border-t border-primary/10 w-full">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mb-2">
                {t.name.charAt(0)}
              </div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-black-light">
                {t.role}, {t.company}
                {t.projectRef && (
                  <span className="ml-2 text-primary">· {t.projectRef}</span>
                )}
              </p>
            </div>
          </div>

          {showArrows && (
            <button
              onClick={next}
              className="shrink-0 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary-light transition-colors"
              aria-label="Next"
            >
              <ArrowRight size={18} weight="bold" />
            </button>
          )}
        </div>

        {showArrows && (
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index ? "bg-primary w-5" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
