import { register } from "register-service-worker";

register(`${process.env.VUE_APP_BASE_URL_APP}/service-worker.js`, {
  ready() {},
  registered(registration) {
    console.log("registered service-worker success");
  },
  cached() {},
  updatefound() {},
  updated() {},
  offline() {},
  error(error) {},
});
