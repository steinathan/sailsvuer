<template>
  <div>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center>
        <v-flex class="text-xs-center" xs12>
          <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png">
          <br>
          <p class="ma-5">
            Choosing a framework can be a daunting task, and I'm not even talking about component frameworks. You've arrived at Vue and now it's time to start developing your next great idea. There are many options to choose from, and everyone says that they are great. So you have to decide, what are my metrics for success?
            There are plenty of UI toolkits to choose from, but what are your metrics for success? Vuetify is a fully featured development framework that provides you with everything you need to take any idea from conception to production.
          </p>
        </v-flex>
        <v-flex xs6 v-for="i in items" :key="i.head">
          <v-card outlined>
            <v-card-title>{{ i.head }}</v-card-title>
            <v-card-text>{{ i.text }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex class="text-xs-center" xs12>
          <v-btn href="https://next.vuetifyjs.com/en/" target="_blank" color="primary">Learn More</v-btn>
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
          head: "Vibrant Community",
          src: "",
          text:
            "Get ready to enjoy one of the most active communities in the Vue ecosystem. Stuck on a problem? Get help right now. Find a bug? Want to talk about Firebase? Create something amazing? Let us know. The Core team responds and reacts to issues as they happen. Feel confident knowing we have your back."
        },
        {
          head: "Material Toolkit",
          src: "",
          text:
            "Vuetify is built from the ground up to be semantic. Easy to learn, easy to remember—this means that whether you are developing your own application, or onboarding a new developer, Vuetify's write-as-you-speak components and properties make development a breeze."
        },
        {
          head: "Continuous Updates",
          src: "",
          text:
            "Vuetify has a consistent update cycle, allowing you to get your hands on bug fixes and enhancements more often. The development team is committed to providing you with the best experience you can have."
        },
        {
          head: "Amazing Support",
          src: "",
          text:
            "Vuetify is patched weekly, responding to community issues and reports at breakneck speed. Feel confident knowing your application will be supported and updated frequently with fixes and new features."
        }
        // { head: "", src: "", text: "" }
        // { head: "", src: "", text: "" }
        // { head: "", src: "", text: "" }
      ]
    };
  }
};
</script>
