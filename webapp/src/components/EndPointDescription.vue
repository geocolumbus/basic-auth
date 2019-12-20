<template>
  <v-container>
    <v-row>
      <v-col>{{url}}</v-col>
    </v-row>

  </v-container>
</template>
<script>
    export default {
        name: "EndPointDescription",
        props: {"url": String}
    }
</script>
<style></style>