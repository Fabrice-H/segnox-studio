import { Plus, Equal, Globe, Filter, Zap, Rocket } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

export function SystemEquationSection() {
  return (
    <section className="bg-dark border-t border-[rgba(214,178,94,0.15)]">
      <div className="max-w-[1120px] mx-auto px-6 py-[72px]">
        {/* Header */}
        <RevealOnScroll className="text-center max-w-[680px] mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-[-0.02em] text-white mb-3 text-balance">
            Ce que j&apos;installe pour vous.
          </h2>
          <p className="text-[17px] leading-[1.6] text-[rgba(243,236,224,0.6)]">
            Pas juste un site. Un système complet.
          </p>
        </RevealOnScroll>

        {/* Equation */}
        <RevealOnScroll className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mb-12">
          {/* Site */}
          <div className="bg-[rgba(243,236,224,0.06)] border border-[rgba(214,178,94,0.2)] rounded-2xl p-6 text-center min-w-[200px]">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[rgba(214,178,94,0.15)] flex items-center justify-center">
              <Globe className="w-7 h-7 text-gold-lighter" />
            </div>
            <div className="font-heading font-bold text-lg text-white mb-1">
              Site Pro
            </div>
            <div className="text-[13.5px] text-[rgba(243,236,224,0.55)]">
              Visible sur Google
            </div>
          </div>

          <Plus className="w-8 h-8 text-gold/50 flex-none" />

          {/* Qualification */}
          <div className="bg-[rgba(243,236,224,0.06)] border border-[rgba(214,178,94,0.2)] rounded-2xl p-6 text-center min-w-[200px]">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[rgba(214,178,94,0.15)] flex items-center justify-center">
              <Filter className="w-7 h-7 text-gold-lighter" />
            </div>
            <div className="font-heading font-bold text-lg text-white mb-1">
              Qualification
            </div>
            <div className="text-[13.5px] text-[rgba(243,236,224,0.55)]">
              Trie les curieux
            </div>
          </div>

          <Plus className="w-8 h-8 text-gold/50 flex-none" />

          {/* Automatisation */}
          <div className="bg-[rgba(243,236,224,0.06)] border border-[rgba(214,178,94,0.2)] rounded-2xl p-6 text-center min-w-[200px]">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[rgba(214,178,94,0.15)] flex items-center justify-center">
              <Zap className="w-7 h-7 text-gold-lighter" />
            </div>
            <div className="font-heading font-bold text-lg text-white mb-1">
              Automatisation
            </div>
            <div className="text-[13.5px] text-[rgba(243,236,224,0.55)]">
              Répond à votre place
            </div>
          </div>

          <Equal className="w-8 h-8 text-gold flex-none" />

          {/* Résultat */}
          <div className="bg-gold/15 border-2 border-gold/40 rounded-2xl p-6 text-center min-w-[220px]">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/20 flex items-center justify-center">
              <Rocket className="w-7 h-7 text-gold" />
            </div>
            <div className="font-heading font-bold text-lg text-gold mb-1">
              Système qui travaille
            </div>
            <div className="text-[13.5px] text-gold/70">
              Clients qualifiés sur WhatsApp
            </div>
          </div>
        </RevealOnScroll>

        {/* Result description */}
        <RevealOnScroll className="text-center max-w-[600px] mx-auto">
          <p className="text-[17px] leading-[1.7] text-[rgba(243,236,224,0.7)]">
            Le client arrive sur WhatsApp avec{" "}
            <span className="text-gold-lighter font-semibold">ce qu&apos;il veut</span>,{" "}
            <span className="text-gold-lighter font-semibold">son budget</span> et{" "}
            <span className="text-gold-lighter font-semibold">ses coordonnées</span>.
            <br />
            Vous ne parlez qu&apos;aux clients prêts à acheter.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
