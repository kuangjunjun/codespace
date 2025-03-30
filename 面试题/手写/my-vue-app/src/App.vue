<script setup>


const test = () => {
    console.log('test')
}

const debounce = (fn, delay) => {
    let timer = null
    return (...args) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(args)
        }, delay)
    }
}

const sendTest = debounce(() => test(), 2000)
</script>

<template>
    <button @click="sendTest">发送</button>
</template>

<style scoped>

</style>
