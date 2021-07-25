import colors from 'vuetify/es5/util/colors'

require('dotenv').config();
const { CMS_URL, CMS_API_KEY, } = process.env

export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: 'かも屋〜門屋弘毅のポートフォリオ〜',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Webエンジニア「かも屋」こと門屋弘毅のポートフォリオです。趣味で作ったミニゲームなどもちらほら。'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/moment-filter', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa', ['@nuxtjs/moment', ['ja']],
        '@nuxtjs/google-gtag',
    ],
    'google-gtag': { id: 'G-TV5W32L6EE' },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        extend(config, _ctx) {}
    },
    env: {
        CMS_URL,
        CMS_API_KEY,
    }
}