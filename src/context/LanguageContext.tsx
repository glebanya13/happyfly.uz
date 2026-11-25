"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "RU" | "UZ" | "EN";

export const translations = {
  RU: {
    nav: {
      cruises: "Круизы",
      tours: "Туры",
      uzbekistan: "Узбекистан",
      visas: "Визы и трансферы",
      payment: "Оплата онлайн",
      whatsapp: "Написать в WhatsApp",
    },
    hero: {
      title1: "Откройте мир",
      title2: "вместе с нами",
      subtitle:
        "Круизы и путешествия из Узбекистана • Приём гостей в Узбекистане • Визы и трансферы",
      btnBook: "Подобрать путешествие",
      btnConsult: "Получить консультацию",
    },
    services: {
      cruises: "Морские круизы",
      outbound: "Туры из Узбекистана",
      inbound: "Туризм в Узбекистане",
      visas: "Визы и трансферы",
      destMed: "Круизы по Средиземному морю",
      destUzb: "Путешествия по Узбекистану",
      destTransfer: "Трансфер по всему Узбекистану",
    },
    trust: {
      selectionTitle: "Персональный подбор",
      selectionDesc: "Индивидуальные маршруты и отели под ваши даты и бюджет",
      selectionBadge: "Премиум сервис",
      supportTitle: "Сопровождение 24/7",
      supportDesc: "Личный менеджер на связи от бронирования до возвращения домой",
      supportBadge: "Забота о клиенте",
      comfortTitle: "Комфортные поездки",
      comfortDesc: "Проверенные авиакомпании, роскошные круизы и VIP-трансферы",
      comfortBadge: "Гарантия качества",
    },
    payment: {
      tagline: "БЫСТРО • БЕЗОПАСНО • УДОБНО",
      title: "Оплата услуг",
      titleAccent: "онлайн",
      subtitle: "Выберите услугу и удобный способ оплаты",
      step1: "За что вы хотите оплатить?",
      step2: "Выберите способ оплаты",
      step3: "Данные платежа",
      amountLabel: "Сумма к оплате",
      cbuRate: "по курсу ЦБ РУз",
      btnPay: "Оплатить сейчас",
      sslSecure: "Ваши данные защищены 256-bit SSL",
      trustSafeTitle: "Безопасные платежи",
      trustSafeDesc: "Международные стандарты PCI DSS",
      trustInstantTitle: "Мгновенное подтверждение",
      trustInstantDesc: "Чек и ваучер на email и в Telegram",
      trustSupportTitle: "Техническая поддержка 24/7",
      trustSupportDesc: "Поддержка на русском и узбекском языках",
      bannerScript: "Путешествуйте с нами!",
      bannerSub: "Открывайте мир без границ",
      servicesList: {
        flight: {
          title: "Авиабилет",
          detail: "Билет: Tashkent → Dubai",
          passenger: "Пассажир: 1 взрослый",
        },
        tour: {
          title: "Тур пакет",
          detail: "Тур: Анталья All Inclusive, 7 дней",
          passenger: "Туристы: 2 взрослых",
        },
        visa: {
          title: "Визовая поддержка",
          detail: "Оформление Шенген / ОАЭ / США",
          passenger: "Заявитель: 1 персона",
        },
        transfer: {
          title: "Трансфер",
          detail: "VIP трансфер: Аэропорт Ташкент → Отель",
          passenger: "Авто: Mercedes E-Class",
        },
        cruise: {
          title: "Круиз",
          detail: "Средиземноморский круиз, MSC Grandiosa",
          passenger: "Каюта: С балконом (2 чел)",
        },
      },
    },
    lead: {
      title: "Готовы к путешествию?",
      subtitle: "Оставьте заявку — мы подберём лучшее решение для вас!",
      namePlaceholder: "Ваше имя",
      btnSubmit: "Оставить заявку",
      btnSending: "Отправка...",
      successTitle: "Заявка успешно принята!",
      successDesc:
        "Наш менеджер в Ташкенте свяжется с вами в течение 10 минут в Telegram или по указанному телефону.",
      btnAnother: "Отправить ещё одну заявку",
      errName: "Пожалуйста, укажите ваше имя",
      errPhone: "Пожалуйста, введите полный номер телефона Узбекистана (+998...)",
      options: [
        "Морские круизы",
        "Туры из Узбекистана",
        "Туризм в Узбекистане",
        "Визы и трансферы",
        "Авиабилеты",
      ],
    },
    modal: {
      title: "Подберём путешествие для вас",
      subtitle:
        "Оставьте заявку, и наш менеджер свяжется с вами для подбора тура.",
      labelDest: "Куда вы хотите поехать?",
      placeholderDest: "Например: Мальдивы, Дубай, Анталья, Самарканд",
      labelDate: "Предполагаемая дата поездки",
      labelTourists: "Количество туристов",
      labelPhone: "Номер телефона",
      btnSubmit: "Оставить заявку",
      btnSending: "Отправка...",
      note: "Нажатие отправляет заявку дежурному менеджеру в Ташкенте.",
      successTitle: "Заявка принята!",
      successDesc: "Менеджер Happy Fly подбирает лучшие варианты и скоро свяжется с вами.",
      btnClose: "Отлично, понятно",
      checklistTitle: "Что получит менеджер:",
      checkItem1: "Услуга: выездной туризм и подбор тура",
      checkItem2: "Направление:",
      checkItem3: "Количество туристов:",
      checkItem4: "Телефон клиента для оперативной связи",
      touristOptions: [
        "1 взрослый",
        "2 взрослых",
        "2 взрослых + 1 ребёнок",
        "Семья / группа (4+ человека)",
      ],
    },
    footer: {
      address: "г. Ташкент, Узбекистан",
      copyright: "© 2025 Happy Fly. Все права защищены.",
      slogan: "Путешествия делают жизнь ярче",
    },
  },

  UZ: {
    nav: {
      cruises: "Kruizlar",
      tours: "Sayohatlar",
      uzbekistan: "O'zbekiston",
      visas: "Vizalar va transferlar",
      payment: "Onlayn to'lov",
      whatsapp: "WhatsApp orqali yozish",
    },
    hero: {
      title1: "Dunyoni biz bilan",
      title2: "kashf eting",
      subtitle:
        "O'zbekistondan kruizlar va sayohatlar • O'zbekistonda mehmonlarni kutib olish • Vizalar va transferlar",
      btnBook: "Sayohatni tanlash",
      btnConsult: "Konsultatsiya olish",
    },
    services: {
      cruises: "Dengiz kruizlari",
      outbound: "O'zbekistondan turlar",
      inbound: "O'zbekiston bo'ylab turizm",
      visas: "Vizalar va transferlar",
      destMed: "O'rta yer dengizi kruizlari",
      destUzb: "O'zbekiston bo'ylab sayohatlar",
      destTransfer: "Butun O'zbekiston bo'ylab transfer",
    },
    trust: {
      selectionTitle: "Individual tanlov",
      selectionDesc: "Sizning xohishingiz va byudjetingizga moslashtirilgan marshrutlar",
      selectionBadge: "Premium servis",
      supportTitle: "24/7 Hamrohlik",
      supportDesc: "Bron qilishdan to uyga qaytguncha shaxsiy menejer aloqada",
      supportBadge: "Mijozga g'amxo'rlik",
      comfortTitle: "Qulay sayohatlar",
      comfortDesc: "Ishonchli aviakompaniyalar, hashamatli laynerlar va VIP transferlar",
      comfortBadge: "Sifat kafolati",
    },
    payment: {
      tagline: "TEZKOR • XAVFSIZ • QULAY",
      title: "Xizmatlar uchun",
      titleAccent: "onlayn to'lov",
      subtitle: "Xizmatni va qulay to'lov usulini tanlang",
      step1: "Qaysi xizmat uchun to'lamoqchisiz?",
      step2: "To'lov usulini tanlang",
      step3: "To'lov ma'lumotlari",
      amountLabel: "To'lov summasi",
      cbuRate: "MB kursi bo'yicha",
      btnPay: "Hozir to'lash",
      sslSecure: "Ma'lumotlaringiz 256-bit SSL bilan himoyalangan",
      trustSafeTitle: "Xavfsiz to'lovlar",
      trustSafeDesc: "Xalqaro PCI DSS standartlari",
      trustInstantTitle: "Tezkor tasdiqlash",
      trustInstantDesc: "Chek va vaucher email hamda Telegramga",
      trustSupportTitle: "24/7 texnik yordam",
      trustSupportDesc: "O'zbek va rus tillarida qo'llab-quvvatlash",
      bannerScript: "Biz bilan sayohat qiling!",
      bannerSub: "Chegarasiz dunyoni oching",
      servicesList: {
        flight: {
          title: "Aviachipta",
          detail: "Chipta: Toshkent → Dubay",
          passenger: "Yo'lovchi: 1 katta yoshli",
        },
        tour: {
          title: "Tur paket",
          detail: "Tur: Antaliya All Inclusive, 7 kun",
          passenger: "Sayyohlar: 2 katta yoshli",
        },
        visa: {
          title: "Viza ko'magi",
          detail: "Shengen / BAA / AQSH vizalari rasmiylashtiruvi",
          passenger: "Ariza beruvchi: 1 kishi",
        },
        transfer: {
          title: "Transfer",
          detail: "VIP transfer: Toshkent aeroporti → Mehmonxona",
          passenger: "Avto: Mercedes E-Class",
        },
        cruise: {
          title: "Kruiz",
          detail: "O'rta yer dengizi kruizi, MSC Grandiosa",
          passenger: "Kayuta: Balkonli (2 kishi)",
        },
      },
    },
    lead: {
      title: "Sayohatga tayyormisiz?",
      subtitle: "Ariza qoldiring — biz siz uchun eng yaxshi yechimni topamiz!",
      namePlaceholder: "Ismingiz",
      btnSubmit: "Ariza yuborish",
      btnSending: "Yuborilmoqda...",
      successTitle: "Ariza muvaffaqiyatli qabul qilindi!",
      successDesc:
        "Toshkentdagi menejerimiz 10 daqiqa ichida Telegram yoki ko'rsatilgan telefon orqali siz bilan bog'lanadi.",
      btnAnother: "Yana bitta ariza yuborish",
      errName: "Iltimos, ismingizni kiriting",
      errPhone: "Iltimos, O'zbekiston telefon raqamini to'liq kiriting (+998...)",
      options: [
        "Dengiz kruizlari",
        "O'zbekistondan turlar",
        "O'zbekiston bo'ylab turizm",
        "Vizalar va transferlar",
        "Aviachiptalar",
      ],
    },
    modal: {
      title: "Siz uchun sayohat tanlaymiz",
      subtitle:
        "Ariza qoldiring, menejerimiz tur tanlash uchun siz bilan bog'lanadi.",
      labelDest: "Qayerga bormoqchisiz?",
      placeholderDest: "Masalan: Maldiv orollari, Dubay, Antaliya, Samarqand",
      labelDate: "Taxminiy sayohat sanasi",
      labelTourists: "Sayyohlar soni",
      labelPhone: "Telefon raqam",
      btnSubmit: "Ariza yuborish",
      btnSending: "Yuborilmoqda...",
      note: "Tugmani bosish orqali ariza Toshkentdagi navbatchi menejerga yuboriladi.",
      successTitle: "Ariza qabul qilindi!",
      successDesc: "Happy Fly menejeri eng yaxshi variantlarni saralab, tez orada siz bilan bog'lanadi.",
      btnClose: "Tushunarli, rahmat",
      checklistTitle: "Menejer nimalarni oladi:",
      checkItem1: "Xizmat: chiqish turizmi va tur tanlash",
      checkItem2: "Yo'nalish:",
      checkItem3: "Sayyohlar soni:",
      checkItem4: "Tezkor aloqa uchun mijoz telefoni",
      touristOptions: [
        "1 katta yoshli",
        "2 katta yoshli",
        "2 katta yoshli + 1 bola",
        "Oila / guruh (4+ kishi)",
      ],
    },
    footer: {
      address: "Toshkent sh., O'zbekiston",
      copyright: "© 2025 Happy Fly. Barcha huquqlar himoyalangan.",
      slogan: "Sayohatlar hayotni yorqinroq qiladi",
    },
  },

  EN: {
    nav: {
      cruises: "Cruises",
      tours: "Tours",
      uzbekistan: "Uzbekistan",
      visas: "Visas & Transfers",
      payment: "Online Payment",
      whatsapp: "Chat on WhatsApp",
    },
    hero: {
      title1: "Discover the world",
      title2: "together with us",
      subtitle:
        "Cruises and tours from Uzbekistan • Incoming tourism in Uzbekistan • Visas & transfers",
      btnBook: "Select a Journey",
      btnConsult: "Get Consultation",
    },
    services: {
      cruises: "Sea Cruises",
      outbound: "Tours from Uzbekistan",
      inbound: "Tourism in Uzbekistan",
      visas: "Visas & Transfers",
      destMed: "Mediterranean Cruises",
      destUzb: "Travel Across Uzbekistan",
      destTransfer: "Transfers Across Uzbekistan",
    },
    trust: {
      selectionTitle: "Personalized Selection",
      selectionDesc: "Custom itineraries & 5-star hotels tailored to your preferences",
      selectionBadge: "Premium Service",
      supportTitle: "24/7 Dedicated Support",
      supportDesc: "Personal travel concierge on call from booking to your return home",
      supportBadge: "Full Care",
      comfortTitle: "Comfortable Journeys",
      comfortDesc: "Verified airlines, luxury cruise liners and executive VIP transfers",
      comfortBadge: "Quality Guarantee",
    },
    payment: {
      tagline: "FAST • SECURE • CONVENIENT",
      title: "Service Payment",
      titleAccent: "online",
      subtitle: "Choose a service and convenient payment method",
      step1: "What would you like to pay for?",
      step2: "Select payment method",
      step3: "Payment details",
      amountLabel: "Amount to pay",
      cbuRate: "at CBU rate",
      btnPay: "Pay now",
      sslSecure: "Your data is secured by 256-bit SSL",
      trustSafeTitle: "Secure Payments",
      trustSafeDesc: "International PCI DSS standards",
      trustInstantTitle: "Instant Confirmation",
      trustInstantDesc: "Receipt and voucher sent to email & Telegram",
      trustSupportTitle: "24/7 Support",
      trustSupportDesc: "Support in Russian and Uzbek languages",
      bannerScript: "Travel with us!",
      bannerSub: "Discover a world without borders",
      servicesList: {
        flight: {
          title: "Flight Ticket",
          detail: "Ticket: Tashkent → Dubai",
          passenger: "Passenger: 1 adult",
        },
        tour: {
          title: "Tour Package",
          detail: "Tour: Antalya All Inclusive, 7 days",
          passenger: "Tourists: 2 adults",
        },
        visa: {
          title: "Visa Support",
          detail: "Schengen / UAE / USA visa processing",
          passenger: "Applicant: 1 person",
        },
        transfer: {
          title: "Transfer",
          detail: "VIP Transfer: Tashkent Airport → Hotel",
          passenger: "Car: Mercedes E-Class",
        },
        cruise: {
          title: "Cruise",
          detail: "Mediterranean cruise, MSC Grandiosa",
          passenger: "Cabin: Balcony (2 persons)",
        },
      },
    },
    lead: {
      title: "Ready for a journey?",
      subtitle: "Leave a request — we will select the best solution for you!",
      namePlaceholder: "Your name",
      btnSubmit: "Submit request",
      btnSending: "Sending...",
      successTitle: "Request successfully received!",
      successDesc:
        "Our manager in Tashkent will contact you within 10 minutes via Telegram or phone.",
      btnAnother: "Submit another request",
      errName: "Please enter your name",
      errPhone: "Please enter full Uzbekistan phone number (+998...)",
      options: [
        "Sea Cruises",
        "Tours from Uzbekistan",
        "Tourism in Uzbekistan",
        "Visas & Transfers",
        "Flight Tickets",
      ],
    },
    modal: {
      title: "We will select a trip for you",
      subtitle:
        "Leave a request and our manager will contact you for tour selection.",
      labelDest: "Where would you like to go?",
      placeholderDest: "e.g., Maldives, Dubai, Antalya, Samarkand",
      labelDate: "Estimated travel date",
      labelTourists: "Number of tourists",
      labelPhone: "Phone number",
      btnSubmit: "Submit request",
      btnSending: "Sending...",
      note: "Clicking will submit the request to our on-duty manager in Tashkent.",
      successTitle: "Request received!",
      successDesc: "Happy Fly manager is preparing the best options and will reach out shortly.",
      btnClose: "Got it, thank you",
      checklistTitle: "What the manager receives:",
      checkItem1: "Service: outbound tourism & trip planning",
      checkItem2: "Destination:",
      checkItem3: "Number of tourists:",
      checkItem4: "Client phone for direct contact",
      touristOptions: [
        "1 adult",
        "2 adults",
        "2 adults + 1 child",
        "Family / group (4+ people)",
      ],
    },
    footer: {
      address: "Tashkent, Uzbekistan",
      copyright: "© 2025 Happy Fly. All rights reserved.",
      slogan: "Travel makes life brighter",
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.RU;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "RU",
  setLang: () => {},
  t: translations.RU,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("RU");

  useEffect(() => {
    const saved = localStorage.getItem("happy_fly_lang") as Language;
    if (saved && (saved === "RU" || saved === "UZ" || saved === "EN")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("happy_fly_lang", newLang);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
