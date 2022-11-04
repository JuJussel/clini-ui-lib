import { createApp } from "vue";
import Dev from "./serve.vue";
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import CliniUiLib from "@/entry.esm";
import style from "@/css/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(Dev);
app.use(CliniUiLib);
app.use(style);

app.mount("#app");
