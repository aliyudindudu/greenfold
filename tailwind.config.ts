import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cardboard: {
          DEFAULT: '#C4A484',
          light: '#D2B48C',
          dark: '#A68B6E',
        },
        espresso: {
          DEFAULT: '#3E2723',
          light: '#5D4037',
        },
        paper: {
          DEFAULT: '#F5F5DC',
          off: '#FAF9F6',
        },
        leaf: {
          DEFAULT: '#6B8E23',
          dark: '#556B2F',
        },
      },
      fontFamily: {
        stencil: ['var(--font-stencil)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
      },
      boxShadow: {
        'cardboard': '4px 4px 0px 0px rgba(62, 39, 35, 0.2)',
        'cardboard-hover': '8px 8px 0px 0px rgba(62, 39, 35, 0.3)',
        'paper-layer': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
