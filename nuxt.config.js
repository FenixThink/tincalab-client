export default {
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
  buildModules: [// https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss', // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts', // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n',],

  i18n: {
    detectBrowserLanguage: {
      useCookie: true, cookieKey: 'i18n_redirected', redirectOn: 'root',  // recommended
    },
    parsePages: false,
    vueI18nLoader: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        code: 'es',
        iso: 'es-MX',
        file: 'es.js'
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    },
    pages: {
      servicios: {
        en: '/services',
        es: '/servicios',
      },
      proyectos: {
        en: '/projects',
        es: '/proyectos'
      },
      contacto: {
        en: '/contact-us',
        es: '/contacto'
      },
      'blog/index': {
        en: '/blog',
        es: '/blog',
      },
      'blog/_blog': {
        en: '/blog/:blog',
        es: '/blog/:blog'
      },
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [// https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',],

  googleFonts: {
    families: {
      Montserrat: [200, 300, 400, 500, 600, 700, 800],
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
