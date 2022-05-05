<template>
  <span>
    <div>
      <form class="mt-8 space-y-6">
        <div>
          <textarea
            id="name"
            name="name"
            type="text"
            required
            maxlength="280"
            class="textarea appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="What's happening?"
            v-model="tweetContent"
          />
        </div>
      </form>
      <div class="flex justify-end">
        <button
          class="group relative flex justify-center mt-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          @click="addTweet"
        >
          Tweet
        </button>
      </div>
    </div>
    <div class="mt-4 h-96 overflow-auto">
      <div v-if="!tweets.length" class="flex justify-center">
        <h6>No new tweets, check after sometime.</h6>
      </div>
      <div
        v-else
        v-for="(tweet, index) in tweets"
        :key="index"
        class="flex justify-center"
      >
        <div class="block p-6 rounded-lg shadow-lg bg-white min-w-full">
          <h6 class="text-gray-900 text-xl leading-tight font-medium mb-2">
            {{ tweet.author }}
          </h6>
          <p class="text-gray-700 text-base mb-4">{{ tweet.content }}</p>
        </div>
      </div>
    </div></span
  >
</template>

<script>
import axios from "axios";
export default {
  name: "TweetSection",
  data() {
    return {
      tweetContent: "",
    };
  },
  props: { fetchTweets: Function, tweets: Array },
  methods: {
    async addTweet() {
      try {
        await axios.post(
          "http://localhost:6001/api/post/create",
          {
            content: this.tweetContent,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("user-token"),
            },
          }
        );
        this.tweetContent = "";
        this.fetchTweets();
      } catch (error) {ß
        alert(error?.data?.data?.message);
      }
    },
  },
};
</script>
