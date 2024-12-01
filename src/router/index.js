import About from "@/pages/About.vue";
import Brazil from "@/pages/Brazil.vue";
import Hawaii from "@/pages/Hawaii.vue";
import Home from "@/pages/Home.vue";
import Jamaica from "@/pages/Jamaica.vue";
import Panama from "@/pages/Panama.vue";

import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/brazil", name: "Brazil", component: Brazil },
    { path: "/panama", name: "Panama", component: Panama },
    { path: "/jamaica", name: "Jamaica", component: Jamaica },
    { path: "/hawaii", name: "Hawaii", component: Hawaii },
  ],
});

export default router;
