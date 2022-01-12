<template>
  <div class="main__header">
    <div class="header">
      <div class="header_logo">
        <router-link to="/dataTable"><h2>Expense Tracker</h2></router-link>
      </div>
    </div>
    <div class="header_container">
      <button v-if="isLoggedIn" @click="logOutHandler">Logout</button>
      <br />
      <router-link class="userSetting" v-if="isLoggedIn" to="/setting"
        >Setting</router-link
      >
      <button v-else class="login_btn" @click="showModal = true">Login</button>
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
              <input type="password" id="userPass" v-model="enteredPass" />
            </div>
            <br />
            <div v-if="isRegister">
              <label class="input_label" for="userName"> Name:</label>
              <input type="text" id="userName" v-model="enteredName" />
            </div>
            <br />
            <div v-if="isRegister">
              <label class="input_label" for="userEmail"> userEmail: </label>
              <input type="email" id="userEmail" v-model="enteredEmail" />
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
import { mapActions, mapState, mapMutations } from "vuex";

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
    ...mapState("userStore", ["allUserList", "isLoggedIn"]),
    ...mapState("loginStore", ["isLoggedIn"]),
    modalTitle() {
      return this.isRegister ? "Register" : "Login";
    },
  },
  methods: {
    ...mapActions("userStore", ["fetchAllUserList", "addNewUser"]),
    ...mapMutations("loginStore", ["logout", "checkLoginStatus"]),
    logOutHandler() {
      this.logout();
      alert("You are logged out");
      this.showModal = true;
    },
    loginHandler() {
      console.log("loginhandler", this.allUserList);
      const userId = this.allUserList.find(
        (user) => user.userId === this.enteredId
      );
      const userPass = this.allUserList.find(
        (user) => user.userPass === this.enteredPass
      );

      console.log(userId);
      if (userId == undefined || userPass == undefined) {
        (this.enteredId = ""), (this.enteredPass = "");
        alert("Id or Password doesnt match, try again");
      } else {
        localStorage.setItem("loginInfo", JSON.stringify(userId));

        this.showModal = false;
        this.isLoggedIn = true;
        alert("login successful");
      }
    },
    registerHandler() {
      const userToAdd = {
        userId: this.enteredId,
        userPass: this.enteredPass,
        userName: this.enteredName,
        userEmail: this.enteredEmail,
      };
      this.addNewUser(userToAdd);
      this.enteredId = "";
      this.enteredPass = "";
      this.enteredName = "";
      this.enteredEmail = "";
      alert("Welcome, now please login :) ");
      this.isRegister = false;
      this.showModal = false;
    },
  },
  created() {
    this.fetchAllUserList();
    this.checkLoginStatus();
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
.userSetting {
  all: unset;
  border: 1px solid grey;
}
</style>
