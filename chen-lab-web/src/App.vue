<template>
  <img src="./assets/logo-hias.png">
  <div>
    <p>
      If Element Plus is successfully added to this project, you'll see an
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <el-button type="primary">el-button</el-button>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Homepage msg="Welcome to ChenLab! Hello world！"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Homepage from './components/Homepage.vue'

export default {
  name: 'App',
  components: {
    Homepage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
