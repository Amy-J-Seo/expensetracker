<template>
  <div id="app">
    <main-header />
    <sub-header></sub-header>
    <div v-if="isLoggedIn">
      {{ isLoggedIn }}
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from "./layout/MainHeader.vue";
import SubHeader from "./layout/SubHeader.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "App",
  components: {
    MainHeader,
    SubHeader,
  },
  computed: {
    ...mapState("loginStore", ["isLoggedIn"]),
  },
  methods: {
    ...mapMutations("loginStore", ["checkLoginStatus"]),
  },
  created() {},
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
