"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroHomeProps {
  onOpenBookingModal: () => void;
  onConsultationClick: () => void;
}

export default function HeroHome({
  onOpenBookingModal,
  onConsultationClick,
}: HeroHomeProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[640px] md:min-h-[720px] lg:min-h-[780px] w-full flex items-center justify-start overflow-hidden pt-24 pb-16">
      {/* Background Image: Cruise ship on sea with sunset/daylight + palm overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2400&auto=format&fit=crop"
          alt="Роскошный круизный лайнер Happy Fly"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transform animate-fade-in"
        />

        {/* Ambient Dark Gradient Overlays for perfect legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152B]/90 via-[#07152B]/55 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-transparent to-[#07152B]/40 z-10" />

        {/* Decorative tropical palm leaf silhouette in upper-left corner */}
        <div className="absolute -top-10 -left-10 w-72 h-72 md:w-96 md:h-96 pointer-events-none opacity-40 z-20 mix-blend-screen filter blur-[1px]">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 10 Q 90 20 180 120 Q 120 180 20 190 Q 60 100 10 10 Z"
              fill="rgba(34, 197, 94, 0.15)"
            />
          </svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-[1480px] mx-auto px-3 sm:px-5 lg:px-8 w-full pt-12 md:pt-16">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-md">
            {t.hero.title1} <br />
            <span className="bg-gradient-to-r from-white via-[#F5D48B] to-[#D4A045] bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/85 font-light leading-relaxed tracking-wide drop-shadow">
            {t.hero.subtitle}
          </p>

          {/* Call to action buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-[#07152B] bg-gradient-to-r from-[#F3D088] via-[#D4A045] to-[#B88228] hover:from-[#F8DE9E] hover:to-[#C69234] shadow-lg shadow-[#D4A045]/30 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.hero.btnBook}</span>
              <ChevronRight className="w-4 h-4 text-[#07152B] stroke-[2.5]" />
            </button>

            <button
              type="button"
              onClick={onConsultationClick}
              className="inline-flex items-center text-sm sm:text-base font-medium text-white/90 hover:text-white transition-colors duration-200 py-3 px-4 rounded-full hover:bg-white/10"
            >
              {t.hero.btnConsult}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
