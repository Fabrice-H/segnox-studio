import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { WHATSAPP_LINKS, GOOGLE_REVIEW_LINK } from "@/lib/constants";
import { siteConfig } from "@/lib/seo";

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
              {/* <li>
                <Link
                  href="#realisations"
                  className="text-[rgba(243,236,224,0.72)] no-underline text-[14.5px] hover:text-gold-lighter transition-colors"
                >
                  Réalisations
                </Link>
              </li> */}
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
              <li>
                <a
                  href={GOOGLE_REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgba(243,236,224,0.72)] no-underline text-[14.5px] hover:text-gold-lighter transition-colors inline-flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Laisser un avis
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgba(243,236,224,0.72)] no-underline text-[14.5px] hover:text-gold-lighter transition-colors inline-flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
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
