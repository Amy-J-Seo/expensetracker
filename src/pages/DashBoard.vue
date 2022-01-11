<template>
  <div class="dashboard_container">
    <summary-expense />
    <div class="input_area">
      <ExpenseEnterForm />
    </div>
    <div class="tableview_area">
      <data-table />
    </div>
  </div>
</template>
<script>
import ExpenseEnterForm from "./ExpenseEnterForm.vue";
import DataTable from "./DataTable.vue";
import SummaryExpense from "./SummaryExpense.vue";
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
  computed: {},
  methods: {},
  created: {},
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
