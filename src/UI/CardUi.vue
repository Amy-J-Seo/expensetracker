<template>
  <div class="cards">
    <div class="card card-1">
      <p class="card__exit"><slot name="exitBtn">X</slot></p>
      <div class="card__title"><slot name="body"> default body </slot></div>
      <div class="card__apply">
        <slot name="footer">Something can go here</slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardUi",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  watch: {},
};
</script>
<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  margin: 20px;
  padding: 20px;
  width: 500px;
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
}

.card__apply {
  align-self: center;
}
.card-3 {
  background: radial-gradient(#76b2fe, #b69efe);
}
</style>
