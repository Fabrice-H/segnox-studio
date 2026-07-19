import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  X,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Users,
  Zap,
  MessageCircle,
  CreditCard,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/seo";
import { WHATSAPP_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Agence Web Abidjan | Création de Site Internet Professionnel | SEGNOX",
  description:
    "Vous cherchez une agence web à Abidjan ? SEGNOX Studio : développeur web indépendant, plus rapide et moins cher qu'une agence. Sites pros, visibles sur Google. Diagnostic gratuit.",
  keywords: [
    "agence web Abidjan",
    "agence web Abidjan Côte d'Ivoire",
    "agence digitale Abidjan",
    "agence création site web Abidjan",
    "meilleure agence web Abidjan",
    "agence site internet Abidjan",
    "agence web Cocody",
    "agence web Plateau Abidjan",
    "création site web Abidjan",
    "développeur web Abidjan",
    "site internet Abidjan",
    "agence communication digitale Abidjan",
  ],
  alternates: {
    canonical: `${siteConfig.url}/agence-web-abidjan`,
  },
  openGraph: {
    title: "Agence Web Abidjan | Création Site Internet | SEGNOX Studio",
    description:
      "Alternative aux agences web à Abidjan. Développeur indépendant : plus rapide, moins cher, même qualité. Diagnostic gratuit sur WhatsApp.",
    url: `${siteConfig.url}/agence-web-abidjan`,
    siteName: siteConfig.name,
    locale: "fr_CI",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Agence web Abidjan - SEGNOX Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence Web Abidjan | SEGNOX Studio",
    description:
      "Alternative aux agences web à Abidjan. Plus rapide, moins cher.",
    images: [siteConfig.ogImage],
  },
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z" />
    </svg>
  );
}

