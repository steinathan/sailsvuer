<template>
  <div>
    <v-img height="800" :src="require('@/assets/img/bg.svg')">
      <center>
        <v-img class="ma-4" height="200" width="500" :src="require('@/assets/img/logo.svg')"></v-img>
        <h3 class="display-2">SailsVuer</h3>Handcraft Mega Boiler Plate for sails, vue and nuxt lovers
        <v-flex
          xs6
        >In our time building apps for customers, we've found ourselves re-rolling some of the same key features over and over again between projects. So we picked some of the things that kept popping up, and implemented our own opinionated solutions for them.</v-flex>
        <v-btn class="ma-5" color="primary">Get Started</v-btn>
      </center>
    </v-img>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"])
  },
  data() {
    return {};
  },
  async asyncData({ $axios }) {},
  mounted() {}
};
</script>

