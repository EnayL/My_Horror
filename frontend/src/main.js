import { createApp } from "@vue/runtime-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";

import router from "./Routes";

library.add(fas);

createApp(App).use(router).mount("#app");
