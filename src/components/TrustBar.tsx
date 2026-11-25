"use client";

import React from "react";
import { Crown, ShieldCheck, Car, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustBar() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Crown,
      badge: t.trust.selectionBadge,
      title: t.trust.selectionTitle,
      description: t.trust.selectionDesc,
      gradient: "from-[#F3D088]/20 via-[#D4A045]/10 to-transparent",
      iconBg: "bg-gradient-to-br from-[#F5D48B]/30 to-[#D4A045]/20 text-[#C49233] border-[#DFCBAA]",
    },
    {
      icon: ShieldCheck,
      badge: t.trust.supportBadge,
      title: t.trust.supportTitle,
      description: t.trust.supportDesc,
      gradient: "from-[#0284C7]/15 via-[#0284C7]/5 to-transparent",
      iconBg: "bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] text-[#0284C7] border-[#93C5FD]",
    },
    {
      icon: Car,
      badge: t.trust.comfortBadge,
      title: t.trust.comfortTitle,
      description: t.trust.comfortDesc,
      gradient: "from-[#10B981]/15 via-[#10B981]/5 to-transparent",
      iconBg: "bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] text-[#059669] border-[#6EE7B7]",
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 my-8 border-y border-[#EBE4D5]/80">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Mini Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A045]/15 text-[#9C6B1F] text-xs font-bold uppercase tracking-widest border border-[#D4A045]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A045]" />
            Happy Fly Standards
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#07152B] mt-2.5">
            Почему путешественники выбирают нас
          </h3>
        </div>

        {/* 3 Real Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-[#EBE4D5] hover:border-[#D4A045]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle card glow background on hover */}
                <div
                  className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                    >
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>

                    <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-[#F4F1EA] text-[#6B5A3E] border border-[#E5DFCE]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#07152B] group-hover:text-[#9C6B1F] transition-colors leading-snug">
                    {item.title}
                  </h4>

                  {/* Card Description */}
                  <p className="text-gray-600 text-sm sm:text-base font-normal mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line feature */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#07152B]/70 group-hover:text-[#D4A045] transition-colors">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Включено в каждый тур
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
