let avatar = require("./images/百度.png");
import "./style/index.scss";
import Vue from "vue";
import App from "./App.vue";
const a = () => {
  console.log("许嵩");
};
a();
new Vue({
  render: (h) => h(App),
}).$mount("#app");
