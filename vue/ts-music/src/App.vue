<script setup lang="ts">
// import { onMounted, toRefs } from 'vue'

// import { usePersonalizedStore } from './store/personalized';
import Banner from './components/Banner.vue'



// const { personalizedMv } = toRefs(usePersonalizedStore())
// const { getPersonalized } = usePersonalizedStore()



</script>

<template>
  <div>
    <!-- ul>
    <li v-for="banner in banners" :key="banner.targetId">
      <img :src="banner.pic" alt="">
    </li>
    </ul> -->
    <Banner/>
    <!-- <ul>
      <li v-for="mv in personalizedMv" :key="mv.id">
        <img :src="mv.picUrl" alt="">
      </li>
    </ul> -->

  </div>
</template>

<style scoped></style>
