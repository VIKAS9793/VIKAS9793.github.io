# Vikas Sahani - AI Product Manager Portfolio

A modern, responsive portfolio website featuring a **vibrant social media aesthetic** inspired by Google's Design Language — with speech bubbles, decorative elements, thick black borders, and punchy typography.

<div align="center">
  
## 🚀 [View Live Portfolio](https://myportfoliohubexpo.netlify.app)

[![Netlify Live](https://img.shields.io/badge/Netlify-Live-00C7B7?style=for-the-badge&logo=netlify)](https://myportfoliohubexpo.netlify.app)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-181717?style=for-the-badge&logo=github)](https://vikas9793.github.io/)
[![Inspired by Google](https://img.shields.io/badge/Inspired_by-Google_Design-4285F4?style=for-the-badge&logo=google)](https://developers.google.com/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100-00C853?style=for-the-badge&logo=lighthouse)](https://vikas9793.github.io/)
[![Performance](https://img.shields.io/badge/Performance-100-00C853?style=for-the-badge)](https://vikas9793.github.io/)

</div>

---

## 🎨 Design Philosophy

This portfolio features a **vibrant social media story aesthetic** inspired by Google's Design Language:

- **🎯 Speech Bubbles:** Colorful speech bubbles for key messages (pink, cyan, green, orange)
- **✨ Decorative Elements:** Hand-drawn arrows, stars, thumbs up, plus signs
- **🖌️ Thick Black Borders:** Consistent 2-6px solid black outlines on all elements
- **🌈 Vibrant Colors:** High-saturation palette (pink, cyan, yellow, orange, green)
- **💪 Punchy Typography:** Arial Black, 700-900 font weights, tight letter spacing
- **📱 Social Media Aesthetic:** Layered, energetic, modern design

> **Design Credits:** Inspired by Google's Design Language  
> **Trademark Notice:** Google and Google Design Language are trademarks of Google LLC

---

## 🛠️ Tech Stack

[![Built with React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 4.0 |
| **Fonts** | Arial Black (punchy), Google Sans Flex, Inter |
| **Deployment** | GitHub Pages |

---

## ✨ Features

### 🎨 Vibrant Design System

**Color Palette:**
- **Pink** (#FF69B4) - Product Strategy, decorative elements
- **Cyan** (#00D4FF) - AI/ML content, primary CTAs
- **Yellow** (#FFD700) - Decorative icons, highlights
- **Orange** (#FFA500) - Domain expertise, badges
- **Green** (#7FFF00) - Contact section, certifications
- **Black** (#000000) - All borders (2-6px)

**Components:**
- `SpeechBubble` - 7 color variants, 3 sizes, 4 tail directions
- `DecorativeArrow` - 8 directions, hand-drawn style
- `SocialIcons` - Stars, thumbs up, plus signs, puzzle pieces

### 📱 Core Sections

1. **Hero Section**
   - Speech bubbles: "Product Manager" (pink), "AI & ML Focus" (cyan)
   - Decorative arrow (yellow) pointing to CTAs
   - Social icons: stars, plus signs, thumbs up
   - Vibrant achievement card with orange badge

2. **Skills/Expertise Section**
   - Color-coded category cards (pink, cyan, orange)
   - Decorative icons (thumbs up, star, puzzle)
   - Speech bubble titles
   - 5px black borders

3. **Projects Section**
   - Color coding by category (AI: cyan, Product: pink, Enterprise: orange)
   - Speech bubbles for project titles
   - Vibrant tech tags
   - Decorative icons on cards

4. **Achievements Section**
   - Vibrant metric cards (cyan, green, yellow, pink)
   - Color-coded deliverable tags
   - Large decorative star
   - Pink CTA button

5. **About Section**
   - Vibrant certification badges (cyan, green, yellow)
   - Decorative star icon
   - Pink/10% background

6. **Contact Section**
   - Green speech bubble: "Get in Touch"
   - Vibrant contact cards (cyan, pink, yellow)
   - Decorative star
   - Cyan "Send Email" CTA

7. **Footer**
   - Pink/10% background
   - 5px black border
   - Google Design Language attribution

### 🎯 UI Components

- **Floating Navigation:** Smooth scroll to sections
- **Scroll Button:** Dynamic up/down arrows
- **Speech Bubbles:** Reusable component with 7 colors
- **Decorative Arrows:** 8-directional hand-drawn arrows
- **Social Icons:** 6 icon set with thick outlines
- **Responsive Design:** Mobile-first, optimized for all devices

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
│   ├── Hero.tsx                    # Speech bubbles, decorative elements
│   ├── SkillsSection.tsx           # Color-coded skill categories
│   ├── ProjectsSection.tsx         # Vibrant project cards
│   ├── AchievementsSection.tsx     # Colorful metrics & badges
│   ├── ContactSection.tsx          # Vibrant contact cards
│   ├── CaseStudy.tsx               # YouTube video card
│   └── ui/
│       ├── SpeechBubble.tsx        # NEW: Speech bubble component
│       ├── DecorativeArrow.tsx     # NEW: Arrow component
│       ├── SocialIcons.tsx         # NEW: Icon set component
│       ├── FloatingNav.tsx         # Section navigation
│       └── ScrollButton.tsx        # Up/down scroll button
├── data/
│   └── portfolio.ts                # Personal info, projects
├── index.css                       # Global styles, punchy typography
├── App.tsx                         # Main component
└── types.ts                        # TypeScript definitions
```

---

## 🎯 Design Specifications

### Vibrant Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Pink** | `#FF69B4` | Product Strategy, speech bubbles |
| **Cyan** | `#00D4FF` | AI/ML content, primary CTAs |
| **Yellow** | `#FFD700` | Decorative icons, highlights |
| **Orange** | `#FFA500` | Domain expertise, badges |
| **Green** | `#7FFF00` | Contact section, certifications |
| **Red** | `#FF5757` | Accent elements |
| **Black** | `#000000` | All borders (2-6px) |

### Punchy Typography Scale

| Element | Font | Size | Weight | Letter Spacing |
|---------|------|------|--------|----------------|
| Punchy XL | Arial Black | 48px | 900 | -0.02em |
| Punchy LG | Arial Black | 32px | 800 | -0.015em |
| Punchy MD | Arial Black | 24px | 700 | -0.01em |
| Punchy SM | Arial Black | 18px | 700 | -0.01em |

### Border Widths

- **Punchy SM:** 2px solid black
- **Punchy MD:** 3px solid black
- **Punchy LG:** 5px solid black
- **Punchy XL:** 6px solid black

---

## 📱 Performance & Optimization

### Lighthouse Scores ✅

| Category | Score | Status |
|----------|-------|--------|
| **Performance** | 100/100 | 🟢 Excellent |
| **Accessibility** | 98/100 | 🟢 Excellent |
| **Best Practices** | 100/100 | 🟢 Excellent |
| **SEO** | 100/100 | 🟢 Excellent |

### Core Web Vitals

- **First Contentful Paint (FCP):** 392ms
- **Largest Contentful Paint (LCP):** 424ms
- **Cumulative Layout Shift (CLS):** 0.00
- **Total Blocking Time (TBT):** ~0ms
- **Load Time:** 841ms

### Optimizations

- ✅ **Mobile-First:** Fully responsive, touch-optimized
- ✅ **Smooth Scrolling:** Intersection Observer for animations
- ✅ **Optimized Build:** Vite + React + Tailwind CSS
- ✅ **Zero Performance Impact:** Vibrant design uses pure CSS
- ✅ **Inline SVG:** No HTTP requests for decorative icons
- ✅ **Perfect CLS:** Zero layout shift

---

## 🎨 Component API

### SpeechBubble

```tsx
<SpeechBubble 
  color="pink" | "cyan" | "green" | "yellow" | "orange" | "red" | "blue"
  size="sm" | "md" | "lg"
  tailDirection="top-left" | "top-right" | "bottom-left" | "bottom-right" | "none"
>
  Your content here
</SpeechBubble>
```

### DecorativeArrow

```tsx
<DecorativeArrow 
  direction="up" | "down" | "left" | "right" | "up-right" | "up-left" | "down-right" | "down-left"
  color="#FFD700"
  size="sm" | "md" | "lg"
/>
```

### SocialIcons

```tsx
<StarIcon color="#FFD700" size={32} />
<ThumbsUpIcon color="#FFD700" size={32} />
<PlusSignIcon color="#00D4FF" size={24} />
<PuzzlePieceIcon color="#FFA500" size={32} />
<CircleIcon color="#FF69B4" size={24} />
<CloudIcon color="#00D4FF" size={28} />
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## ⚖️ Attribution & Licensing

### Design Inspiration

> **This portfolio is inspired by Google's Design Language**  
> The vibrant aesthetic builds upon Google's design principles while adding unique social media elements.

### Trademark Notices

- **Google®** and **Google Design Language™** are registered trademarks of Google LLC
- This project respectfully acknowledges Google's design innovation
- **Not affiliated with Google LLC** - This is an independent portfolio project

### Font Licensing

- **Google Sans Flex:** Used under Google Fonts' licensing terms for personal/educational purposes
- **Arial Black:** System font, widely available
- **Inter:** Open source font from [rsms.me/inter](https://rsms.me/inter/)

### Open Source

This project uses open source technologies:
- React (MIT License)
- Vite (MIT License)
- Tailwind CSS (MIT License)
- TypeScript (Apache 2.0 License)

---

## 👤 Author

**Vikas Sahani**  
AI Product Manager | Certified IBM AI PM | Google Project Management

- **Email:** [vikassahani17@gmail.com](mailto:vikassahani17@gmail.com)
- **LinkedIn:** [vikas-sahani-727420358](https://www.linkedin.com/in/vikas-sahani-727420358)
- **GitHub:** [VIKAS9793](https://github.com/VIKAS9793)
- **Portfolio:** [vikas9793.github.io](https://vikas9793.github.io/)

---

## 🙏 Acknowledgments

- Design foundation inspired by Google's Design Language
- Vibrant transformation: Social media story aesthetic
- Google Sans Flex font from [Google Fonts](https://fonts.google.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Built with [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

## 📊 Project Stats

- **Files Changed:** 11
- **Lines Added:** 792
- **Components Created:** 3
- **Sections Transformed:** 7
- **Lighthouse Score:** 99.5/100
- **Load Time:** 841ms
- **Development Time:** ~5 hours

---

## 🎯 Design Evolution

### Foundation (Google Design Language)
- Professional, clean aesthetic
- Google brand colors
- Precise borders (1.6-4.8px)
- Standard font weights (400-700)

### Enhancement (Vibrant Social Media Aesthetic)
- Energetic, punchy visual style
- Vibrant color palette (pink, cyan, yellow, orange, green)
- Bold borders (2-6px thick black)
- Heavy font weights (700-900)
- Speech bubbles, arrows, decorative icons

**Result:** A unique portfolio that combines Google's design principles with vibrant social media aesthetics!

---

**Inspired by Google's Design Language** 🚀✨
