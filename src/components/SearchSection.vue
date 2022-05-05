<template>
  <span>
    <form class="mt-8 space-y-6">
      <div class="flex justify-center mr-2">
        <div class="mb-3 xl:w-96">
          <input
            type="search"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleSearch"
            placeholder="Search people to follow"
            v-model="searchText"
            @change.prevent="searchSuggestion"
          />
        </div>
      </div>
    </form>
    <div
      v-if="searchText.length && !results.length"
      class="mt-4 h-96 overflow-auto"
    >
      No results found
    </div>
    <div
      v-if="searchText.length && results.length"
      class="mt-4 h-96 overflow-auto"
    >
      <div
        v-for="(result, index) in results"
        :key="index"
        class="flex flex-row mr-4"
      >
        <img
          class="h-12 w-auto"
          src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          alt="Profile"
        />
        <h6 class="ml-4 pt-1">{{ result.fullName }}</h6>
        <button
          v-if="!result.followed"
          class="ml-8 justify-center mt-2 mb-2 py-1 px-2 border border-transparent text-xs font-small rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          @click.prevent="follow(result.userId)"
        >
          <i class="fas fa-plus"></i>
        </button>
        <button
          v-else
          class="ml-8 justify-center mt-2 mb-2 py-1 px-2 border border-transparent text-xs font-small rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          @click.prevent="unfollow(result.userId)"
        >
          <i class="fa fa-check"></i>
        </button>
      </div>
    </div>
  </span>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchSection",
  data() {
    return {
      searchText: "",
      results: [],
    };
  },
  methods: {
    async searchSuggestion() {
      try {
        const response = await axios.get(
          "http://localhost:6001/api/user?search=" + this.searchText,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("user-token"),
            },
          }
        );
        this.results = response?.data?.data?.users;
      } catch (error) {
        console.log("Error", error);
      }
    },
    async follow(userId) {
      try {
        await axios.post(
          "http://localhost:6001/api/user/follow",
          {
            userId,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("user-token"),
            },
          }
        );
        this.searchSuggestion();
        this.$emit("fetch-tweets");
      } catch (error) {
        alert(error?.data?.data?.message);
      }
    },
    async unfollow(userId) {
      try {
        await axios.post(
          "http://localhost:6001/api/user/unfollow",
          {
            userId,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("user-token"),
            },
          }
        );
        this.searchSuggestion();
        this.$emit("fetch-tweets");
      } catch (error) {
        alert(error?.data?.data?.message);
      }
    },
  },
};
</script>
