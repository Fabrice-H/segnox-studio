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
