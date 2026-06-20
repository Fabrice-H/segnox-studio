"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { TABS_DATA } from "@/lib/constants";

export function SystemTabsSection() {
  const [activeTab, setActiveTab] = useState("attirer");

  const currentPanel =
    TABS_DATA.find((tab) => tab.id === activeTab) || TABS_DATA[0];

  return (
    <section className="max-w-[1120px] mx-auto px-6 py-[88px]">
      {/* Header */}
      <RevealOnScroll className="text-center max-w-[680px] mx-auto mb-10">
        <div className="font-heading font-bold text-[13px] tracking-[0.16em] uppercase text-gold mb-4">
          Le système
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-[-0.02em] text-text-primary text-balance">
          Ce que ça fait, concrètement.
        </h2>
      </RevealOnScroll>

      <RevealOnScroll>
        {/* Tab buttons */}
        <div className="flex justify-center flex-wrap gap-2 border-b border-border mb-[30px]">
          {TABS_DATA.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`bg-none border-none cursor-pointer font-heading font-bold text-[15px] py-3.5 px-[18px] -mb-px transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-gold border-b-2 border-gold"
                  : "text-text-muted border-b-2 border-transparent hover:text-gold"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panel content */}
        <div className="bg-white border border-border rounded-2xl shadow-[0_6px_20px_rgba(45,38,20,0.05)] p-10 grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
          <div>
            <h3 className="font-heading font-extrabold text-[28px] text-text-primary mb-3.5">
              {currentPanel.title}
            </h3>
            <p className="text-[17px] leading-[1.6] text-text-muted">
              {currentPanel.description}
            </p>
          </div>
          <ul className="flex flex-col gap-3.5">
            {currentPanel.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 items-start text-base text-text-secondary"
              >
                <span className="flex-none w-[26px] h-[26px] rounded-lg bg-gold/12 inline-flex items-center justify-center">
                  <Check size={14} className="text-gold" strokeWidth={3} />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  );
}
