import Link from "next/link";
import { Check } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { OFFERS } from "@/lib/constants";

function OfferCard({
  name,
  tagline,
  features,
  highlighted = false,
  badge,
  delay = 0,
}: {
  name: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  delay?: number;
}) {
  return (
    <RevealOnScroll
      delay={delay}
      className={`relative rounded-2xl p-8 flex flex-col ${
        highlighted
          ? "bg-[#FFFDF8] border-[1.5px] border-gold-light shadow-[0_18px_44px_rgba(181,138,43,0.16)]"
          : "bg-cream border border-border hover:border-gold/50"
      }`}
    >
      {badge && (
        <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-gold-light text-dark font-heading font-extrabold text-[11.5px] tracking-[0.08em] py-[5px] px-3.5 rounded-full whitespace-nowrap">
          {badge}
        </span>
      )}

      <h3 className="font-heading font-extrabold text-[22px] text-text-primary mb-2">
        {name}
      </h3>
      <p className="font-heading text-[16.5px] font-bold leading-[1.35] text-text-primary mb-5">
        {tagline}
      </p>

      <ul className="flex flex-col gap-3 flex-1 mb-[26px]">
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

      <Link
        href="#diagnostic"
        className={`text-center no-underline font-heading font-bold text-[15px] py-[13px] rounded-[10px] transition-colors ${
          highlighted
            ? "bg-gold-light text-dark hover:bg-[#dcb15a]"
            : "bg-transparent text-gold-dark border border-gold/45 hover:bg-gold/8"
        }`}
      >
        Choisir
      </Link>
    </RevealOnScroll>
  );
}

export function OffersSection() {
  return (
    <section
      id="offres"
      className="bg-white border-t border-b border-border"
    >
      <div className="max-w-[1120px] mx-auto px-6 py-[72px]">
        {/* Header */}
        <RevealOnScroll className="text-center max-w-[680px] mx-auto mb-10">
          <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-[-0.02em] text-text-primary mb-3 text-balance">
            Trois formules. Un seul objectif.
          </h2>
          <p className="text-base leading-[1.6] text-text-muted text-pretty">
            On fixe le prix ensemble. Paiement Wave, Orange Money ou carte,
            possible en plusieurs fois.
          </p>
        </RevealOnScroll>

        {/* Offer cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {OFFERS.map((offer, index) => (
            <OfferCard
              key={offer.name}
              name={offer.name}
              tagline={offer.tagline}
              features={offer.features}
              highlighted={offer.highlighted}
              badge={offer.badge}
              delay={index * 80}
            />
          ))}
        </div>

        {/* Le site qui travaille */}
        <RevealOnScroll className="mt-[22px] bg-dark rounded-2xl p-[26px_32px] flex flex-wrap items-center justify-between gap-[18px]">
          <div>
            <div className="font-heading font-extrabold text-[19px] text-white">
              Le site qui travaille
            </div>
            <div className="text-[15px] text-[rgba(243,236,224,0.6)] mt-1">
              Un site, ça vit. Mises à jour, petits changements, optimisation,
              dépannage : je m&apos;occupe de tout dans la durée, en suivi mensuel
              léger. On en parle si ça vous intéresse — sans engagement.
            </div>
          </div>
          <Link
            href="#diagnostic"
            className="bg-transparent text-gold-lighter no-underline font-heading font-bold text-[14.5px] py-3 px-[22px] rounded-[10px] border border-[rgba(214,178,94,0.45)] whitespace-nowrap hover:bg-[rgba(214,178,94,0.1)] transition-colors"
          >
            En savoir plus →
          </Link>
        </RevealOnScroll>

      </div>
    </section>
  );
}
