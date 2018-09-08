<template>

          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="headline">{{this.server}}</div>
                  <div>{{this.comment}}</div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat dark>Ändra</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
    <!-- <div>
        <h3>{{this.server}}</h3>
        Gren: {{this.branch}}
        Användare: {{this.user}}
        Kommentar: {{this.comment}}
    </div> -->
</template>
<script>
export default {
  props: ["server", "branch", "user", "comment"]
};
</script>
