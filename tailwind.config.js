/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          bg: '#F5F6FA',
          card: '#FFFFFF',
          text: {
            primary: '#1A1D1F',
            secondary: '#6F767E',
            tertiary: '#9A9FA5',
          },
          border: '#E4E4E7',
        },
        // Dark theme colors
        dark: {
          bg: '#111315',
          card: '#1A1D1F',
          text: {
            primary: '#FCFCFC',
            secondary: '#EFEFEF',
            tertiary: '#9A9FA5',
          },
          border: '#272B30',
        },
        // Status colors
        status: {
          success: '#05CD99',
          warning: '#FFAB00',
          error: '#EF4444',
          info: '#3B82F6',
          progress: '#6366F1',
          pending: '#F59E0B',
          approved: '#FFAB00',
          rejected: '#9A9FA5',
          complete: '#05CD99',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      screens: {
        'screen1440': '1440px',
      },
    },
  },
  plugins: [],
}

