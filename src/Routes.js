import { createWebHistory, createRouter } from "vue-router";
import Acceuil from "./components/Acceuil.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

const routes = [
  { path: "/", component: Acceuil, name: "Acceuil" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/register", component: Register, name: "Register" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
