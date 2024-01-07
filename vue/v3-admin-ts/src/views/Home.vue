<template>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box">
        <div class="content" :class="{ 'content-collapse': collapse}">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import vHeader from '../components/Header.vue'
import { computed } from 'vue';
import VSidebar from '../components/Slidbar.vue'
import { useSideBarStore } from '../store/sidebar';
const sidebarStore = useSideBarStore()
const collapse = computed(() => sidebarStore.collapse)
</script>

<style scoped>

</style>