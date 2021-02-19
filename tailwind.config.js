const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      inset: {
        '-2/4': '-50%',
        '2/4': '50%',
      },
      maxWidth: {
        8: '8rem',
        12: '12rem',
      },
    },
  },
}
