<template>
  <div class="cards">
    <div class="card card-1">
      <p class="card__exit"><i class="times-circle"></i></p>
      <div class="card__title">
        <h2>Track your expense and income</h2>
        <div class="main_category">
          <label for="expense">
            <input
              type="radio"
              name="form.type"
              id="expense"
              value="expense"
              v-model="form.type"
              @change="checkTypeHandler"
            />
            Expense
          </label>
          <label for="income">
            <input
              type="radio"
              name="form.type"
              id="income"
              value="income"
              v-model="form.type"
              @change="checkTypeHandler"
            />
            Income
          </label>
        </div>
        <!-- expenseCategory -->
        <div class="sub_category" v-if="showExpenseCategory">
          <label for="shopping">
            <input
              type="radio"
              name="form.category"
              id="shopping"
              value="shopping"
              v-model="form.category"
            />
            Shopping
          </label>
          <label for="eatout">
            <input
              type="radio"
              name="form.category"
              id="eatout"
              value="eatout"
              v-model="form.category"
            />
            Eat out
          </label>
          <label for="grocery">
            <input
              type="radio"
              name="form.category"
              id="grocery"
              value="eatgroceryout"
              v-model="form.category"
            />
            Grocery
          </label>
          <label for="transportation">
            <input
              type="radio"
              name="form.category"
              id="transportation"
              value="transportation"
              v-model="form.category"
            />
            Transportation
          </label>
          <br />
          <label for="education">
            <input
              type="radio"
              name="form.category"
              id="education"
              value="education"
              v-model="form.category"
            />
            Education
          </label>
          <label for="culture">
            <input
              type="radio"
              name="form.category"
              id="culture"
              value="culture"
              v-model="form.category"
            />
            Culture
          </label>
        </div>
        <!-- end of expenseCategory -->

        <!-- income category -->
        <div class="sub_category" v-if="!showExpenseCategory">
          <label for="salary">
            <input
              type="radio"
              name="form.category"
              id="salary"
              value="salary"
              v-model="form.category"
            />
            Salary
          </label>
          <label for="present">
            <input
              type="radio"
              name="form.category"
              id="present"
              value="present"
              v-model="form.category"
            />
            Present
          </label>
          <label for="pocketmoney">
            <input
              type="radio"
              name="form.category"
              id="pocketmoney"
              value="pocketmoney"
              v-model="form.category"
            />
            Pocket money
          </label>
          <label for="withdraw">
            <input
              type="radio"
              name="form.category"
              id="withdraw"
              value="withdraw"
              v-model="form.category"
            />
            Withdraw from bank
          </label>
        </div>
        <!-- end of income category -->

        <div>
          <input type="date" v-model="form.date" />
        </div>
        <div>
          <label for="amount">
            $
            <input
              type="text"
              v-model="form.amount"
              @input="changeInput($event)"
              @change="changeInput($event)"
            />
          </label>
          <div v-if="!isEditing">
            <p v-if="!isAmountValid">Please Enter a number</p>
          </div>
        </div>
        <div>
          <textarea
            name="memo"
            id="memo"
            cols="30"
            rows="2"
            v-model="form.memo"
          >
Add memo</textarea
          >
        </div>
      </div>
      <div class="card__apply" :class="{ hideBtn: !isAmountValid }">
        <button @click="addSpendingHandler">
          <font-awesome-icon icon="money-bill-wave" />
        </button>
      </div>
      <div class="card__apply" v-if="isEditing">
        <button @click="updateSpendingHandler">
          <font-awesome-icon icon="redo-alt" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ExpenseEnterForm",
  components: {},
  props: ["formIsVisible", "data", "isEditing"],
  data() {
    return {
      form: {
        no: 0,
        type: this.data.type,
        category: this.data.category,
        date: this.data.date,
        amount: this.data.amount,
        memo: this.data.memo,
      },
      isAmountValid: false,
      regex: /[0-9]/,
      showExpenseCategory: true,
    };
  },
  computed: {
    ...mapState("trackingStore", ["totalList", "listLength"]),
  },
  methods: {
    ...mapActions("trackingStore", [
      "fetchSpendingList",
      "addSpendItem",
      "updateSpendItem",
    ]),
    checkTypeHandler() {
      if (this.form.type === "expense") {
        this.showExpenseCategory = true;
      }
      if (this.form.type === "income") {
        this.showExpenseCategory = false;
      }
    },
    addSpendingHandler() {
      const dataToAdd = {
        no: this.listLength + 1,
        type: this.form.type,
        category: this.form.category,
        date: this.form.date,
        amount: this.form.amount,
        memo: this.form.memo,
      };
      this.addSpendItem(dataToAdd);
      alert("Successfully saved!");
      this.$emit("formIsVisibleUpdate", (this.formIsVisible = false));

      this.form.type = "";
      this.form.category = "";
      this.form.date = "";
      this.form.amount = "";
      this.form.memo = "";
    },
    changeInput: function (e) {
      const number = e.target.value;
      this.isNumberValid(number);
    },
    isNumberValid: function (inputNumber) {
      this.isAmountValid = this.regex.test(inputNumber);
      //it is still true on ddfs3
    },
    updateSpendingHandler() {
      const dataToUpdate = {
        id: this.data.id,
        type: this.form.type,
        category: this.form.category,
        date: this.form.date,
        amount: this.form.amount,
        memo: this.form.memo,
      };
      this.updateSpendItem(dataToUpdate);

      console.log(this.form.type);
      this.form.type = "";
      console.log(this.form.type);
      this.form.category = "";
      this.form.date = "";
      this.form.amount = "";
      this.form.memo = "";

      this.$emit("formIsVisibleUpdate", (this.formIsVisible = false));
    },
  },
  watch: {},
  created() {
    this.fetchSpendingList();
  },
};
</script>
<style scoped>
.form_header {
  margin-top: 20px;
}
.main_category {
  margin-bottom: 20px;
}
.sub_category {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin: 20px;
  padding: 20px;
  width: 60%;
  min-height: 200px;
  display: grid;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.card__link,
.card__exit,
.card__icon {
  position: relative;
  text-decoration: none;
  color: rgba(70, 70, 70, 0.9);
}

.card__link::after {
  position: absolute;
  top: 25px;
  left: 0;
  content: "";
  width: 0%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.5s;
}

.card__link:hover::after {
  width: 100%;
}

.card__exit {
  justify-self: end;
}

.card__title {
  font-weight: 400;
  color: #727272;
}

.card__apply {
  align-self: center;
}
.card__apply button {
  all: unset;
  cursor: pointer;
}

.card-1 {
  background-color: rgb(233, 233, 233);
}

.hideBtn {
  display: none;
}
</style>
