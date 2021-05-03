module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '1': '1px'
      },
      colors: {
        'wheat': '#E8C1A7',
        'van': '#09E3B1',
        'maximum-blue-green': '#02C1CB',
        'whitesmoke': '#f6f6f6',
        'dimgray': '#5e5e5e'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/images/DSC_6880.jpg')",
        'footer-logo': "url('/src/assets/images/footerlogo.png')",
        'call-to-action': "url('/src/assets/images/DSC_6880.jpg')"
       }),
       fontFamily: {
        'body': ['Poppins', 'sans-serif'],
        'header': ['Adamina', 'serif']
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
    borderWidth: ['active', 'focus', 'hover', 'group-hover'],
    borderColor: ['active'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
