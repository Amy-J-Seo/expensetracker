<template>
  <div class="sub__header">
    <router-link to="/dashboard">DashBoard</router-link>
    <router-link to="/expenseEnterForm">Expense Enter Form</router-link>
    <router-link to="/dataTable">Spending History</router-link>
    <router-link to="/setting">Setting</router-link>
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
