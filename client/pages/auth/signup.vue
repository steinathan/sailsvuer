<template>
  <div>
    <v-card flat :img="require('@/assets/chain/login.svg')">
      <v-container grid-list-md>
        <v-layout justify-center>
          <!--  -->
          <v-snackbar
            color="warning"
            class="text-xs-center"
            :timeout="12000"
            v-model="snackbar.key"
            bottom
            left
            multi-line
          >
            {{ snackbar.text }}
            <v-btn text @click="snackbar.key = false" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-snackbar>
          <v-card outlined width="400" class="text-xs-center white lighten-5 elevation-0" text>
            <!-- <v-progress-linear class="my-0" v-if="loading" :indeterminate="true"></v-progress-linear> -->
            <v-card-title>
              <h3 class="headline primary-title">Signup</h3>
            </v-card-title>
            <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                  outlined
                  v-model="fullName"
                  :rules="fullNameRules"
                  label="Full Name"
                  :counter="20"
                  required
                ></v-text-field>
                <v-text-field
                  outlined
                  v-model.trim="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-text-field
                  outlined
                  v-model="phone"
                  label="Phone"
                  :rules="phoneRules"
                  type="number"
                ></v-text-field>
                <v-text-field
                  outlined
                  v-model.trim="password"
                  :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[passwordRules.required, passwordRules.min, passwordRules.max]"
                  :type="showPw ? 'text' : 'password'"
                  name="input-10-2"
                  label="Enter Password"
                  hint="At least 6 characters"
                  value="654321"
                  class="input-group--focused"
                  @click:append="showPw = !showPw"
                ></v-text-field>

                <v-text-field
                  outlined
                  v-model.trim="rePassword"
                  :rules="[passwordRules.confirmed, passwordRules.required, passwordRules.min, passwordRules.max]"
                  :type="showPw ? 'text' : 'password'"
                  name="input-10-2"
                  label="Password Again"
                  hint="At least 6 characters"
                  value="654321"
                  class="input-group--focused"
                  @click:append="showPw = !showPw"
                ></v-text-field>

                <v-btn
                  :loading="$store.state.loading"
                  :disabled="!valid"
                  rounded
                  depressed
                  color="primary"
                  @click="doSignup()"
                  block
                >Signup</v-btn>
              </v-form>
              <small>
                Signing up means that you're ok with our
                <router-link
                  style="text-decoration:none;"
                  to="/about/terms-of-service"
                >Terms Of Service.</router-link>
              </small>
              <br>
            </v-card-text>
            <v-card-actions>
              <router-link style="text-decoration:none;" to="/auth/login">Already have an account?</router-link>
            </v-card-actions>
          </v-card>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valid: false,
      snackbar: {
        key: false,
        text: "Sorry, an unexpected error occured, please try later."
      },
      loading: false,
      err: "",
      password: "",
      rePassword: "",
      // show password
      showPw: false,

      passwordRules: {
        min: v => v.length >= 6 || "Min 6 characters",
        max: v => v.length <= 15 || "Password must be less than 15 characters",
        required: v => !!v || "Password is required",
        confirmed: v => v == this.password || "Password's don't match"
      },
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      phone: "",
      phoneRules: [
        v => !!v || "Phone is required",
        v => v.length <= 12 || "Phone is invalid"
      ],
      fullName: "",
      fullNameRules: [
        v => !!v || "Fullname is required",
        v => v.length <= 20 || "Fullname must be less than 20 characters"
      ],
      socketConnected: false
    };
  },
  mounted() {},
  methods: {
    doSignup() {
      // let composedData = Object.assign(this.$route.query, {
      //   phone: this.phone,
      //   emailAddress: this.email,
      //   password: this.rePassword || this.password,
      //   fullName: this.fullName
      // });
      this.axios
        .post(
          "/auth/signup/",
          Object.assign(this.$route.query, {
            phone: this.phone,
            emailAddress: this.email,
            password: this.rePassword || this.password,
            fullName: this.fullName
          })
        )
        .then(({ data }) => {
          this.$store.commit("SET_USER", data);
          this.$router.push("/user/dashboard");
        })
        .catch(error => {
          this.snackbar.key = true;
          switch (error.response.status) {
            case 401:
              this.snackbar.text =
                "The provided email or password combination does not match any user in our database, please check and try again.";
              break;
            case 409:
              this.snackbar.text =
                "Sorry, some provided details is currently in use by another user, please check your phone number or email address and try again";
              break;
            default:
              this.snackbar.text =
                "Sorry, an error was thrown without an actual value from the server - this should never happen";
              break;
          }
          // if (error.response.status == 401) {
          // } else if (error.response.status == 409) {
          //   this.snackbar.text =
          //     "Some provided details is currently in use by another user";
          // }
        });
    }
  },
  head() {
    return {
      title: "Sigin Up"
    };
  }
};
</script>

