<template>
  <span class="space-y-3 ml-0">
    <div>
      <img
        class="h-12 w-auto"
        src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png"
        alt="Workflow"
      />
    </div>
    <div>
      <span class="navitem-icon">
        <i
          class="fas fa-home mx-2 h-12 w-auto text-3xl text-gray-500 hover:text-gray-800 cursor-pointer"
        ></i>
      </span>
    </div>
    <div>
      <span class="navitem-icon">
        <i
          class="fas fa-hashtag mx-2 h-12 w-auto text-3xl text-gray-500 hover:text-gray-800 cursor-pointer"
        ></i>
      </span>
    </div>
    <div>
      <span class="navitem-icon">
        <i
          class="far fa-bell mx-2 h-12 w-auto text-3xl text-gray-500 hover:text-gray-800 cursor-pointer"
        ></i>
      </span>
    </div>
    <div>
      <span class="navitem-icon">
        <i
          class="far fa-envelope mx-2 h-12 w-auto text-3xl text-gray-500 hover:text-gray-800 cursor-pointer"
        ></i>
      </span>
    </div>
    <div>
      <span class="navitem-icon">
        <i
          class="far fa-list-alt mx-2 h-12 w-auto text-3xl text-gray-500 hover:text-gray-800 cursor-pointer"
        ></i>
      </span>
    </div>
    <div>
      <span class="navitem-icon">
        <i
          class="far fa-user mx-2 h-12 w-auto text-3xl text-gray-500 hover:text-gray-800 cursor-pointer"
          type="button"
          @click="toggleModal()"
        ></i>
      </span>
    </div>
    <!-- Modal -->
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <profile-component :toggleModal="toggleModal" />
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    <div>
      <span class="navitem-icon">
        <i
          class="fas fa-lock mx-2 h-12 w-auto text-3xl text-gray-500 hover:text-gray-800 cursor-pointer"
          @click="toggleLogoutModal()"
        ></i>
      </span>
    </div>
    <div
      v-if="showLogoutModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <confirm-logout-component :toggleLogoutModal="toggleLogoutModal" />
    </div>
    <div
      v-if="showLogoutModal"
      class="opacity-25 fixed inset-0 z-40 bg-black"
    ></div>
    <div>
      <span class="navitem-icon">
        <i
          class="fas fa-ellipsis-h mx-2 h-12 w-auto text-3xl text-gray-500 hover:text-gray-800 cursor-pointer"
        ></i>
      </span>
    </div>
  </span>
</template>

<script>
import ProfileComponent from "./Profile.vue";
import ConfirmLogoutComponent from "./ConfirmLogout.vue";
export default {
  name: "SidebarComponent",
  data() {
    return {
      showModal: false,
      showLogoutModal: false,
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
    toggleLogoutModal: function () {
      this.showLogoutModal = !this.showLogoutModal;
    },
  },
  components: {
    ProfileComponent,
    ConfirmLogoutComponent,
  },
};
</script>
