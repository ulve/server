<template>

 <v-container>
    <v-layout column align-center>  
      <v-flex xs2>
        <v-btn v-if="!isLoggedIn" color="primary" nuxt large dark to="/login">
          <v-icon>alarm</v-icon>Logga in
        </v-btn>
        <v-btn v-else color="green" nuxt large dark to="/servers">
          <v-icon>warning</v-icon>Visa serverstatus
        </v-btn>
      </v-flex>
    </v-layout>
 </v-container>

</template>

<script>
import Login from "~/components/Login.vue";

export default {
  components: {
    Login
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.activeUser !== null;
    }
  }
};
</script>