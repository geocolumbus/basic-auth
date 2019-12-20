<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col><h1>URL Administration</h1></v-col>
      </v-row>
      <v-row>
        <v-col>
          <EndPointInput v-on:addUrl="addUrl"></EndPointInput>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4">
          <EndPointList :urls="urls"></EndPointList>
        </v-col>
        <v-col>
          <EndPointDescription :url="urls[0]"></EndPointDescription>
        </v-col>
      </v-row>
    </v-container>
    <v-footer>(c) 2019</v-footer>
  </v-app>
</template>

<script>
    import Vue from 'vue'
    import EndPointInput from "./components/EndPointInput.vue"
    import EndPointList from "./components/EndPointList.vue"
    import EndPointDescription from "./components/EndPointDescription.vue"

    export default {
        name: "app",
        components: {
            EndPointInput,
            EndPointList,
            EndPointDescription
        },
        data: function () {
            return {
                urls: ["testing"]
            }
        },
        methods: {
            addUrl: function (url) {
                const context = this
                Vue.axios(
                    "http://localhost:8000/urlMetadata", {
                        method: "GET",
                        params: {url: url},
                        headers: new Headers({
                            "Accept": "application/json"
                        })
                    }
                ).then(function (response) {
                        context.urls.push(response.data)
                    })
            }
        }
    }
</script>
