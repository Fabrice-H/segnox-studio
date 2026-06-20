import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { INTEGRATIONS } from "@/lib/constants";

export function IntegrationsSection() {
  return (
    <section className="bg-white border-b border-border">
      <RevealOnScroll className="max-w-[1120px] mx-auto px-6 py-12 text-center">
        <div className="font-heading font-bold text-[13px] tracking-[0.16em] uppercase text-gold mb-3">
          Connecté aux outils que vous utilisez déjà
        </div>
        <p className="mb-[26px] text-base text-text-muted">
          Votre site ne remplace rien. Il fait travailler ensemble tout ce que
          vous avez déjà.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {INTEGRATIONS.map((integration) => (
            <span
              key={integration}
              className="bg-cream border border-border rounded-[11px] py-[11px] px-5 font-semibold text-[14.5px] text-text-secondary"
            >
              {integration}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
