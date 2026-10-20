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
        bg: '#FAF7F0',
        'bg-alt': '#F0E4D1',
        surface: '#FFFFFF',
        accent: '#B98550',
        'accent-light': '#DFBE99',
        border: '#E7E0D5',
        'border-subtle': '#EDE7DC',
        ink: '#292B28',
        'ink-muted': '#686B66',
        'ink-faint': '#989B95',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        '2xs': '0 1px 2px rgba(41, 43, 40, 0.05)',
      },
      keyframes: {
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(0.6deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        codeBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        'avatar-float': 'subtleFloat 6s ease-in-out infinite',
        'pulse-dot': 'pulseSubtle 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cursor': 'codeBlink 1s infinite',
      }
    }
  },
  plugins: [],
};

export default config;
