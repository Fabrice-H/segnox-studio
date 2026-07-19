import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SystemEquationSection } from "@/components/sections/system-equation";
import { ServicesSection } from "@/components/sections/services";
import { QuoteSection } from "@/components/sections/quote";
import { CalculatorSection } from "@/components/sections/calculator";
import { InactionCostSection } from "@/components/sections/inaction-cost";
import { OffersSection } from "@/components/sections/offers";
import { StepsSection } from "@/components/sections/steps";
import { AboutSection } from "@/components/sections/about";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/seo";

// Métadonnées optimisées pour la page d'accueil
export const metadata: Metadata = {
  title: {
    absolute: `Création de Site Web à Abidjan | Développeur Web Côte d'Ivoire | ${siteConfig.name}`,
  },
  description:
    "Développeur web indépendant à Abidjan. Création de sites web professionnels pour PME, artisans et commerçants en Côte d'Ivoire. Visible sur Google, formulaire WhatsApp intelligent, paiement Mobile Money. Diagnostic gratuit.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SystemEquationSection />
        <ServicesSection />
        <QuoteSection />
        <CalculatorSection />
        <InactionCostSection />
        <OffersSection />
        <StepsSection />
        <AboutSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
