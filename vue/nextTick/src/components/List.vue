<template>
    <div>
        <button @click="updateList">更新列表</button>
        <ul>
           <li v-for="n in list">{{ n }}</li>
        </ul>
    </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import { myNextTick } from './next-tick.js'
const list = ref(new Array(20).fill(0))
const updateList = () => {
    list.value.push(...(new Array(10).fill(1)))
    myNextTick(() => {
        const liItem = document.querySelector('li:last-child')
        liItem.scrollIntoView({ behavior: 'smooth' })
    })
}
</script>

<style scoped>
li{
    height: 30px;
    margin: 10px;
    background-color: aquamarine;
}
</style>