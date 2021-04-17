import Vue from "vue";
import VueRouter from "vue-router";
import Map from "@/views/map/pine-map.vue";
import Intro from "@/views/intro/pine-intro";
import Input from "@/views/input/pine-input";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "intro",
    component: Intro,
  },
  {
    path: "/map",
    name: "map",
    component: Map,
  },
  {
    path: "/input",
    name: "input",
    component: Input,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
