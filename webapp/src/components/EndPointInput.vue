<template>
  <div class="endpointinput">
    <v-text-field v-model="url" label="url"></v-text-field>
  </div>
</template>
<script>
    export default {
        name: "EndPointInput",
        data: function () {
            return {
                url: ""
            }
        }
    }
</script>
<style></style>