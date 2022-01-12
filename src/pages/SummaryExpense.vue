<template>
  <div>
    <h3></h3>
    <div class="cards">
      <div class="card card-3">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <div class="card__title">
          <h2>This is summary of the month</h2>

          <div class="detail_summary">
            <p><span>Total Income :</span> $ {{ totalIncome }}</p>
            <p><span>Total Expense :</span>$ {{ totalExpense }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "SummaryExpense",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState("trackingStore", ["totalList"]),
    totalExpense() {
      let total = 0;
      this.totalList.map((item) => {
        if (item.type === "expense") {
          total = total + parseInt(item.amount);
        }
      });
      return total;
    },
    totalIncome() {
      let total = 0;
      this.totalList.map((item) => {
        if (item.type === "income") {
          total = total + parseInt(item.amount);
        }
      });
      return total;
    },
  },
  methods: {
    ...mapActions("trackingStore", ["fetchSpendingList"]),
  },
  created() {
    this.fetchSpendingList();
  },
  watch: {},
};
</script>
<style scoped>
.detail_summary {
  display: flex;
  justify-content: space-around;
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
  color: rgba(255, 255, 255, 0.9);
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

.card__icon {
  font-size: 30px;
}

.card__title {
  font-weight: 400;
  color: #000000;
}

.card__apply {
  align-self: center;
}
.card-3 {
  background-color: lavender;
}
@media only screen and (max-width: 600px) {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    margin: 20px;
    padding: 20px;
    width: 80%;
    min-height: 250px;
    border-radius: 10px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.2s;
  }
}
</style>
