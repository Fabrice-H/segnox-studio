import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

export function QuoteSection() {
  return (
    <section className="relative bg-dark overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[340px] bg-[radial-gradient(ellipse,rgba(214,178,94,0.14)_0%,transparent_70%)] blur-[30px] animate-glow pointer-events-none" />

      <RevealOnScroll className="relative max-w-[900px] mx-auto px-6 py-[72px] text-center">
        <blockquote className="font-heading font-extrabold text-[clamp(24px,4vw,40px)] leading-[1.25] tracking-[-0.02em] text-white text-balance">
          Un site sans système de qualification,{" "}
          <span className="text-gold-lighter">
            c&apos;est une vitrine sans vendeur.
          </span>
        </blockquote>
      </RevealOnScroll>
    </section>
  );
}
