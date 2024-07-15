// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width',
      title: 'Testing NuxtImage on Vercel',
      htmlAttrs: {
        lang: 'ja',
      },
    },
  },
  modules: ["@nuxt/image"],
  image: {
    // Options
  }
})