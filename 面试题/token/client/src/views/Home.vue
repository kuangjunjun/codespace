<template>
    <div>
        home
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { home } from '../api/user.js';

onMounted(()=>{
    // axios.get('/home').then(res=>{
    //     console.log(res);
    // })
    // .catch(err=>{
    //     console.log(err);
    // })
    home()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
})
</script>

<style lang="scss" scoped>

</style>