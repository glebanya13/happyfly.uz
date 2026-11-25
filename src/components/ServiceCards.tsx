"use client";

import React from "react";
import Image from "next/image";
import {
  Ship,
  Plane,
  Building2,
  Globe2,
  MapPin,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceCardsProps {
  onCardClick?: (title: string) => void;
}

export default function ServiceCards({ onCardClick }: ServiceCardsProps) {
  const { t } = useLanguage();

  const topServices = [
    {
      id: "cruises",
      title: t.services.cruises,
      tag: "All-Inclusive",
      subtitle: "Средиземноморье & Персидский залив",
      icon: Ship,
      image:
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000&auto=format&fit=crop",
      alt: "Морские круизы Happy Fly",
    },
    {
      id: "outbound-tours",
      title: t.services.outbound,
      tag: "Горящие туры",
      subtitle: "Мальдивы, ОАЭ, Турция, Европа",
      icon: Plane,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
      alt: "Пляжные туры из Узбекистана",
    },
    {
      id: "uzbekistan-tours",
      title: t.services.inbound,
      tag: "Silk Road",
      subtitle: "Самарканд • Бухара • Хива",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=1000&auto=format&fit=crop",
      alt: "Самарканд, Бухара, Хива туризм",
    },
    {
      id: "visas-transfers",
      title: t.services.visas,
      tag: "Express",
      subtitle: "Шенген, ОАЭ, США & VIP авто",
      icon: Globe2,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
      alt: "Визовая поддержка и трансферы",
    },
  ];

  const destinationCards = [
    {
      id: "mediterranean",
      title: t.services.destMed,
      region: "Италия, Франция, Греция",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop",
      alt: "Круизы по Средиземному морю",
    },
    {
      id: "uzb-destinations",
      title: t.services.destUzb,
      region: "Архитектурные шедевры Востока",
      image:
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1000&auto=format&fit=crop",
      alt: "Путешествия по древним городам Узбекистана",
    },
    {
      id: "vip-transfers",
      title: t.services.destTransfer,
      region: "Аэропорт, вокзал, междугородние рейсы",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000&auto=format&fit=crop",
      alt: "Премиальный трансфер по Узбекистану",
    },
  ];

  return (
    <section id="services" className="relative z-30 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-14 mb-16">
      {/* 4 Primary Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {topServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => onCardClick && onCardClick(service.title)}
              className="group relative h-60 sm:h-64 lg:h-72 rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4A045] bg-[#07152B] flex flex-col justify-between p-5 sm:p-6"
            >
              {/* Image with zero distortion */}
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-[#07152B]/45 to-black/30 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Top row: Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-semibold text-[#F5D48B] border border-white/15 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#D4A045]" />
                  {service.tag}
                </span>

                <div className="w-8 h-8 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/90 group-hover:bg-[#D4A045] group-hover:text-[#07152B] group-hover:border-[#D4A045] transition-all duration-300 transform group-hover:rotate-45">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              {/* Bottom content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-[#F5D48B] group-hover:bg-[#D4A045] group-hover:text-[#07152B] transition-all duration-300 shadow-md">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold tracking-tight drop-shadow-md leading-tight group-hover:text-[#F5D48B] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/70 text-xs font-light tracking-wide pl-0.5">
                  {service.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3 Secondary Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-6">
        {destinationCards.map((card) => (
          <div
            key={card.id}
            onClick={() => onCardClick && onCardClick(card.title)}
            className="group relative h-56 sm:h-64 md:h-72 rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4A045]/80 bg-[#07152B] flex flex-col justify-end p-6"
          >
            {/* Image with zero distortion */}
            <Image
              src={card.image}
              alt={card.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-[#07152B]/40 to-black/20" />

            {/* Title with Pin & Region */}
            <div className="relative z-10 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#D4A045] flex-shrink-0" />
                  <span className="text-[11px] font-semibold text-[#F5D48B] uppercase tracking-wider">
                    {card.region}
                  </span>
                </div>
                <h4 className="text-white text-lg sm:text-xl font-bold tracking-tight group-hover:text-[#F5D48B] transition-colors leading-snug">
                  {card.title}
                </h4>
              </div>

              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#07152B] transition-all flex-shrink-0 ml-3">
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
