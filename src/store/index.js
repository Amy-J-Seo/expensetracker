import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import trackingStore from "./modules/trackingStore";
import userStore from "./modules/userStore";
import loginStore from "./modules/loginStore";

export default new Vuex.Store({
  modules: {
    trackingStore: trackingStore,
    userStore: userStore,
    loginStore: loginStore,
  },
});
