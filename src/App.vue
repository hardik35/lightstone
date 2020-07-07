<template>
  <div id="app">
    <shapes/>
  </div>
</template>

<script>
import shapes from './components/shapes/shapes.vue'

export default {
  name: 'App',
  components: {
    shapes,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
