import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "*", component: () => import("@/views/ErrorScreen") },
  {
    path: "*",
    component: () => import("@/views/Home"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/function/1",
    name: "Function1",
    component: () => import("@/views/Function1"),
  },
  {
    path: "/function/2",
    name: "Function2",
    component: () => import("@/views/Function2"),
  },
  {
    path: "/function/3",
    name: "Function3",
    component: () => import("@/views/Function3"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
