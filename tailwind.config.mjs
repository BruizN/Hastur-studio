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
          cardHover: '#141812',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.04)',
        },
        'brand-accent': {
          DEFAULT: '#ffd60a', // Amarillo Eléctrico / Imperial King in Yellow (Hastur)
          glow: 'rgba(255, 214, 10, 0.18)',
          amber: '#f59e0b',
          hover: '#ffe033',
          light: '#fffbeb',
          dark: '#d97706',
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
        'grid-accent': "linear-gradient(to right, rgba(255, 214, 10, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 214, 10, 0.05) 1px, transparent 1px)",
        'radial-vignette': 'radial-gradient(circle at 50% 0%, rgba(255, 214, 10, 0.09) 0%, transparent 60%)',
      },
      boxShadow: {
        'neon-glow': '0 0 25px -5px rgba(255, 214, 10, 0.3)',
        'neon-subtle': '0 0 15px -3px rgba(255, 214, 10, 0.15)',
        'card-border': '0 0 0 1px rgba(255, 255, 255, 0.08)',
        'card-hover': '0 0 0 1px rgba(255, 214, 10, 0.35), 0 8px 30px -10px rgba(255, 214, 10, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
