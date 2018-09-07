<template>
<div>
    <h2>här visas servrarna</h2>
    <ul>
        <li v-for="(server, idx) in servers" :key="idx">{{server.name}}</li>
    </ul>
</div>
</template>
<script>
import { StoreDB } from "@/services/fireinit.js";
export default {
  data() {
    return {
      servers: []
    };
  },
  firestore() {
    return {
      locations: StoreDB.collection("servers")
    };
  }
};
</script>
