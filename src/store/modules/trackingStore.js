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
      const itemToUpdate = state.totalList.find((list) => list.id == data.id);
      itemToUpdate.amount = data.amount;
      itemToUpdate.category = data.category;
      itemToUpdate.date = data.date;
      itemToUpdate.memo = data.memo;
      itemToUpdate.type = data.type;
    },
  },
  actions: {
    async fetchSpendingList({ commit }) {
      const response = await axios.get(
        "https://spedingtracker-94188-default-rtdb.firebaseio.com/spend.json"
      );
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
      await axios.post(
        "https://spedingtracker-94188-default-rtdb.firebaseio.com/spend.json",
        data
      );
      commit("addNewSpendItem", data);
    },
    async deleteSpendItem({ state, commit }, id) {
      console.log(state.responseData);

      //   function getKeyByValue(object, value) {
      //     return Object.keys(object).find((key) => key === value);
      //   }
      //   const itemToRemove = getKeyByValue(state.responseData, id);

      await axios.delete(
        `https://spedingtracker-94188-default-rtdb.firebaseio.com/spend/${id}.json`
      );
      console.log(state.totalList);
      commit("deleteItem", id);
    },
    async updateSpendItem({ state, commit }, data) {
      console.log(state.responseData);
      console.log("updating data", data.id);
      await axios.put(
        `https://spedingtracker-94188-default-rtdb.firebaseio.com/spend/${data.id}.json`,
        data
      );
      commit("editSpendItem", data);
    },
  },
};

export default trackingStore;