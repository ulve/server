<template>
<v-app dark>
    <v-content>
      <v-container>
        <v-layout row align-center>  
          <v-flex xs12>
            <Logo />
          </v-flex>
        </v-layout>
      </v-container>   
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
   
    <v-footer :fixed="fixed" app>
      <span>Viktigt testverktyg ™</span>
      <v-layout justify-end>
        <logout v-if="this.$store.getters.activeUser" />
      </v-layout>
    </v-footer>
  </v-app>
</template>
<script>
import Logout from "~/components/Logout.vue";
import Logo from "~/components/Logo.vue";

export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: "apps", title: "Welcome", to: "/" },
        { icon: "bubble_chart", title: "Inspire", to: "/inspire" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  computed: {
    user() {
      return this.$store.getters.activeUser;
    }
  },
  components: {
    Logout,
    Logo
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

