<template>
  <div class="main__header">
    <div class="header">
      <div class="header_logo">
        <h2>Expense Tracker</h2>
      </div>
    </div>
    <div class="header_container">
      <button class="login_btn">Login</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainHeader",
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
.main__header {
  height: 60px;
  background-color: darkgrey;
  display: flex;
  justify-content: space-between;
}
.main__header h2 {
  margin-top: 5px;
  margin-left: 10px;
  color: rgb(0, 0, 0);
}
.login_btn {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
