// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ['@nuxtjs/tailwindcss'],
 app: {
    head: {
        title: 'Shopping cart',
        meta: [
            {name: 'description', content: 'Nuxt 3 project'}
        ],
        link: [
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
    }
 }
})
