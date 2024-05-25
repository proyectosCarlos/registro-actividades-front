import "./assets/main.css";
import PrimeVue from "primevue/config";
import Aura from "@/presets/aura";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//componentes primevue -------------------
import Button from "primevue/button";

//--------------------------

const app = createApp(App);

//agregar componentes-----------
app.component("Button", Button);
//----------------------

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura, //apply preset
});

app.use(router);

app.mount("#app");
