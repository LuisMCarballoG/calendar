import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
  ],
  css: [
    'primeflex/primeflex.css'
  ],
  plugins: [
    '~/plugins/alpine.client.ts'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})
