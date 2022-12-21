module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'letterboxd': '#fe8000',
        'linkedin': '#005280',
        'twitter': '#1ea1f1',
        'github': '#000000',
        'mastodon': '#595aff',
        'lastfm': '#b90000'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1024px',
          },
        }
      })
    }
  ],
}
