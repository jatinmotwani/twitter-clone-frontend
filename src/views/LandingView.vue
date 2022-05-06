<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {{
            registrationView ? "Register with us" : " Sign in to your account"
          }}
        </h2>
      </div>
      <register-component v-if="registrationView" :signup="signup" />
      <login-component v-else :login="login" />
      <div class="flex justify-end w-full">
        <button
          type="submit"
          class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          @click="registrationView = !registrationView"
        >
          {{ registrationView ? "Sign in" : "Register" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LoginComponent from "../components/Login.vue";
import RegisterComponent from "../components/Register.vue";
import axios from "axios";

export default {
  name: "LandingView",
  data() {
    return {
      registrationView: false,
    };
  },
  components: { LoginComponent, RegisterComponent },
  methods: {
    async login(userData) {
      try {
        const response = await axios.post(
          "http://localhost:6001/api/user/login",
          userData
        );
        localStorage.setItem("user-token", response?.data?.data?.token);
        this.$store.dispatch("updateUser", response?.data?.data?.user);
        this.$router.push("/dashboard");
      } catch (error) {
        localStorage.removeItem("user-token");
        alert(error?.response?.data?.message);
      }
    },
    async signup(userData) {
      try {
        const response = await axios.post(
          "http://localhost:6001/api/user/signup",
          userData
        );
        localStorage.setItem("user-token", response?.data?.data?.token);
        this.$store.dispatch("updateUser", response?.data?.data?.user);
        this.$router.push("/dashboard");
      } catch (error) {
        localStorage.removeItem("user-token");
        alert(error?.response?.data?.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
