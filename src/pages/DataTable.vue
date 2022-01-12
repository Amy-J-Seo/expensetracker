<template>
  <div>
    <div class="title">
      <h1>Your spending list...</h1>
      <div v-if="!formIsVisible" class="btnContainer">
        <button class="addBtn" @click="showForm">
          <font-awesome-icon icon="plus" />
        </button>
      </div>
      <div v-if="formIsVisible">
        <button class="addBtn" @click="showForm">X</button>
      </div>
    </div>
    <expense-enter-form
      v-if="formIsVisible"
      :formIsVisible="this.formIsVisible"
      :isEditing="this.isEditing"
      :data="this.editRowData"
      @formIsVisibleUpdate="updateFormState"
    />
    <div>
      <ve-table
        :columns="columns"
        :table-data="this.totalList"
        :columnHiddenOption="columnHiddenOption"
      />
      <div v-show="showEmpty" class="empty-data">Data Empty.</div>
    </div>
  </div>
</template>
<script>
import ExpenseEnterForm from "./ExpenseEnterForm.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "DataTable",
  props: ["listData"],
  components: {
    ExpenseEnterForm,
  },
  data() {
    return {
      formIsVisible: false,
      columnHiddenOption: {
        // default hidden column keys
        defaultHiddenColumnKeys: ["no"],
      },
      columns: [
        { field: "type", key: "a", title: "Type" },
        { field: "category", key: "b", title: "Category" },
        { field: "amount", key: "c", title: "Amount" },
        { field: "memo", key: "d", title: "Memo" },
        { field: "date", key: "e", title: "Date" },
        {
          field: "update",
          key: "f",
          title: "Actions",
          renderBodyCell: ({ row }) => {
            return (
              <span>
                <button
                  class="button-demo"
                  on-click={() => {
                    this.editRowData = row;
                    console.log(this.editRowData);
                    this.isEditing = true;
                    this.formIsVisible = true;
                  }}
                >
                  Edit
                </button>
                &nbsp;
                <button
                  class="button-demo"
                  on-click={() => {
                    this.deleteRow(row.id);
                  }}
                >
                  Delete
                </button>
              </span>
            );
          },
        },
      ],
      tableData: [],
      editRowData: {},
      isEditing: false,
    };
  },
  computed: {
    ...mapState("trackingStore", ["totalList"]),
    showEmpty() {
      return this.totalList.length == 0;
    },
  },
  methods: {
    ...mapActions("trackingStore", ["fetchSpendingList", "deleteSpendItem"]),
    editRow(rowIndex) {
      alert(`eidt row number:${rowIndex}`);
    },
    deleteRow(id) {
      console.log(id);
      this.deleteSpendItem(id);
      //const itemToRemove = this.totalList.indexOf(id);
      const itemToRemove = this.totalList
        .map(function (e) {
          return e.id;
        })
        .indexOf(id);
      console.log(itemToRemove);
      this.totalList.splice(itemToRemove, 1);
    },
    showForm() {
      this.formIsVisible = !this.formIsVisible;
    },
    updateFormState(value) {
      console.log(value);
      this.formIsVisible = value;
    },
  },
  created() {
    this.fetchSpendingList();
  },
  watch: {},
};
</script>
<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}
.title h1 {
  margin-left: 40px;
}
.addBtn {
  cursor: pointer;
  all: unset;
  margin-top: 10px;
  margin-right: 100px;
  font-size: 30px;
  color: cornflowerblue;
  border: 1px solid cornflowerblue;
  border-radius: 45%;
  height: 50px;
  width: 50px;
}
@media only screen and (max-width: 600px) {
  .title h1 {
    margin-left: 20px;
  }
  .addBtn {
    cursor: pointer;
    all: unset;
    margin-top: 5px;
    font-size: 20px;
    color: cornflowerblue;
    border: 1px solid cornflowerblue;
    border-radius: 45%;
    height: 30px;
    width: 30px;
  }
}
.empty-data {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  color: #666;
  font-size: 16px;
  border: 1px solid #eee;
  border-top: 0;
}
</style>
