/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0F19',
          soft: '#171B26',
        },
        slate: {
          DEFAULT: '#5B6472',
          light: '#8891A0',
        },
        surface: {
          DEFAULT: '#F6F7FA',
          alt: '#EEF0F5',
        },
        line: '#E6E9F0',
        signal: {
          DEFAULT: '#3355FF',
          dim: '#2643D6',
          light: '#EEF1FF',
        },
        mint: {
          DEFAULT: '#00C896',
          light: '#E5FBF4',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,15,25,0.04), 0 8px 24px -8px rgba(11,15,25,0.08)',
        card: '0 1px 2px rgba(11,15,25,0.04), 0 16px 40px -16px rgba(11,15,25,0.12)',
        lift: '0 24px 48px -16px rgba(51,85,255,0.24)',
        glow: '0 0 0 1px rgba(51,85,255,0.16), 0 16px 48px -12px rgba(51,85,255,0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: 0.6 },
          '100%': { transform: 'scale(1)', opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        ripple: 'ripple 0.65s ease-out',
      },
    },
  },
  plugins: [],
}
