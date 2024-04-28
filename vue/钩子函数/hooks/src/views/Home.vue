<template>
    <div>
        <p>home page</p>

        <!-- <Hello></Hello> -->
    </div>
</template>

<script setup>
import Hello from '../components/Hello.vue';
import { onActivated, onDeactivated, onMounted } from 'vue';

onMounted(() => {
    console.log('首页页面的onMounted');
})

onActivated(() => {  // 当被缓存的组件再次生效时触发
    console.log('首页页面的onActivated');
})

onDeactivated(() => {  // 当被缓存的组件离开时触发
    console.log('首页页面的onDeactivated');
})

</script>

<style lang="scss" scoped>

</style>