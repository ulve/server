<template>

<v-container fluid fill-height>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Logga in</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field v-model="email" prepend-icon="mail" name="login" label="E-post" type="text"></v-text-field>
          <v-text-field v-model="password" prepend-icon="lock" name="password" label="Lösenord" id="password" type="password"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="emailLogin">Logga in</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>

</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    emailLogin() {
      this.$store
        .dispatch("signInWithEmail", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.email = "";
          this.password = "";
          this.$nuxt.$router.replace({ path: "/servers" });
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    logOut() {
      this.$store.dispatch("signOut");
    }
  }
};
</script>