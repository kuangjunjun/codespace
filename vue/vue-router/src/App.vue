<template>
  <nav>
    <router-link to="/home">home</router-link> |
    <router-link to="/about">about</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
#app{
  text-align: center;
  font-size: 40px;
}
</style>