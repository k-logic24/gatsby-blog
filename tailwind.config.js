module.exports = {
  purge: ['src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'Helvetica Neue',
        'Arial',
        'Hiragino Kaku Gothic ProN',
        'Hiragino Sans',
        'Meiryo',
        'sans-serif',
      ],
      dosis: [
        'Dosis',
        'sans-serif'
      ]
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
          tag: '#eee',
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
