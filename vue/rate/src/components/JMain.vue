<!-- View -->
<template>
    <div>
        JMain
        <div v-for="user in users">
            <Item :user="user" />
        </div>
    </div>
</template>

<script setup>
import { ref }  from 'vue'
import Item from './Item.vue';
// 提供数据， 模型
// Model
let users = ref(['路修远', '沸羊羊'])
setTimeout(() => {
    users.value = [...users.value, 'Yiko']
}, 2000)

fetch('https://k9gtiz.laf.run/get-list')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        users.value = data.data.map(item => item.text)
    })

</script>

<style scoped>

</style>