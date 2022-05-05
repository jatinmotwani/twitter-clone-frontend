<template>
  <form
    class="mt-8 space-y-6"
    @submit.prevent="checkSignupForm()"
  >
     <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li class="text-red-500" v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="name" class="sr-only">FullName</label>
        <input
          id="name"
          name="name"
          type="text"
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Name"
          v-model="fullName"
        />
      </div>
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          name="email"
          type="text"
          autocomplete="email"
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email address"
          v-model="email"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Password"
          v-model="password"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <svg
            class="h-5 w-5 text-gray-500 group-hover:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        Register
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "RegisterComponent",
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      errors: [],
    };
  },
  props: {
    signup: Function,
  },
  methods: {
    checkSignupForm() {
      if (
        this.email &&
        this.password &&
        this.fullName &&
        this.validateEmail(this.email)
      ) {
        this.signup({
          fullName: this.fullName,
          email: this.email,
          password: this.password,
        });
      }

      this.errors = [];
      if (!this.fullName) {
        this.errors.push("Fullname required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      }
      if (!this.password) {
        this.errors.push("Password required.");
      }
      if (this.email && !this.validateEmail(this.email)) {
        this.errors.push("Email is not correctly formatted");
      }
    },
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
  },
};
</script>
