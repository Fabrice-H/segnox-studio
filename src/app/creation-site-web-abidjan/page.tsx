import type { Metadata } from "next";
import Link from "next/link";
import { Check, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/seo";
import { WHATSAPP_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Création de Site Web à Abidjan | Développeur Web Professionnel",
  description:
    "Développeur web indépendant à Abidjan. Création de sites web professionnels pour PME, artisans et commerçants. Visible sur Google, formulaire WhatsApp intelligent. Diagnostic gratuit.",
  keywords: [
    "création site web Abidjan",
    "développeur web Abidjan",
    "site internet Abidjan",
    "site web professionnel Abidjan",
    "agence web Abidjan",
    "créer site web Abidjan",
    "site vitrine Abidjan",
    "site web PME Abidjan",
    "développeur freelance Abidjan",
    "création site internet Abidjan",
  ],
  alternates: {
    canonical: `${siteConfig.url}/creation-site-web-abidjan`,
  },
  openGraph: {
    title: "Création de Site Web à Abidjan | SEGNOX Studio",
    description:
      "Développeur web indépendant à Abidjan. Sites pros qui trient vos clients et vous font gagner du temps. Diagnostic gratuit sur WhatsApp.",
    url: `${siteConfig.url}/creation-site-web-abidjan`,
    siteName: siteConfig.name,
    locale: "fr_CI",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Création de site web à Abidjan - SEGNOX Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de Site Web à Abidjan | SEGNOX Studio",
    description:
      "Développeur web indépendant à Abidjan. Sites pros qui trient vos clients.",
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
    "@type": "Service",
    "@id": `${siteConfig.url}/creation-site-web-abidjan#service`,
    name: "Création de Site Web à Abidjan",
    description:
      "Service de création de sites web professionnels à Abidjan, Côte d'Ivoire. Sites vitrines, sites e-commerce, optimisation SEO, formulaires intelligents WhatsApp.",
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
    },
    areaServed: {
      "@type": "City",
      name: "Abidjan",
      containedInPlace: {
        "@type": "Country",
        name: "Côte d'Ivoire",
      },
    },
    serviceType: "Création de site web",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "XOF",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

const sectors = [
  { name: "Immobilier", icon: "🏠" },
  { name: "Automobile", icon: "🚗" },
  { name: "Mode & Boutique", icon: "👗" },
  { name: "Restaurant", icon: "🍽️" },
  { name: "Salon de coiffure", icon: "💇" },
  { name: "Artisan", icon: "🔧" },
  { name: "Coach & Consultant", icon: "📊" },
  { name: "Clinique & Santé", icon: "🏥" },
];

const benefits = [
  {
    title: "Visible sur Google à Abidjan",
    description:
      "Quand vos clients cherchent vos services à Abidjan, ils vous trouvent en premier.",
  },
  {
    title: "Formulaire WhatsApp intelligent",
    description:
      "Fini les curieux. Seuls les clients sérieux arrivent sur votre WhatsApp, avec toutes les infos.",
  },
  {
    title: "Site rapide et mobile",
    description:
      "90% des Ivoiriens naviguent sur mobile. Votre site s'adapte parfaitement.",
  },
  {
    title: "Paiement Mobile Money",
    description:
      "Payez par Wave, Orange Money ou carte. En plusieurs fois si besoin.",
  },
];

export default function CreationSiteWebAbidjan() {
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
                <li className="text-gold">Création site web Abidjan</li>
              </ol>
            </nav>

            <div className="flex items-center gap-2 text-gold-lighter mb-5">
              <MapPin size={16} />
              <span className="font-heading font-bold text-[13px] tracking-[0.16em] uppercase">
                Développeur Web · Abidjan, Côte d&apos;Ivoire
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[clamp(31px,4.3vw,50px)] leading-[1.1] tracking-[-0.02em] text-white mb-[22px] max-w-[800px]">
              Création de Site Web à Abidjan : Soyez Visible sur Google
            </h1>

            <p className="text-[17px] leading-[1.7] text-[rgba(243,236,224,0.75)] mb-6 max-w-[640px]">
              Vous êtes à Abidjan et vos clients ne vous trouvent pas sur
              Google ? Je crée des sites web professionnels qui attirent,
              trient et convertissent vos visiteurs en clients qualifiés.
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

        {/* Benefits Section */}
        <section className="bg-cream py-[72px]">
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-text-primary mb-4 text-center">
              Pourquoi créer votre site web à Abidjan avec moi ?
            </h2>
            <p className="text-center text-text-muted mb-12 max-w-[600px] mx-auto">
              Je suis Fabrice Segnon, développeur web indépendant basé à
              Abidjan. Pas une agence, pas un commercial. Vous parlez
              directement à la personne qui fait le travail.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white rounded-xl p-6 border border-border"
                >
                  <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-[15px]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="bg-white py-[72px] border-t border-border">
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-text-primary mb-4 text-center">
              Création de sites web pour tous les secteurs à Abidjan
            </h2>
            <p className="text-center text-text-muted mb-12 max-w-[600px] mx-auto">
              Immobilier, automobile, mode, restauration, artisanat... Si vous
              avez des clients à convaincre à Abidjan, je crée votre site.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sectors.map((sector) => (
                <div
                  key={sector.name}
                  className="bg-cream rounded-xl p-5 text-center border border-border hover:border-gold/50 transition-colors"
                >
                  <span className="text-3xl mb-2 block">{sector.icon}</span>
                  <span className="font-heading font-semibold text-text-primary">
                    {sector.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dark py-[72px]">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-white mb-4">
              Prêt à être visible sur Google à Abidjan ?
            </h2>
            <p className="text-[rgba(243,236,224,0.75)] mb-8 max-w-[500px] mx-auto">
              Discutons de votre projet. En 10 minutes sur WhatsApp, je vous
              dis si je peux vous aider et comment.
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
              Pas d&apos;engagement. Réponse directe.
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
                href="/agence-web-abidjan"
                className="text-gold-dark hover:text-gold transition-colors underline"
              >
                Agence web à Abidjan
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
