import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      fullName: "",
      email: "",
    },
    tweets: [],
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
  actions: {},
  modules: {},
});
