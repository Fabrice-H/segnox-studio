"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { FAQ_DATA } from "@/lib/constants";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-cream border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-none border-none cursor-pointer text-left p-[20px_22px] flex items-center justify-between gap-4 font-heading font-bold text-[16.5px] text-text-primary"
      >
        {question}
        <span
          className={`flex-none text-gold text-[22px] leading-none transition-transform duration-200 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-[22px] pb-[22px] text-[15.5px] leading-[1.6] text-text-secondary">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white border-t border-border">
      <div className="max-w-[820px] mx-auto px-6 py-[72px]">
        {/* Header */}
        <RevealOnScroll className="text-center mb-10">
          <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-[-0.02em] text-text-primary">
            Questions fréquentes.
          </h2>
        </RevealOnScroll>

        {/* FAQ items */}
        <RevealOnScroll className="flex flex-col gap-3">
          {FAQ_DATA.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
