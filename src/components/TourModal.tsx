"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Calendar, Users, Phone, MapPin, CheckCircle2, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TourModal({ isOpen, onClose }: TourModalProps) {
  const { t } = useLanguage();
  const [destination, setDestination] = useState("Мальдивы / Дубай / Анталья");
  const [date, setDate] = useState("");
  const [tourists, setTourists] = useState("2 взрослых");
  const [phone, setPhone] = useState("+998 ");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith("+998")) {
      val = "+998 ";
    }
    setPhone(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

      if (botToken && chatId) {
        const messageText = `🌍 Заявка на тур Happy Fly\n📍 Направление: ${destination}\n📅 Дата: ${date}\n👥 Туристы: ${tourists}\n📞 Телефон: ${phone}`;
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: messageText }),
        });
      }

      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 500);
    } catch {
      setIsSubmitted(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card (Dark theme matching screenshot 2) */}
      <div className="relative w-full max-w-lg bg-[#0F1115] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 text-white my-auto animate-fade-in">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 text-white/80 hover:text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Resort Photo with cntraveler watermark look */}
        <div className="relative h-48 sm:h-56 w-full">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
            alt="Курорт и лагуна"
            fill
            sizes="(max-width: 640px) 100vw, 500px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-black/20" />
          <span className="absolute bottom-3 left-4 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-[10px] text-white/70 font-mono">
            cntraveler
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 pt-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {t.modal.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 font-light leading-relaxed">
            {t.modal.subtitle}
          </p>

          {isSubmitted ? (
            <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-[#D4A045]/40 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#D4A045] mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white">{t.modal.successTitle}</h4>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                {t.modal.successDesc}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-5 px-6 py-2.5 rounded-full bg-[#D4A045] text-[#07152B] font-bold text-xs"
              >
                {t.modal.btnClose}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Destination */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  {t.modal.labelDest}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder={t.modal.placeholderDest}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A1D24] text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-[#D4A045] text-sm"
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  {t.modal.labelDate}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A1D24] text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-[#D4A045] text-sm [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Number of Tourists */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  {t.modal.labelTourists}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <select
                    value={tourists}
                    onChange={(e) => setTourists(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#1A1D24] text-white border border-white/10 focus:outline-none focus:border-[#D4A045] text-sm appearance-none cursor-pointer"
                  >
                    {t.modal.touristOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Phone number */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  {t.modal.labelPhone}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                    placeholder="+998 XX XXX XX XX"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A1D24] text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-[#D4A045] text-sm font-mono tracking-wider"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-[#07152B] bg-gradient-to-r from-[#F3D088] via-[#D4A045] to-[#B88228] hover:from-[#F8DE9E] hover:to-[#C69234] shadow-lg shadow-[#D4A045]/20 transition-all duration-200 active:scale-[0.98] disabled:opacity-50"
                >
                  {isLoading ? t.modal.btnSending : t.modal.btnSubmit}
                </button>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  {t.modal.note}
                </p>
              </div>

              {/* Checklist box: Что получит менеджер */}
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400 space-y-1">
                <span className="font-semibold text-gray-300 block mb-1">
                  {t.modal.checklistTitle}
                </span>
                <p className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A045]"></span>
                  {t.modal.checkItem1}
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A045]"></span>
                  {t.modal.checkItem2} {destination}
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A045]"></span>
                  {t.modal.checkItem3} {tourists}
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A045]"></span>
                  {t.modal.checkItem4}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
