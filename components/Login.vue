<template>
<div>
    <input v-model="email" type="text" placeholder="epost"><br>
    <input v-model="password" type="password" placeholder="lösen"><br>
    <button @click="emailLogin">Logga in</button><br>
    <button @click="logOut">Logga ut</button>
</div>
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