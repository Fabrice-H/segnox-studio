"use client";

import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  return (
    <>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </>
  );
}

// Hook pour tracker les événements personnalisés
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
}

// Événements de conversion prédéfinis pour SEGNOX
export const CONVERSION_EVENTS = {
  // Clics sur les boutons WhatsApp
  WHATSAPP_CLICK_HERO: () =>
    trackEvent("whatsapp_click", {
      location: "hero",
      button_text: "Je veux mon site pro",
    }),
  WHATSAPP_CLICK_APERCU: () =>
    trackEvent("whatsapp_click", {
      location: "hero",
      button_text: "Recevoir un aperçu gratuit",
    }),
  WHATSAPP_CLICK_DIAGNOSTIC: () =>
    trackEvent("whatsapp_click", {
      location: "cta_final",
      button_text: "Diagnostic sur WhatsApp",
    }),
  WHATSAPP_CLICK_CALCULATOR: () =>
    trackEvent("whatsapp_click", {
      location: "calculator",
      button_text: "Récupérer ce temps",
    }),

  // Navigation
  NAV_CLICK: (section: string) =>
    trackEvent("navigation_click", { section }),

  // Interactions
  FAQ_OPEN: (question: string) =>
    trackEvent("faq_interaction", { question, action: "open" }),
  TAB_CHANGE: (tabId: string) =>
    trackEvent("tab_change", { tab_id: tabId }),
  CALCULATOR_USE: (hours: number) =>
    trackEvent("calculator_use", { hours_calculated: hours }),

  // Scroll tracking
  SCROLL_DEPTH: (percentage: number) =>
    trackEvent("scroll_depth", { depth_percentage: percentage }),

  // Choix d'offre
  OFFER_SELECT: (offerName: string) =>
    trackEvent("offer_select", { offer_name: offerName }),
};

// Déclaration TypeScript pour gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, string | number | boolean>
    ) => void;
  }
}
