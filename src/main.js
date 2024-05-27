import "./assets/main.css";
import PrimeVue from "primevue/config";
import Aura from "@/presets/aura";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//componentes primevue -------------------
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Password from "primevue/password";

//--------------------------

const app = createApp(App);

//agregar componentes-----------
app.component("Button", Button);
app.component("Card", Card);
app.component("InputText", InputText);
app.component("Password", Password);

//----------------------

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura, //apply preset
});

app.use(router);

app.mount("#app");
