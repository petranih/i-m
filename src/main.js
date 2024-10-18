import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap"; // Import Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/php-email-form/validate.js";
import "./assets/vendor/waypoints/noframework.waypoints.js";
import "./assets/vendor/purecounter/purecounter_vanilla.js";
import "./assets/vendor/swiper/swiper-bundle.min.js";
import "./assets/vendor/glightbox/js/glightbox.min.js";
import "./assets/vendor/imagesloaded/imagesloaded.pkgd.min.js";
import "./assets/vendor/isotope-layout/isotope.pkgd.min.js";

const app = createApp(App);

app.use(router);

app.mount("#app");
