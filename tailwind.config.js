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
        // Google Brand Colors
        google: {
          blue: '#1a73e8',      // Primary CTA (exact GDG)
          red: '#ea4335',
          yellow: '#fbbc04',
          green: '#34a853',
        },
        // NEW: Vibrant/Punchy colors for social media aesthetic
        vibrant: {
          // Primary punchy colors (high saturation)
          red: '#FF5757',
          pink: '#FF69B4',
          blue: '#1E90FF',
          cyan: '#00D4FF',
          green: '#7FFF00',
          yellow: '#FFD700',
          orange: '#FFA500',

          // Supporting colors
          'dark-charcoal': '#1A1D23',
          'light-beige': '#FFF8DC',

          // Pastel accents for decorative elements
          'pastel-pink': '#FFB3D9',
          'mint-green': '#98FB98',
          'light-blue': '#87CEEB',
          purple: '#9370DB',
        },
        // Section Backgrounds - GDG exact colors
        section: {
          yellow: '#f9e6a9',    // Feature cards background
          blue: '#d2e3fc',      // Community cards background
          white: '#ffffff',
          dark: '#202124',      // Dark section background
          lightgray: '#f8f9fa',
        },
        // Text Colors
        text: {
          primary: '#202124',
          secondary: '#5f6368',
          tertiary: '#80868b',
          inverse: '#ffffff',
        },
        // UI Colors
        ui: {
          border: '#dadce0',
          hover: '#f1f3f4',
          active: '#e8f0fe',
        },
      },
      fontFamily: {
        // Google Sans Flex for display/headings
        display: ['"Google Sans Flex"', 'Inter', 'system-ui', 'sans-serif'],
        // Inter for body text
        sans: ['Inter', '"Google Sans Flex"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // GDG Typography Scale (exact measurements)
        'display-hero': ['100px', { lineHeight: '100px', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-xl': ['72px', { lineHeight: '80px', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-lg': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '500' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body-xl': ['20px', { lineHeight: '32px', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label': ['0.875rem', { lineHeight: '1.25', fontWeight: '500' }],
      },
      borderWidth: {
        'thick': '4.8px',       // Hero media (GDG signature)
        'card': '2px',          // Standard cards (increased from 1.6px)
        'card-em': '3px',       // Emphasized cards (increased from 2px)
        // NEW: Punchy borders for vibrant design
        'punchy-sm': '2px',
        'punchy-md': '3px',
        'punchy-lg': '5px',
        'punchy-xl': '6px',
      },
      borderRadius: {
        'pill': '100px',        // Buttons (GDG standard)
        'card': '32px',         // ALL cards (GDG standard)
        'card-inner': '16px',   // Inner elements within cards
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 20px rgba(0,0,0,0.1)',
        'nav': '0 2px 8px rgba(0,0,0,0.12)',
        'pill': '0 1px 3px rgba(0,0,0,0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
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