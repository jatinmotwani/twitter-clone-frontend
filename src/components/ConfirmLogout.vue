<template>
  <div class="relative min-w-[35%]">
    <!--content-->
    <div
      class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
    >
      <!--header-->
      <div class="flex items-start justify-between p-5 rounded-t">
        <h6 class="text-xl">Are you sure that you want to logout ?</h6>
      </div>
      <!--footer-->
      <div class="flex items-center justify-end p-6 rounded-b">
        <button
          class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          v-on:click="toggleLogoutModal()"
        >
          Close
        </button>
        <button
          class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          v-on:click.prevent="logout()"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmLogoutComponent",
  props: ["toggleLogoutModal"],
  methods: {
    logout: function () {
      localStorage.removeItem("user-token");
      this.$router.push("/");
    },
  },
};
</script>
