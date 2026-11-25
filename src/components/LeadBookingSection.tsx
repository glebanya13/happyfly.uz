"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Phone, Send, ChevronRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LeadBookingSection() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [service, setService] = useState("Морские круизы");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith("+998")) {
      val = "+998 ";
    }
    setPhone(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage(t.lead.errName);
      return;
    }
    if (phone.trim().length < 13) {
      setErrorMessage(t.lead.errPhone);
      return;
    }

    setErrorMessage("");
    setStatus("loading");

    try {
      const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

      if (botToken && chatId) {
        const messageText = `🚀 Новая заявка Happy Fly\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📍 Услуга: ${service}`;
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: messageText }),
        });
      }
      
      setTimeout(() => {
        setStatus("success");
      }, 500);
    } catch {
      setStatus("success");
    }
  };

  return (
    <section id="booking-lead" className="relative w-full py-16 sm:py-24 overflow-hidden my-8">
      {/* Background Image: Couple in hats looking at Samarkand Registan at golden hour */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop"
          alt="Путешествие по Узбекистану и миру"
          fill
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
        {/* Dark oceanic gradient on the left so form is 100% readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152B] via-[#07152B]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/90 via-transparent to-[#07152B]/30 z-10" />
      </div>

      <div className="relative z-20 max-w-[1480px] mx-auto px-3 sm:px-5 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
            {t.lead.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/80 font-light drop-shadow">
            {t.lead.subtitle}
          </p>

          {status === "success" ? (
            <div className="mt-8 p-6 rounded-2xl bg-[#0B1B3D]/90 border border-[#D4A045]/50 backdrop-blur-md flex items-start gap-4 text-white">
              <CheckCircle2 className="w-7 h-7 text-[#D4A045] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-bold text-[#F5D48B]">{t.lead.successTitle}</h4>
                <p className="text-sm text-white/80 mt-1">
                  {t.lead.successDesc}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setName("");
                    setPhone("+998 ");
                  }}
                  className="mt-4 text-xs font-semibold text-[#F5D48B] underline underline-offset-4"
                >
                  {t.lead.btnAnother}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.lead.namePlaceholder}
                    required
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4A045] focus:border-transparent text-sm backdrop-blur-md transition-all"
                  />
                </div>

                {/* Phone Input with +998 */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="+998 90 123 45 67"
                    required
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4A045] focus:border-transparent text-sm backdrop-blur-md transition-all font-mono tracking-wide"
                  />
                </div>

                {/* Service Selector */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                    <Send className="w-4 h-4" />
                  </div>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full pl-10 pr-8 py-3.5 rounded-xl bg-[#0B1B3D]/80 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4A045] focus:border-transparent text-sm backdrop-blur-md appearance-none transition-all cursor-pointer"
                  >
                    {t.lead.options.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0B1B3D] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-white/50">
                    <ChevronRight className="w-4 h-4 transform rotate-90" />
                  </div>
                </div>
              </div>

              {errorMessage && (
                <p className="text-red-300 text-xs font-medium pl-1">{errorMessage}</p>
              )}

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-sm sm:text-base text-[#07152B] bg-gradient-to-r from-[#F3D088] via-[#D4A045] to-[#B88228] hover:from-[#F8DE9E] hover:to-[#C69234] shadow-lg shadow-[#D4A045]/30 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  <span>{status === "loading" ? t.lead.btnSending : t.lead.btnSubmit}</span>
                  <ChevronRight className="w-4 h-4 text-[#07152B] stroke-[2.5]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
