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
    },
    container: {
      center: true,
      padding: '15px',
    },
    colors: {
      white: '#ffffff',
    },
    spacing: {
      5: '5px',
    },
    fontFamily: {
      main: ['"Inter Regular"', 'sans-serif'],
    },
    fontSize: {
      5: '5px',
    },
    padding: {
      5: '5px',
      10: '10px',
      15: '15px',
    },
    width: {
      'w-100': '100%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
