module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      mo: '480px', // => @media (min-width: 480px) { ... }

      sm: '640px', // => @media (min-width: 640px) { ... }

      md: '768px', // => @media (min-width: 768px) { ... }

      lg: '992px', // => @media (min-width: 992px) { ... }

      xl: '1200px', // => @media (min-width: 1200px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
