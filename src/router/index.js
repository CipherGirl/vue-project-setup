import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";

import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
  ],
});

export default router;
