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
                Je suis développeur web et fondateur de{" "}
                <span className="font-semibold text-text-primary">
                  SEGNOX Studio
                </span>.
              </p>

              <p>
                Avant de lancer le studio, j&apos;ai travaillé sur des
                plateformes e-commerce, des applications de gestion, des projets
                institutionnels et, aujourd&apos;hui, sur des applications
                internes dans le secteur bancaire.
              </p>

              <p>
                Une chose m&apos;a marqué : beaucoup d&apos;entreprises
                travaillent très bien, mais leur présence en ligne ne leur
                permet pas d&apos;être perçues à leur juste valeur.
              </p>

              <p>
                C&apos;est cette conviction qui a donné naissance à{" "}
                <span className="font-semibold text-text-primary">
                  SEGNOX Studio
                </span>.
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
                développement de plateformes e-commerce, d&apos;applications
                métier et de solutions utilisées par des entreprises et des
                institutions. Aujourd&apos;hui, je mets cette expérience au
                service des PME qui veulent développer leur présence en ligne. »
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
