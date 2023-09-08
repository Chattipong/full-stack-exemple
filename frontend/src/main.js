import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss";

import moment from "moment";
import momentTH from "moment/src/locale/th";

import locale from "element-ui/lib/locale/lang/en";
import VueSocketIO from "vue-socket.io";

// service worker
import "./registerServiceWorker";
// import "./notificationPermission";
// import VuePwaInstallPlugin from "vue-pwa-install";

// Vue.use(VuePwaInstallPlugin);
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;
const isProd = process.env.NODE_ENV === "production";
Vue.config.performance = !isProd;

Vue.filter("timeTh", (date) => {
  let res = "";
  if (typeof date === "undefined" || date === null || date === "") {
    res = "-";
  } else {
    res = moment(moment(date)).format("h:mm A");
  }
  return res;
});

Vue.filter("formatDateFull", function (value) {
  if (value) {
    return moment(moment(value)).format("DD/MM/YYYY H:mm");
  }
});

Vue.filter("formatDateTH", function (value) {
  if (value) {
    return moment(moment(value).locale("th", momentTH).add(543, "year")).format(
      "LL"
    );
  }
});

Vue.filter("formatDaysInMonth", function (value) {
  if (value) {
    return moment(value).daysInMonth();
  }
});

Vue.filter("formatQuarter", function (value) {
  if (value) {
    return moment(value).quarter();
  }
});

Vue.filter("formatTimeStamp", function (value) {
  if (value) {
    return moment(value).unix();
  }
});

Vue.use(
  new VueSocketIO({
    connection: process.env.VUE_APP_BASE_URL_API,
  })
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
