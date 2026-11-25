"use client";

import React from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import {
  COMPANY_REQUISITES,
  LEGAL_NAV_ITEMS,
  LegalDocumentData,
} from "@/data/legalDocs";
import {
  ShieldCheck,
  Building2,
  MapPin,
  Phone,
  Mail,
  FileText,
  ArrowLeft,
  Info,
} from "lucide-react";

interface LegalPageLayoutProps {
  doc: LegalDocumentData;
}

export default function LegalPageLayout({ doc }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#07152B]">
      <Header variant="solid" />

      <main className="flex-1 pt-8 pb-16">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#07152B]/70 hover:text-[#9C6B1F] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться на главную
            </Link>

            <span className="text-xs font-medium text-gray-500">
              Редакция от {doc.updatedAt} • Домен: happyfly.uz
            </span>
          </div>

          {/* Navigation Pills across all legal documents */}
          <div className="flex flex-wrap gap-2 mb-8">
            {LEGAL_NAV_ITEMS.map((item) => {
              const isActive = item.href === doc.slug;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                    isActive
                      ? "bg-[#07152B] text-[#F5D48B] border-[#07152B] shadow-md"
                      : "bg-white text-[#07152B]/80 border-[#EBE4D5] hover:border-[#D4A045] hover:text-[#9C6B1F]"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Main Document Card */}
          <article className="bg-white rounded-3xl shadow-sm border border-[#EBE4D5] p-6 sm:p-10 md:p-12">
            {/* Document Header */}
            <header className="pb-8 border-b border-gray-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A045]/15 text-[#9C6B1F] text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                Официальный документ
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#07152B] leading-tight">
                {doc.title}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed max-w-3xl">
                {doc.subtitle}
              </p>
            </header>

            {/* Highlight Callout Box */}
            {doc.highlightBox && (
              <div className="my-8 p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#DFCBAA] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4A045]/20 text-[#9C6B1F] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-[#07152B]">
                    {doc.highlightBox.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1.5 leading-relaxed">
                    {doc.highlightBox.text}
                  </p>
                </div>
              </div>
            )}

            {/* Document Sections */}
            <div className="space-y-8 mt-8">
              {doc.sections.map((section, idx) => (
                <section key={idx} className="space-y-3">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-[#07152B]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-gray-700 text-sm sm:text-base leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2 pt-1 pl-1">
                      {section.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-gray-700 text-sm sm:text-base leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A045] mt-2 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Company Requisites Block */}
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#07152B] mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#D4A045]" />
                Реквизиты и контакты компании
              </h2>

              <div className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-[#07152B]">Полное наименование:</span>{" "}
                    {COMPANY_REQUISITES.fullName}
                  </p>
                  <p>
                    <span className="font-semibold text-[#07152B]">Страна:</span>{" "}
                    {COMPANY_REQUISITES.country}
                  </p>
                  <p>
                    <span className="font-semibold text-[#07152B]">ИНН (СТИР):</span>{" "}
                    {COMPANY_REQUISITES.inn}
                  </p>
                  <p>
                    <span className="font-semibold text-[#07152B]">Дескриптор в выписке:</span>{" "}
                    <span className="font-mono font-bold text-[#0B1B3D]">
                      {COMPANY_REQUISITES.descriptor}
                    </span>
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#D4A045] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#07152B]">Юридический адрес:</strong>{" "}
                      {COMPANY_REQUISITES.legalAddress}
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#D4A045] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#07152B]">Адрес для корреспонденции:</strong>{" "}
                      {COMPANY_REQUISITES.correspondenceAddress}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D4A045] flex-shrink-0" />
                    <span>
                      <strong className="text-[#07152B]">Служба поддержки:</strong>{" "}
                      <a
                        href="tel:+998901234567"
                        className="text-[#007AFF] hover:underline font-medium"
                      >
                        {COMPANY_REQUISITES.supportPhone}
                      </a>
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#D4A045] flex-shrink-0" />
                    <span>
                      <strong className="text-[#07152B]">E-mail:</strong>{" "}
                      <a
                        href={`mailto:${COMPANY_REQUISITES.supportEmail}`}
                        className="text-[#007AFF] hover:underline font-medium"
                      >
                        {COMPANY_REQUISITES.supportEmail}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
