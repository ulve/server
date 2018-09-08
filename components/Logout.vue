<template>
    <v-btn v-if="isLoggedIn" color="red" @click="logOut">Logga ut</v-btn>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.activeUser !== null;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("signOut");
    }
  }
};
</script>