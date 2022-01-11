import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store/index";

import "vue-easytable/libs/theme-default/index.css";
import vueEasytable from "vue-easytable";

//fontawsome library
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faTrashAlt,
  faMoneyBillWave,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faTrashAlt, faMoneyBillWave, faTimesCircle);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(vueEasytable);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
