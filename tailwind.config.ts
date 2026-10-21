import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
        border: 'var(--color-border)',
        'border-subtle': 'var(--color-border-subtle)',
        ink: 'var(--color-ink)',
        'ink-muted': 'var(--color-ink-muted)',
        'ink-faint': 'var(--color-ink-faint)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        '2xs': '0 1px 2px rgba(41, 43, 40, 0.05)',
        'accent-glow': '0 12px 30px -8px var(--color-accent-light)',
        'theme-glow': '0 16px 36px -10px var(--theme-glow)',
        'theme-halo': '0 0 60px 10px var(--theme-glow)',
        'lift': '0 18px 36px -10px rgba(41, 43, 40, 0.12), 0 0 1px var(--color-border)',
      },
      keyframes: {
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-7px) rotate(0.5deg)' },
        },
        floatDelay: {
          '0%, 100%': { transform: 'translateY(0px) rotate(1deg)' },
          '50%': { transform: 'translateY(-6px) rotate(-0.5deg)' },
        },
        haloBreathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.12)', opacity: '0.85' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        codeBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmerSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        radarPing: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        ripple: {
          '0%': { transform: 'scale(0.85)', opacity: '0.9' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
      animation: {
        'avatar-float': 'subtleFloat 6s ease-in-out infinite',
        'code-float': 'floatDelay 7s ease-in-out infinite',
        'halo-breathe': 'haloBreathe 7s ease-in-out infinite',
        'pulse-dot': 'pulseSubtle 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cursor': 'codeBlink 1s infinite',
        'shimmer': 'shimmerSweep 2.5s infinite',
        'radar': 'radarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'gradient': 'gradientMove 6s ease infinite',
        'ripple': 'ripple 1.8s cubic-bezier(0.16, 1, 0.3, 1) infinite',
      }
    }
  },
  plugins: [],
};

export default config;
