<template>
  <div id="app">
    <v-app app>
      <v-navigation-drawer
        :clipped="drawer.clipped"
        :fixed="drawer.fixed"
        :permanent="drawer.permanent"
        :mini-variant="drawer.mini"
        v-model="drawer.open"
        app
      >
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar @click="toggleMiniDrawer">
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ user.fullName }}</v-list-item-title>
              <v-list-item-subtitle>{{ error.networkLost ? "offline": "online" }}</v-list-item-subtitle>
            </v-list-item-content>
            <div :class="error.networkLost ? 'offline': 'online' "></div>
          </v-list-item>
        </template>
        <v-divider></v-divider>
        <v-list shaped>
          <v-list-item v-if="!drawer.permanent" @click="makeDrawerPermanent">
            <v-list-item-action>
              <v-icon>mdi-near-me</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Static Drawer</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-list-item @click="toggleMiniDrawer">
            <v-list-item-action>
              <v-icon>mdi-arrow-split-vertical</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Expand Drawer</v-list-item-title>
            </v-list-item-content>
          </v-list-item>-->

          <v-list-item @click="$router.push('/user/dashboard')">
            <v-list-item-action>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/user/personal-info">
            <v-list-item-action>
              <v-icon>mdi-account-card-details</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Personal Info</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/user/personalization">
            <v-list-item-action>
              <v-icon>mdi-toggle-switch</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Personalization</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/user/security">
            <v-list-item-action>
              <v-icon>mdi-account-key</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Security</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item @click>
            <v-list-item-action>
              <v-icon>mdi-help</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Help</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click>
            <v-list-item-action>
              <v-icon>mdi-comment-alert</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Help & Feedback</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- HEADER -->
      <v-app-bar
        app
        color="primary"
        dark
        :fixed="toolbar.fixed"
        :clipped-left="toolbar.clippedLeft"
      >
        <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ "SailsVuer" }}</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text>Link 1</v-btn>
          <v-btn text>Link 2</v-btn>
        </v-toolbar-items>

        <!-- MESSAGES MODAL -->
        <v-menu v-model="msgMenu" :close-on-content-click="false" absolute>
          <template v-slot:activator="{ on }">
            <v-btn icon dark v-on="on">
              <v-badge overlap color="error">
                <template v-slot:badge>4</template>
                <v-icon>mdi-email</v-icon>
              </v-badge>
            </v-btn>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ user.fullName }}</v-list-item-title>
                  <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
                </v-list-item-content>
                <!-- <v-list-item-action>
                  <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                    <v-icon>favorite</v-icon>
                  </v-btn>
                </v-list-item-action>-->
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item></v-list-item>
            </v-list>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text>Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

        <v-btn icon>
          <v-badge overlap color="error">
            <template v-slot:badge>14</template>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        <v-spacer></v-spacer>
      </v-app-bar>
      <!-- CONTENT -->
      <nuxt></nuxt>
      <!-- FOOTER -->

      <v-footer app :fixed="footer.fixed" :clipped-left="footer.clippedLeft">
        <span class="caption mx-3">&copy; 2018, Navicstein Rotciv - Free to use and learn from</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      msgMenu: "",
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ],

      drawer: {
        // sets the open status of the drawer
        open: true,
        // sets if the drawer is shown above (false) or below (true) the toolbar
        clipped: false,
        // sets if the drawer is CSS positioned as 'fixed'
        fixed: false,
        // sets if the drawer remains visible all the time (true) or not (false)
        permanent: true,
        // sets the drawer to the mini variant, showing only icons, of itself (true)
        // or showing the full drawer (false)
        mini: true
      },
      toolbar: {
        //
        fixed: true,
        // sets if the toolbar contents is leaving space for drawer (false) or not (true)
        clippedLeft: false
      },
      footer: {
        // sets the CSS position of the footer
        fixed: true,
        // sets if the footer is full width (true) or gives space to the drawer (false)
        clippedLeft: true
      }
    };
  },
  computed: {
    ...mapState(["user", "error"])
  },
  props: {
    source: String
  },

  methods: {
    // changes the drawer to permanent
    makeDrawerPermanent() {
      this.drawer.permanent = true;
      // set the clipped state of the drawer and toolbar
      this.drawer.clipped = false;
      this.toolbar.clippedLeft = false;
    },
    // toggles the drawer variant (mini/full)
    toggleMiniDrawer() {
      this.drawer.mini = !this.drawer.mini;
    },
    // toggles the drawer type (permanent vs temporary) or shows/hides the drawer
    toggleDrawer() {
      if (this.drawer.permanent) {
        this.drawer.permanent = !this.drawer.permanent;
        // set the clipped state of the drawer and toolbar
        this.drawer.clipped = true;
        this.toolbar.clippedLeft = true;
      } else {
        // normal drawer
        this.drawer.open = !this.drawer.open;
      }
    }
  }
};
</script>


<style lang="less" scoped>
* {
  .offline {
    padding: 8px !important;
    background: rgb(235, 15, 107);
    border-radius: 100%;
    bottom: 40% !important;
  }
  .online {
    padding: 8px !important;
    background: rgb(102, 238, 48);
    border-radius: 100%;
    bottom: 40% !important;
  }
}
</style>
