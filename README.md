# Vikas Sahani - AI Product Manager

> Clean, modern portfolio inspired by Google Developer Program and DevFest design aesthetics.

<div align="center">

## **[VIEW LIVE PORTFOLIO →](https://myportfoliohubexpo.netlify.app/)**

[![Netlify](https://img.shields.io/badge/Netlify-Live-00C7B7?style=for-the-badge&logo=netlify)](https://myportfoliohubexpo.netlify.app/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Mirror-success?style=for-the-badge&logo=github)](https://vikas9793.github.io)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)

</div>

## Features

### Core Design
- **Google DevFest-Inspired Design** - Clean, vibrant UI with playful elements
- **Section-Based Layout** - Distinct colored backgrounds (White, Dark, Cream, Blue)
- **Floating Navigation** - Pill-style tab bar that appears on scroll
- **Decorative Blurred Blobs** - DevFest-style colorful background elements
- **Responsive Design** - Perfect on all devices
- **Accessible** - WCAG compliant with reduced motion support

### Enhanced UX (v2.0)
- **Metric Tooltips** - Hover on Hero stats to see detailed context
- **Netflix Case Study** - Full narrative with problem, methodology, insights
- **Value Proposition Section** - "What I'm Best At" with 4 core strengths
- **Skills Primary/Secondary** - 8 primary visible, rest expandable with Expert/Advanced/Proficient labels
- **Certifications Collapse** - Top 6 visible, "View All" expands rest with category tags
- **Outcome-Focused Tagline** - "Shipping AI products that move metrics"

### Interactive Components
- **Circular Skill Progress** - SVG-based circular progress indicators
- **Project Carousel** - Horizontal scroll with navigation arrows
- **Interactive Hover Cards** - Scale and glow effects on hover

## Tech Stack

### Core
- **React 19** - Latest React with concurrent features
- **TypeScript 5.9** - Type-safe development
- **Vite 7** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling

### Design System
- **Google Brand Colors** - Blue (#4285f4), Green (#34a853), Yellow (#fbbc04), Red (#ea4335)
- **Inter Font** - Clean, modern typography
- **Material 3 Pill Containers** - Rounded corners with soft shadows
- **Circular Progress Indicators** - SVG-based skill visualization

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
│   ├── Hero.tsx               # Hero with banner + stat tooltips
│   ├── ValueProposition.tsx   # "What I'm Best At" section
│   ├── SkillsSection.tsx      # Primary/Secondary skills with labels
│   ├── CaseStudy.tsx          # Netflix PM case study page
│   ├── ProjectsSection.tsx    # Carousel with nav arrows
│   ├── CertificationsSection.tsx # Collapsible with category tags
│   ├── ContactSection.tsx
│   └── ui/
│       ├── FloatingNav.tsx    # Floating pill navigation
│       ├── PillButton.tsx     # Google-style buttons
│       └── FeatureCard.tsx
├── data/
│   ├── portfolio.ts           # Portfolio data
│   └── skills.ts              # Skills data
└── index.css                  # Global styles + Tailwind
```

## Customization

Edit `src/data/portfolio.ts` for personal info and `tailwind.config.js` for design tokens.

## Performance

- **Lighthouse Score**: 95+
- **Bundle Size**: ~50KB JS + ~39KB CSS (gzipped: ~21KB)
- **No heavy animations** - Performant CSS transitions

## License

This project is open source under the [MIT License](LICENSE).

---

## Trademark & Copyright Notices

This portfolio uses design patterns and visual elements inspired by publicly available Google design guidelines. The following trademarks and copyrights are acknowledged:

- **Google**, **Google Developer Program**, **Google DevFest**, **Material Design**, and the Google "G" logo are trademarks of **Google LLC**.
- The design inspiration is based on publicly available Google design resources and does not imply endorsement, sponsorship, or affiliation with Google LLC.
- **Google Brand Colors** (Blue #4285f4, Green #34a853, Yellow #fbbc04, Red #ea4335) are used for educational and personal portfolio purposes in accordance with [Google's Brand Guidelines](https://about.google/brand-resource-center/).
- All other product names, logos, and brands are property of their respective owners.

This portfolio is an independent personal project and is **not affiliated with, endorsed by, or sponsored by Google LLC**.

---

## Contact

**Vikas Sahani**
- Portfolio: [https://vikas9793.github.io](https://vikas9793.github.io)
- Email: vikassahani17@gmail.com
- LinkedIn: [Vikas Sahani](https://www.linkedin.com/in/vikas-sahani-727420358)
- GitHub: [@VIKAS9793](https://github.com/VIKAS9793)

---

<div align="center">
  <strong>⭐ Star this repo if you like it!</strong>
  <br>
  Made with React & Tailwind CSS
</div>
