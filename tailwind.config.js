module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans'],
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}