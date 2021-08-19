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
      black: '#000000',
      // 50, 100, ... 900
      grey: colors.coolGray,
      green: colors.emerald,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      indigo: colors.indigo,
      pink: colors.pink,
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
      200: '200px',
      300: '300px',
      350: '350px',
      400: '400px',
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
    margin: (theme) => ({
      ...theme('spacing'),
    }),
    borderRadius: (theme) => ({
      ...theme('spacing'),
    }),
    width: (theme) => ({
      ...theme('spacing'),
      'w-full': '100%',
      'w-screen': '100vw',
    }),
    height: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    boxShadow: {
      'menu-bs': '0 4px 4px rgb(0 0 0 / 25%)',
    },
  },
  variants: {
    extend: {},
    container: [],
  },
  plugins: [],
}
