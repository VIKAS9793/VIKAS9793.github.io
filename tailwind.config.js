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
      },
      colors: {
        // Google Brand Colors
        google: {
          blue: '#4285f4',
          red: '#ea4335',
          yellow: '#fbbc04',
          green: '#34a853',
        },
        // Google Dev Accent Colors (from reference images)
        dev: {
          red: '#E53935',      // Solid red for pills and shapes
          pink: '#FF4081',     // Bright pink for quote, puzzle
          gray: '#F5F5F5',     // Light gray background
          black: '#1A1A1A',    // For asterisk shape
        },
        // Section Backgrounds - More vibrant like Google reference
        section: {
          white: '#ffffff',
          dark: '#1a1a2e',        // Deeper dark for contrast
          cream: '#fef3cd',       // More saturated yellow/cream
          blue: '#cce5ff',        // More vibrant light blue
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
        // Google Sans Flex for display/headings (playful variable font)
        // Per: https://design.google/library/google-sans-flex-font
        display: ['"Google Sans Flex"', 'Inter', 'system-ui', 'sans-serif'],
        // Inter for body text (high readability)
        sans: ['Inter', '"Google Sans Flex"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Google-style typography scale
        'display-xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.625', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'label': ['0.875rem', { lineHeight: '1.25', fontWeight: '500' }],
      },
      borderRadius: {
        'pill': '9999px',
        'card': '1rem',
        'card-lg': '1.5rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.12)',
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