"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { WHATSAPP_LINKS, PIPELINE_LEADS } from "@/lib/constants";

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

function PipelineMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="relative bg-dark-card border border-[rgba(214,178,94,0.22)] rounded-2xl p-[22px] shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-[18px]">
        <div className="flex items-center gap-[9px]">
          <span className="w-[9px] h-[9px] rounded-full bg-whatsapp shadow-[0_0_0_4px_rgba(37,211,102,0.18)]" />
          <span className="font-semibold text-sm text-[#F3ECE0]">
            Demandes entrantes
          </span>
        </div>
        <span className="font-heading text-xs font-bold text-gold-lighter tracking-[0.08em]">
          EN DIRECT
        </span>
      </div>

      {/* Scan line */}
      <div className="relative h-[3px] rounded-[3px] bg-[rgba(214,178,94,0.14)] overflow-hidden mb-[18px]">
        <span className="absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-transparent via-[rgba(214,178,94,0.7)] to-transparent animate-scan" />
      </div>

      {/* Leads */}
      <div className="flex flex-col gap-3">
        {PIPELINE_LEADS.map((lead, index) => (
          <motion.div
            key={lead.initials}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
              delay: 0.3 + index * 0.4,
            }}
            className="bg-dark border border-[rgba(214,178,94,0.18)] rounded-xl p-[13px_14px] flex items-center gap-3"
          >
            <span className="flex-none w-[38px] h-[38px] rounded-[10px] bg-[rgba(214,178,94,0.14)] text-gold-lighter font-heading font-bold flex items-center justify-center text-sm">
              {lead.initials}
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-[#F3ECE0]">
                {lead.name}
              </div>
              <div className="text-[12.5px] text-[rgba(243,236,224,0.55)]">
                {lead.details}
              </div>
            </div>
            <span className="flex-none inline-flex items-center gap-[5px] bg-[rgba(214,178,94,0.14)] text-gold-lighter text-[11.5px] font-bold py-[5px] px-[9px] rounded-full">
              <Check size={12} strokeWidth={3} />
              Qualifié
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="relative bg-dark overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -top-[140px] -left-[100px] w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(214,178,94,0.18)_0%,rgba(214,178,94,0.05)_45%,transparent_70%)] blur-[20px] animate-glow pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-6 py-[92px] pb-[84px] relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        {/* Content */}
        <RevealOnScroll>
          <div className="font-heading font-bold text-[13px] tracking-[0.16em] uppercase text-gold-lighter mb-5">
            Sites &amp; présence pro · Abidjan
          </div>
          <h1 className="font-heading font-extrabold text-[clamp(31px,4.3vw,50px)] leading-[1.1] tracking-[-0.02em] text-white mb-[22px] text-balance">
            Vous êtes doué dans votre métier. Mais en ligne, personne ne le
            voit — et vos clients vont voir ailleurs.
          </h1>
          <p className="text-lg leading-[1.62] text-[rgba(243,236,224,0.66)] mb-3.5 max-w-[540px] text-pretty">
            Aujourd&apos;hui, beaucoup de clients cherchent un service sur Google
            avant de choisir. Sans présence claire, ils partent chez un
            concurrent qui paraît plus sérieux. Je vous crée un site simple et
            pro qui vous rend crédible — et transforme les curieux en vraies
            demandes.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-[30px]">
            <Link
              href={WHATSAPP_LINKS.sitePro}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-light text-dark no-underline font-heading font-bold text-base py-[15px] px-[26px] rounded-[11px] hover:bg-[#dcb15a] transition-colors"
            >
              Je veux mon site pro
            </Link>
            <Link
              href={WHATSAPP_LINKS.apercu}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[9px] bg-whatsapp text-whatsapp-dark no-underline font-heading font-bold text-base py-[15px] px-[26px] rounded-[11px] hover:brightness-105 transition-all"
            >
              <WhatsAppIcon />
              Recevoir un aperçu gratuit
            </Link>
          </div>
          <p className="text-[13.5px] text-[rgba(243,236,224,0.45)] mt-3.5">
            Réponse directe sur WhatsApp. Pas de formulaire à rallonge, pas
            d&apos;engagement.
          </p>
        </RevealOnScroll>

        {/* Pipeline mockup - hidden on mobile */}
        <div className="hidden lg:block">
          <PipelineMockup />
        </div>
      </div>
    </section>
  );
}
