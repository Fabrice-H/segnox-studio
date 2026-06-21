import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { IntegrationsSection } from "@/components/sections/integrations";
import { ProblemSection, TargetAudienceSection } from "@/components/sections/problem";
import { ServicesSection } from "@/components/sections/services";
import { SystemTabsSection } from "@/components/sections/system-tabs";
// import { RealisationsSection } from "@/components/sections/realisations";
import { StatsSection } from "@/components/sections/stats";
import { QuoteSection } from "@/components/sections/quote";
import { CalculatorSection } from "@/components/sections/calculator";
import { ShockCtaSection } from "@/components/sections/shock-cta";
import { InactionCostSection } from "@/components/sections/inaction-cost";
import { OffersSection } from "@/components/sections/offers";
import { StepsSection } from "@/components/sections/steps";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntegrationsSection />
        <ProblemSection />
        <TargetAudienceSection />
        <ServicesSection />
        <SystemTabsSection />
        {/* <RealisationsSection /> */}
        <StatsSection />
        <QuoteSection />
        <CalculatorSection />
        <ShockCtaSection />
        <InactionCostSection />
        <OffersSection />
        <StepsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
