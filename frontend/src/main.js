import { createApp } from "@vue/runtime-dom";
import App from "./App.vue";

import router from "./Routes";

createApp(App).use(router).mount("#app");
