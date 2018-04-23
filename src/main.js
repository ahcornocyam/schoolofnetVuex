import Vue from "vue";
import App from "./components/App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./Store";
import "./filters";

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
