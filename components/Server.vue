<template>

  <v-layout row wrap>
    <v-flex xs12>
      <v-card raised :color="color" class="white--text">
      <v-card-title primary-title>
          <div class="headline">{{this.server}}</div>
      </v-card-title>

      <v-card-text v-if="edit">
        <v-text-field v-model="newBranch" prepend-icon="star" name="newBranch" label="Gren" type="text"></v-text-field>
        <v-text-field v-model="newUser" prepend-icon="accessible" name="newUser" label="Användare" type="text"></v-text-field>
        <v-textarea v-model="newComment" prepend-icon="lock" name="newComment" label="Kommentar"></v-textarea>
      </v-card-text>

      <v-card-text v-else>
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

      <v-card-actions v-if="edit">
         <v-layout row wrap justify-end>
           <v-btn fab dark color="red" class="mx-2 my-2" @click="edit=false">
            <v-icon dark>cancel</v-icon>
          </v-btn>
          <v-btn fab dark color="green" class="mx-2 my-2" @click="save">
            <v-icon dark>save</v-icon>
          </v-btn>
        </v-layout>
      </v-card-actions>

      <v-card-actions v-else>
        <v-layout row wrap justify-end>
          <v-btn fab dark color="cyan" class="mx-2 my-2" @click="edit=true">
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
  data: function() {
    return {
      edit: false,
      newUser: "",
      newComment: "",
      newBranch: ""
    };
  },
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
  },
  methods: {
    save() {
      console.log(
        `Sparar: ${this.newBranch} ${this.newUser} ${this.newComment}`
      );

      this.$store.dispatch("updateServer", {
        server: this.server,
        branch: this.newBranch,
        user: this.newUser,
        comment: this.newComment
      });

      this.newUser = "";
      this.newComment = "";
      this.newBranch = "";
      this.edit = false;
    }
  }
};
</script>
