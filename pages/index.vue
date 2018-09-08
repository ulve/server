<template>
 <v-container>
    <v-layout align-center justify-center>
      <v-flex xs2>
        <v-btn color="primary" nuxt large dark to="/login">
          <v-icon>alarm</v-icon>Logga in
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
  }
};
</script>