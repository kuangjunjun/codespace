<template>
  <div>
    <p ref="refP">消息: {{ message }}</p>
    <!-- <button @click="updateMsg">更新消息</button> -->
  </div>
</template>

<script setup>
import { ref, onBeforeMount, nextTick, onMounted } from 'vue'

const message = ref('初始消息')

const refP = ref(null)
// console.log(refP.value, 'setup');

// onBeforeMount(() => {
//   console.log(refP.value);
// })

setTimeout(() => {
  console.log(refP.value, 'setTimeout');
}, 0);

// const updateMsg = () => {
//   message.value = '更新之后的消息'

  // console.log(document.querySelector('p'), 'nextTick');
// }

nextTick(() => {
  console.log(refP.value, 'nextTick');
})


// onMounted(() => {
//   console.log(refP.value, 'onMounted');
// })

// console.log(refP.value);

</script>

<style lang="scss" scoped>

</style>