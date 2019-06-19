<template>
  <div>
    <v-container grid-list-md>
      <div class="text-xs-center">
        <v-avatar size="90">
          <v-img src="/img/logo.svg"/>
        </v-avatar>
        <h3 class="display-1">
          Welcome,
          {{ user.fullName }}
        </h3>
        <span
          class="text--secondary"
        >Manage your info, privacy, and security to make SailsVuer work better for you</span>
      </div>

      <v-layout class="mt-4" row wrap justify-center>
        <v-flex xs12 md6 v-for="(review, i) in reviews" :key="i">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-3">{{ review.misc | moment("YYYY DD MM")}}</div>
                <v-list-item-title class="headline mb-1">{{ review.head }}</v-list-item-title>
                <v-list-item-subtitle>{{ review.text }}</v-list-item-subtitle>
              </v-list-item-content>

              <!-- <v-list-item-avatar tile> -->
              <v-icon size="80">{{ review.img }}</v-icon>
              <!-- </v-list-item-avatar> -->
            </v-list-item>

            <v-card-actions>
              <v-btn :to="review.to" color="primary" text>Goto {{ review.head }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  layout: "user",
  data() {
    return {
      reviews: [
        {
          head: "Activity Log",
          text: "Review your activty to improve your saftey",
          img: "mdi-lock-clock",
          misc: new Date(),
          to: "/user/security"
        },
        {
          head: "Edit Profile",
          text: "Edit your profile",
          img: "mdi-exponent-box",
          misc: new Date(),
          to: "/user/personal-info"
        }
      ]
    };
  },
  mounted() {},
  computed: {
    ...mapState(["user"])
  },
  metaInfo: {
    noscript: [{ innerHTML: "This website requires JavaScript." }],
    title: "Sails"
  }
};
</script>
