<template>
  <DefaultTemplate>
    <div class="content">
      <div id="function-page">
        <h2 class="mg-0 text-center color-main">
          Test Function Service Worker
        </h2>
        <div class="is-flex js-center mg-y-5">
          <el-button round @click="funNoti" type="primary">Noti</el-button>
        </div>
      </div>
    </div>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/template/DefaultTemplate";

export default {
  components: {
    DefaultTemplate,
  },
  data() {
    return {
      timeDefault: "2020-08-10T14:54:52+07:00",
    };
  },
  methods: {
    funNoti() {
      Notification.requestPermission(function (result) {
        if (result === "granted") {
          navigator.serviceWorker.ready.then(function (registration) {
            const options = {
              body: "Here is a notification body!",
              icon: "../assets/logo.png",
              vibrate: [100, 50, 100],
              data: {
                dateOfArrival: Date.now(),
                primaryKey: 1,
              },
              actions: [
                {
                  action: "explore",
                  title: "Explore this new world",
                },
                {
                  action: "close",
                  title: "Close notification",
                },
              ],
            };
            registration.showNotification("Hello Notification!", options);
          });
        }
      });
    },
  },
};
</script>
