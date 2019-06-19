<template>
  <div class="ma-0">
    <v-card height="600" flat :img="require('@/assets/chain/login.svg')">
      <!-- <v-sheet :img="require('@/assets/chain/bkg.svg')">..</v-sheet> -->
      <v-layout justify-center>
        <v-snackbar
          class="text-xs-center"
          color="error"
          v-model="snackbar.key"
          bottom
          left
          multi-line
          :timeout="60000"
        >
          {{ snackbar.text }}
          <v-btn text @click="snackbar.key = false" icon class="secondary">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-snackbar>
        <v-card outlined width="450" class="text-xs-center white lighten-5">
          <!-- <v-progress-linear class="my-0" v-if="loading" :indeterminate="true"></v-progress-linear> -->
          {{ err }}
          <div class="text-muted mb-3 mt-5">
            <h3 class="display-2 primary-title">Sign in</h3>with your Account
          </div>
          <v-card-text>
            <v-form lazy-validation ref="form" v-model="valid">
              <v-text-field
                outlined
                v-model.trim="email"
                :rules="emailRules"
                label="E-mail"
                required
                focus
              ></v-text-field>
              <v-text-field
                outlined
                type="password"
                v-model.trim="password"
                :rules="passwordRules"
                :counter="10"
                label="Password"
                required
              ></v-text-field>
              <v-btn
                id="doLogin"
                depressed
                rounded
                :loading="$store.state.loading"
                :disabled="!valid"
                color="primary"
                @click="doLogin()"
                block
              >Login</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/auth/signup" color="secondary" text>Create account</v-btn>
            <v-btn color="secondary" text>Forgot Password</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"])
  },
  data() {
    return {
      valid: false,
      snackbar: {
        key: false,
        text: "Sorry, Unexpected Error Occured"
      },
      loading: false,
      err: "",
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length <= 10 || "password must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  mounted() {},
  methods: {
    doLogin() {
      if (this.valid) {
        this.$axios
          .post("/auth/login/", {
            emailAddress: this.email,
            password: this.password
          })
          .then(({ data }) => {
            this.$store.commit("SET_USER", data);
            this.$router.push("/user/dashboard");
          })
          .catch(error => {
            this.loading = false;
            this.snackbar.key = true;
            if (error.response.status > 400) {
              this.snackbar.text =
                "The provided email or password combination does not match any user in our database, please check and try again.";
            }
          });
      }
    }
  },
  head: {
    title: `Login `
  }
};
</script>


