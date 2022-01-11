<template>
  <div class="main__header">
    <div class="header">
      <div class="header_logo">
        <router-link to="/dataTable"><h2>Expense Tracker</h2></router-link>
      </div>
    </div>
    <div class="header_container">
      <button class="login_btn" @click="showModal = true">Login</button>
      <!-- Login modal -->
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">Login</h3>
        <div slot="body">
          <div>
            <div>
              <label class="input_label" for="userId"> Id:</label>
              <input type="text" id="userId" />
            </div>
            <br />
            <div>
              <label class="input_label" for="userPass"> Password: </label>
              <input type="text" id="userPass" />
            </div>
          </div>
        </div>
      </modal>
      <!-- End of Login modal -->
    </div>
  </div>
</template>

<script>
import Modal from "../UI/Modal.vue";

export default {
  name: "MainHeader",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {},
  methods: {},
  created: {},
  watch: {},
};
</script>
<style scoped>
.main__header {
  height: 60px;
  background-color: darkgrey;
  display: flex;
  justify-content: space-between;
}
.main__header h2 {
  margin-top: 5px;
  margin-left: 10px;
  color: rgb(0, 0, 0);
}
.login_btn {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 20px;
}
.input_label {
  display: inline-block;
  width: 80px;
}
</style>
