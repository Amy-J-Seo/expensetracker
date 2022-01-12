<template>
  <div class="dashboard_container">
    {{ isLoggedIn }}
    <p>jellfldskfj</p>
    <div v-if="isLoggedIn">
      <summary-expense />
      <div class="input_area">
        <ExpenseEnterForm />
      </div>
      <div class="tableview_area">
        <data-table />
      </div>
    </div>
  </div>
</template>

<script>
import ExpenseEnterForm from "./ExpenseEnterForm.vue";
import DataTable from "./DataTable.vue";
import SummaryExpense from "./SummaryExpense.vue";

import { mapMutations, mapState } from "vuex";

export default {
  name: "",
  components: {
    ExpenseEnterForm,
    DataTable,
    SummaryExpense,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("loginStore", ["isLoggedIn"]),
  },
  methods: {
    ...mapMutations("loginStore", ["checkLoginStatus"]),
  },
  created() {
    this.checkLoginStatus();
  },
  watch: {},
};
</script>
<style scoped>
.input_area {
  margin-top: 50px;
}
.tableview_area {
  margin-top: 50px;
}
</style>
