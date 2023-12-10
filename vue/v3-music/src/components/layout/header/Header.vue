<template>
    <div>
        <div class="flex items-center justify-between drag h-14">
            <div class="flex items-center pl-5">
                <IconPark :icon="Left" :size="iconSize" stroke-width="2" class="icon-button" />
                <IconPark :icon="Right" :size="iconSize" stroke-width="2" class="icon-button" />
            </div>
            <div class="flex items-center mr-5">
                <IconPark :icon="Mail" :size="iconSize" stroke-width="2" class="icon-button" />
                <IconPark :icon="Platte" :size="iconSize" stroke-width="2" class="icon-button" />
                <IconPark :icon="HamburgerButton" :size="iconSize" stroke-width="2" class="icon-button" />
            </div>
        </div>
    </div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { Mail, Platte, HamburgerButton, Left, Right } from '@icon-park/vue-next'
</script>

<style scoped></style>