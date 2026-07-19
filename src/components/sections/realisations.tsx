import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { REALISATIONS, CLIENTS } from "@/lib/constants";

function RealisationCard({
  name,
  category,
  metric,
  quote,
  delay = 0,
}: {
  name: string;
  category: string;
  metric: string;
  quote: string;
  delay?: number;
}) {
  return (
    <RevealOnScroll
      delay={delay}
      className="bg-cream border border-border rounded-2xl overflow-hidden"
    >
      {/* Image placeholder */}
      <div className="w-full h-[230px] bg-cream-dark" />

      <div className="p-[26px]">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-[19px] text-text-primary mb-1">
              {name}
            </h3>
            <p className="text-sm text-text-muted">{category}</p>
          </div>
          <div className="font-heading font-extrabold text-[44px] leading-none text-gold whitespace-nowrap">
            {metric}
          </div>
        </div>
        <p className="mt-4 text-sm italic text-text-light border-t border-border pt-3.5">
          &laquo; {quote} &raquo;
        </p>
      </div>
    </RevealOnScroll>
  );
}

export function RealisationsSection() {
  return (
    <section id="realisations" className="bg-white border-t border-border">
      <div className="max-w-[1120px] mx-auto px-6 py-[88px]">
        {/* Header */}
        <RevealOnScroll className="max-w-[680px] mb-11">
          <div className="font-heading font-bold text-[13px] tracking-[0.16em] uppercase text-gold mb-4">
            Réalisations
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-[-0.02em] text-text-primary mb-3.5 text-balance">
            Ce que mes clients gagnent.
          </h2>
          <p className="text-[17px] leading-[1.6] text-text-muted text-pretty">
            Je préfère vous montrer des résultats plutôt que de me vanter. Voici
            deux exemples concrets.
          </p>
        </RevealOnScroll>

        {/* Realisation cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
          {REALISATIONS.map((real, index) => (
            <RealisationCard
              key={real.name}
              name={real.name}
              category={real.category}
              metric={real.metric}
              quote={real.quote}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Clients */}
        <RevealOnScroll className="mt-[30px]">
          <div className="font-heading font-bold text-[13px] tracking-[0.1em] uppercase text-text-muted mb-3.5">
            Quelques entreprises que j&apos;ai aidées
          </div>
          <div className="flex flex-wrap gap-2.5">
            {CLIENTS.map((client) => (
              <span
                key={client}
                className="font-heading font-bold text-[14.5px] text-text-primary bg-white border border-border rounded-[10px] py-2.5 px-4"
              >
                {client}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="mt-[26px] text-[15px] leading-[1.6] text-text-muted text-pretty max-w-[680px]">
            Je démarre avec une petite poignée de clients, et je le dis
            franchement. Ces résultats sont réels. Je préfère deux exemples
            vrais que dix faux.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
