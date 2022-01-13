const loginStore = {
  namespaced: true,
  state: {
    isLoggedIn:
      localStorage.getItem("loginInfo") != null &&
      JSON.parse(localStorage.getItem("loginInfo")).id
        ? true
        : false,
    uniqueId: "",
  },
  getters: {
    getUniqueId(state) {
      const uid = JSON.parse(localStorage.getItem("loginInfo")).id;
      state.uniqueId = uid;
      return state.uniqueId;
    },
  },
  mutations: {
    logout(state) {
      localStorage.removeItem("loginInfo");
      state.isLoggedIn = false;
    },
  },
  actions: {},
};

export default loginStore;
