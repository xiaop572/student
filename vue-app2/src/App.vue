<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <qrcode url="www.baidu.com" iconurl="https://cn.vuejs.org/images/logo.png"></qrcode>
  </div>
</template>

<script>
import qrcode from 'vue_qrcodes'
export default {
  name: 'app',
  components: {
    qrcode
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
