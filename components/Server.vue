<template>
    <div>
        <h3>{{this.server}}</h3>
        Gren: {{this.branch}}
        Användare: {{this.user}}
        Kommentar: {{this.comment}}
    </div>
</template>
<script>
export default {
  props: ["server", "branch", "user", "comment"]
};
</script>
