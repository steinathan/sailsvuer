<template>
  <div>
    <!-- PROGRESS -->
    <v-progress-linear v-if="loading" class="loader" indeterminate color="primary"></v-progress-linear>
    <!-- INTERNET CONNECTION #1 [for home and abroad]-->
    <v-banner v-if="error.networkLost" sticky single-line>
      <v-icon slot="icon" color="warning" size="36">mdi-wifi-strength-alert-outline</v-icon>Unable to verify your Internet connection
      <template v-slot:actions>
        <v-btn color="primary" text>Connecting Settings</v-btn>
      </template>
    </v-banner>
    <!-- INTERNET CONNECTION #2 [for mobile and dashboards]-->
    <v-alert
      v-model="error.networkLost"
      type="warning"
      class="ml-3 text-xs-center snack"
      icon="mdi-wifi-strength-alert-outline"
    >&nbsp;&nbsp;Unable to verify your Internet connection, Retrying ..</v-alert>

    <!-- GENERAL SUCCESS NOTIFICATION -->
    <v-snackbar bottom left v-model="$store.state.success" color="success">
      Great, your request has been completed.
      <v-btn icon rounded @click="$store.state.success = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>

    <!-- NOTIFICATION ERROR TO TELL A USER A MINOR PROBLEM -->
    <v-snackbar bottom left v-model="show" color="warning">
      Sorry, we can't sync your profile at the moment, we'll keep trying...
      <v-btn icon rounded>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <!-- AN OVERLAY TO SHOW AJAX LOADING.. -->
    <v-overlay :value="loading"/>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      alert: true,
      show: false
    };
  },
  mounted() {
    this.$axios
      .patch("/sync")
      .then(({ data }) => {
        if (data.id) {
          this.$store.commit("SET_USER", data);
        }
      })
      .catch(e => {
        this.show = true;
        console.log(e);
      });
  },
  methods: {},
  computed: {
    ...mapState(["loading", "error"])
  }
};
</script>

<style scoped lang="less">
* {
  .snack {
    bottom: 0;
    position: fixed;
    z-index: 10;
  }
  .loader {
    background: white;
    position: fixed;
    z-index: 5;
  }
}
</style>
