import type { Metadata } from 'next';

// Configuration centralisée du site
export const siteConfig = {
  name: 'SEGNOX Studio',
  shortName: 'SEGNOX',
  description:
    'Développeur web indépendant à Abidjan. Je crée des sites simples et pros qui trient vos clients et vous font gagner du temps. Diagnostic gratuit sur WhatsApp.',
  longDescription:
    "SEGNOX Studio est un studio digital indépendant à Abidjan, Côte d'Ivoire. Spécialisé dans la création de sites web professionnels pour PME, artisans, commerçants et prestataires de services. Sites qui trient vos clients, assistants IA 24/7, relances automatiques. Visible sur Google, paiement Mobile Money.",
  url: 'https://segnox-studio.com',
  ogImage: 'https://segnox-studio.com/og-image.png',
  author: 'Fabrice Segnon',
  phone: '+225 07 69 38 92 79',
  phoneFormatted: '+225 07 69 38 92 79',
  email: 'contact@segnox-studio.com',
  address: {
    street: '',
    city: 'Abidjan',
    region: 'Lagunes',
    postalCode: '',
    country: 'CI',
    countryName: "Côte d'Ivoire",
  },
  social: {
    whatsapp: 'https://wa.me/2250769389279',
    facebook: 'https://facebook.com/segnoxstudio',
    instagram: 'https://instagram.com/segnoxstudio',
    linkedin: 'https://www.linkedin.com/company/segnox-studio',
    googleReview: 'https://g.page/r/CeqPPydYugf8EAE/review',
    googleBusiness: 'https://g.page/r/CeqPPydYugf8EAE',
  },
  businessHours: {
    weekdays: '08:00-18:00',
    saturday: '09:00-14:00',
    sunday: 'Fermé',
  },
};

// Mots-clés SEO optimisés pour Abidjan et Côte d'Ivoire
const primaryKeywords = [
  // 10 mots-clés prioritaires
  'création site web Abidjan',
  'développeur web Abidjan',
  "site internet Côte d'Ivoire",
  'site web professionnel Abidjan',
  'site internet pour PME',
  'site internet pour commerçant',
  'être visible sur Google',
  'présence professionnelle sur internet',
  'site vitrine Abidjan',
  "développeur freelance Côte d'Ivoire",

  // Mots-clés création de site
  "création site internet Côte d'Ivoire",
  'création site vitrine Abidjan',
  'création site pour entreprise',

  // Mots-clés présence professionnelle
  'présence sur Google',
  'image professionnelle entreprise',

  // Secteurs - Immobilier
  'site web agence immobilière Abidjan',
  "site immobilier Côte d'Ivoire",

  // Secteurs - Automobile
  'site web vente voiture',
  'site garage automobile Abidjan',

  // Secteurs - Mode
  'site web boutique vêtements',
  'site web friperie',
  'site web prêt-à-porter',

  // Secteurs - Décoration
  'site décorateur intérieur',
  'site web décoration Abidjan',

  // Secteurs - Construction
  'site entreprise BTP',
  'site société de construction',

  // Secteurs - Restaurant
  'site restaurant Abidjan',

  // Mots-clés orientés problème
  'remplacer une page Facebook par un site web',
  'comment être visible sur Google',
  'comment avoir plus de clients sur internet',
  'comment donner une image professionnelle à son entreprise',
  'site web pour PME Afrique',
  'site internet pour commerçant Afrique',
  'comment recevoir plus de demandes WhatsApp',
  'comment présenter ses produits sur internet',
  "comment vendre sur internet en Côte d'Ivoire",

  // Mots-clés de marque
  'SEGNOX Studio',
  'SEGNOX',
  'Fabrice Segnon développeur',
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Création de site web à Abidjan — Développeur web Côte d'Ivoire | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: primaryKeywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph optimisé
  openGraph: {
    type: 'website',
    locale: 'fr_CI',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Création de site web à Abidjan — Développeur web professionnel | ${siteConfig.name}`,
    description: `${siteConfig.description} Sites qui trient vos clients et vous font gagner du temps. Devis gratuit.`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Création de sites web professionnels à Abidjan, Côte d'Ivoire`,
        type: 'image/png',
      },
      {
        url: `${siteConfig.url}/logo-v2.png`,
        width: 500,
        height: 500,
        alt: `Logo ${siteConfig.name}`,
        type: 'image/png',
      },
    ],
    countryName: siteConfig.address.countryName,
  },

  // Twitter Cards optimisé
  twitter: {
    card: 'summary_large_image',
    title: `Création de site web à Abidjan | ${siteConfig.name}`,
    description: `Développeur web indépendant à Abidjan. Sites pros qui trient vos clients. Diagnostic gratuit WhatsApp.`,
    images: [siteConfig.ogImage],
    creator: '@segnoxstudio',
    site: '@segnoxstudio',
  },

  // Robots optimisé
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Vérification Google
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  // URLs alternatives et canonical
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'fr-CI': siteConfig.url,
      'fr-FR': siteConfig.url,
      fr: siteConfig.url,
    },
  },

  // Catégorie
  category: 'technology',

  // Classification
  classification: 'Business',

  // Autres métadonnées importantes
  other: {
    'geo.region': 'CI-AB',
    'geo.placename': 'Abidjan',
    'geo.position': '5.3599517;-4.0082563',
    ICBM: '5.3599517, -4.0082563',
    'revisit-after': '7 days',
    rating: 'general',
    distribution: 'global',
    language: 'fr',
  },
};

