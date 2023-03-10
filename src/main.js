import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import "./assets/base.css";
import axios from "axios";
import vuetify from "./plugins/vuetify";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const app = createApp(App);

// app.use(store);
// app.use(router)
app.use(store).use(vuetify).use(router).mount("#app");
