import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { OFFERS, WHATSAPP_LINKS } from "@/lib/constants";

function OfferCard({
  name,
  tagline,
  idealFor,
  gains,
  inclusions,
  perfectFor,
  highlighted = false,
  badge,
  cta,
  delay = 0,
}: {
  name: string;
  tagline: string;
  idealFor?: string;
  gains: string[];
  inclusions: string[];
  perfectFor?: string;
  highlighted?: boolean;
  badge?: string;
  cta?: string;
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

      <h3 className="font-heading font-extrabold text-[24px] text-text-primary mb-1">
        {name}
      </h3>
      <p className="font-heading text-[16px] font-bold leading-[1.4] text-gold-dark mb-3">
        {tagline}
      </p>

      {idealFor && (
        <p className="text-[13.5px] text-text-muted mb-5 italic">
          {idealFor}
        </p>
      )}

      {/* Gains - Ce que vous gagnez */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={14} className="text-gold" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-gold-dark">
            Ce que vous gagnez
          </span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {gains.map((gain) => (
            <li
              key={gain}
              className="flex gap-2.5 items-start text-[14.5px] text-text-primary font-medium"
            >
              <Check
                size={16}
                className="flex-none mt-0.5 text-gold"
                strokeWidth={3}
              />
              {gain}
            </li>
          ))}
        </ul>
      </div>

      {/* Inclusions - Ce qui est inclus */}
      <div className="flex-1 mb-5">
        <div className="text-[11px] font-bold tracking-wider uppercase text-text-muted mb-3">
          Ce qui est inclus
        </div>
        <ul className="flex flex-col gap-2">
          {inclusions.map((inclusion) => (
            <li
              key={inclusion}
              className="flex gap-2.5 items-start text-[13.5px] text-text-secondary"
            >
              <span className="text-gold/60">→</span>
              {inclusion}
            </li>
          ))}
        </ul>
      </div>

      {/* Perfect for */}
      {perfectFor && (
        <p className="text-[12px] text-text-muted mb-4 text-center">
          Parfait pour : <span className="font-medium">{perfectFor}</span>
        </p>
      )}

      <Link
        href={WHATSAPP_LINKS.diagnostic}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-center no-underline font-heading font-bold text-[15px] py-[13px] rounded-[10px] transition-colors ${
          highlighted
            ? "bg-gold-light text-dark hover:bg-[#dcb15a]"
            : "bg-transparent text-gold-dark border border-gold/45 hover:bg-gold/8"
        }`}
      >
        {cta || "Choisir"}
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
            Choisissez votre transformation.
          </h2>
          <p className="text-base leading-[1.6] text-text-muted text-pretty">
            Prix fixé ensemble selon votre besoin. Paiement Wave, Orange Money
            ou carte, possible en plusieurs fois.
          </p>
        </RevealOnScroll>

        {/* Offer cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {OFFERS.map((offer, index) => (
            <OfferCard
              key={offer.name}
              name={offer.name}
              tagline={offer.tagline}
              idealFor={offer.idealFor}
              gains={offer.gains}
              inclusions={offer.inclusions}
              perfectFor={offer.perfectFor}
              highlighted={offer.highlighted}
              badge={offer.badge}
              cta={offer.cta}
              delay={index * 80}
            />
          ))}
        </div>

        {/* Abonnement - Tranquillité */}
        <RevealOnScroll className="mt-10 relative bg-dark rounded-2xl overflow-hidden">
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(214,178,94,0.15)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-heading font-extrabold text-[24px] text-white">
                    Tranquillité
                  </h3>
                  <span className="bg-gold/20 text-gold text-[11px] font-bold tracking-wider uppercase py-1 px-2.5 rounded-full">
                    Abonnement mensuel
                  </span>
                </div>

                <p className="text-[17px] text-[rgba(243,236,224,0.8)] mb-2 font-medium">
                  Vous ne touchez à rien. Votre système reste performant.
                </p>
                <p className="text-[15px] text-[rgba(243,236,224,0.55)] mb-6">
                  Mises à jour, modifications, optimisation, dépannage. Je gère tout pour vous.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5">
                    <Check
                      size={16}
                      className="flex-none text-gold"
                      strokeWidth={3}
                    />
                    <span className="text-[14px] text-[rgba(243,236,224,0.75)]">
                      Système toujours optimisé
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check
                      size={16}
                      className="flex-none text-gold"
                      strokeWidth={3}
                    />
                    <span className="text-[14px] text-[rgba(243,236,224,0.75)]">
                      Modifications illimitées
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check
                      size={16}
                      className="flex-none text-gold"
                      strokeWidth={3}
                    />
                    <span className="text-[14px] text-[rgba(243,236,224,0.75)]">
                      Dépannage prioritaire
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check
                      size={16}
                      className="flex-none text-gold"
                      strokeWidth={3}
                    />
                    <span className="text-[14px] text-[rgba(243,236,224,0.75)]">
                      Support WhatsApp direct
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <Link
                  href={WHATSAPP_LINKS.diagnostic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold-light text-dark no-underline font-heading font-bold text-[15px] py-3.5 px-8 rounded-[10px] hover:bg-[#dcb15a] transition-colors mb-3"
                >
                  Déléguer la technique
                </Link>
                <p className="text-[13px] text-[rgba(243,236,224,0.45)]">
                  Sans engagement · Annulable à tout moment
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
