export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: ['sweetalert2/dist/sweetalert2.min.css'],

  plugins: ['~/plugins/vue-placeholders.js', '~/plugins/bootstrap-vue-icon'],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/moment'
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  axios: {},
  build: {
    extend(config, ctx) {}
  }
}