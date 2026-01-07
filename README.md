# Vikas Sahani - AI Product Manager Portfolio

A modern, responsive portfolio website built with **Google Developer Program (GDG) design language** — featuring neo-brutalist aesthetics, thick black borders, vibrant section backgrounds, and massive typography.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://vikas9793.github.io/)
[![Built with React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## 🎨 Design Language

This portfolio implements the **Google Developer Program (GDG) design system** with:

- **Neo-Brutalist Aesthetics:** Thick black borders (2px-4.8px), high-contrast colors
- **Vibrant Backgrounds:** Alternating yellow (#f9e6a9) and blue (#d2e3fc) sections
- **Massive Typography:** 100px hero headings, 72px section titles
- **Pill-Shaped Buttons:** 100px border-radius for all CTAs
- **32px Card Radius:** Consistent rounded corners across all cards
- **80-96px Section Padding:** Generous vertical spacing

---

## ✨ Features

### Core Sections
- **Hero:** 100px name typography, 4.8px black-bordered profile photo
- **Expertise:** Yellow background with black-bordered skill cards (3-column grid)
- **Case Study:** Dark theme YouTube video card with halo glow effect
- **Projects:** Light blue background, 3-column grid with 3px black borders
- **About:** Clean white section with certification badges
- **Contact:** Yellow background with bordered contact card

### UI Components
- **Floating Navigation:** Smooth scroll to sections
- **Scroll Button:** Dynamic up/down arrows for navigation
- **Responsive Design:** Mobile-first, optimized for all devices

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18 + TypeScript |
|| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 4.0 |
| **Fonts** | Google Sans Flex (variable), Inter |
| **Deployment** | GitHub Pages |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/VIKAS9793/VIKAS9793.github.io.git

# Navigate to project directory
cd VIKAS9793.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # 100px typography, bordered photo
│   ├── SkillsSection.tsx     # Yellow bg, skill cards
│   ├── CaseStudy.tsx         # YouTube video card
│   ├── ProjectsSection.tsx   # 3-column project grid
│   ├── ContactSection.tsx    # Contact card with CTAs
│   └── ui/
│       ├── FloatingNav.tsx   # Section navigation
│       └── ScrollButton.tsx  # Up/down scroll button
├── data/
│   └── portfolio.ts          # Personal info, projects
├── index.css                 # Global styles, GDG utilities
└── App.tsx                   # Main component
```

---

## 🎯 Design Specifications

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1a73e8` | CTA buttons, links |
| Yellow | `#f9e6a9` | Skills, Contact backgrounds |
| Light Blue | `#d2e3fc` | Projects background |
| Dark Surface | `#202124` | Case Study section |
| Black | `#000000` | All borders |

### Typography Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 100px | 500 | 100px |
| H2 (Section) | 72px | 500 | 80px |
| H3 (Cards) | 28px | 500 | 36px |
| Body XL | 20px | 400 | 32px |
| Body | 16px | 400 | 24px |

### Border Widths
- **Hero Photo:** 4.8px solid black
- **Project Cards:** 3px solid black
- **Skill Cards:** 2px solid black

---

## 📱 Performance & Optimization

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Mobile-First:** Fully responsive, touch-optimized
- **Smooth Scrolling:** Intersection Observer for animations
- **Optimized Images:** WebP format, lazy loading

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## ⚖️ Trademark & Copyright Notices

### Design Inspiration

This portfolio is **inspired by** the Google Developer Program website design language. The implementation is an independent interpretation of neo-brutalist design patterns.

### Important Disclaimers

- **Google Sans Flex** is a proprietary font owned by Google LLC. Usage is limited to personal and educational purposes. For commercial use, obtain proper licensing.
- **"Google Developer Program"** and **"Google"** are registered trademarks of Google LLC.
- This project is **NOT affiliated with, endorsed by, or sponsored by Google LLC**.
- All brand names and trademarks mentioned are the property of their respective owners.

### Font Licensing

Google Sans Flex font is used under Google Fonts' licensing terms for personal/educational purposes. Commercial projects should verify licensing requirements.

---

## 👤 Author

**Vikas Sahani**  
AI Product Manager | Certified IBM AI PM | Google Project Management

- **Email:** [vikassahani17@gmail.com](mailto:vikassahani17@gmail.com)
- **LinkedIn:** [vikas-sahani-727420358](https://www.linkedin.com/in/vikas-sahani-727420358)
- **GitHub:** [VIKAS9793](https://github.com/VIKAS9793)

---

## 🙏 Acknowledgments

- Design system inspired by [developers.google.com/program](https://developers.google.com/program)
- Google Sans Flex font from [Google Fonts](https://fonts.google.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Built with [Vite](https://vitejs.dev/) + [React](https://react.dev/)

---

**Built with constraint-first thinking** 🚀
