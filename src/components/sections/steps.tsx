"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { STEPS } from "@/lib/constants";

function StepLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });

  return (
    <motion.div
      ref={ref}
      className="absolute top-[27px] left-[12%] right-[12%] h-[2px] bg-gold/30 origin-left hidden lg:block"
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    />
  );
}

export function StepsSection() {
  return (
    <section className="max-w-[1120px] mx-auto px-6 py-[72px]">
      {/* Header */}
      <RevealOnScroll className="text-center max-w-[680px] mx-auto mb-12">
        <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-[-0.02em] text-text-primary text-balance">
          Comment ça marche.
        </h2>
      </RevealOnScroll>

      {/* Steps */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StepLine />

        {STEPS.map((step) => (
          <RevealOnScroll key={step.number} className="relative text-center">
            {/* Step number */}
            <div className="relative z-10 w-[54px] h-[54px] mx-auto mb-[18px] rounded-full bg-cream border-2 border-gold text-gold font-heading font-extrabold text-lg flex items-center justify-center">
              {step.number}
            </div>

            <h3 className="font-heading font-bold text-[17px] text-text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-[14.5px] leading-[1.5] text-text-muted">
              {step.description}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
