<template>

    <v-card>
      <v-container
        fluid
        grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12>
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
     <v-btn flat dark @click="getServers">Hämta servrar</v-btn>
    </v-card>

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
