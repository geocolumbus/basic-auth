<template>
  <div id="app">
    <EndPointInput></EndPointInput>
    <EndPointList></EndPointList>
    <EndPointDescription></EndPointDescription>
  </div>
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
