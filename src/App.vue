<template>
  <div id="app">
      <Header />
      <img alt="Vue logo" src="./assets/logo.png">

    <HelloWorld msg="Welcome to Your Vue.js App :)"/>

  
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layout/Header'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  color: #2c3e50;  
}
</style>
