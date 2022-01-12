<template>
  <div>
    <h1>User Setting</h1>
    <div>
      <card-ui>
        <div slot="exitBtn"></div>
        <div slot="body">
          <h4>Change your password</h4>
          <label for="oldPass"
            >Current Password
            <input type="password" />
          </label>
          <br />
          <label for="newPass"
            >New Password
            <input type="password" />
          </label>
          <br />
          <label for="checkPass"
            >Confirm Password <input type="password" /> </label
          ><br />
        </div>
        <div slot="footer">
          <button>Change Password</button>
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
<style scoped></style>
