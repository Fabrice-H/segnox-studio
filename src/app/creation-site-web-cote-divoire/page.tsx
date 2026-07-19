import type { Metadata } from "next";
import Link from "next/link";
import { Check, Globe, Clock, Star, ArrowRight, Users } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/seo";
import { WHATSAPP_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Création de Site Web en Côte d'Ivoire | Développeur Web Professionnel",
  description:
    "Développeur web en Côte d'Ivoire. Création de sites web professionnels pour PME, artisans et commerçants ivoiriens. Visible sur Google, paiement Mobile Money. Diagnostic gratuit.",
  keywords: [
    "création site web Côte d'Ivoire",
    "création site web cote d ivoire",
    "développeur web Côte d'Ivoire",
    "site internet Côte d'Ivoire",
    "site web professionnel Côte d'Ivoire",
    "agence web Côte d'Ivoire",
    "créer site web Côte d'Ivoire",
    "site vitrine Côte d'Ivoire",
    "site web PME Côte d'Ivoire",
    "développeur freelance Côte d'Ivoire",
    "création site internet Côte d'Ivoire",
    "site web Abidjan",
  ],
  alternates: {
    canonical: `${siteConfig.url}/creation-site-web-cote-divoire`,
  },
  openGraph: {
    title: "Création de Site Web en Côte d'Ivoire | SEGNOX Studio",
    description:
      "Développeur web en Côte d'Ivoire. Sites pros qui trient vos clients et vous font gagner du temps. Diagnostic gratuit sur WhatsApp.",
    url: `${siteConfig.url}/creation-site-web-cote-divoire`,
    siteName: siteConfig.name,
    locale: "fr_CI",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Création de site web en Côte d'Ivoire - SEGNOX Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de Site Web en Côte d'Ivoire | SEGNOX Studio",
    description:
      "Développeur web en Côte d'Ivoire. Sites pros qui trient vos clients.",
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
    "@id": `${siteConfig.url}/creation-site-web-cote-divoire#service`,
    name: "Création de Site Web en Côte d'Ivoire",
    description:
      "Service de création de sites web professionnels en Côte d'Ivoire. Sites vitrines, sites e-commerce, optimisation SEO pour les entreprises ivoiriennes.",
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
      "@type": "Country",
      name: "Côte d'Ivoire",
      alternateName: ["Ivory Coast", "Cote d'Ivoire"],
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

const cities = [
  "Abidjan",
  "Bouaké",
  "Daloa",
  "Yamoussoukro",
  "San-Pédro",
  "Korhogo",
  "Man",
  "Gagnoa",
];

const problems = [
  {
    problem: "Invisible sur Google",
    solution: "Site optimisé pour apparaître dans les résultats de recherche",
  },
  {
    problem: "Clients pas sérieux",
    solution: "Formulaire intelligent qui filtre les curieux",
  },
  {
    problem: "Image pas professionnelle",
    solution: "Site moderne qui inspire confiance",
  },
  {
    problem: "Pas de temps à perdre",
    solution: "Système automatisé qui travaille pour vous 24/7",
  },
];

const stats = [
  { value: "90%", label: "des Ivoiriens sur mobile" },
  { value: "3-7", label: "jours pour votre site" },
  { value: "5/5", label: "avis clients" },
  { value: "24/7", label: "votre site travaille" },
];

export default function CreationSiteWebCoteDIvoire() {
  return (
    <>
      <LocalPageJsonLd />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-dark overflow-hidden">
          <div className="absolute -top-[140px] -right-[100px] w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(214,178,94,0.18)_0%,rgba(214,178,94,0.05)_45%,transparent_70%)] blur-[20px] pointer-events-none" />

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
                <li className="text-gold">
                  Création site web Côte d&apos;Ivoire
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-2 text-gold-lighter mb-5">
              <Globe size={16} />
              <span className="font-heading font-bold text-[13px] tracking-[0.16em] uppercase">
                Développeur Web · Côte d&apos;Ivoire
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[clamp(31px,4.3vw,50px)] leading-[1.1] tracking-[-0.02em] text-white mb-[22px] max-w-[850px]">
              Création de Site Web en Côte d&apos;Ivoire : Transformez Vos
              Visiteurs en Clients
            </h1>

            <p className="text-[17px] leading-[1.7] text-[rgba(243,236,224,0.75)] mb-6 max-w-[640px]">
              Vous êtes en Côte d&apos;Ivoire et vous perdez des clients parce
              qu&apos;ils ne vous trouvent pas sur Google ? Je crée des sites
              web professionnels adaptés au marché ivoirien.
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

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[rgba(214,178,94,0.2)]">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-extrabold text-3xl text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[rgba(243,236,224,0.6)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="bg-cream py-[72px]">
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-text-primary mb-4 text-center">
              Les problèmes des entreprises ivoiriennes en ligne
            </h2>
            <p className="text-center text-text-muted mb-12 max-w-[600px] mx-auto">
              Vous vous reconnaissez ? Je résous ces problèmes chaque semaine
              pour des PME en Côte d&apos;Ivoire.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((item) => (
                <div
                  key={item.problem}
                  className="bg-white rounded-xl p-6 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-500 text-lg">✗</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-text-primary mb-1">
                        {item.problem}
                      </h3>
                      <div className="flex items-start gap-2 text-text-secondary">
                        <Check
                          size={16}
                          className="flex-none mt-1 text-green-500"
                        />
                        <span>{item.solution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="bg-white py-[72px] border-t border-border">
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-text-primary mb-4 text-center">
              Sites web pour toute la Côte d&apos;Ivoire
            </h2>
            <p className="text-center text-text-muted mb-12 max-w-[600px] mx-auto">
              Basé à Abidjan, je travaille avec des clients dans toute la Côte
              d&apos;Ivoire. Tout se fait à distance via WhatsApp.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 bg-cream rounded-full py-3 px-6 border border-border"
                >
                  <Users size={16} className="text-gold" />
                  <span className="font-heading font-semibold text-text-primary">
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Me Section */}
        <section className="bg-cream py-[72px] border-t border-border">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-text-primary mb-4">
                  Pourquoi choisir un développeur ivoirien ?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="flex-none mt-1 text-gold"
                      strokeWidth={3}
                    />
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">
                        Je comprends le marché ivoirien
                      </strong>{" "}
                      — Mobile Money, WhatsApp, réseaux sociaux locaux
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="flex-none mt-1 text-gold"
                      strokeWidth={3}
                    />
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">
                        Paiement en FCFA
                      </strong>{" "}
                      — Wave, Orange Money, carte bancaire, en plusieurs fois si
                      besoin
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="flex-none mt-1 text-gold"
                      strokeWidth={3}
                    />
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">
                        Communication directe
                      </strong>{" "}
                      — Pas d&apos;agence, pas de commercial, vous parlez au
                      développeur
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="flex-none mt-1 text-gold"
                      strokeWidth={3}
                    />
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">
                        Même fuseau horaire
                      </strong>{" "}
                      — Réponses rapides, pas de décalage avec l&apos;Europe
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-dark rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-gold">
                      FS
                    </span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-lg">
                      Fabrice Segnon
                    </div>
                    <div className="text-[rgba(243,236,224,0.6)] text-sm">
                      Développeur Web · Abidjan
                    </div>
                  </div>
                </div>
                <p className="text-[rgba(243,236,224,0.75)] text-[15px] leading-relaxed mb-6">
                  &ldquo;Je crée des sites pour les entrepreneurs ivoiriens qui
                  veulent arrêter de perdre des clients. Pas de jargon, pas de
                  promesses en l&apos;air. Juste des systèmes qui marchent.&rdquo;
                </p>
                <div className="flex items-center gap-2 text-gold text-sm">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <span className="text-[rgba(243,236,224,0.6)] ml-2">
                    5/5 sur Google
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dark py-[72px]">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="font-heading font-extrabold text-[clamp(26px,3.5vw,38px)] leading-[1.15] tracking-[-0.02em] text-white mb-4">
              Prêt à avoir un site web qui travaille pour vous ?
            </h2>
            <p className="text-[rgba(243,236,224,0.75)] mb-8 max-w-[500px] mx-auto">
              En 10 minutes sur WhatsApp, je vous dis si je peux vous aider et
              comment. Pas d&apos;engagement, pas de surprises.
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
              Réponse directe de Fabrice. Pas d&apos;un bot.
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
                href="/agence-web-abidjan"
                className="text-gold-dark hover:text-gold transition-colors underline"
              >
                Agence web à Abidjan
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
