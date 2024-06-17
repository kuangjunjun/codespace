<template>
  <div class="container">
    <h2 class="title">todoList</h2>
    <div class="out">
      <input type="text" placeholder="请输入待办事项" v-model="content">
      <button @click="add">添加</button>
    </div>

    <div class="content">
      <div v-for="(item, index) in todoList" :key="index">
        {{ item }}
        <button @click="del(index)">x</button>        
      </div>
    </div>

    
  </div>
</template>

<script setup>
import { ref } from 'vue'
const todoList = ref(['html', 'css'])
const content = ref('')

const add = () => {
  // console.log(content.value);
  todoList.value.push(content.value)
}

const del = (index) => {
  todoList.value.splice(index, 1)
}

</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}

.container{
  .title{
    text-align: center;
  }
  .out{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    input{
      width: 300px;
    }
    button{
      width: 100px;
    }
  }
  .content{
    margin-top: 20px;

  }
}
</style>