import { testimonials } from "@/config/user-data/testimonials";
import { QuotesThin } from "@phosphor-icons/react/dist/ssr";

export default function TestimonialsSection() {
  if (!testimonials.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Recommendations
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          What people say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-primary-light border border-primary/10 rounded-2xl p-8 flex flex-col gap-6"
          >
            <QuotesThin size={36} className="text-primary/40" weight="fill" />

            <p className="text-sm leading-relaxed text-foreground">
              {t.quote}
            </p>

            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-primary/10">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-black-light">
                  {t.role}, {t.company}
                  {t.projectRef && (
                    <span className="ml-2 text-primary">· {t.projectRef}</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
