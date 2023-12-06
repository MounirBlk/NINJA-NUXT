import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt Dojo',
      meta: [{ name: 'description', content: 'Everything about Nuxt 3' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        },
      ],
      bodyAttrs: {
        class: 'test',
      },
      script: [{ innerHTML: "console.log('Hello ninja')" }],
    },
    /* pageTransition: {
      name: 'fade', // bounce
      mode: 'out-in', // default
    }, // boolean (activation) or object
    layoutTransition: {
      name: 'slide', // bounce
      mode: 'out-in', // default
    }, */ // boolean (activation) or object
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    /* public: {} */
  },
  routeRules: {
    /* '/': { prerender: true }, // Generated at build time for SEO purpose
    '/api/*': { cache: { maxAge: 60 * 60 } }, // Cached for 1 hour
    '/old-page': {
      redirect: { to: '/about' },
    }, */
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/tailwind.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/css/_colors.sass" as *\n',
        },
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
})
