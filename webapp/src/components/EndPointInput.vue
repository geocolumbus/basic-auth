<template>
  <v-container fluid class="py-0">
    <v-row>
      <v-col cols="4" sm="3" md="2" class="pb-0 pt-4 text-right">
        <v-btn color="" @click="submit">Submit</v-btn>
      </v-col>
      <v-col cols="8" sm="8" md="9" class="py-0">
        <v-text-field v-model="url" label="url"></v-text-field>
      </v-col>
      <v-col xs="0" sm="1" md="1" class="py-0"></v-col>
    </v-row>
  </v-container>
</template>
<script>
    export default {
        name: "EndPointInput",
        data: function () {
            return {
                url: ""
            }
        },
        methods: {
            submit: function () {
                this.$emit("addUrl", this.url)
            }
        }
    }
</script>
<style></style>