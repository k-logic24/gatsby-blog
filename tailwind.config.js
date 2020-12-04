module.exports = {
  purge: ['src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'system-ui', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        base: {
          DEFAULT: '#333',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
