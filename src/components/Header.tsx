"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { MessageCircle, Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";

interface HeaderProps {
  onOpenBookingModal?: () => void;
  activeNav?: string;
  variant?: "transparent" | "solid";
}

export default function Header({
  onOpenBookingModal,
  variant = "transparent",
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { lang: currentLang, setLang, t } = useLanguage();

  const languages: Language[] = ["RU", "UZ", "EN"];

  const headerPositionClass =
    variant === "solid"
      ? "relative bg-[#07152B] border-b border-white/10 shadow-md"
      : "absolute top-0 left-0 right-0 bg-gradient-to-b from-[#07152B]/90 via-[#07152B]/50 to-transparent";

  return (
    <header className={`z-40 w-full transition-all duration-300 ${headerPositionClass}`}>
      <div className="max-w-[1480px] mx-auto px-3 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="gold" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10 text-white/90 text-sm font-medium tracking-wide">
            <Link
              href="/#cruises"
              className="hover:text-[#F3D088] transition-colors duration-200"
            >
              {t.nav.cruises}
            </Link>
            <span className="text-white/20 select-none">|</span>
            <Link
              href="/#tours"
              className="hover:text-[#F3D088] transition-colors duration-200"
            >
              {t.nav.tours}
            </Link>
            <span className="text-white/20 select-none">|</span>
            <Link
              href="/#uzbekistan"
              className="hover:text-[#F3D088] transition-colors duration-200"
            >
              {t.nav.uzbekistan}
            </Link>
            <span className="text-white/20 select-none">|</span>
            <Link
              href="/#visas"
              className="hover:text-[#F3D088] transition-colors duration-200"
            >
              {t.nav.visas}
            </Link>
            <span className="text-white/20 select-none">|</span>
            <Link
              href="/#online-payment"
              className="hover:text-[#F3D088] text-[#F3D088] font-semibold transition-colors duration-200 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.nav.payment}
            </Link>
          </nav>

          {/* Right actions: Language switcher + WhatsApp button */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-white/80 hover:text-white px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-white/25 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4A045]" />
                <span>{currentLang}</span>
                <ChevronDown className="w-3 h-3 text-white/60" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-[#0B1B3D] border border-white/15 rounded-xl shadow-xl overflow-hidden py-1 z-50">
                  {languages.map((lng) => (
                    <button
                      key={lng}
                      onClick={() => {
                        setLang(lng);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                        currentLang === lng
                          ? "bg-[#D4A045]/20 text-[#F5D48B] font-bold"
                          : "text-white/80 hover:bg-white/10"
                      }`}
                    >
                      {lng === "RU" && "Русский"}
                      {lng === "UZ" && "O'zbekcha"}
                      {lng === "EN" && "English"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp CTA Button (matches Photo 3 gold luxury style) */}
            <a
              href="https://wa.me/998901234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F5D48B] via-[#E2B768] to-[#D4A045] hover:from-[#FAE0A5] hover:to-[#DFB35F] text-[#07152B] font-semibold text-xs md:text-sm px-4 py-2.5 rounded-full shadow-lg shadow-[#D4A045]/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-[#07152B] text-[#07152B]" />
              <span>{t.nav.whatsapp}</span>
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex items-center sm:hidden space-x-2">
            <a
              href="https://wa.me/998901234567"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366] text-white rounded-full shadow-md"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white rounded-lg focus:outline-none"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07152B]/98 border-b border-white/10 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 text-white/90 font-medium text-sm">
            <Link
              href="/#cruises"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              {t.services.cruises}
            </Link>
            <Link
              href="/#tours"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              {t.services.outbound}
            </Link>
            <Link
              href="/#uzbekistan"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              {t.services.inbound}
            </Link>
            <Link
              href="/#visas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              {t.services.visas}
            </Link>
            <Link
              href="/#online-payment"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-[#D4A045]/15 text-[#F5D48B] font-semibold border border-[#D4A045]/30"
            >
              💳 {t.nav.payment}
            </Link>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-2">
              {languages.map((lng) => (
                <button
                  key={lng}
                  onClick={() => setLang(lng)}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    currentLang === lng
                      ? "bg-[#D4A045] text-[#07152B]"
                      : "text-white/70 hover:text-white border border-white/10"
                  }`}
                >
                  {lng}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBookingModal) onOpenBookingModal();
              }}
              className="text-xs text-[#F5D48B] font-semibold underline underline-offset-4"
            >
              {t.hero.btnBook}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

