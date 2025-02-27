const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/*.{html,js}',
  ],
  theme: {
	  extend: {
    fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
      },
    },
  plugins: [],
}
