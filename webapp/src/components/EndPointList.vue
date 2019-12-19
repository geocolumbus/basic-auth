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
        data: function () {
            return {
                urls: [
                    {url: "http://127.0.0.1", title: "The first local endpoint."},
                    {url: "https://www.google.com/search?q=vuetify+theme&rlz=1C5CHFA_enUS880US880&oq=vuetify+theme&aqs=chrome..69i57.2576j0j9&sourceid=chrome&ie=UTF-8", title: "The second local endpoint."},
                    {url: "http://127.0.0.1", title: "The first local endpoint."},
                    {url: "http://127.0.0.2", title: "The second local endpoint."}
                ]
            }
        }
    }
</script>
<style></style>