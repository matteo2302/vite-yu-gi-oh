import { createApp } from "vue";
import "@fontsource/montserrat";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
library.add(faUserSecret);
createApp(App).components("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
