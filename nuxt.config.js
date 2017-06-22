module.exports = {
  /*
  ** Head Elements
  */
  head: {
    title: 'Nuxt Type',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rufina|Josefin+Sans:400,700|Playfair+Display:700|Prata' }
    ]
  },
  /*
  ** Disable Nuxt.js loading component
  */
  loading: false,
  /*
  ** Add global CSS
  */
  css: [
    '~assets/css/normalize.css',
    '~assets/css/main.css'
  ],
  /*
  ** Extract global CSS in a separate file in production
  */
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        // Add animation library into client-side bundle directly
        config.entry.app = ['~assets/js/SplitText.min', config.entry.app];
      }
    }
  }
}
