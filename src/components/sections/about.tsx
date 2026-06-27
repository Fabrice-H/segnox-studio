import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { WHATSAPP_LINKS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="a-propos" className="bg-cream border-t border-border">
      <div className="max-w-[1120px] mx-auto px-6 py-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start">
          {/* Photo */}
          <RevealOnScroll className="relative mx-auto lg:mx-0">
            <div className="relative w-[280px] h-[350px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(45,38,20,0.15)]">
              <Image
                src="/fabrice-segnon.png"
                alt="Fabrice Segnon - Fondateur de SEGNOX Studio"
                fill
                className="object-cover object-top"
                sizes="280px"
                priority
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 w-[280px] h-[350px] rounded-2xl border-2 border-gold/30 -z-10" />
          </RevealOnScroll>

          {/* Content */}
          <RevealOnScroll delay={100} className="lg:pt-4">
            <p className="text-[13px] font-bold tracking-wider uppercase text-gold-dark mb-3">
              Vous ne parlerez qu&apos;à une seule personne.
            </p>

            <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,36px)] leading-[1.15] tracking-[-0.02em] text-text-primary mb-6">
              Je m&apos;appelle Fabrice Segnon.
            </h2>

            <div className="space-y-4 text-[16px] leading-[1.7] text-text-secondary">
              <p>
                Depuis plusieurs années, je développe des applications web et
                mobiles pour des banques, des entreprises et des organisations
                en Côte d&apos;Ivoire.
              </p>

              <p>
                Au fil de ces expériences, j&apos;ai remarqué une chose.
              </p>

              <p>
                Beaucoup de petites entreprises travaillent très bien. Mais
                lorsqu&apos;un client les cherche sur Internet, elles sont
                souvent difficiles à trouver, leur image manque de crédibilité
                ou elles passent leurs journées à répondre aux mêmes questions
                sur WhatsApp.
              </p>

              <p>
                J&apos;ai créé{" "}
                <span className="font-semibold text-text-primary">
                  SEGNOX Studio
                </span>{" "}
                pour résoudre ce problème.
              </p>

              <p>
                Mon objectif est simple : concevoir des sites web modernes qui
                mettent votre activité en valeur, inspirent confiance et vous
                aident à recevoir davantage de demandes.
              </p>

              <p>
                Je travaille directement avec vous, de la première discussion
                jusqu&apos;à la mise en ligne.{" "}
                <span className="font-medium text-text-primary">
                  Pas d&apos;intermédiaire. Pas de commercial.
                </span>{" "}
                Juste un développeur qui comprend les enjeux techniques, mais
                surtout les besoins des entreprises.
              </p>
            </div>

            {/* Credibility line */}
            <div className="mt-8 p-5 bg-white rounded-xl border border-border">
              <p className="text-[14.5px] leading-[1.6] text-text-muted italic">
                « Avant de créer SEGNOX Studio, j&apos;ai participé au
                développement de plateformes bancaires, d&apos;applications
                métier, de solutions e-commerce et de sites institutionnels.
                Aujourd&apos;hui, j&apos;applique cette même exigence pour aider
                les PME à développer leur présence en ligne. »
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href={WHATSAPP_LINKS.diagnostic}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold-light text-dark no-underline font-heading font-bold text-[15px] py-3.5 px-7 rounded-[10px] hover:bg-[#dcb15a] transition-colors"
              >
                Discuter de votre projet
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
