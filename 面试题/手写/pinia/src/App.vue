<template>
  <div>
    <button @click="increment">+1</button>
    {{ count }}
    
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from './store/counter';

const store = useCounterStore()

const { count } = storeToRefs(store)
const { increment, myrequest } = store
  // myrequest().then(res => console.log(res)
  // )
// console.log(myrequest());


</script>

<style lang="scss" scoped>

</style>