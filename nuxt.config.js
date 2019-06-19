module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "SailsVuer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#1976d2", height: "10px" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/moment.js" },
    { src: "~/plugins/lodash.js" },
    { src: "~/plugins/globalVars.js", mode: "client" },
    { src: "~/plugins/vuex-persist", mode: "client" }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],
  devModules: ["@nuxtjs/vuetify"],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "http://localhost:1337/api/v1/",
    retry: { retries: 3 },
    credentials: true
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: "#0c8da0",
      secondary: "#001c20",
      error: "#f44336",
      warning: "#ffc107",
      info: "#00bcd4",
      success: "#4caf50"
    },
    // defaultAssets: {
    //   font: true,
    //   icons: true
    // },
    treeShake: true,
    customVariables: ["~assets/style/variables.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  srcDir: "client/"
};
