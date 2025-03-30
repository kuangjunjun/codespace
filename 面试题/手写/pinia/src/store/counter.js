import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    function increment() {
        count.value++
    }

    function test() {
        return new Promise((reslove, reject) => {
            setTimeout(function () {
                reslove('Success')
            }, 1000)
        })
    }

    const myrequest = async() => {
        const res = await test()
        return res
    }

    return { count, increment, myrequest, test }
})