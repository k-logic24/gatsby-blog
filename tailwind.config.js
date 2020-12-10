module.exports = {
  purge: ['src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  important: true,
  theme: {
    fontFamily: {
      sans: ['M PLUS Rounded 1c', 'sans-serif'],
      scripts: ['Caveat', 'cursive'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        white: {
          DEFAULT: '#fafafa',
        },
        gray: {
          light: '#454545',
          DEFAULT: '#333',
          dark: '#212121',
        },
        accent: {
          DEFAULT: '#f87171',
        },
        secondary: {
          DEFAULT: '#ccc',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
