<template>
  <div>
    <h1>User Setting</h1>
    <div>
      <card-ui>
        <div slot="exitBtn"></div>
        <div slot="body">
          <h4>Change your password</h4>
          <div>
            <label for="oldPass">Current Password </label><br />
            <input
              type="password"
              v-model="enteredCurrentPass"
              @keyup="checkCurrentPass"
            />
          </div>
          {{ message }}
          <br />
          <hr />
          <div v-if="isPasswordMatch">
            <label for="newPass">New Password </label><br />
            <input type="password" v-model="enteredNewPass" />
          </div>
          <br />
          <div v-if="isPasswordMatch">
            <label for="checkPass">Confirm Password </label><br />
            <input
              type="password"
              v-model="enteredConfirmPass"
              @keyup="vaildatePassword"
            />
          </div>
          {{ confirmMsg }}
          <br />
        </div>
        <div slot="footer">
          <button
            class="change_btn"
            :disabled="!isPassVaild"
            @click="changePasswordHandler"
          >
            Change Password
          </button>
        </div>
      </card-ui>
    </div>
  </div>
</template>

<script>
import CardUi from "../UI/CardUi.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "UserSetting",
  components: { CardUi },
  data() {
    return {
      message: "",
      isPasswordMatch: false,
      enteredCurrentPass: "",
      enteredNewPass: "",
      enteredConfirmPass: "",
      isPassVaild: false,
      confirmMsg: "",
    };
  },
  computed: {
    userPassword() {
      const loginInfo = localStorage.getItem("loginInfo");
      return JSON.parse(loginInfo).userPass;
    },
  },
  methods: {
    ...mapGetters("loginStore", ["getUniqueId"]),
    ...mapMutations("loginStore", ["logout"]),
    ...mapActions("userStore", ["updateUserPass"]),
    checkCurrentPass() {
      if (this.userPassword !== this.enteredCurrentPass) {
        this.message = "Password does not match...";
      } else {
        this.message = "";
        this.isPasswordMatch = true;
      }
    },
    vaildatePassword() {
      if (this.enteredNewPass !== this.enteredConfirmPass) {
        this.confirmMsg = "Check the password again";
      } else {
        this.isPassVaild = true;
        this.confirmMsg = "Password confirmed";
      }
    },
    changePasswordHandler() {
      const data = { newPass: this.enteredNewPass, uUid: this.getUniqueId() };
      console.log("from usersettings", data);
      this.updateUserPass(data);
      alert("Password Updated :) ");
      const id = JSON.parse(localStorage.getItem("loginInfo")).userId;
      console.log("logined id", id);

      this.logout();

      const userId = this.allUserList.find((user) => user.userId === id);
      console.log("info to save", userId);
      localStorage.setItem("loginInfo", JSON.stringify(userId));
      this.$router.push("/");
    },
  },
  created() {},
  watch: {},
};
</script>
<style scoped>
.change_btn {
  margin-top: 20px;
}
</style>
