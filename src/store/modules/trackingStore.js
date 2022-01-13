import axios from "axios";

const trackingStore = {
  namespaced: true,
  state: {
    listLength: 0,
    totalList: [],
    responseData: {},
    totalExpense: 0,
    totalIncome: 0,
  },
  getters: {},
  mutations: {
    setSpendList: (state, spendingList) => {
      state.totalList = spendingList;
      state.listLength = spendingList.length;
    },
    setResponseData: (state, data) => {
      state.responseData = data;
    },
    addNewSpendItem: (state, spendingItem) => {
      state.totalList.push(spendingItem);
    },
    deleteItem: (state, id) => {
      state.totalList.filter((list) => list.id !== id);
    },
    editSpendItem: (state, data) => {
      console.log(state.totalList);
      const itemToUpdate = state.totalList.find((list) => list.id == data.id);
      itemToUpdate.amount = data.amount;
      itemToUpdate.category = data.category;
      itemToUpdate.date = data.date;
      itemToUpdate.memo = data.memo;
      itemToUpdate.type = data.type;
    },
  },
  actions: {
    async fetchSpendingList({ commit }, userUid) {
      console.log(userUid);
      const response = await axios.get(
        `https://spedingtracker-94188-default-rtdb.firebaseio.com/users/${userUid}/spend.json`
        //"https://spedingtracker-94188-default-rtdb.firebaseio.com/spend.json"
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
            type: value.type,
            category: value.category,
            amount: value.amount,
            date: value.date,
            memo: value.memo,
          });
        });
      }

      commit("setSpendList", arr);
      commit("setResponseData", response.data);
    },
    async addSpendItem({ commit }, data) {
      console.log(data);
      await axios.post(
        `https://spedingtracker-94188-default-rtdb.firebaseio.com/users/${data.uid}/spend.json`,
        data
      );
      commit("addNewSpendItem", data);
    },
    async deleteSpendItem({ state, commit }, data) {
      console.log(state.totalList);
      await axios.delete(
        `https://spedingtracker-94188-default-rtdb.firebaseio.com/users/${data.uid}/spend/${data.id}.json`
        // `https://spedingtracker-94188-default-rtdb.firebaseio.com/spend/${id}.json`
      );
      console.log(state.totalList);
      commit("deleteItem", data.id);
    },
    async updateSpendItem({ state, commit }, data) {
      console.log(state.responseData);
      console.log("updating data", data.id);
      await axios.put(
        `https://spedingtracker-94188-default-rtdb.firebaseio.com/users/${data.uid}/spend/${data.id}.json`,
        // `https://spedingtracker-94188-default-rtdb.firebaseio.com/spend/${data.id}.json`,
        data
      );
      commit("editSpendItem", data);
    },
  },
};

export default trackingStore;