// JSON-LD spécifique pour cette page
function LocalPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/agence-web-abidjan#service`,
    name: "SEGNOX Studio - Alternative Agence Web Abidjan",
    alternateName: "Agence Web Abidjan",
    description:
      "SEGNOX Studio est une alternative aux agences web traditionnelles à Abidjan. Développeur web indépendant offrant création de sites internet, SEO et marketing digital.",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abidjan",
        addressRegion: "Lagunes",
        addressCountry: "CI",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 5.3599517,
        longitude: -4.0082563,
      },
      priceRange: "$$",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Abidjan",
      },
      {
        "@type": "AdministrativeArea",
        name: "Cocody",
      },
      {
        "@type": "AdministrativeArea",
        name: "Plateau",
      },
      {
        "@type": "AdministrativeArea",
        name: "Marcory",
      },
    ],
    serviceType: [
      "Création de site web",
      "Développement web",
      "SEO",
      "Marketing digital",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de création web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Site web professionnel",
            description: "Création de site vitrine optimisé SEO",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Site e-commerce",
            description: "Boutique en ligne avec paiement Mobile Money",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

const comparisonData = [
  {
    feature: "Interlocuteur",
    agency: "Commercial puis chef de projet puis développeur",
    segnox: "Une seule personne : Fabrice",
  },
  {
    feature: "Délai de livraison",
    agency: "2 à 4 semaines minimum",
    segnox: "3 à 7 jours",
  },
  {
    feature: "Communication",
    agency: "Emails, réunions planifiées",
    segnox: "WhatsApp direct, réponse rapide",
  },
  {
    feature: "Prix",
    agency: "Frais de structure élevés",
    segnox: "Prix justes, sans intermédiaire",
  },
  {
    feature: "Paiement",
    agency: "Virement bancaire uniquement",
    segnox: "Wave, Orange Money, carte, plusieurs fois",
  },
  {
    feature: "Flexibilité",
    agency: "Process rigides",
    segnox: "Adaptation à vos besoins",
  },
];

const advantages = [
  {
    icon: MessageCircle,
    title: "Communication directe",
    description:
      "Vous parlez directement au développeur sur WhatsApp. Pas de commercial, pas de chef de projet.",
  },
  {
    icon: Zap,
    title: "Livraison rapide",
    description:
      "Votre site en ligne en 3 à 7 jours. Pas de process bureaucratiques qui rallongent les délais.",
  },
  {
    icon: CreditCard,
    title: "Paiement flexible",
    description:
      "Wave, Orange Money, carte bancaire. Paiement en plusieurs fois possible.",
  },
  {
    icon: Users,
    title: "Service personnalisé",
    description:
      "Chaque projet est unique. Je m'adapte à vos besoins, pas l'inverse.",
  },
];

const quartiers = [
  "Cocody",
  "Plateau",
  "Marcory",
  "Treichville",
  "Yopougon",
  "Adjamé",
  "Koumassi",
  "Abobo",
];

export default function AgenceWebAbidjan() {
  return (
    <>
      <LocalPageJsonLd />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-dark overflow-hidden">
          <div className="absolute -top-[140px] -left-[100px] w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(214,178,94,0.18)_0%,rgba(214,178,94,0.05)_45%,transparent_70%)] blur-[20px] pointer-events-none" />

          <div className="max-w-[1120px] mx-auto px-6 py-[92px] pb-[84px] relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-[rgba(243,236,224,0.5)]">
                <li>
                  <Link href="/" className="hover:text-gold transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>/</li>
                <li className="text-gold">Agence web Abidjan</li>
              </ol>
            </nav>

            <div className="flex items-center gap-2 text-gold-lighter mb-5">
              <MapPin size={16} />
              <span className="font-heading font-bold text-[13px] tracking-[0.16em] uppercase">
                Alternative aux agences · Abidjan, Côte d&apos;Ivoire
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[clamp(31px,4.3vw,50px)] leading-[1.1] tracking-[-0.02em] text-white mb-[22px] max-w-[850px]">
              Agence Web à Abidjan ? Découvrez une Meilleure Alternative.
            </h1>

            <p className="text-[17px] leading-[1.7] text-[rgba(243,236,224,0.75)] mb-6 max-w-[640px]">
              Vous cherchez une <strong>agence web à Abidjan</strong> pour créer
              votre site ? Je vous propose mieux : un développeur web
              indépendant, plus rapide, moins cher, et tout aussi professionnel.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href={WHATSAPP_LINKS.apercu}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[9px] bg-whatsapp text-whatsapp-dark no-underline font-heading font-bold text-base py-[15px] px-[26px] rounded-[11px] hover:brightness-105 transition-all"
              >
                <WhatsAppIcon />
                Voir un aperçu gratuit
              </Link>
              <Link
                href="/#offres"
                className="inline-flex items-center gap-2 bg-transparent text-gold border border-gold/40 no-underline font-heading font-bold text-base py-[15px] px-[26px] rounded-[11px] hover:bg-gold/10 transition-all"
              >
                Voir les offres
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-[14px] text-[rgba(243,236,224,0.6)]">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gold" />
                <span>Site en ligne en 3-7 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-gold" />
                <span>5/5 sur Google</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-gold" />
                <span>Paiement Mobile Money</span>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="bg-cream py-[72px]">
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-text-primary mb-4 text-center">
              Agence web vs Développeur indépendant
            </h2>
            <p className="text-center text-text-muted mb-12 max-w-[600px] mx-auto">
              Pourquoi payer les frais de structure d&apos;une agence quand vous
              pouvez avoir le même résultat, plus vite et moins cher ?
            </p>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-dark text-white">
                <div className="p-4 font-heading font-bold text-sm"></div>
                <div className="p-4 font-heading font-bold text-sm text-center border-l border-[rgba(255,255,255,0.1)]">
                  Agence traditionnelle
                </div>
                <div className="p-4 font-heading font-bold text-sm text-center border-l border-[rgba(255,255,255,0.1)] bg-gold/20 text-gold">
                  SEGNOX Studio
                </div>
              </div>
              {comparisonData.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-cream" : "bg-white"}`}
                >
                  <div className="p-4 font-heading font-semibold text-sm text-text-primary">
                    {row.feature}
                  </div>
                  <div className="p-4 text-sm text-text-muted border-l border-border flex items-center gap-2">
                    <X size={16} className="flex-none text-red-400" />
                    {row.agency}
                  </div>
                  <div className="p-4 text-sm text-text-primary border-l border-border flex items-center gap-2 bg-gold/5">
                    <Check
                      size={16}
                      className="flex-none text-green-500"
                      strokeWidth={3}
                    />
                    {row.segnox}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="bg-white py-[72px] border-t border-border">
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-text-primary mb-4 text-center">
              Les avantages de travailler avec moi
            </h2>
            <p className="text-center text-text-muted mb-12 max-w-[600px] mx-auto">
              Pas de process compliqué. Pas de réunions interminables. Juste des
              résultats.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage) => (
                <div
                  key={advantage.title}
                  className="bg-cream rounded-xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <advantage.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-text-secondary text-[15px]">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="bg-cream py-[72px] border-t border-border">
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-text-primary mb-4 text-center">
              Création de sites web dans tout Abidjan
            </h2>
            <p className="text-center text-text-muted mb-12 max-w-[600px] mx-auto">
              Je travaille avec des clients dans tous les quartiers d&apos;Abidjan.
              Tout se fait à distance via WhatsApp.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {quartiers.map((quartier) => (
                <div
                  key={quartier}
                  className="flex items-center gap-2 bg-white rounded-full py-3 px-6 border border-border"
                >
                  <MapPin size={16} className="text-gold" />
                  <span className="font-heading font-semibold text-text-primary">
                    {quartier}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Am I Section */}
        <section className="bg-white py-[72px] border-t border-border">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-text-primary mb-4">
                  Qui suis-je ?
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Je suis <strong className="text-text-primary">Fabrice Segnon</strong>,
                    développeur web indépendant basé à Abidjan.
                  </p>
                  <p>
                    Avant de créer SEGNOX Studio, j&apos;ai travaillé sur des
                    plateformes e-commerce, des applications de gestion et des
                    projets dans le secteur bancaire.
                  </p>
                  <p>
                    Aujourd&apos;hui, j&apos;aide les PME et commerçants ivoiriens à
                    avoir une présence professionnelle en ligne, sans passer par
                    une agence coûteuse.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gold">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <span className="text-text-muted text-sm">
                    5/5 sur Google Business
                  </span>
                </div>
              </div>
              <div className="bg-dark rounded-2xl p-8">
                <blockquote className="text-[rgba(243,236,224,0.85)] text-lg leading-relaxed mb-6">
                  &ldquo;Avec une agence, j&apos;aurais attendu 3 semaines et payé le
                  double. Fabrice a livré mon site en 5 jours, exactement comme
                  je le voulais.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="font-heading font-bold text-gold">AK</span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white">
                      Amadou K.
                    </div>
                    <div className="text-[rgba(243,236,224,0.6)] text-sm">
                      Gérant de boutique, Cocody
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dark py-[72px]">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-white mb-4">
              Prêt à avoir votre site sans passer par une agence ?
            </h2>
            <p className="text-[rgba(243,236,224,0.75)] mb-8 max-w-[500px] mx-auto">
              En 10 minutes sur WhatsApp, je vous dis si je peux vous aider.
              Diagnostic gratuit, sans engagement.
            </p>

            <Link
              href={WHATSAPP_LINKS.diagnostic}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[9px] bg-whatsapp text-whatsapp-dark no-underline font-heading font-bold text-lg py-[17px] px-[32px] rounded-[11px] hover:brightness-105 transition-all"
            >
              <WhatsAppIcon />
              Diagnostic gratuit sur WhatsApp
            </Link>

            <p className="text-[13px] text-[rgba(243,236,224,0.45)] mt-4">
              Réponse directe de Fabrice. Pas d&apos;un commercial.
            </p>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="bg-cream py-12 border-t border-border">
          <div className="max-w-[1120px] mx-auto px-6">
            <h3 className="font-heading font-bold text-lg text-text-primary mb-4">
              Voir aussi
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/creation-site-web-abidjan"
                className="text-gold-dark hover:text-gold transition-colors underline"
              >
                Création de site web à Abidjan
              </Link>
              <Link
                href="/creation-site-web-cote-divoire"
                className="text-gold-dark hover:text-gold transition-colors underline"
              >
                Création de site web en Côte d&apos;Ivoire
              </Link>
              <Link
                href="/#offres"
                className="text-gold-dark hover:text-gold transition-colors underline"
              >
                Nos offres et tarifs
              </Link>
              <Link
                href="/#faq"
                className="text-gold-dark hover:text-gold transition-colors underline"
              >
                Questions fréquentes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
