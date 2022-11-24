import { createWebHistory, createRouter } from "vue-router";
import Acceuil from "./components/Acceuil.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Home from "../src/components/Home.vue";
import PostId from "../src/components/PostId.vue";

const routes = [
  { path: "/", component: Acceuil, name: "Acceuil" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/register", component: Register, name: "Register" },
  { path: "/home", component: Home, name: "HomePage" },
  { path: "/post", component: PostId, name: "PostIdPage" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
