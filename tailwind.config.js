module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'wheat': '#E8C1A7',
        'van': '#09E3B1',
        'maximum-blue-green': '#02C1CB'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/images/DSC_6880.jpg')",
        'footer-logo': "url('/src/assets/images/footerlogo.png')",
        'call-to-action': "url('/src/assets/images/DSC_6880.jpg')"
       }),
       fontFamily: {
        'body': ['Montserrat', 'sans-serif']
      },
      height: {
        'half-screen': '90vh'
      }
    },

  },
  variants: {
      display: ['responsive', 'group-hover', 'group-focus'],
    extend: {
      display: ['active', 'focus'],

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
