
<template>

</template>

<script setup>
import axios from 'axios'
import { onMounted } from 'vue'

onMounted(() => {
  axios.get('/api')
  .then((res) => {
    console.log(res);
  })
})
</script>


<style scoped>

</style>
