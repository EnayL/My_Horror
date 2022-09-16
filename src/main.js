import { createApp } from "@vue/runtime-dom";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

import router from "./Routes";

createApp(App).use(router).mount("#app");
