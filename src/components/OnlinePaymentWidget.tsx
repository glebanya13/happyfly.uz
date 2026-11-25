"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plane,
  Briefcase,
  ShieldCheck,
  Car,
  Ship,
  Lock,
  Check,
  Zap,
  Headphones,
  Shield,
  AlertCircle,
} from "lucide-react";
import {
  VisaLogo,
  MastercardLogo,
  PaypalLogo,
  UnionPayLogo,
  UzcardLogo,
  HumoLogo,
  ThreeDSecureLogo,
} from "./PaymentLogos";
import { COMPANY_REQUISITES } from "@/data/legalDocs";
import { useLanguage } from "@/context/LanguageContext";

export default function OnlinePaymentWidget() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState("flight");
  const [selectedPayment, setSelectedPayment] = useState("uzcard");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Mandatory Cardholder details (Bank acquiring requirement: name, surname, address, phone)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formError, setFormError] = useState("");

  // Conversion rate USD to UZS (approx 12,900 UZS)
  const uzsRate = 12900;

  const services = [
    {
      id: "flight",
      title: t.payment.servicesList.flight.title,
      icon: Plane,
      detail: t.payment.servicesList.flight.detail,
      passenger: t.payment.servicesList.flight.passenger,
      price: 1250,
    },
    {
      id: "tour",
      title: t.payment.servicesList.tour.title,
      icon: Briefcase,
      detail: t.payment.servicesList.tour.detail,
      passenger: t.payment.servicesList.tour.passenger,
      price: 1890,
    },
    {
      id: "visa",
      title: t.payment.servicesList.visa.title,
      icon: ShieldCheck,
      detail: t.payment.servicesList.visa.detail,
      passenger: t.payment.servicesList.visa.passenger,
      price: 150,
    },
    {
      id: "transfer",
      title: t.payment.servicesList.transfer.title,
      icon: Car,
      detail: t.payment.servicesList.transfer.detail,
      passenger: t.payment.servicesList.transfer.passenger,
      price: 60,
    },
    {
      id: "cruise",
      title: t.payment.servicesList.cruise.title,
      icon: Ship,
      detail: t.payment.servicesList.cruise.detail,
      passenger: t.payment.servicesList.cruise.passenger,
      price: 2450,
    },
  ];

  const paymentMethods = [
    { id: "visa", name: "Visa", Component: VisaLogo },
    { id: "mastercard", name: "Mastercard", Component: MastercardLogo },
    { id: "paypal", name: "PayPal", Component: PaypalLogo },
    { id: "unionpay", name: "UnionPay", Component: UnionPayLogo },
    { id: "uzcard", name: "UZCARD", Component: UzcardLogo },
    { id: "humo", name: "HUMO", Component: HumoLogo },
  ];

  const currentService = services.find((s) => s.id === selectedService) || services[0];
  const formattedUzs = (currentService.price * uzsRate).toLocaleString("ru-RU");

  const handlePay = () => {
    if (!firstName.trim() || !lastName.trim() || !address.trim() || !phone.trim()) {
      setFormError(
        "Пожалуйста, заполните обязательные данные держателя карты (имя, фамилия, адрес, телефон)."
      );
      return;
    }
    if (!acceptedTerms) {
      setFormError(
        "Пожалуйста, подтвердите ознакомление с Публичной офертой и Политикой возврата перед оплатой."
      );
      return;
    }
    setFormError("");
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
    }, 7000);
  };

  return (
    <section id="online-payment" className="relative w-full overflow-hidden bg-[#F4F6F9] pt-12 pb-16">
      {/* Top Banner with Landmarks & Sky */}
      <div className="relative w-full min-h-[380px] bg-gradient-to-r from-[#0B1B3D] via-[#0E244F] to-[#15346D] overflow-hidden pt-12 pb-36 px-3 sm:px-5 lg:px-8">
        {/* Background landmarks collage */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop"
            alt="Мировые достопримечательности и путешествия"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-[#0B1B3D]/70 to-[#0B1B3D]/40" />
        </div>

        {/* Header Text */}
        <div className="relative z-10 max-w-[1480px] mx-auto text-left">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#F3D088] font-bold">
            {t.payment.tagline}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
            {t.payment.title} <span className="text-[#F3D088]">{t.payment.titleAccent}</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base mt-2 font-light">
            {t.payment.subtitle}
          </p>
        </div>
      </div>

      {/* Main Floating Payment Card */}
      <div className="relative z-20 max-w-[1480px] mx-auto px-3 sm:px-5 lg:px-8 -mt-24 sm:-mt-28">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 md:p-10 transition-all">
          {/* STEP 1: За что вы хотите оплатить? */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-7 rounded-full bg-[#0B1B3D] text-white flex items-center justify-center font-bold text-sm">
                1
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D]">
                {t.payment.step1}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {services.map((svc) => {
                const Icon = svc.icon;
                const isSelected = selectedService === svc.id;
                return (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => setSelectedService(svc.id)}
                    className={`relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 text-center ${
                      isSelected
                        ? "border-[#007AFF] bg-[#F0F7FF] text-[#007AFF] shadow-md shadow-blue-500/10"
                        : "border-gray-200/80 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50/70"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#007AFF] text-white flex items-center justify-center shadow-sm">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                    <Icon
                      className={`w-7 h-7 mb-2.5 transition-transform duration-200 ${
                        isSelected ? "scale-110 text-[#007AFF]" : "text-gray-500"
                      }`}
                    />
                    <span className="text-xs sm:text-sm font-semibold tracking-wide leading-tight">
                      {svc.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Выберите способ оплаты */}
          <div className="mb-8 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-7 rounded-full bg-[#0B1B3D] text-white flex items-center justify-center font-bold text-sm">
                2
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D]">
                {t.payment.step2}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {paymentMethods.map((pm) => {
                const LogoComponent = pm.Component;
                const isSelected = selectedPayment === pm.id;
                return (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setSelectedPayment(pm.id)}
                    className={`relative flex flex-col items-center justify-center h-20 sm:h-22 p-3 rounded-2xl border-2 transition-all duration-200 ${
                      isSelected
                        ? "border-[#007AFF] bg-[#F0F7FF] shadow-md shadow-blue-500/10"
                        : "border-gray-200/80 bg-white hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#007AFF] text-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                    <div className="flex items-center justify-center h-8">
                      <LogoComponent />
                    </div>
                    <span className="text-[11px] font-medium text-gray-500 mt-1">
                      {pm.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3: Данные держателя карты и оплата */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#0B1B3D] text-white flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D]">
                  {t.payment.step3}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <ThreeDSecureLogo />
              </div>
            </div>

            {/* Cardholder Details (Name, Surname, Address, Phone) */}
            <div className="mb-6 bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-gray-200/70">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h4 className="text-sm font-bold text-[#0B1B3D]">
                  Данные держателя карты (обязательно для безопасности платежа)
                </h4>
                <span className="text-[11px] text-gray-500">
                  Хранятся 6 месяцев для банка-эквайера •{" "}
                  <Link href="/privacy" className="text-[#007AFF] hover:underline">
                    Политика конфиденциальности
                  </Link>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Имя держателя карты *
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Например: Aziz"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-[#07152B] focus:outline-none focus:border-[#007AFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Фамилия держателя карты *
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Например: Karimov"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-[#07152B] focus:outline-none focus:border-[#007AFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Контактный телефон *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+998 90 123 45 67"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-[#07152B] focus:outline-none focus:border-[#007AFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Адрес проживания / регистрации *
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="г. Ташкент, ул. ..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-[#07152B] focus:outline-none focus:border-[#007AFF]"
                  />
                </div>
              </div>

              {/* Pre-payment consent & descriptor info */}
              <div className="mt-4 pt-4 border-t border-gray-200/70 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-600 leading-relaxed">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#007AFF] focus:ring-[#007AFF]"
                  />
                  <span>
                    Я соглашаюсь с{" "}
                    <Link href="/offer" className="text-[#007AFF] font-semibold hover:underline">
                      Публичной офертой
                    </Link>
                    ,{" "}
                    <Link href="/refund-policy" className="text-[#007AFF] font-semibold hover:underline">
                      Политикой возврата и отмены услуг
                    </Link>
                    ,{" "}
                    <Link href="/payment-policy" className="text-[#007AFF] font-semibold hover:underline">
                      Платежной политикой
                    </Link>{" "}
                    и{" "}
                    <Link href="/privacy" className="text-[#007AFF] font-semibold hover:underline">
                      Политикой конфиденциальности
                    </Link>
                    . Ознакомлен(а) со сроком доставки документов (15 мин – 24 ч) и необходимостью сохранения чека.
                  </span>
                </label>

                <div className="flex-shrink-0 bg-white px-3.5 py-2 rounded-xl border border-gray-200 text-xs">
                  <span className="text-gray-500">Дескриптор в выписке: </span>
                  <strong className="font-mono text-[#0B1B3D]">{COMPANY_REQUISITES.descriptor}</strong>
                  <span className="text-gray-400 block text-[10px]">
                    {COMPANY_REQUISITES.fullName}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-gray-200/70 flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left: Summary */}
              <div className="flex items-center gap-4 w-full lg:w-auto">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF3FE] text-[#007AFF] flex items-center justify-center flex-shrink-0 shadow-inner">
                  <currentService.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0B1B3D]">
                    {currentService.title}
                  </h4>
                  <p className="text-xs text-gray-600 font-medium">
                    {currentService.detail}
                  </p>
                  <p className="text-xs text-gray-400">
                    {currentService.passenger}
                  </p>
                </div>
              </div>

              {/* Center: Price in USD and UZS */}
              <div className="w-full lg:w-auto text-left lg:text-center border-y lg:border-y-0 lg:border-x border-gray-200 py-3 lg:py-0 lg:px-8">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                  {t.payment.amountLabel}
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
                    {currentService.price.toLocaleString("ru-RU")} USD
                  </span>
                </div>
                <span className="text-xs text-emerald-600 font-semibold block mt-0.5">
                  ≈ {formattedUzs} UZS ({t.payment.cbuRate})
                </span>
              </div>

              {/* Right: Payment CTA */}
              <div className="w-full lg:w-auto flex flex-col items-center sm:items-end">
                <button
                  type="button"
                  onClick={handlePay}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-[#07152B] bg-gradient-to-r from-[#F3D088] via-[#D4A045] to-[#B88228] hover:from-[#F8DE9E] hover:to-[#C69234] shadow-lg shadow-[#D4A045]/25 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Lock className="w-4 h-4 text-[#07152B]" />
                  <span>{t.payment.btnPay}</span>
                  <span className="text-lg leading-none">→</span>
                </button>

                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.payment.sslSecure}</span>
                </div>
              </div>
            </div>

            {formError && (
              <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {paymentSuccess && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3 animate-fade-in">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  Заявка на оплату ({selectedPayment.toUpperCase()} — {currentService.title}) для{" "}
                  <strong>
                    {firstName} {lastName}
                  </strong>{" "}
                  сформирована ✓ Дескриптор: <strong>{COMPANY_REQUISITES.descriptor}</strong>. Сохраните копию чека после подтверждения 3D-Secure.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 3 Trust items below the card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 pb-4">
          <div className="flex items-center justify-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#0B1B3D] flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-[#0B1B3D] text-sm">{t.payment.trustSafeTitle}</h5>
              <p className="text-xs text-gray-500">{t.payment.trustSafeDesc}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#0B1B3D] flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-[#0B1B3D] text-sm">{t.payment.trustInstantTitle}</h5>
              <p className="text-xs text-gray-500">{t.payment.trustInstantDesc}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#0B1B3D] flex-shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-[#0B1B3D] text-sm">{t.payment.trustSupportTitle}</h5>
              <p className="text-xs text-gray-500">{t.payment.trustSupportDesc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Cruise Banner: "Путешествуйте с нами! Открывайте мир без границ" */}
      <div className="relative mt-12 max-w-[1480px] mx-auto px-3 sm:px-5 lg:px-8">
        <div className="relative h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          <Image
            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2000&auto=format&fit=crop"
            alt="Круизный лайнер на закате"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07152B]/90 via-[#07152B]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-transparent to-transparent" />

          <div className="absolute inset-0 p-8 sm:p-12 md:p-16 flex flex-col justify-end z-10 max-w-xl">
            <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-none drop-shadow-lg">
              {t.payment.bannerScript}
            </h3>
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-light mt-2 tracking-wide">
              {t.payment.bannerSub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
