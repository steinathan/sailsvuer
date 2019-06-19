<template>
  <div>
    <v-container grid-list-md class="text-xs-center">
      <img src="https://sailsjs.com/images/hero_squid.png">
      <br>
      <h3 class="ma-4">Sails makes it easy to build custom, enterprise-grade Node.js apps.</h3>Build practical, production-ready Node.js apps in a matter of weeks, not months.
      Sails is the most popular MVC framework for Node.js, designed to emulate the familiar MVC pattern of frameworks like Ruby on Rails, but with support for the requirements of modern apps: data-driven APIs with a scalable, service-oriented architecture.
      <v-layout class="mt-5" row wrap justify-center align-center align-content-center>
        <v-flex xs6 md4 v-for="(a, b) of things" :key="b">
          <v-card flat color="transparent" outlined>
            <img :src="a.src">
            <v-card-title>{{ a.head }}</v-card-title>
            <v-card-text>
              <p>{{ a.text }}</p>
            </v-card-text>
            <v-card-actions></v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn color="primary" target="_blank" href="https://sailsjs.com/features">Learn more</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      things: [
        {
          src: "https://sailsjs.com/images/feature_javascript.png",
          head: "100% Javascript",
          text:
            "Building on top of Sails means your app is written entirely in JavaScript, the language you and your team are already using in the browser"
        },
        {
          src: "https://sailsjs.com/images/feature_database.png",
          head: "Any database",
          text:
            "sails bundles a powerful ORM, Waterline, which provides a simple data access layer that just works, no matter what database you're using."
        },
        {
          src: "https://sailsjs.com/images/feature_api.png",
          head: "Auto-generated REST APIs",
          text:
            "Sails comes with blueprints that help jumpstart your app's backend without writing any code."
        },
        {
          src: "https://sailsjs.com/images/feature_frontend.png",
          head: "Front-end agnostic",
          text:
            "Sails is compatible with any front-end: Angular, React, iOS, Android, Windows Phone, custom hardware, or something else entirely."
        },
        {
          src: "https://sailsjs.com/images/feature_sockets.png",
          head: "Easy WebSocket integration",
          text:
            "Since Sails translates incoming socket messages for you, they're automatically compatible with every route in your Sails app."
        },
        {
          src: "https://sailsjs.com/images/feature_support.png",
          head: "Professional support",
          text:
            "Sails offers commercial support to accelerate development and ensure best practices in your code."
        },
        {
          src: "https://sailsjs.com/images/feature_associations.png",
          head: "Powerful associations.",
          text:
            'Sails offers a new take on the familiar relational model, aimed at making data modeling more practical. You can do all the same things you might be used to (one-to-many, many-to-many), but you can also assign multiple named associations per-model (for instance, a cake might have two collections of people: "havers" and "eaters"). '
        },
        {
          src: "https://sailsjs.com/images/feature_api.png",
          head: "Auto-generate REST APIs.",
          text:
            "Sails comes with blueprints that help jumpstart your app's backend without writing any code. Just run sails generate api dentist and you'll get an API that lets you search, paginate, sort, filter, create, destroy, update, and associate dentists. Since these blueprint actions are built on the same underlying technology as Sails, they also work with Websockets and any supported database out of the box."
        },
        {
          src: "https://sailsjs.com/images/feature_security.png",
          head: "Declarative, reusable security policies.",
          text:
            "Sails provides basic security and role-based access control by default in the form of policies - simple, reusable middleware functions that run before your controllers and actions. "
        },
        {
          src: "https://sailsjs.com/images/feature_foundation.png",
          head: "Rock-solid foundation.",
          text:
            "Sails is built on Node.js, a popular, lightweight server-side technology that allows developers to write blazing fast, scalable network appliations in JavaScript. Sails uses Express for handling HTTP requests, and wraps socket.io for managing WebSockets. So if your app ever needs to get really low-level, you can access the raw Express or socket.io objects. Another nice side-effect is that your existing Express routes work perfectly well in a Sails app, so migrating an existing Node app is a breeze."
        }
      ]
    };
  }
};
</script>
