/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': {
          DEFAULT: '#070908',
          deep: '#050706',
          surface: '#0b0e0c',
          card: '#0f1411',
          cardHover: '#131b16',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.04)',
        },
        'brand-accent': {
          DEFAULT: '#00ffaa',
          glow: 'rgba(0, 255, 170, 0.15)',
          emerald: '#10b981',
          hover: '#22ffb2',
          light: '#e6fff5',
          dark: '#00b87a',
        },
        'brand-muted': {
          DEFAULT: '#94a3b8',
          dim: '#64748b',
          light: '#cbd5e1',
          white: '#f8fafc',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'SF Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        'grid-accent': "linear-gradient(to right, rgba(0, 255, 170, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 170, 0.05) 1px, transparent 1px)",
        'radial-vignette': 'radial-gradient(circle at 50% 0%, rgba(0, 255, 170, 0.08) 0%, transparent 60%)',
      },
      boxShadow: {
        'neon-glow': '0 0 25px -5px rgba(0, 255, 170, 0.25)',
        'neon-subtle': '0 0 15px -3px rgba(0, 255, 170, 0.12)',
        'card-border': '0 0 0 1px rgba(255, 255, 255, 0.08)',
        'card-hover': '0 0 0 1px rgba(0, 255, 170, 0.3), 0 8px 30px -10px rgba(0, 255, 170, 0.12)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
