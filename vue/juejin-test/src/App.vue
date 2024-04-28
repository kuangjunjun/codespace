<template>
  <div>
    <p @click="change">{{ count }}</p>
  </div>
</template>

<script setup>
import { ref, onUpdated } from 'vue';
const count = ref(0);

onUpdated(() => {
  console.log('onUpdated');
});


const change = () => {
  count.value++;
}

</script>


<style lang="scss" scoped></style>