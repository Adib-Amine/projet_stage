<template>
  <div id="app">
      <Header class="navbar"/>
      <DemoApp />
  </div>
</template>

<script>
import DemoApp from './components/DemoApp'
import Header from './components/layout/Header'
export default {
  name: 'App',
  components: {
    DemoApp,
    Header
  }
}
</script>

<style>
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
.navbar {
    min-height: 50px;
}
</style>
