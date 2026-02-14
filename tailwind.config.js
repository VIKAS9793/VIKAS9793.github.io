/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        '3xl': '1600px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        'section': '80px',      // GDG section padding
        'section-lg': '96px',   // GDG large section padding
      },
      colors: {
        // M3 Semantic Roles (mapped to CSS variables for dynamic theme support)
        primary: 'var(--md-sys-color-primary)',
        'on-primary': 'var(--md-sys-color-on-primary)',
        'primary-container': 'var(--md-sys-color-primary-container)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container)',

        secondary: 'var(--md-sys-color-secondary)',
        'on-secondary': 'var(--md-sys-color-on-secondary)',
        'secondary-container': 'var(--md-sys-color-secondary-container)',
        'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',

        tertiary: 'var(--md-sys-color-tertiary)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container)',
        'on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',

        surface: 'var(--md-sys-color-surface)',
        'on-surface': 'var(--md-sys-color-on-surface)',
        'surface-container-low': 'var(--md-sys-color-surface-container-low)',
        'surface-container': 'var(--md-sys-color-surface-container)',
        'surface-container-high': 'var(--md-sys-color-surface-container-high)',
        'surface-container-highest': 'var(--md-sys-color-surface-container-highest)',
        'surface-variant': 'var(--md-sys-color-surface-variant)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',

        outline: 'var(--md-sys-color-outline)',
        'outline-variant': 'var(--md-sys-color-outline-variant)',

        error: 'var(--md-sys-color-error)',
        'on-error': 'var(--md-sys-color-on-error)',
        'error-container': 'var(--md-sys-color-error-container)',

        // Vibrant Palette for Portfolio
        vibrant: {
          'cyan': '#00D4FF',
          'pink': '#FF69B4',
          'orange': '#FF8C00',
          'yellow': '#FFD700',
          'green': '#00E676',
          'light-beige': '#FFFBF0',
          'purple': '#9D00FF',
        },

      },
      fontSize: {
        // M3 Type Scale (Exact)
        'display-lg': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px' }],
        'display-md': ['45px', { lineHeight: '52px', letterSpacing: '0px' }],
        'display-sm': ['36px', { lineHeight: '44px', letterSpacing: '0px' }],

        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '0px' }],
        'headline-md': ['28px', { lineHeight: '36px', letterSpacing: '0px' }],
        'headline-sm': ['24px', { lineHeight: '32px', letterSpacing: '0px' }],

        'title-lg': ['22px', { lineHeight: '28px', letterSpacing: '0px' }],
        'title-md': ['16px', { lineHeight: '24px', letterSpacing: '0.15px' }],
        'title-sm': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],

        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0.5px' }],
        'body-md': ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        'body-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.4px' }],

        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        'label-sm': ['11px', { lineHeight: '16px', letterSpacing: '0.5px' }],
      },
      borderRadius: {
        'none': '0',
        'xs': 'var(--md-sys-shape-corner-xs)', // 4px
        'sm': 'var(--md-sys-shape-corner-sm)', // 8px
        'md': 'var(--md-sys-shape-corner-md)', // 12px (Cards)
        'lg': 'var(--md-sys-shape-corner-lg)', // 16px
        'xl': 'var(--md-sys-shape-corner-xl)', // 28px
        'full': 'var(--md-sys-shape-corner-full)', // Pill
        'card': 'var(--md-sys-shape-corner-md)', // 12px (M3 Standard)
      },
      boxShadow: {
        'elevation-0': '0 0 0 0 transparent',
        'elevation-1': '0 1px 2px 0 rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)', // M3 Level 1
        'elevation-2': '0 1px 2px 0 rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)', // M3 Level 2
        'elevation-3': '0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px 0 rgba(0,0,0,0.3)', // M3 Level 3
        'elevation-4': '0 6px 10px 4px rgba(0,0,0,0.15), 0 2px 3px 0 rgba(0,0,0,0.3)', // M3 Level 4
        'elevation-5': '0 8px 12px 6px rgba(0,0,0,0.15), 0 4px 4px 0 rgba(0,0,0,0.3)', // M3 Level 5
        'nav': '0 4px 20px rgba(0, 0, 0, 0.08)', // Floating Nav Shadow
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      const newUtilities = {
        // Google-style gradient text
        '.text-gradient-google': {
          'background': 'linear-gradient(90deg, #4285f4, #34a853, #fbbc04, #ea4335)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-blue': {
          'background': 'linear-gradient(90deg, #4285f4, #34a853)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        // Glass effect for floating nav
        '.glass-nav': {
          'backdrop-filter': 'blur(12px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.85)',
          'border': '1px solid rgba(0, 0, 0, 0.08)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}