/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store, key } from "./store";
import "./index.postcss";

createApp(App).use(store, key).use(router).mount("#app");
