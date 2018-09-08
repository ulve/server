<template>

  <v-layout row wrap>
    <v-flex xs12>
      <v-card :color="color" class="white--text">
      <v-card-title primary-title>
          <div class="headline">{{this.server}}</div>
      </v-card-title>
      <v-card-text>
        <v-layout>
          <v-flex xs1>
            <v-icon dark x-large>extension</v-icon>
          </v-flex>
          <v-flex xs11>
            <span class="subheading font-weight-bold">Gren:</span><p>{{this.branch}}</p>
            <span class="subheading font-weight-bold">Användare:</span><p>{{this.user}}</p>
            <span class="subheading font-weight-bold">Kommentar:</span><p>{{this.comment}}</p>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-layout row wrap  justify-end>
          <v-btn fab dark color="cyan" class="mx-2 my-2">
            <v-icon dark>edit</v-icon>
          </v-btn>
        </v-layout>
      </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    
</template>

<script>
export default {
  props: ["server", "branch", "user", "comment"],

  computed: {
    color() {
      let hash = 0;
      let str = this.server;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let colour = "#";
      for (var i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xff;
        colour += ("00" + value.toString(16)).substr(-2);
      }
      return colour;
    }
  }
};
</script>
