<template>
<div>
    <h2>här visas servrarna</h2>
    <ul>
        <li v-for="server in this.$store.state.servers" :key="server.id">
            {{server.name}}
        </li>
    </ul>
    <button @click="getServers">Hämta servrar</button>
</div>
</template>
<script>
import { StoreDB } from "@/services/fireinit.js";
export default {
  methods: {
    getServers() {
      this.$store.dispatch("getServers");
    }
  }
};
</script>
