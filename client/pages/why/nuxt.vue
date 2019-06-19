<template>
  <div>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center>
        <v-flex class="text-xs-center" xs12>
          <img src="https://nuxtjs.org/logos/nuxt.svg">
          <br>
          <p class="ma-5">
            Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.
            The most popular mode for Nuxt. With SSR, also called "universal" or "isomorphic" mode, a Node.js server will be used to deliver HTML based on your Vue components to the client instead of the pure javascript. Using SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).
            Because implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box and will take care of common pitfalls.
          </p>
        </v-flex>
        <v-flex xs6 v-for="i in items" :key="i.head">
          <v-card outlined>
            <v-card-title>{{ i.head }}</v-card-title>
            <v-card-text>{{ i.text }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex class="text-xs-center" xs12>
          <v-btn href="https://nuxtjs.org/" target="_blank" color="primary">Learn More</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          head: "Performant",
          src: "",
          text:
            "With Nuxt.js, your application will be optimized out of the box. We do our best to build performant applications by utilizing Vue.js and Node.js best practices. To squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app."
        },
        {
          head: "Modular",
          src: "",
          text:
            "Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don't have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap."
        },
        {
          head: "Enjoyable",
          src: "",
          text:
            "Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation. If questions or problems come up, our helpful community will help you out."
        }
        // { head: "", src: "", text: "" }
      ]
    };
  }
};
</script>
