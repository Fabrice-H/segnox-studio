"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-[10px] border-b border-border">
      <div className="max-w-[1120px] mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
        <Link href="#top" className="no-underline">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[26px] font-heading text-[14.5px] font-semibold">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary no-underline hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <Link
          href="#diagnostic"
          className="hidden md:inline-block bg-gold text-text-primary no-underline font-heading font-bold text-sm px-[18px] py-2.5 rounded-[10px] whitespace-nowrap hover:bg-gold-dark transition-colors"
        >
          Diagnostic gratuit
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4 font-heading text-[15px] font-semibold">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary no-underline hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#diagnostic"
              className="bg-gold text-text-primary no-underline font-bold text-center px-[18px] py-3 rounded-[10px] mt-2 hover:bg-gold-dark transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Diagnostic gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
