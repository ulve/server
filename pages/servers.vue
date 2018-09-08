<template>
<div>
    <h2>här visas servrarna</h2>
    <Server
    v-for="server in this.$store.getters.servers2"
    :key="server.name"
    :user="server.user"
    :server="server.server"
    :comment="server.comment"
    :branch="server.branch" />

    <button @click="getServers">Hämta servrar</button>
</div>
</template>

<script>
import Server from "~/components/Server.vue";

export default {
  methods: {
    getServers() {
      this.$store.dispatch("getServers");
    }
  },
  components: {
    Server
  }
};
</script>
