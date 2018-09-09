<template>
    <v-btn v-if="isLoggedIn" color="red" @click="logOut">Logga ut</v-btn>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.activeUser !== null;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("signOut");
      this.$router.push({ path: "/" });
    }
  }
};
</script>