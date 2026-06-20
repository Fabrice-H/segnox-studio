import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="max-w-[1120px] mx-auto px-6 py-[88px]">
      {/* Header */}
      <RevealOnScroll className="text-center max-w-[680px] mx-auto mb-11">
        <div className="font-heading font-bold text-[13px] tracking-[0.16em] uppercase text-gold mb-4">
          En chiffres
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-[-0.02em] text-text-primary text-balance">
          Ce que ça change, concrètement.
        </h2>
      </RevealOnScroll>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {STATS.map((stat, index) => (
          <RevealOnScroll
            key={stat.label}
            delay={index * 70}
            className="bg-white border border-border rounded-2xl shadow-[0_2px_8px_rgba(45,38,20,0.04)] py-[34px] px-6 text-center"
          >
            <div className="font-heading font-extrabold text-[clamp(36px,4.4vw,52px)] leading-none text-gold">
              {stat.value}
            </div>
            <div className="mt-2.5 text-[14.5px] text-text-muted">
              {stat.label}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
