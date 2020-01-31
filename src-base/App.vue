<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    //3.编写组件标签
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  //1.引入组件
import HelloWorld from './components/HelloWorld.vue'

export default {
  //2.映射组件标签
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
