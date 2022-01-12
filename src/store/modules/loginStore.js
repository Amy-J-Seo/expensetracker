const loginStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
  },
  getters: {},
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
