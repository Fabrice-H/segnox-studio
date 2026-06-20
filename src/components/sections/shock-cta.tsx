import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { WHATSAPP_LINKS } from "@/lib/constants";

export function ShockCtaSection() {
  return (
    <section className="relative bg-dark overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[300px] bg-[radial-gradient(ellipse,rgba(214,178,94,0.12)_0%,transparent_70%)] blur-[30px] animate-glow pointer-events-none" />

      <RevealOnScroll className="relative max-w-[820px] mx-auto px-6 py-20 text-center">
        <h2 className="font-heading font-extrabold text-[clamp(24px,4vw,40px)] leading-[1.2] tracking-[-0.02em] text-white mb-4 text-balance">
          Un client qui ne vous trouve pas ne vous écrira jamais.
        </h2>
        <p className="mx-auto max-w-[540px] text-[17px] leading-[1.6] text-[rgba(243,236,224,0.62)] mb-[30px] text-pretty">
          Pendant que vous travaillez, d&apos;autres entreprises récupèrent les
          clients qui cherchaient vos services.
        </p>
        <Link
          href={WHATSAPP_LINKS.presencePro}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[9px] bg-gold-light text-dark no-underline font-heading font-bold text-[15.5px] py-[15px] px-7 rounded-[11px] hover:bg-[#dcb15a] transition-colors"
        >
          Voir comment avoir une présence professionnelle
        </Link>
      </RevealOnScroll>
    </section>
  );
}
