const defaultTheme = require('tailwindcss/defaultTheme');

// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['{pages,app}/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Inter', ...defaultTheme.fontFamily.sans],
        sans: ['Blender Pro', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#ff375c',
          focus: '#fd2133',
          highlight: 'rgba(253,33,51,.5)',
          low: 'rgba(253,33,51,.25)',
        },
        background: '#161616',
        sidebar: 'rgb(43, 48, 54)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
