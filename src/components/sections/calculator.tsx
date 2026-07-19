"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { WHATSAPP_LINKS } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z" />
    </svg>
  );
}

export function CalculatorSection() {
  const [msgs, setMsgs] = useState(30);
  const [mins, setMins] = useState(3);

  const hoursWeek = Math.round((msgs * mins * 6) / 60);
  const hoursMonth = hoursWeek * 4;

  return (
    <section className="max-w-[1120px] mx-auto px-6 py-[72px]">
      {/* Header */}
      <RevealOnScroll className="text-center max-w-[680px] mx-auto mb-10">
        <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-[-0.02em] text-text-primary text-balance">
          Combien d&apos;heures vous perdez par semaine ?
        </h2>
      </RevealOnScroll>

      <RevealOnScroll className="bg-white border border-border rounded-[18px] shadow-[0_6px_24px_rgba(45,38,20,0.06)] p-11 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Sliders */}
        <div className="flex flex-col gap-[34px]">
          {/* Messages slider */}
          <div>
            <div className="flex justify-between items-baseline mb-3.5">
              <label className="font-semibold text-[15.5px] text-text-primary">
                Messages répétitifs / jour
              </label>
              <span className="font-heading font-extrabold text-xl text-gold">
                {msgs}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={120}
              step={1}
              value={msgs}
              onChange={(e) => setMsgs(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Minutes slider */}
          <div>
            <div className="flex justify-between items-baseline mb-3.5">
              <label className="font-semibold text-[15.5px] text-text-primary">
                Minutes par message
              </label>
              <span className="font-heading font-extrabold text-xl text-gold">
                {mins}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={15}
              step={1}
              value={mins}
              onChange={(e) => setMins(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        {/* Results */}
        <div className="text-center border-l-0 lg:border-l border-border pl-0 lg:pl-12">
          <div className="font-heading font-extrabold text-[clamp(44px,7vw,68px)] leading-none text-gold">
            {hoursWeek} h
          </div>
          <div className="text-base text-text-secondary mt-2">
            perdues par semaine
          </div>
          <div className="text-[15px] text-text-muted mt-1">
            ≈ {hoursMonth} h par mois
          </div>

          <div className="mt-5 inline-block bg-gold/12 border border-gold/30 rounded-full py-2 px-[18px] font-bold text-sm text-gold-dark">
            ~60 % récupérables
          </div>

          <div className="mt-6">
            <Link
              href={WHATSAPP_LINKS.recupererTemps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[9px] bg-whatsapp text-whatsapp-dark no-underline font-heading font-bold text-[15px] py-[13px] px-6 rounded-[11px] hover:brightness-105 transition-all"
            >
              <WhatsAppIcon />
              Récupérer ce temps, c&apos;est gratuit
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
