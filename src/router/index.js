import Vue from "vue";
import VueRouter from "vue-router";

import Intro from "@/views/intro/crepiks-intro";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "intro",
    component: Intro,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
