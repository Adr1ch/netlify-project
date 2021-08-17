const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    screens: {
      // => @media (min-width: ...) { ... }
      'x2s-min': '320px',
      'xs-min': '375px',
      'sm-min': '640px',
      'm-min': '768px',
      'l-min': '1024px',
      'xl-min': '1280px',
      '2xl-min': '1536px',
      // => @media (max-width: ...) { ... }
      'x2s-max': { max: '320px' },
      'xs-max': { max: '375px' },
      'xs-plus-max': { max: '425px' },
      'sm-less-max': { max: '500px' },
      'sm-max': { max: '550px' },
      'sm-plus-max': { max: '600px' },
      'm-less-max': { max: '720px' },
      'm-max': { max: '770px' },
      'm-plus-max': { max: '820px' },
      'l-less-max': { max: '974px' },
      'l-max': { max: '1024px' },
      'l-plus-max': { max: '1074px' },
      'xl-less-max': { max: '1230px' },
      'xl-max': { max: '1280px' },
      'xl-plus-max': { max: '1330px' },
      '2xl-less-max': { max: '1550px' },
      '2xl-max': { max: '1600px' },
      '2xl-plus-max': { max: '1650px' },
      '3xl-less-max': { max: '1870px' },
      '3xl-max': { max: '1920px' },
      // => @media (min-width: ... , max-width: ...) { ... }
      'm-min-max': [{ min: '668px', max: '767px' }],
    },
    container: {
      center: true,
      padding: '15px',
    },
    colors: {
      white: '#ffffff',
      grey: colors.coolGray,
      green: colors.emerald,
      black: colors.black,
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    spacing: {
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px',
      35: '35px',
    },
    fontFamily: {
      main: ['"Quicksand"', 'sans-serif'],
    },
    fontSize: (theme) => ({
      ...theme('spacing'),
    }),
    padding: (theme) => ({
      ...theme('spacing'),
    }),
    borderRadius: (theme) => ({
      ...theme('spacing'),
    }),
    width: {
      'w-full': '100%',
      'w-screen': '100vw',
    },
  },
  variants: {
    extend: {},
    container: [],
  },
  plugins: [],
}
