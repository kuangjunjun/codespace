<template>
  <div>
    <TodoList :todos=" todos" :addTodo="addTodo"/>
    <Item/>
    <Bang :title="作者榜" :item="author" />
  </div>
</template>

<script setup>
// 以组件为开发单元
import { ref } from 'vue'
// const todos = ref([
//   {text: 'haha'}
// ])
// todos 来到 vuex mapState pinia
import { useTodoStore } from './store/todo.js'
import TodoList from './components/TodoList.vue'
// const todoStore = useTodoStore()
// console.log(todoStore.todos);
const {todos, addTodo} = useTodoStore()
 </script>

<style scoped>

</style>