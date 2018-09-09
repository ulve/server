<template>

  <v-img
    :gradient="gradient"
    dark
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    max-height="150px">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Serverstatus</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>

</template>

<script>
export default {
  data: () => ({
    gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)"
  })
};
</script>
