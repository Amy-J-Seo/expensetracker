import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import DashBoard from "./pages/DashBoard.vue";
import ExpenseEnterForm from "./pages/ExpenseEnterForm.vue";
import DataTable from "./pages/DataTable.vue";
import Summary from "./pages/SummaryExpense.vue";
import UserSetting from "./pages/UserSetting.vue";

const routes = [
  // { path: "/dashboard", component: DashBoard },
  { path: "/", component: DataTable },
  { path: "/dataTable", component: DataTable },
  { path: "/expenseEnterForm", component: ExpenseEnterForm },
  { path: "/summary", component: Summary },
  { path: "/setting", component: UserSetting },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
