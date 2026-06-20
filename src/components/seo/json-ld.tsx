import {
  generateLocalBusinessJsonLd,
  generateWebSiteJsonLd,
  generateWebPageJsonLd,
  generateFAQJsonLd,
  generateOrganizationJsonLd,
} from "@/lib/seo";

export function JsonLd() {
  const localBusiness = generateLocalBusinessJsonLd();
  const webSite = generateWebSiteJsonLd();
  const webPage = generateWebPageJsonLd();
  const faq = generateFAQJsonLd();
  const organization = generateOrganizationJsonLd();

  return (
    <>
      {/* LocalBusiness - Le plus important pour le SEO local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness),
        }}
      />

      {/* WebSite - Informations sur le site web */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSite),
        }}
      />

      {/* WebPage - Informations sur la page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPage),
        }}
      />

      {/* FAQPage - Questions fréquentes (featured snippets) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq),
        }}
      />

      {/* Organization - Informations entreprise + avis */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />
    </>
  );
}
