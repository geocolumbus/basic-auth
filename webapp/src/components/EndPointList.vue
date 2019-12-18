<template>
  <div>
    <v-card class="mx-auto" max-width="400" outlined v-for="url in urls" :key="url.url">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-4">{{url.title}}</v-list-item-title>
          <v-list-item-subtitle>{{url.url}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
    export default {
        name: "EndPointList",
        data: function () {
            return {
                urls: [
                    {url: "http://127.0.0.1", title: "The first local endpoint."},
                    {url: "http://127.0.0.2", title: "The second local endpoint."},
                    {url: "http://127.0.0.1", title: "The first local endpoint."},
                    {url: "http://127.0.0.2", title: "The second local endpoint."},
                    {url: "http://127.0.0.1", title: "The first local endpoint."},
                    {url: "http://127.0.0.2", title: "The second local endpoint."},
                    {url: "http://127.0.0.1", title: "The first local endpoint."},
                    {url: "http://127.0.0.2", title: "The second local endpoint."},
                    {url: "http://127.0.0.1", title: "The first local endpoint."},
                    {url: "http://127.0.0.2", title: "The second local endpoint."},
                    {url: "http://127.0.0.1", title: "The first local endpoint."},
                    {url: "http://127.0.0.2", title: "The second local endpoint."}
                ]
            }
        }
    }
</script>
<style></style>