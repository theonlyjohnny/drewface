module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "../**/*.html.eex",
    "../**/*.html.leex",
    "../**/views/**/*.ex",
    "../**/live/**/*.ex",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      height: {
        '2/3': '67vh',
        'half': '50vh',
      },
      colors: {
        'mint': '#5ae3b1',
        'yellow': '#ffcc41',
        'baby-blue': '#50b8ee',
        'cerulean': '#445cb4',
        'pink': '#f88181',
        'grey-blue': '#313d53',
      }
    },
  },
  variants: {},
  plugins: [],
}
