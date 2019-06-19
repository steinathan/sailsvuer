<template>
  <div>
    <v-container grid-list-md>
      <div class="text-xs-center ma-2">
        <h3 class="display-2">Personal info</h3>
        <span
          class="text--secondary"
        >Basic info, like your name and photo, that you use on SailsVuer services</span>
      </div>
      <v-layout row wrap justify-center>
        <v-flex xs12 md12>
          <v-card outlined class="mx-auto">
            <v-card-title>Profile</v-card-title>
            <v-card-text>Some info may be visible to other people using Chain services</v-card-text>

            <v-card-text>
              <v-simple-table>
                <tbody>
                  <tr>
                    <th class="text-xs-left">NAME</th>
                    <td class="text--secondary">{{ user.fullName }}</td>
                    <td class="text--secondary">
                      <v-btn @click="profileDialog = true" icon color="secodary">
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                  <tr>
                    <th class="text-xs-left">BIRTHDAY</th>
                    <td class="text--secondary">{{ user.birthDate || "Not Set" }}</td>
                    <td class="text--secondary"></td>
                  </tr>
                  <tr>
                    <th class="text-xs-left">GENDER</th>
                    <td class="text--secondary">{{ user.gender || "Not Set" }}</td>
                    <td class="text--secondary"></td>
                  </tr>
                  <tr>
                    <th class="text-xs-left">PASSWORD</th>
                    <td class="text--secondary">*****</td>
                    <td class="text--secondary"></td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
            <!-- <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </v-card-actions>-->
          </v-card>
        </v-flex>

        <!-- CONTACT INFO -->
        <v-flex xs12 md12>
          <v-card outlined class="mx-auto">
            <v-card-title>Contact Info</v-card-title>
            <v-card-text>Way's people can contact you on SailsVuer</v-card-text>

            <v-card-text>
              <v-simple-table>
                <tbody>
                  <tr>
                    <th class="text-xs-left">EMAIL ADDERESS</th>
                    <td class="text--secondary">{{ user.emailAddress }}</td>
                    <td class="text--secondary">
                      <v-btn @click="contactDialog = true" icon color="secodary">
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                  <tr>
                    <th class="text-xs-left">PHONE</th>
                    <td class="text--secondary">{{ user.phone || "Not Set" }}</td>
                    <td class="text--secondary"></td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-flex>

        <!-- LINKED ACCOUNTS -->
        <v-flex xs12 md12>
          <v-card outlined class="mx-auto">
            <v-card-title>Social Profiles</v-card-title>
            <v-card-text>Your profile on other platforms</v-card-text>

            <v-card-text>
              <v-simple-table>
                <tbody>
                  <tr>
                    <th class="text-xs-left">
                      <v-icon size="50" color="primary">mdi-facebook</v-icon>
                    </th>
                    <td class="text--secondary">{{ user.fullName }}</td>
                    <td class="text--secondary">
                      <v-btn color="error">Remove</v-btn>
                    </td>
                  </tr>
                  <tr>
                    <th class="text-xs-left">
                      <v-icon size="50" color="primary lighten-3">mdi-twitter</v-icon>
                    </th>
                    <td class="text--secondary">{{ "Not Set" }}</td>
                    <td class="text--secondary">
                      <v-btn color="primary">Connect</v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- DIALOG FOR PROFILE FORM -->
    <v-dialog
      :fullscreen="$isMobile"
      transition="dialog-bottom-transition"
      max-width="600"
      persistent
      v-model="profileDialog"
    >
      <v-card>
        <v-toolbar flat dark color="primary">
          <v-btn icon dark @click="profileDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>UPDATE PROFILE</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="saveProfileDetails">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
        <v-form>
          <v-container grid-list-md>
            <v-layout wrap row>
              <v-flex xs12 sm6 md6>
                <v-text-field outlined v-model="fullName" label="FULL NAME"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field outlined v-model="emailAddress" label="EMAIL ADDRESS"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-dialog
                  ref="dialog"
                  v-model="birthDateModal"
                  :return-value.sync="birthDate"
                  persistent
                  eager
                  full-width
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field outlined v-on="on" readonly v-model="birthDate" label="BIRTHDAY"></v-text-field>
                  </template>
                  <v-date-picker v-model="picker" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="birthDateModal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(picker)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-select outlined :items="genderItems" v-model="gender" label="GENDER"></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
    <!--// DIALOG FOR PROFILE FORM -->

    <!-- DIALOG FOR CONTACT FORM -->
    <v-dialog
      :fullscreen="$isMobile"
      transition="dialog-bottom-transition"
      max-width="600"
      persistent
      v-model="contactDialog"
    >
      <v-card>
        <v-toolbar flat dark :color="conflict ? 'error': 'primary'">
          <v-btn icon dark @click="contactDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>UPDATE CONTACT INFO</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="saveContactDetails">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
        <v-card-text>
          <v-form>
            <v-container grid-list-md>
              <v-layout wrap row justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    outlined
                    :error="conflict"
                    @keydown="conflict = false"
                    v-model="emailAddress"
                    label="EMAIL ADDRESS"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <!-- :error-messages="conflict ? 'Phone already in use': false"-->
                  <v-text-field
                    outlined
                    :error="conflict"
                    @keydown="conflict = false"
                    type="phone"
                    v-model="phone"
                    label="PHONE NUMBER"
                  ></v-text-field>
                </v-flex>
                <span
                  v-if="conflict"
                  class="error--text"
                >You have conflicting value(s) in the payload you're sending</span>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--// DIALOG FOR CONTACT FORM -->
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  layout: "user",
  data() {
    return {
      profileDialog: false,
      contactDialog: false,
      picker: new Date().toISOString().substr(0, 10),
      birthDateModal: false,

      fullName: "",
      emailAddress: "",
      birthDate: "",
      gender: "",
      genderItems: ["Male", "Female", "Other"],
      phone: "",
      // CONFLICT
      conflict: false
    };
  },
  mounted() {
    // == ASSIGN ALL USER'S STATE DATA INTO MODELS == //
    (this.fullName = this.user.fullName),
      (this.emailAddress = this.user.emailAddress),
      (this.birthDate = this.user.birthDate),
      (this.gender = this.user.gender),
      (this.phone = this.user.phone);
  },
  computed: {
    ...mapState(["user", "loading"])
  },
  methods: {
    saveProfileDetails() {
      this.$axios
        .patch("/user", {
          fullName: this.fullName,
          emailAddress: this.emailAddress,
          birthDate: this.birthDate,
          gender: this.gender,
          phone: this.phone
        })
        .then(({ data }) => {
          this.$store.commit("SET_USER", data);
          (this.profileDialog = false), (this.contactDialog = false);
          this.$store.state.success = true;
        })
        .catch(e => {
          console.warn(e.response);
          if (e.response.status === 409) {
            this.conflict = true;
          }
        });
    },
    saveContactDetails() {
      return this.saveProfileDetails();
    }
  }
};
</script>
