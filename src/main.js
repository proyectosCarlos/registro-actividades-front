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
import Checkbox from "primevue/checkbox";
import Badge from "primevue/badge";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";

//--------------------------

const app = createApp(App);

//agregar componentes-----------
app.component("Button", Button);
app.component("Card", Card);
app.component("InputText", InputText);
app.component("Password", Password);
app.component("Checkbox", Checkbox);
app.component("Badge", Badge);
app.component("Dialog", Dialog);
app.component("Calendar", Calendar);
app.component("Textarea", Textarea);

//----------------------

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura, //apply preset
});

app.use(router);

app.mount("#app");
