import type { Config } from 'tailwindcss'

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary-navy': '#1E3A5F',
        'primary-blue': '#2563EB',
        'primary-teal': '#06B6D4',
        
        // Neutrals
        'neutral-white': '#FFFFFF',
        'neutral-light': '#F8FAFB',
        'neutral-gray': '#6B7280',
        'neutral-dark': '#3A4A5C',
        
        // Background
        'bg-light-blue': '#E0F2FE',
        'bg-pale': '#F0FFFE',
        
        // Semantic
        'background': '#E0F2FE',
        'foreground': '#1E3A5F',
        'card': '#FFFFFF',
        'card-foreground': '#3A4A5C',
        'muted': '#6B7280',
        'muted-foreground': '#6B7280',
        'accent': '#2563EB',
        'accent-foreground': '#FFFFFF',
      },
      backgroundImage: {
        'gradient-page': 'linear-gradient(180deg, #E0F2FE 0%, #F0FFFE 100%)',
        'gradient-button': 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
        'gradient-text': 'linear-gradient(90deg, #1E3A5F 0%, #2563EB 100%)',
      },
      borderRadius: {
        'card-lg': '24px',
        'card-md': '16px',
        'card-sm': '12px',
      },
      boxShadow: {
        'card': '0 10px 25px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 15px 35px rgba(0, 0, 0, 0.12)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.15)',
      },
      fontFamily: {
        'sans': 'var(--font-inter)',
        'heading': 'var(--font-plus-jakarta)',
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '32px', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '28px', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label': ['14px', { lineHeight: '20px', fontWeight: '600' }],
      },
      spacing: {
        'section-gap': '64px',
        'section-gap-sm': '48px',
        'card-pad-lg': '32px',
        'card-pad-md': '24px',
        'card-pad-sm': '16px',
        'grid-gap': '20px',
      },
      opacity: {
        'glass': '0.8',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
