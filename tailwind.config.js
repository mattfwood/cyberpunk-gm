const defaultTheme = require('tailwindcss/defaultTheme');

// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['{pages,app}/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Blender Pro', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#ff375c',
        },
        background: '#161616',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
