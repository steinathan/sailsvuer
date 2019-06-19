<template>
  <v-app app>
    <v-container grid-list-sm class="text-xs-center">
      <v-layout justify-center align-center align-content-center>
        <v-flex xs11 md7>
          <div v-if="error.statusCode === 404">
            <v-img :src="require('@/assets/img/404.svg')"></v-img>
            <h1 class="font-weight-thin display-2">{{ pageNotFound }}</h1>
            <p
              class="headline font-weight-thin"
            >Sorry, there's good news and bad news, the good news is, you can browse the pages you visited completely offline -- the bad news is, the page you're trying to reach does not exist, please check your url and try again</p>
          </div>

          <br>
          <h3 class="font-weight-thin display-1">Need Help?</h3>
          <br>
          <v-text-field outlined label="Search"></v-text-field>
        </v-flex>
      </v-layout>
      <!-- <h1 >{{ otherError }}</h1> -->
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  data() {
    return {
      pageNotFound: "You've reached a dead end",
      otherError: "An error occurred"
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
