import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "gold";
  className?: string;
}

export default function Logo({ variant = "gold", className = "" }: LogoProps) {
  const isGold = variant === "gold";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Icon: stylized globe + plane ring */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="url(#goldRingGrad)"
            strokeWidth="3.5"
            strokeDasharray="6 3"
          />
          {/* Tilted orbit */}
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="18"
            transform="rotate(-25 50 50)"
            stroke="url(#goldRingGrad)"
            strokeWidth="3"
            opacity="0.9"
          />
          {/* Latitude line */}
          <path
            d="M 12 50 Q 50 25 88 50"
            stroke="url(#goldRingGrad)"
            strokeWidth="2"
            opacity="0.6"
          />
          {/* Stylized jet plane */}
          <path
            d="M 30 70 L 52 48 L 48 38 L 56 44 L 75 35 L 68 55 L 60 52 L 54 62 L 50 59 L 36 68 Z"
            fill="url(#goldPlaneGrad)"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
          />
          <defs>
            <linearGradient id="goldRingGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F5D48B" />
              <stop offset="0.5" stopColor="#D4A045" />
              <stop offset="1" stopColor="#9C6B1F" />
            </linearGradient>
            <linearGradient id="goldPlaneGrad" x1="30" y1="35" x2="75" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF2D6" />
              <stop offset="0.4" stopColor="#F5D48B" />
              <stop offset="0.8" stopColor="#D4A045" />
              <stop offset="1" stopColor="#A87422" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.18em] font-bold text-lg md:text-xl leading-none ${
            isGold
              ? "bg-gradient-to-r from-[#F5D48B] via-[#D4A045] to-[#B88228] bg-clip-text text-transparent"
              : "text-white"
          }`}
        >
          HAPPY FLY
        </span>
        <span
          className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#C4A060] font-medium mt-1 leading-none"
        >
          TRAVEL &amp; LOGISTICS
        </span>
      </div>
    </Link>
  );
}
