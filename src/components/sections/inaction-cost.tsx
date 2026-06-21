import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { INACTION_COSTS, WHATSAPP_LINKS } from "@/lib/constants";

function InactionCard({
  title,
  consequence,
  delay = 0,
}: {
  title: string;
  consequence: string;
  delay?: number;
}) {
  return (
    <RevealOnScroll
      delay={delay}
      className="bg-white border border-border-amber border-l-[3px] border-l-danger rounded-[14px] p-6"
    >
      <div className="font-heading font-bold text-[16.5px] leading-[1.4] text-text-primary">
        {title}
      </div>
      <div className="mt-2 text-[14.5px] leading-[1.45] text-danger font-semibold">
        → {consequence}
      </div>
    </RevealOnScroll>
  );
}

export function InactionCostSection() {
  return (
    <section className="bg-amber-bg border-t border-b border-border-amber">
      <div className="max-w-[1120px] mx-auto px-6 py-[72px]">
        {/* Header */}
        <RevealOnScroll className="max-w-[680px] mx-auto mb-10 text-center">
          <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-[-0.02em] text-text-primary text-balance">
            Ce que ça vous coûte de ne rien faire.
          </h2>
        </RevealOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INACTION_COSTS.map((cost, index) => (
            <InactionCard
              key={cost.title}
              title={cost.title}
              consequence={cost.consequence}
              delay={index * 70}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealOnScroll className="mt-[30px] text-center max-w-[760px] mx-auto">
          <p className="font-heading font-bold text-[clamp(17px,2.6vw,21px)] leading-[1.4] text-text-primary mb-[22px] text-balance">
            Pas de faux compte à rebours. Juste la vérité : chaque semaine sans
            présence pro est une semaine de clients perdus que vous ne
            récupérerez pas.
          </p>
          <Link
            href={WHATSAPP_LINKS.voirCeQuePeuxFaire}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[9px] bg-gold-light text-dark no-underline font-heading font-bold text-[15.5px] py-3.5 px-[26px] rounded-[11px] hover:bg-[#dcb15a] transition-colors"
          >
            Voir ce que je peux faire pour vous — gratuitement
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
