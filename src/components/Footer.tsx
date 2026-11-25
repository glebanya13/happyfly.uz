"use client";

import React from "react";
import Logo from "./Logo";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const { lang: activeLang, setLang, t } = useLanguage();
  const languages: Language[] = ["RU", "UZ", "EN"];

  return (
    <footer className="w-full bg-[#07152B] border-t border-white/10 text-white pt-12 pb-8">
      <div className="max-w-[1480px] mx-auto px-3 sm:px-5 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-white/10">
          {/* Col 1: Logo */}
          <div className="md:col-span-4 flex items-center">
            <Logo variant="gold" />
          </div>

          {/* Col 2: Contacts in Tashkent */}
          <div className="md:col-span-5 space-y-2 text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#D4A045] flex-shrink-0" />
              <a
                href="tel:+998901234567"
                className="hover:text-white font-medium tracking-wide transition-colors"
              >
                +998 90 123 45 67
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4A045] flex-shrink-0" />
              <span>{t.footer.address}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#D4A045] flex-shrink-0" />
              <a
                href="mailto:info@happyfly.uz"
                className="hover:text-white font-medium transition-colors"
              >
                info@happyfly.uz
              </a>
            </div>
          </div>

          {/* Col 3: Socials + Language Switcher */}
          <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-end lg:items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://t.me/happyfly_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#229ED9] hover:border-[#229ED9] transition-all duration-200"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4 transform -translate-x-px translate-y-px" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-200"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Language Switcher RU | UZ | EN */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white/60">
              {languages.map((lng, idx) => (
                <React.Fragment key={lng}>
                  {idx > 0 && <span className="text-white/20">|</span>}
                  <button
                    type="button"
                    onClick={() => setLang(lng)}
                    className={`transition-colors py-1 relative ${
                      activeLang === lng
                        ? "text-[#F5D48B] font-bold"
                        : "hover:text-white"
                    }`}
                  >
                    {lng}
                    {activeLang === lng && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4A045] rounded-full" />
                    )}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Calligraphy */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>{t.footer.copyright}</p>

          <p className="font-script text-xl text-[#F3D088] font-normal tracking-wide flex items-center gap-1.5">
            <span>{t.footer.slogan}</span>
            <span className="text-sm">✈️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
