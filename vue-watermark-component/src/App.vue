<template>
  <div id="app">
    <watermark text="mjkmjk">
      <h1>This is a test page</h1>
    </watermark>
  </div>
</template>

<script>
import Watermark from "./components/Watermark.vue";

export default {
  name: "App",
  components: {
    Watermark,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
