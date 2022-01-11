<template>
  <div class="sub__header">
    <!-- <router-link to="/dashboard">DashBoard</router-link> -->
    <router-link to="/dataTable">Spending and income</router-link>
    <router-link to="/summary">Summary</router-link>
  </div>
</template>
<script>
export default {
  name: "SubHeader",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created: {},
  watch: {},
};
</script>
<style scoped>
.sub__header {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}
.nav_links {
  text-decoration: none;
}
a {
  text-decoration: none;
  color: rgb(2, 2, 124);
  font-size: 20px;
}
</style>
