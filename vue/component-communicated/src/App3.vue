<template>
    <div>
        <Head @add="handle"/>
        <List :lists="lists"/>
    </div>
</template>
  
<script>
import Head from '@/components/body3/Head.vue'
import List from '@/components/body3/List.vue'
export default {
    components: {
        Head,
        List
    },
    data() {
        return {
            lists: ['html', 'css']
        }
    },
    methods: {
        handle(val) {
            this.lists.push(val)
        }
    }
}
</script>
  
<style lang="less" scoped></style>
  