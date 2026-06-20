import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { WHATSAPP_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-dark-footer">
      <div className="max-w-[1120px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1 lg:pr-8">
            <div className="mb-4">
              <Logo variant="dark" size="sm" />
            </div>
            <p className="text-[14.5px] leading-relaxed text-[rgba(243,236,224,0.5)] max-w-[300px]">
              Je conçois des sites simples et pros pour les petites entreprises
              d&apos;Abidjan — crédibles, visibles, et qui transforment les curieux en
              clients.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <div className="font-heading font-bold text-[13px] tracking-[0.1em] uppercase text-[rgba(243,236,224,0.45)] mb-4">
              Solutions
            </div>
            <ul className="space-y-[11px]">
              <li>
                <Link
                  href="#solutions"
                  className="text-[rgba(243,236,224,0.72)] no-underline text-[14.5px] hover:text-gold-lighter transition-colors"
                >
                  Site qui qualifie
                </Link>
              </li>
              <li>
                <Link
                  href="#solutions"
                  className="text-[rgba(243,236,224,0.72)] no-underline text-[14.5px] hover:text-gold-lighter transition-colors"
                >
                  Assistant IA 24/7
                </Link>
              </li>
              <li>
                <Link
                  href="#solutions"
                  className="text-[rgba(243,236,224,0.72)] no-underline text-[14.5px] hover:text-gold-lighter transition-colors"
                >
                  Automatisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Explorer */}
          <div>
            <div className="font-heading font-bold text-[13px] tracking-[0.1em] uppercase text-[rgba(243,236,224,0.45)] mb-4">
              Explorer
            </div>
            <ul className="space-y-[11px]">
              <li>
                <Link
                  href="#realisations"
                  className="text-[rgba(243,236,224,0.72)] no-underline text-[14.5px] hover:text-gold-lighter transition-colors"
                >
                  Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="#offres"
                  className="text-[rgba(243,236,224,0.72)] no-underline text-[14.5px] hover:text-gold-lighter transition-colors"
                >
                  Offres
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-[rgba(243,236,224,0.72)] no-underline text-[14.5px] hover:text-gold-lighter transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-heading font-bold text-[13px] tracking-[0.1em] uppercase text-[rgba(243,236,224,0.45)] mb-4">
              Contact
            </div>
            <ul className="space-y-[11px]">
              <li>
                <a
                  href={WHATSAPP_LINKS.default}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whatsapp no-underline text-[14.5px] font-semibold hover:opacity-85 transition-opacity"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link
                  href="#diagnostic"
                  className="text-[rgba(243,236,224,0.72)] no-underline text-[14.5px] hover:text-gold-lighter transition-colors"
                >
                  Diagnostic gratuit
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1120px] mx-auto px-6 py-6 border-t border-[rgba(214,178,94,0.1)]">
        <div className="flex flex-wrap justify-between gap-3 text-[13px] text-[rgba(243,236,224,0.4)]">
          <span>&copy; 2026 SEGNOX Studio. Tous droits réservés.</span>
          <span>Abidjan · Afrique francophone</span>
        </div>
      </div>
    </footer>
  );
}
