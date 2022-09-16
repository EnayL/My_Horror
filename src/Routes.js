import Acceuil from "./components/Acceuil.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

export default [
  { path: "/acceuil", components: Acceuil, name: "Acceuil" },
  { path: "/", components: Login, name: "Login" },
  { path: "/register", components: Register, name: "Register" },
];
