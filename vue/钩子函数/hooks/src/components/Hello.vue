<template>
    <div>
        <p @click="count++">{{ count }}</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const count = ref(0);



// onMounted(() => {
//     console.log('Hello子组件的onMounted');
// });
</script>

<style lang="scss" scoped>

</style>