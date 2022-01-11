import axios from "axios";

const userStore = {
  namespaced: true,
  state: {
    allUserList: [],
    responseData: {},
    userListLength: 0,
  },
  getters: {},
  mutations: {
    setAllUserList: (state, userList) => {
      state.allUserList = userList;
    },
    setResponseData: (state, data) => {
      state.responseData = data;
    },
    addNewUser: (state, newUser) => {
      state.allUserList.push(newUser);
    },
    deleteCurrentuser: (state, id) => {
      state.allUserList.filter((user) => user.id !== id);
    },
  },
  actions: {
    async fetchAllUserList({ commit }) {
      const response = await axios.get(
        "https://spedingtracker-94188-default-rtdb.firebaseio.com/users.json"
      );
      console.log(response.data);
      let arr = [];
      if (response.data === null) {
        return;
      } else {
        Object.entries(response.data).forEach((val) => {
          const [key, value] = val;
          arr.push({
            id: key,
            userId: value.userId,
            userPass: value.userPass,
            userName: value.userName,
            userEmail: value.userEmail,
            date: value.date,
          });
        });
      }

      commit("setAllUserList", arr);
      commit("setResponseData", response.data);
    },
    async addNewUser({ commit }, data) {
      console.log(data);
      await axios.post(
        "https://spedingtracker-94188-default-rtdb.firebaseio.com/users.json",
        data
      );
      commit("addNewUser", data);
    },
    async deleteUser({ state, commit }, id) {
      console.log(state.responseData);

      await axios.delete(
        `https://spedingtracker-94188-default-rtdb.firebaseio.com/spend/${id}.json`
      );
      console.log(state.totalList);
      commit("deleteCurrentuser", id);
    },
  },
};

export default userStore;
