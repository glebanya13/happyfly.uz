"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import HeroHome from "@/components/HeroHome";
import ServiceCards from "@/components/ServiceCards";
import TrustBar from "@/components/TrustBar";
import LeadBookingSection from "@/components/LeadBookingSection";
import OnlinePaymentWidget from "@/components/OnlinePaymentWidget";
import Footer from "@/components/Footer";
import TourModal from "@/components/TourModal";

function MainContent() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsTourModalOpen(true);
  };

  const handleConsultationClick = () => {
    const el = document.getElementById("booking-lead");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceCardClick = (title: string) => {
    console.log("Selected service:", title);
    setIsTourModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#111827] flex flex-col overflow-x-hidden">
      {/* Fixed/Absolute Top Header */}
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Hero Section (Matching Screenshot 3) */}
      <HeroHome
        onOpenBookingModal={handleOpenBookingModal}
        onConsultationClick={handleConsultationClick}
      />

      {/* 4 Primary Categories + 3 Popular Destinations (Screenshot 3) */}
      <ServiceCards onCardClick={handleServiceCardClick} />

      {/* 3 Pillars Trust Bar: Персональный подбор, Сопровождение, Комфортные поездки (Screenshot 3) */}
      <TrustBar />

      {/* Interactive Online Payment 3-Step Widget (Screenshot 1: Оплата услуг онлайн) */}
      <OnlinePaymentWidget />

      {/* Ready for Journey Lead Form: Готовы к путешествию? (Screenshot 3) */}
      <LeadBookingSection />

      {/* Footer (Screenshot 1 & 3) */}
      <Footer />

      {/* Tour Selection Modal (Screenshot 2: Подберём путешествие для вас) */}
      <TourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </main>
  );
}

export default function Home() {
  return <MainContent />;
}
