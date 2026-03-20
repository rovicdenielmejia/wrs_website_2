import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#132237',
          dark: '#0e1a2a',
        },
        royal: '#1F376A',
        'accent-blue': {
          DEFAULT: '#3A73B3',
          hover: '#2d5d8f',
        },
        gold: '#C19D43',
        'light-bg': '#EFF0F1',
        'text-dark': '#F1F5F9',
        'text-soft': '#94A3B8',
        'text-light': '#1E293B',
        'text-muted': '#64748B',
        success: '#D4EDDA',
        'success-text': '#155724',
        error: '#F8D7DA',
        'error-text': '#721C24',
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          accent: 'rgba(255, 255, 255, 0.18)',
          gold: 'rgba(193, 157, 67, 0.4)',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        full: '100px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        nav: '0 4px 24px rgba(0, 0, 0, 0.2)',
        hover: 'rgba(0, 0, 0, 0.45)',
        glow: '0 0 40px rgba(58, 115, 179, 0.12)',
        'btn-glow': '0 4px 20px rgba(58, 115, 179, 0.35)',
        'btn-hover-glow': '0 12px 32px rgba(58, 115, 179, 0.4)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        revealIn: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 0.8s linear infinite',
        'reveal-in': 'revealIn 0.7s ease-out forwards',
      },
      spacing: {
        section: '5rem',
        'section-lg': '6rem',
      },
    },
  },
  plugins: [],
};

export default config;
