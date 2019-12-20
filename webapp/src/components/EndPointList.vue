<template>
  <v-list height="500" style="overflow: auto">
    <v-list-item two-line v-for="url in urls" :key="url.url">
      <v-list-item-content>
        <v-list-item-title v-text="url.title"></v-list-item-title>
        <v-list-item-subtitle>{{url.url}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
    export default {
        name: "EndPointList",
        props: {urls: Array}
    }
</script>
<style></style>