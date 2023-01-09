import { createWebHistory, createRouter } from "vue-router";
import Acceuil from "./components/Acceuil.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Home from "../src/components/Home.vue";
import PostId from "../src/components/PostId.vue";
import Header from "../src/components/LayoutHeader.vue";
import Profil from "../src/components/Profil.vue";
import Edit from "./components/Edit.vue"; 

const routes = [
  { path: "/", component: Acceuil, name: "Acceuil" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/register", component: Register, name: "Register" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/home", component: Home, name: "HomePage" },
  { path: "/profil", component: Profil, name: "Profil" },
  { path: "/profil/edit", component: Edit, name: "Edit" },
  { path: "/post", component: PostId, name: "PostIdPage" },
  { path: "/header", component: Header, name: "HeaderPage" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
