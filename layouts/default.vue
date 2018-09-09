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
  components: {
    Logout,
    Logo
  }
};
</script>
