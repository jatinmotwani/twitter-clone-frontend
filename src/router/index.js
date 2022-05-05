import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingView,
    beforeEnter: function removeHash(to, from, next) {
      if (localStorage.getItem("user-token")) {
        next("/dashboard");
      } else {
        next();
      }
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
    beforeEnter: function removeHash(to, from, next) {
      if (localStorage.getItem("user-token")) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
