import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import trackingStore from "./modules/trackingStore";

export default new Vuex.Store({
  modules: {
    trackingStore: trackingStore,
  },
});
