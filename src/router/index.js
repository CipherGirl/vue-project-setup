import Home from "@/pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/brazil",
    name: "Brazil",
    component: () => import("@/pages/Brazil.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () => import("@/pages/Panama.vue"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () => import("@/pages/Jamaica.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import("@/pages/Hawaii.vue"),
  },
  {
    path: "/destination/:id",
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
