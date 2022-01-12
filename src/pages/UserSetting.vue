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
            <input type="password" />
          </div>
          <br />
          <div>
            <label for="newPass">New Password </label><br />
            <input type="password" />
          </div>
          <br />
          <div>
            <label for="checkPass">Confirm Password </label><br />
            <input type="password" />
          </div>
          <br />
        </div>
        <div slot="footer">
          <button class="change_btn">Change Password</button>
        </div>
      </card-ui>
    </div>
  </div>
</template>
<script>
import CardUi from "../UI/CardUi.vue";
export default {
  name: "UserSetting",
  components: { CardUi },
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
.change_btn {
  margin-top: 20px;
}
</style>
