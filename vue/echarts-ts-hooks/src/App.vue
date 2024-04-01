<script setup lang="ts">
import Layout from "./layout/index.vue";
</script>

<template>
  <div class="main">
    <Layout></Layout>
  </div>
</template>

<style scoped>
body, html{
  background-color: #000;
}
body{
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* 高清  抗锯齿 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
