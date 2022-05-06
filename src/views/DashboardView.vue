<template>
  <div class="grid grid-cols-4 grid-flow-col gap-4">
    <div class="col-span-1 m-auto">
      <sidebar-component />
    </div>
    <div class="col-span-2">
      <tweet-section :tweets="tweets" :fetchTweets="getPosts" />
    </div>
    <div class="col-span-1">
      <search-section v-on:fetch-tweets="getPosts" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SidebarComponent from "../components/Sidebar.vue";
import TweetSection from "../components/TweetSection.vue";
import SearchSection from "../components/SearchSection.vue";
export default {
  name: "DashboardView",
  components: { SidebarComponent, TweetSection, SearchSection },
  data() {
    return {
      tweets: [],
    };
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get("http://localhost:6001/api/post", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          },
        });
        this.$store.dispatch("updateTweets", response?.data?.data?.posts);
        this.tweets = response?.data?.data?.posts || [];
      } catch (error) {
        console.log("Error", error);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style scoped></style>
