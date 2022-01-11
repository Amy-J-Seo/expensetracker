import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import DashBoard from "./pages/DashBoard.vue";
import ExpenseEnterForm from "./pages/ExpenseEnterForm.vue";
import DataTable from "./pages/DataTable.vue";
import Summary from "./pages/SummaryExpense.vue";

const routes = [
  { path: "/dashboard", component: DashBoard },
  { path: "/expenseEnterForm", component: ExpenseEnterForm },
  { path: "/dataTable", component: DataTable },
  { path: "/summary", component: Summary },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
