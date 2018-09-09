<template>

  <v-card>
    <v-container
      fluid
      grid-list-lg>
      <v-layout row justify-center>
        <v-flex xs8>
          <Server
            v-for="server in this.$store.getters.servers"
            :key="server.name"
            :user="server.user"
            :server="server.name"
            :comment="server.comment"
            :branch="server.branch" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>

</template>

<script>
import Server from "~/components/Server.vue";

export default {
  components: {
    Server
  },
  mounted() {
    this.$store.dispatch("getServers");
  }
};
</script>
