import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/panel-principal",
      name: "panel-principal",

      component: () => import("../views/PaginaPrincipal.vue"),
    },
  ],
});

export default router;
