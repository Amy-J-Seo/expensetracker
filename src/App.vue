<template>
  <div id="app">
    <main-header />
    <sub-header></sub-header>
    {{ getToken }}
    <div v-if="getToken">
      <router-view :key="renderKey"></router-view>
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
    ...mapState("userStore", ["renderKey"]),

    getToken() {
      return localStorage.getItem("loginInfo") != null &&
        JSON.parse(localStorage.getItem("loginInfo")).id
        ? true
        : false;
    },
  },
  methods: {
    ...mapMutations("loginStore", ["checkLoginStatus"]),
  },
  created() {
    console.log(this.getToken);
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
