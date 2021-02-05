module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'wheat': '#E8C1A7',
        'van-dyke-brown': '#613F29'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/images/flower-fields.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
       })
    },
    height: {
      'half-screen': '80vh'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
