<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col><h1>URL Administration</h1></v-col>
      </v-row>
      <v-row>
        <v-col>
          <EndPointInput></EndPointInput>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4">
          <EndPointList></EndPointList>
        </v-col>
        <v-col>
          <EndPointDescription></EndPointDescription>
        </v-col>
      </v-row>
    </v-container>
    <v-footer>(c) 2019</v-footer>
  </v-app>
</template>

<script>
    import EndPointInput from "./components/EndPointInput.vue"
    import EndPointList from "./components/EndPointList.vue"
    import EndPointDescription from "./components/EndPointDescription.vue"

    export default {
        name: "app",
        components: {
            EndPointInput,
            EndPointList,
            EndPointDescription
        }
    }
</script>
