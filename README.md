# 🚀 Vikas Sahani - AI Product Visionary

> Modern, high-performance portfolio showcasing AI/ML product leadership and strategic consulting expertise.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github)](https://vikas9793.github.io)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)

## ✨ Features

- 🎬 **Cinematic Intro Animation** - Door-slide reveal with name and role
- ⚡ **60fps Performance** - GPU-accelerated CSS animations
- 🎨 **Modern Design** - Inspired by Apple, Nike, and premium brands
- 📱 **Fully Responsive** - Perfect on all devices
- ♿ **Accessible** - WCAG compliant with `prefers-reduced-motion` support
- 🌙 **Dark Theme** - Professional dark aesthetic
- 🖼️ **High-Quality Imagery** - 4K Unsplash backgrounds
- 🎯 **Optimized SEO** - Meta tags and structured data

## 🛠️ Tech Stack

### Core
- **React 19** - Latest React with concurrent features
- **TypeScript 5.9** - Type-safe development
- **Vite 7** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling

### Animations
- **Framer Motion 12** - Production-ready animations
- **GSAP 3** - Professional-grade scroll animations
- **CSS Keyframes** - GPU-accelerated transitions

### 3D & Graphics
- **Three.js** - 3D scene rendering (optional, lazy-loaded)
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers

### Development
- **ESLint** - Code quality
- **PostCSS** - CSS processing
- **Terser** - Production minification

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/VIKAS9793/VIKAS9793.github.io.git

# Navigate to directory
cd VIKAS9793.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Deploy to GitHub Pages

This repository is configured with GitHub Actions for automatic deployment.

1. Push to `main` branch
2. GitHub Actions will automatically build and deploy
3. Visit `https://vikas9793.github.io`

### Manual Deployment

```bash
# Build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
VIKAS9793.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── images/                 # Project images
├── src/
│   ├── components/
│   │   ├── Hero.tsx           # Hero section with intro
│   │   ├── IntroAnimation.tsx # Door-slide animation
│   │   ├── ProjectsSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ModernBackground.tsx
│   │   └── ui/                # Reusable UI components
│   ├── data/
│   │   └── portfolio.ts       # Your portfolio data
│   ├── hooks/
│   │   └── useInteractions.ts # Custom hooks
│   ├── types/
│   │   └── index.ts           # TypeScript types
│   ├── utils/                 # Utility functions
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Update Your Information

Edit `src/data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  // ... more fields
};
```

### Add Projects

Add to the `projects` array in `src/data/portfolio.ts`:

```typescript
{
  id: "project-id",
  title: "Project Title",
  description: "Short description",
  image: "/images/project.png",
  technologies: ["Tech1", "Tech2"],
  // ... more fields
}
```

### Modify Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#00ff88', // Your brand color
  }
}
```

## ⚡ Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: ~150KB (gzipped)

### Optimizations Applied

- ✅ Code splitting with Vite
- ✅ Lazy loading for heavy components
- ✅ Image optimization
- ✅ CSS containment
- ✅ GPU-accelerated animations
- ✅ Tree shaking
- ✅ Minification with Terser

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Vikas Sahani**
- Email: vikassahani17@gmail.com
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [@VIKAS9793](https://github.com/VIKAS9793)

## 🙏 Acknowledgments

- Design inspiration: Apple, Nike, Stripe
- Images: [Unsplash](https://unsplash.com)
- Icons: [Heroicons](https://heroicons.com)
- Animations: [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">
  <strong>⭐ Star this repo if you like it!</strong>
  <br>
  Made with ❤️ and React
</div>
