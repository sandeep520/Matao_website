const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '222': '1440px',
        '223': '1110px',
        '225': '1046px',
        '660': '660px',
        '666': '100%'
      },
      height: {
        '223': '1px',
        '1140': '1140px',
        '224': '505px',
        '540': '540px',
        '270': '270px',
        '380': '380px',
        '883': '970px',
        '440': '440px',
        '458': '458px',
        '548': '548px',
        '626': '626px',
        '500': '500px',
        '525': '273px',
        '650': '700px',


      },
      width: {
        '225': '70px',
        '220': '50px',
        '95': '95px',
        '208': '208px',
        '476': '476px',
        '170': '170px',
        '540': '540px',
        '110': '110px',
        '635': '635px',
        '330': '330px',
        '367': '367px',
        '860': '860px',

      },
      paddingRight: {
        '270': '270'
      },
      paddingLeft: {
        '270': '270',
      },
      objectPosition:{
        center: 'center',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'mainBg': '#F7F6F4',
        'bagBg': '#F1DDC9',
        'boxHomeBg': '#F1DDC9',
        'linkColor': '#D84727',
        'FooterColor': '#DA5E42'
      })
    },
    flex: {
      '0.3': '0.3 1 auto',
      '0.4': '0.4 1 auto',
      '0.5': '0.5 1 auto',
      '0.6': '0.6 1 auto',
      '0.7': '0.7 1 auto',
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '2': '2 2 0%',
    },
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      'taviraj': ['Taviraj', 'serif'],
      'nunito': ['Nunito', 'sans-serif'],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    flex: {
      '0.3': '0.3 1 0%',
      '0.4': '0.4 1 0%',
      '0.5': '0.5 1 0%',
      '0.6': '0.6 1 0%',
      '0.7': '0.7 1 0%',
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '2': '2 2 0%',
    },
    borderColor: theme => ({
      ...theme('colors'),
      'linkBorderColor': '#D84727'
    })

  },

  variants: {
    extend: {},
  },
  plugins: [],
}
