<template>
  <div class="about">
    <v-container grid-list-md>
      <div class="text-xs-center ma-2">
        <h3 class="display-2">Security</h3>
        <span
          class="text--secondary"
        >Settings and recommendations to help you keep your account secure</span>
      </div>

      <v-layout row wrap justify-center>
        <v-flex xs12 md9>
          <v-card outlined class="mx-auto">
            <v-card-title>Recent security events</v-card-title>
            <v-card-text
              class="text-xs-center"
            >Some info may be visible to other people using Chain services</v-card-text>

            <v-card-text>
              <v-simple-table>
                <tbody>
                  <tr>
                    <th class="text-xs-left">PASSWORD</th>
                    <td class="text--secondary">{{ "****" }}</td>
                    <td class="text--secondary">
                      <v-btn icon color="secodary">
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md9>
          <v-card outlined class="mx-auto">
            <v-card-title>Recent Activities</v-card-title>
            <v-card-text>
              <v-simple-table>
                <tbody>
                  <tr>
                    <th>LAST ACCOUNT UPDATED</th>
                    <td
                      class="text-xs-center text--secondary"
                    >{{ user.updatedAt | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</td>
                  </tr>
                  <tr>
                    <th>ACCOUNT CREATION</th>
                    <td
                      class="text-xs-center text--secondary"
                    >{{ user.createdAt | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</td>
                  </tr>
                  <tr>
                    <th>LAST DEVICE RECORDED</th>
                    <td class="text-xs-center text--secondary">{{ "TECNO Y4"}}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
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
  mounted() {
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
