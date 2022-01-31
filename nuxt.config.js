import axios from 'axios';

export default {
  target: 'static',
  ssr: true, // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tinca Lab - Tinca Desarrollo - Tinca Software - Tinca Diseño - Prototipado ',
    meta: [{charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width, initial-scale=1'}, {
      hid: 'description',
      name: 'description',
      content: 'Somos Tinca Lab, un colectivo empresarial que se dedica a potenciar marcas y ayudarlas en su transicion a la era digital. Con herramientas como diseño de servicios, desarrollo de software y marketing digital daremos todo para que tu compañia se conocida en la red.',
    }, {name: 'format-detection', content: 'telephone=no'},],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: "~/plugins/main.js", mode: "client"
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss/
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://www.tincalab.com',
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    exclude: ['/404'],
    routes: async () => {
      const apiUrl = 'https://api.tincalab.com/blogs'
      const {data} = await axios.get(apiUrl)
      return data.map(v => `/blog/${v.hash}`)
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [// https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',],

  googleFonts: {
    families: {
      Poppins: [200, 300, 400, 500, 600, 700, 800],
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.tincalab.com',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: '0.0.0.0', port: 3000, // default: 3000
  },
}
