import { defineStore } from 'pinia'
import { ref } from 'vue'
import { usePersonalized } from '../api'
import { Personalized  } from '../models/personalized'

export const usePersonalizedStore = defineStore('personalized', () => {
    const personalizedMv = ref<Personalized[]>()
    const getPersonalized = async () => {
        const result = await usePersonalized()
        personalizedMv.value = result
    }
    return {
        personalizedMv,
        getPersonalized
    }
}) 