// JSON-LD: LocalBusiness (le plus important pour SEO local)
export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.longDescription,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: [siteConfig.ogImage, `${siteConfig.url}/logo-v2.png`],
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo-v2.png`,
      width: 500,
      height: 500,
    },
    founder: {
      '@type': 'Person',
      name: siteConfig.author,
      jobTitle: 'Développeur Web Fullstack',
      url: siteConfig.url,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 5.3599517,
      longitude: -4.0082563,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: "Côte d'Ivoire",
        sameAs: 'https://fr.wikipedia.org/wiki/C%C3%B4te_d%27Ivoire',
      },
      {
        '@type': 'City',
        name: 'Abidjan',
        sameAs: 'https://fr.wikipedia.org/wiki/Abidjan',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Afrique francophone',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 5.3599517,
        longitude: -4.0082563,
      },
      geoRadius: '100000',
    },
    priceRange: '$$',
    currenciesAccepted: 'XOF, EUR',
    paymentAccepted: 'Wave, Orange Money, Carte bancaire, Virement',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      siteConfig.social.whatsapp,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.googleBusiness,
    ],
    knowsLanguage: ['fr', 'en'],
    slogan: 'Des systèmes qui transforment vos visiteurs en clients',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de création de sites web à Abidjan',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Offre Essentiel',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Site web Essentiel',
                description:
                  'Site clair et professionnel, visible sur Google, lien WhatsApp pré-rempli, mise en ligne en 3-7 jours',
                serviceType: 'Création de site web',
                areaServed: "Abidjan, Côte d'Ivoire",
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Offre Business',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Site web Business',
                description:
                  "Tout l'Essentiel + Assistant IA 24/7, relances automatiques, présence réseaux sociaux",
                serviceType: 'Création de site web avec automatisation',
                areaServed: "Abidjan, Côte d'Ivoire",
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Offre Complet',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Site web Complet',
                description:
                  'Tout Business + Paiements intégrés (Wave, Orange Money), campagnes pub, optimisation continue',
                serviceType: 'Création de site web e-commerce',
                areaServed: "Abidjan, Côte d'Ivoire",
              },
            },
          ],
        },
      ],
    },
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Diagnostic gratuit',
        description: 'Échange gratuit sur WhatsApp pour analyser vos besoins',
        price: '0',
        priceCurrency: 'XOF',
      },
      {
        '@type': 'Offer',
        name: 'Aperçu gratuit',
        description: 'Maquette gratuite de votre futur site',
        price: '0',
        priceCurrency: 'XOF',
      },
    ],
  };
}

// JSON-LD: WebSite avec SearchAction potentiel
export function generateWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#business`,
    },
    inLanguage: 'fr-CI',
  };
}

// JSON-LD: WebPage
export function generateWebPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: `Création de site web à Abidjan | ${siteConfig.name}`,
    description: siteConfig.description,
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    about: {
      '@id': `${siteConfig.url}/#business`,
    },
    inLanguage: 'fr-CI',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: siteConfig.url,
        },
      ],
    },
  };
}

// JSON-LD: FAQPage (très important pour les featured snippets)
export function generateFAQJsonLd() {
  const faqItems = [
    {
      question: "Combien coûte la création d'un site web à Abidjan ?",
      answer:
        'Chez SEGNOX Studio, on fixe le prix ensemble selon votre besoin réel. Pas de tarif fixe car chaque projet est différent. Paiement possible par Wave, Orange Money ou carte bancaire, en plusieurs fois si besoin. Diagnostic gratuit sur WhatsApp pour évaluer votre projet.',
    },
    {
      question: 'En combien de temps mon site web sera-t-il prêt ?',
      answer:
        'Une première version de votre site est généralement prête en 3 à 7 jours, selon la complexité du projet et la rapidité avec laquelle vous fournissez vos informations (textes, photos, etc.).',
    },
    {
      question: 'Êtes-vous une agence web à Abidjan ?',
      answer:
        "Non, SEGNOX Studio n'est pas une agence. Je suis Fabrice Segnon, développeur web indépendant basé à Abidjan. Vous parlez directement à la personne qui fait le travail — pas à un commercial. C'est plus simple, plus rapide, et souvent moins cher qu'une agence.",
    },
    {
      question: 'Pour qui créez-vous des sites web ?',
      answer:
        "Je crée des sites pour tous les professionnels qui ont des clients à convaincre : artisans, coachs, photographes, salons de coiffure, cliniques, garagistes, traiteurs, consultants, restaurants, boutiques, immobilier, écoles... Si on vous cherche sur Google ou si on vous contacte sur WhatsApp, c'est pour vous.",
    },
    {
      question: 'Mon site sera-t-il visible sur Google ?',
      answer:
        "Oui, tous mes sites sont optimisés pour le référencement Google (SEO). Votre site apparaîtra dans les résultats de recherche quand quelqu'un cherche vos services à Abidjan. Je m'occupe de tout : balises, vitesse, mobile-first, données structurées.",
    },
    {
      question: 'Puis-je payer par Mobile Money (Wave, Orange Money) ?',
      answer:
        "Absolument ! J'accepte Wave, Orange Money et les cartes bancaires. Le paiement peut aussi être fait en plusieurs fois selon votre situation. On en discute lors du diagnostic gratuit.",
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// JSON-LD: Organization avec avis
export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-v2.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'CI',
      availableLanguage: ['fr', 'en'],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '4',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

// JSON-LD: Service (pour les pages de services spécifiques)
export function generateServiceJsonLd(
  serviceName: string,
  serviceDescription: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/#service-${serviceName.toLowerCase().replace(/\s/g, '-')}`,
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@id': `${siteConfig.url}/#business`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Abidjan',
    },
    serviceType: 'Création de site web',
  };
}

// BreadcrumbList
export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
