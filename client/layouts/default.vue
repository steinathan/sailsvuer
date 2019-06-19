<template>
  <div>
    <v-app app>
      <Header app></Header>
      <v-content app>
        <nuxt></nuxt>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "default",
  components: {
    Header
  }
};
</script>
