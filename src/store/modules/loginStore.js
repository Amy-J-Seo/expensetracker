const loginStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
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
    checkLoginStatus: (state) => {
      state.isLoggedIn =
        localStorage.getItem("loginInfo") !== null ? true : false;
    },
    logout(state) {
      localStorage.removeItem("loginInfo");
      state.isLoggedIn = false;
    },
  },
  actions: {},
};

export default loginStore;
