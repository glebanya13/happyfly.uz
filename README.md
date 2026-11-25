# ✈️ Happy Fly Travel & Logistics (happyfly.uz)

A high-performance modern web platform and interactive client portal designed for **Happy Fly Travel & Logistics** (Tashkent, Uzbekistan). The platform provides a responsive, pixel-perfect user experience featuring seamless trilingual localization (Russian, Uzbek, and English), dynamic destination showcases, a 3-step online payment & currency conversion calculator, interactive tour booking modals with smart Uzbek phone formatting, and zero-latency static export deployed to Google Firebase Hosting.

---

## 🚀 Features

- **🌍 Trilingual Localization Engine**:
  - Full support for **Russian (`RU`)**, **Uzbek (`UZ`)**, and **English (`EN`)**.
  - Centralized `LanguageContext` enabling instantaneous zero-reloading UI translation switches across headers, cards, modals, widgets, and footers.
- **🎨 Premium Visual Design & Glassmorphism**:
  - Warm cream luxury palette (`#FAF7F2`) combined with deep navy (`#07152B`) and gold accent tones (`#D4A045`).
  - High-end typography pairing serif display headings with modern, clean sans-serif interface elements.
  - Interactive trust indicators showcasing core agency commitments: *Personalized Selection*, *24/7 Step-by-Step Support*, and *Comfortable Journeys*.
- **💳 Interactive 3-Step Payment Calculator**:
  - **Step 1: Service Selection**: Choose between Airline Tickets, VIP Vacation Packages, Hotel Bookings, Visa Assistance, or Cargo & Logistics.
  - **Step 2: Dual-Currency Calculator**: Real-time conversion and calculation between US Dollars (`USD $`) and Uzbekistani Som (`UZS`).
  - **Step 3: Multi-Provider Gateway**: Integrated payment system selector supporting **UZCARD**, **HUMO**, **Visa**, **Mastercard**, **UnionPay**, and **PayPal**.
- **🗺️ Dynamic Destination & Tour Catalog**:
  - Curated travel cards for top destinations (Dubai, Istanbul, Antalya, Sharm El-Sheikh, Bali, and European tours).
  - Rich interactive `TourModal` displaying detailed itineraries, included amenities, departure dates, pricing, and rapid booking actions.
- **📱 Smart Lead Generation & Phone Masking**:
  - Mobile-first lead capture form with automated country code lock (`+998`) and auto-formatted telephone masking (`(90) 123-45-67`).
  - Client-side validation with responsive submission confirmation and ready-to-hook Telegram Bot / CRM API endpoints.
- **⚡ Static Export & Global Edge Deployment**:
  - Next.js 16 Turbopack static export (`output: 'export'`) generating pre-rendered HTML/CSS/JS bundles.
  - Zero server overhead with sub-second global CDN delivery via Google Firebase Hosting.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.4.6](https://nextjs.org/) (App Router, Turbopack, Static HTML Export)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) & [React 19](https://react.dev/)
- **Styling & UI**: [Tailwind CSS 3.4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State & i18n**: React Context API (`LanguageContext.tsx`)
- **Hosting & Infrastructure**: [Firebase Hosting](https://firebase.google.com/docs/hosting) (Google Cloud Global Edge CDN)

---

## 📦 Installation

### Prerequisites
- [Node.js](https://nodejs.org/) v18.18+ or v20+ (Node.js 20+ LTS recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js) or [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)
- [Firebase CLI](https://firebase.google.com/docs/cli) (optional, for direct deployment)

### Step-by-Step Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/glebanya13/happyfly.uz.git
   cd happyfly.uz
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application with hot module replacement (Turbopack).

---

## 💻 Usage

### Development Server
Start the Next.js development server with Turbopack acceleration:
```bash
npm run dev
```

### Production Build
Generate an optimized, pre-rendered static export in the `out/` directory:
```bash
npm run build
```

### Firebase Hosting Deployment
Deploy the static export directly to Google Firebase Hosting CDN:
```bash
# 1. Login to Firebase (first-time only)
firebase login

# 2. Deploy static assets to Firebase Hosting
firebase deploy --only hosting
```

### Code Quality & Linting
Validate codebase formatting and TypeScript standards:
```bash
npm run lint
```

---

## 📂 Project Structure

```markdown
happyfly.uz/
|-- .firebaserc                     # Firebase active project aliases and targets
|-- firebase.json                   # Firebase Hosting routing and static export rules
|-- next.config.ts                  # Next.js configuration (static export, asset optimization)
|-- package.json                    # Project dependencies, build scripts, and metadata
|-- postcss.config.mjs              # PostCSS configuration for Tailwind CSS
|-- tailwind.config.ts              # Tailwind CSS theme configuration (colors, fonts, glassmorphism)
|-- tsconfig.json                   # Strict TypeScript compiler options and path aliases
|-- public/                         # Public static assets, vector graphics, and brand favicons
|    |-- favicon.ico                # Website browser tab favicon
|    |-- globe.svg                  # Vector illustrations
|    `-- ...
|-- src/
|    |-- app/
|    |    |-- globals.css           # Global typography, color variables, and custom scrollbar rules
|    |    |-- layout.tsx            # Root HTML layout wrapper with LanguageProvider injection
|    |    `-- page.tsx              # Main single-page application orchestrating all sections
|    |-- components/                # Modular, reusable presentation and interactive components
|    |    |-- Footer.tsx            # Comprehensive footer with contacts, licenses, and links
|    |    |-- Header.tsx            # Sticky navigation bar with mobile drawer & language switcher
|    |    |-- HeroHome.tsx          # High-impact hero section with primary call-to-actions
|    |    |-- LeadBookingSection.tsx# Tour booking lead capture form with Uzbek phone mask
|    |    |-- Logo.tsx              # SVG brand logo icon and typography mark
|    |    |-- OnlinePaymentWidget.tsx# 3-step interactive payment gateway & currency calculator
|    |    |-- PaymentLogos.tsx      # SVG partner badge grid (Uzcard, Humo, Visa, Mastercard, etc.)
|    |    |-- ServiceCards.tsx      # Interactive cards for agency services and popular tour routes
|    |    |-- TourModal.tsx         # Modal dialog for exploring tour details and fast booking
|    |    `-- TrustBar.tsx          # Value proposition bar with gold iconography and metrics
|    `-- context/
|         `-- LanguageContext.tsx   # React Context providing translations (RU/UZ/EN) & switcher
`-- README.md                       # Complete documentation, architecture guide, and setup manual
```

---

## 🌐 Live Demo & Deployment

- **Production Live URL (Firebase Edge CDN)**: [https://happy-fly-travel.web.app](https://happy-fly-travel.web.app)
- **Alternative Mirror**: [https://happy-fly-travel.firebaseapp.com](https://happy-fly-travel.firebaseapp.com)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository: `git fork https://github.com/glebanya13/happyfly.uz.git`
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "feat: Add new booking notification system"`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request.

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 📬 Contact

For questions, partnership inquiries, or technical support:
- **Author**: [@glebanya13](https://github.com/glebanya13)
- **Email**: [glebanya.com@gmail.com](mailto:glebanya.com@gmail.com)
- **Issues**: [GitHub Issues](https://github.com/glebanya13/happyfly.uz/issues)
- **Official Website**: [happyfly.uz](https://happy-fly-travel.web.app)
