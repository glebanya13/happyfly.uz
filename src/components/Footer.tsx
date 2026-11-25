"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Phone, MapPin, Mail, Send, FileText, Building2 } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { COMPANY_REQUISITES, LEGAL_NAV_ITEMS } from "@/data/legalDocs";
import {
  VisaLogo,
  MastercardLogo,
  UnionPayLogo,
  UzcardLogo,
  HumoLogo,
  ThreeDSecureLogo,
} from "./PaymentLogos";

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
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Col 1: Logo & Company Info */}
          <div className="md:col-span-4 space-y-4">
            <Logo variant="gold" />
            <div className="text-xs text-white/75 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#D4A045] flex-shrink-0" />
                {COMPANY_REQUISITES.fullName}
              </p>
              <p className="text-white/60">
                Страна: {COMPANY_REQUISITES.country} • ИНН: {COMPANY_REQUISITES.inn}
              </p>
              <p className="text-white/60">
                Дескриптор в выписке: <span className="text-[#F5D48B] font-mono">{COMPANY_REQUISITES.descriptor}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Contacts & Addresses in Tashkent */}
          <div className="md:col-span-4 space-y-2.5 text-xs sm:text-sm text-white/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3D088] mb-2">
              Контакты и адреса
            </h4>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#D4A045] flex-shrink-0" />
              <a
                href="tel:+998901234567"
                className="hover:text-white font-medium tracking-wide transition-colors"
              >
                {COMPANY_REQUISITES.supportPhone} (служба поддержки)
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-[#D4A045] flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-white/90">Юридический адрес:</strong>{" "}
                {COMPANY_REQUISITES.legalAddress}
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-[#D4A045] flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-white/90">Для корреспонденции:</strong>{" "}
                {COMPANY_REQUISITES.correspondenceAddress}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#D4A045] flex-shrink-0" />
              <a
                href={`mailto:${COMPANY_REQUISITES.supportEmail}`}
                className="hover:text-white font-medium transition-colors"
              >
                {COMPANY_REQUISITES.supportEmail}
              </a>
            </div>
          </div>

          {/* Col 3: Legal Documents & Socials */}
          <div className="md:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3D088] mb-2.5">
                Оферта и политики сайта
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/75">
                {LEGAL_NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 hover:text-[#F5D48B] transition-colors"
                    >
                      <FileText className="w-3 h-3 text-[#D4A045] flex-shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials + Language Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2.5">
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
        </div>

        {/* Payment Systems & 3D-Secure Row */}
        <div className="py-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[11px] text-white/60 max-w-md">
            Принимаем к оплате карты национальных и международных платёжных систем с защитой{" "}
            <strong className="text-white/85">3D-Secure</strong>:
          </div>

          <div className="flex flex-wrap items-center gap-3 bg-white/95 px-4 py-2 rounded-2xl shadow-sm">
            <UzcardLogo className="h-5" />
            <HumoLogo className="h-5" />
            <VisaLogo className="h-4" />
            <MastercardLogo className="h-5" />
            <UnionPayLogo className="h-5" />
            <ThreeDSecureLogo className="h-6" />
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
