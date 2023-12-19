<template>
    <div>
        <div class="body">
            <ul>
                <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
            </ul>
            <button @click="changeProps">修改Props</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['lists'],
    data() {
        return {
            
        }
    },   
    methods: {
        changeProps() {
            this.lists[0] = 'HTML'
        }
    }
}
</script>

<style lang="less" scoped></style>