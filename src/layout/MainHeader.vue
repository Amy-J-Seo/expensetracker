<template>
  <div class="main__header">
    <div class="header">
      <div class="header_logo">
        <router-link to="/dataTable"><h2>Expense Tracker</h2></router-link>
        {{ allUserList }}
      </div>
    </div>
    <div class="header_container">
      <button class="login_btn" @click="showModal = true">Login</button>
      <!-- Login modal -->
      <modal v-if="showModal" @close="showModal = false">
        <div slot="header" class="modalHeader">
          <h3>{{ modalTitle }}</h3>
          <button
            class="modalCloseBtn"
            @click="[(showModal = false), (isRegister = false)]"
          >
            x
          </button>
        </div>
        <div slot="body">
          <div>
            <div>
              <label class="input_label" for="userId"> Id:</label>
              <input type="text" id="userId" v-model="enteredId" />
            </div>
            <br />
            <div>
              <label class="input_label" for="userPass"> Password: </label>
              <input type="password" id="userPass" v-model="enteredpass" />
            </div>
            <br />
            <div v-if="isRegister">
              <label class="input_label" for="userName"> Name:</label>
              <input type="text" id="userName" v-model="enteredName" />
            </div>
            <br />
            <div v-if="isRegister">
              <label class="input_label" for="userEmail"> userEmail: </label>
              <input type="password" id="userEmail" v-model="enteredEmail" />
            </div>
          </div>
        </div>
        <div slot="footer">
          <button v-if="!isRegister" @click="loginHandler">Login</button>
          <button v-if="!isRegister" @click="isRegister = true">
            Join Us!
          </button>
          <button v-if="isRegister" @click="registerHandler">Register</button>
        </div>
      </modal>
      <!-- End of Login modal -->
    </div>
  </div>
</template>

<script>
import Modal from "../UI/Modal.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "MainHeader",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      enteredId: "",
      enteredPass: "",
      enteredName: "",
      enteredEmail: "",
      isRegister: false,
    };
  },
  computed: {
    ...mapState("userStore", ["allUserList"]),
    modalTitle() {
      return this.isRegister ? "Register" : "Login";
    },
  },
  methods: {
    ...mapActions("userStore", ["fetchAllUserList"]),
    loginHandler() {
      console.log("clicked");
    },
    registerHandler() {
      const userToAdd = {
        userId: this.enteredId,
        userPass: this.enteredPass,
        userName: this.enteredName,
        userEmail: this.enteredEmail,
      };
      console.log(userToAdd);
    },
  },
  created() {
    this.fetchAllUserList();
  },
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
.modalHeader {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.modalHeader h3 {
  margin: auto;
}

.modalHeader button {
  all: unset;
}
.modalCloseBtn {
  cursor: pointer;
}
</style>
