import { createApp } from "@vue/runtime-dom";
import App from "./App.vue";
import axios from 'axios'

import router from "./Routes";

createApp(App).use(router).mount("#app");
