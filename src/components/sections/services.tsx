import { Check } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { SERVICES } from "@/lib/constants";

function ServiceCard({
  number,
  title,
  description,
  features,
  delay = 0,
}: {
  number: string;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}) {
  return (
    <RevealOnScroll
      delay={delay}
      className="bg-cream border border-border rounded-[14px] p-7 transition-all duration-200 hover:border-gold/50 hover:-translate-y-[3px] hover:shadow-[0_14px_30px_rgba(45,38,20,0.08)]"
    >
      <div className="font-heading font-extrabold text-[32px] text-gold/50 leading-none mb-4">
        {number}
      </div>
      <h3 className="font-heading font-bold text-[21px] text-text-primary mb-2.5">
        {title}
      </h3>
      <p className="text-[15.5px] leading-[1.55] text-text-muted mb-[18px]">
        {description}
      </p>
      <ul className="flex flex-col gap-2.5">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex gap-2.5 items-start text-[14.5px] text-text-secondary"
          >
            <Check
              size={16}
              className="flex-none mt-0.5 text-gold"
              strokeWidth={3}
            />
            {feature}
          </li>
        ))}
      </ul>
    </RevealOnScroll>
  );
}

export function ServicesSection() {
  return (
    <section
      id="solutions"
      className="bg-white border-t border-b border-border"
    >
      <div className="max-w-[1120px] mx-auto px-6 py-[72px]">
        {/* Header */}
        <RevealOnScroll className="max-w-[680px] mb-10">
          <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-[-0.02em] text-text-primary mb-3 text-balance">
            Ce que ça change pour vous.
          </h2>
          <p className="text-[17px] leading-[1.6] text-text-muted max-w-[540px] text-pretty">
            Pas juste un site. Un système qui travaille pendant que vous faites
            votre métier.
          </p>
        </RevealOnScroll>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index % 2 === 0 ? 0 : 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
