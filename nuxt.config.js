module.exports = {
  loading: true,
  head: {
    title: 'Luis G Saavedra | UX UI Designer, Digital Designer & Frontend Designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Luis Gabriel Saavedra | Portfolio' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700|Material+Icons' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: [
      '~node_modules/vue-material/dist/vue-material.css',
      '~assets/scss/styles.scss',
      { src: '~assets/scss/styles.scss', lang: 'scss' }
    ],
    loading: { color: '#3B8070' },
    build: {
      extractCSS: true,
      // Add SVG to SVG inline loader.

      test: /\.svg$/,
      loader: 'svg-inline-loader',
      exclude: /node_modules/
    }
  },
  modules: [
    '@nuxtjs/axios'
  ]
}
