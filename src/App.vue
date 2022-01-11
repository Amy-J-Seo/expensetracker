<template>
  <div id="app">
    <main-header />
    <sub-header></sub-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "./layout/MainHeader.vue";
import SubHeader from "./layout/SubHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    SubHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
