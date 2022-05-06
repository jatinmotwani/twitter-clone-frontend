import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      fullName: "",
      email: "",
    },
    tweets: [
      {
        author: "James",
        content: "Had a great time with team !ß",
      },
      {
        author: "Rishi",
        content: "This is my first tweet !",
      },
    ],
  },
  getters: {},
  mutations: {
    updateUser(state, userData) {
      state.fullName = userData.fullName;
      state.email = userData.email;
    },
    updateTweets(state, tweets) {
      state.tweets = tweets;
    },
  },
  actions: {
    updateUser(context, userData) {
      context.commit("updateUser", userData);
    },
    updateTweets(context, tweets) {
      context.commit("updateTweets", tweets);
    },
  },
  modules: {},
});
