<template>

  <v-layout row wrap>
    <v-flex xs12>
      <v-card :color="color" raised class="white--text">
        <v-img :src="bg" height="100px" >

          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ server }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>

        <v-card-text v-if="edit">
          <v-text-field v-model="newBranch" prepend-icon="star" name="newBranch" label="Gren" type="text"/>
          <v-text-field v-model="newUser" prepend-icon="accessible" name="newUser" label="Användare" type="text"/>
          <v-textarea v-model="newComment" prepend-icon="lock" name="newComment" label="Kommentar"/>
        </v-card-text>

        <v-card-text v-else>
          <v-layout>
            <v-flex xs1>
              <v-icon dark x-large>extension</v-icon>
            </v-flex>
            <v-flex xs11>
              <span class="subheading font-weight-bold">Gren:</span><p>{{ branch }}</p>
              <span class="subheading font-weight-bold">Användare:</span><p>{{ user }}</p>
              <span class="subheading font-weight-bold">Kommentar:</span><p>{{ comment }}</p>
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
            <v-btn fab dark color="cyan" class="mr-2 mb-2" @click="edit=true">
              <v-icon dark>edit</v-icon>
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    
</template>

<script>
import t from "~/services/trianglify.js";

export default {
  props: {
    server: { type: String, default: "" },
    branch: { type: String, default: "" },
    user: { type: String, default: "" },
    comment: { type: String, default: "" }
  },
  data: function() {
    return {
      edit: false,
      newUser: "",
      newComment: "",
      newBranch: "",
      bg: t(this.server)
    };
  },
  computed: {
    color() {
      let hash = 0;

      let str = this.server;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let color = "#";
      for (var j = 0; j < 3; j++) {
        let value = (hash >> (j * 8)) & 0xff;
        color += ("00" + value.toString(16)).substr(-2);
      }

      return color;
    }
  },
  methods: {
    save() {
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
