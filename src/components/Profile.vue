<template>
  <div class="relative min-w-[35%]">
    <!--content-->
    <div
      class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
    >
      <!--header-->
      <div
        class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
      >
        <h3 class="text-3xl font-semibold">Profile</h3>
      </div>
      <!--body-->
      <div class="border-t border-gray-200 min-w-full">
        <dl>
          <div
            class="bg-gray-50 px-4 py-5 xl:grid xl:grid-cols-3 xl:gap-4 xl:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ this.$store.state.fullName }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 xl:grid xl:grid-cols-3 xl:gap-4 xl:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ this.$store.state.email }}
            </dd>
          </div>
        </dl>
      </div>
      <!--footer-->
      <div
        class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
      >
        <button
          class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          v-on:click="toggleModal()"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileComponent",
  props: ["toggleModal"],
};
</script>
