<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->

  <router-view style="padding-bottom: 12vh" />
  <base-layout-v2 />
<!--  <base-layout></base-layout>-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BaseLayout from './layout/index.vue'
import BaseLayoutV2 from './layout/V2.vue'

export default {
  name: 'App',
  components: {
    // BaseLayout,
    BaseLayoutV2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  background-color: #f5f6f7;
  height: 100vh;
  /*margin-top: 5px;*/
}
</style>
