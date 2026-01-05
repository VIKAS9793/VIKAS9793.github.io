# Vikas Sahani - AI Product Manager

> Balanced portfolio design: Professional polish with constraint-first thinking

<div align="center">

## **[VIEW LIVE PORTFOLIO →](https://myportfoliohubexpo.netlify.app/)**

[![Netlify](https://img.shields.io/badge/Netlify-Live-00C7B7?style=for-the-badge&logo=netlify)](https://myportfoliohubexpo.netlify.app/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Mirror-success?style=for-the-badge&logo=github)](https://vikas9793.github.io)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)

</div>

## Features

### Design Philosophy (2025 Redesign)
- **Balanced Approach** - Industry best practices meet minimalist principles
- **Dark/Light Hybrid** - Hero & About (dark), Skills/Projects (light cream)
- **Constraint-First** - Content clarity over visual flash
- **Performant** - ~18KB bundle, Speed Index 95/100
- **Accessible** - WCAG compliant, reduced motion support
- **Mobile-First** - Responsive design for all devices

### Core Sections
- **Hero** - Clean intro with subtle gradient accent and profile photo
- **Skills** - Categorized cards (Title Case + consistent formatting)
- **Case Study** - Netflix PM methodology (problem → constraints → decision)
- **Projects** - Clean grid with GitHub links
- **About** - Banking transition story, constraint-aware approach

### Performance (Lighthouse Production)
- **Speed Index:** 2.9s (Score: 95) ✅
- **FCP:** 2.9s (Score: 52) ⚠️
- **LCP:** 4.2s (Score: 43) 🔴
- **Bundle Size:** ~18KB (gzipped)

## Tech Stack

### Core
- **React 19** - Latest React with concurrent features
- **TypeScript 5.9** - Type-safe development
- **Vite 7** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling

### Design System
- **Colors** - Dark gray (#121212), Cream (#f8f6f1), Google Blue (#1a73e8)
- **Typography** - Inter font for readability
- **Animations** - Subtle scroll reveals, no heavy carousels
- **Theme** - Hybrid dark/light for visual interest

## Quick Start

```bash
# Clone the repository
git clone https://github.com/VIKAS9793/VIKAS9793.github.io.git
cd VIKAS9793.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Deployed automatically via GitHub Actions to GitHub Pages.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx               # Dark hero with profile photo
│   ├── SkillsSection.tsx      # Categorized skill cards
│   ├── CaseStudy.tsx          # Constraint-focused methodology
│   ├── ProjectsSection.tsx    # Clean grid layout
│   ├── ContactSection.tsx
│   └── ui/
│       ├── FloatingNav.tsx    
│       ├── PillButton.tsx     
│       └── FeatureCard.tsx
├── data/
│   ├── portfolio.ts           # Portfolio data
│   └── skills.ts              # Skills data (Title Case)
└── index.css                  # Global styles + Tailwind
```

## Customization

Edit `src/data/portfolio.ts` for personal info and `tailwind.config.js` for design tokens.

## Redesign Notes (Jan 2025)

This version balances **2025 PM portfolio best practices** (minimalist, case-study-driven) with **professional polish**:
- Clean typography and one accent color
- Dark/light sections for visual interest
- Constraint-explicit case study structure
- No animations or metric hype

See `implementation_plan.md` in artifacts for full research summary.

## License

This project is open source under the [MIT License](LICENSE).

---

## Contact

**Vikas Sahani**
- Portfolio: [https://myportfoliohubexpo.netlify.app](https://myportfoliohubexpo.netlify.app)
- Email: vikassahani17@gmail.com
- LinkedIn: [Vikas Sahani](https://www.linkedin.com/in/vikas-sahani-727420358)
- GitHub: [@VIKAS9793](https://github.com/VIKAS9793)

---

<div align="center">
  <strong>⭐ Star this repo if you like it!</strong>
  <br>
  Made with React & Tailwind CSS
</div>
