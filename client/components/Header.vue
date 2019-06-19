<template>
  <div class="div">
    <!-- <v-progress-linear
      v-if="loading"
      color="primary darken-3"
      class="ma-0 fixed"
      :indeterminate="true"
    ></v-progress-linear>-->
    <v-toolbar text color="primary" dark>
      <v-toolbar-title @click="$router.push('/')" class="headline text-uppercase">
        <span class="font-weight-light">sailsvuer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <span class="mr-2">Apps</span>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn depressed color="primary" dark v-on="on">Why This?</v-btn>
        </template>
        <v-list>
          <v-list-item to="/why/sails">
            <v-list-item-title>Why Sails</v-list-item-title>
          </v-list-item>
          <v-list-item to="/why/nuxt">
            <v-list-item-title>Why Nuxt</v-list-item-title>
          </v-list-item>
          <v-list-item to="/why/vuetify">
            <v-list-item-title>Why Vuetify</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text to="/auth/login">
        <span class="mr-2">Account</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>
