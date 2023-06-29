/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#2C3D5B',
        secondaryBlue: '#315D93',
        orange: '#FB7200',
        deepOrange: '#FB932C',
        lightOrange: {
          1: '#FB923C',
          2: '#FDBA74',
          3: '#FED7AA',
          4: '#FFEDD5',
        },
        darkOrange: {
          1: '#DE6501',
          2: '#C15802',
          3: '#A54B03',
          4: '#883E04',
        },
        emerald: {
          0: '#34D399',
          1: '#6EE7B7',
          2: '#A7F3D0',
          3: '#D1FAE5',
        },
        darkEmerald: '#109867',
        red: {
          0: '#EF4444',
          1: '#FEE2E2',
        },
        darkRed: '#B90F0F',
        lightBlue: {
          1: '#06A5FF',
          2: '#27B1FF',
          3: '#5BC3FE',
          4: '#98D6FA',
          5: '#B6E5FF',
          6: '#D0EEFF',
        },
        blueGrey: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        black: '#000000',
        white: '#ffffff',
      },
      boxShadow: {
        1: '0px 3px 5px rgba(0, 0, 0, 0.1)',
        2: '0px 5px 10px 0px rgba(0, 0, 0, 0.15)',
        3: '0px 15px 15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
