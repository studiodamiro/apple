/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1400px',
      },
      fontFamily: {
        sfpro: ['SF Pro', 'sans-serif'],
      },
      colors: {
        foreground: '#000000',
        background: '#ffffff',
        accent: '#007AFF',
        brand: {
          blue: '#007AFF',
          gray: '#555555',
          black: '#000000',
          white: '#ffffff',
        },
        gray: {
          lt: '#f3f4f6',
          md: '#d9d9d9',
          rg: '#939393',
          dk: '#6e6e73',
          xd: '#444447',
          bk: '#1c1c1d',
        },
      },
      transitionProperty: {
        height: 'height',
        scale: 'scale',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
