import React from "react";

export function VisaLogo({ className = "h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38.8 3.5L26.3 31.5H18.2L11.1 9.8C10.7 8.2 10.3 7.6 9.1 6.9C6.9 5.8 3.2 4.7 0 4L0.2 3.5H14.1C15.9 3.5 17.5 4.7 17.9 6.8L21.3 24.8L29.3 3.5H38.8ZM72.6 22.5C72.7 13.9 60.7 13.4 60.8 9.6C60.8 8.4 62 7.2 64.5 6.9C65.8 6.7 69.3 6.6 72.8 8.2L74.2 1.6C72.3 0.9 69.9 0.3 66.8 0.3C58.7 0.3 53 4.6 52.9 10.7C52.8 15.3 56.9 17.9 60 19.4C63.2 21 64.3 22 64.3 23.4C64.3 25.5 61.8 26.5 59.5 26.5C55.3 26.5 52.9 25.8 49.9 24.5L48.5 31.2C50.5 32.1 54.3 32.9 58.2 32.9C66.7 32.9 72.6 28.7 72.6 22.5ZM93.8 31.5H100L94.6 3.5H89C87.2 3.5 85.8 4.5 85.1 6.1L72.7 31.5H80.8L82.4 27.1H92.3L93.8 31.5ZM84.6 21.1L88.7 10.1L91.1 21.1H84.6ZM52.2 3.5L45.8 31.5H38.1L44.5 3.5H52.2Z"
        fill="#00579F"
      />
    </svg>
  );
}

export function MastercardLogo({ className = "h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="16" r="14" fill="#EB001B" />
      <circle cx="33" cy="16" r="14" fill="#F79E1B" fillOpacity="0.9" />
      <path
        d="M25 6.1C28.4 8.7 30.6 12.1 30.6 16C30.6 19.9 28.4 23.3 25 25.9C21.6 23.3 19.4 19.9 19.4 16C19.4 12.1 21.6 8.7 25 6.1Z"
        fill="#FF5F00"
      />
    </svg>
  );
}

export function PaypalLogo({ className = "h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3 2.5H6.2C5.5 2.5 4.9 3 4.8 3.7L0.8 28.8C0.7 29.3 1.1 29.8 1.6 29.8H6.9C7.4 29.8 7.8 29.4 7.9 28.9L9.1 21.4C9.2 20.7 9.8 20.2 10.5 20.2H14.1C20.6 20.2 24.6 17.1 25.6 10.9C26.1 7.7 25.1 5.4 22.8 4.2C21.5 3.1 19.6 2.5 17.3 2.5Z"
        fill="#003087"
      />
      <path
        d="M26.4 10.5C25.5 16.2 21.7 19.1 15.6 19.1H12.2L10.3 31.1C10.2 31.6 10.6 32 11.1 32H16C16.5 32 16.9 31.6 17 31.1L18.1 24.2C18.2 23.6 18.7 23.1 19.4 23.1H20.8C26.7 23.1 30.3 20.3 31.2 14.6C31.6 11.8 30.8 9.7 28.8 8.5C27.9 9.3 27.1 10 26.4 10.5Z"
        fill="#0079C1"
      />
      <path
        d="M24.8 7.8C24.3 7.6 23.6 7.4 22.8 7.3C22.4 7.2 21.9 7.2 21.4 7.2H12.6C12.1 7.2 11.7 7.5 11.6 8L9.9 18.7H13.6C19.7 18.7 23.5 15.8 24.4 10.1C24.8 8.8 24.7 8.1 24.8 7.8Z"
        fill="#002269"
        opacity="0.3"
      />
      <text x="36" y="22" fill="#003087" fontFamily="sans-serif" fontWeight="bold" fontSize="18">
        PayPal
      </text>
    </svg>
  );
}

export function UnionPayLogo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center rounded overflow-hidden shadow-sm ${className}`}>
      <div className="bg-[#DF1925] px-2 py-0.5 text-[10px] font-bold text-white tracking-tighter">
        Union
      </div>
      <div className="bg-[#004B87] px-2 py-0.5 text-[10px] font-bold text-white tracking-tighter">
        Pay
      </div>
      <div className="bg-[#007A78] px-1 py-0.5 text-[9px] font-bold text-white">
        银联
      </div>
    </div>
  );
}

export function UzcardLogo({ className = "h-6" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      {/* Uzbek iconic U icon */}
      <div className="w-6 h-6 rounded-md bg-[#004A99] flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
        <span className="transform -translate-y-px">U</span>
      </div>
      <span className="font-bold text-[#004A99] tracking-wider text-sm">
        UZCARD
      </span>
    </div>
  );
}

export function HumoLogo({ className = "h-6" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      {/* Humo Golden feather mark */}
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#E5A823]" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5S10 17.33 10 16.5V11c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5.5zm4-3c0 .83-.67 1.5-1.5 1.5S14 14.33 14 13.5V9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v4.5z" />
      </svg>
      <span className="font-black text-[#D39316] tracking-widest text-sm">
        HUMO
      </span>
    </div>
  );
}

export function ThreeDSecureLogo({ className = "h-7" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-gray-200 shadow-sm ${className}`}
      title="Защита платежей 3D-Secure (Verified by Visa / Mastercard SecureCode)"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#059669] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[10px] font-extrabold text-[#07152B] tracking-tight">
          3D-SECURE
        </span>
        <span className="text-[8px] font-semibold text-[#059669] uppercase tracking-wider">
          Verified
        </span>
      </div>
    </div>
  );
}
