import Home from "@/pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/destination/:id/:slug",
    name: "destination",
    component: () => import("@/pages/Destination.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "link-active-class",
});

export default router;
