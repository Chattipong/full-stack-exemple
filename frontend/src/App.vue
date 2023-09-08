<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("permission Notification:" + Notification.permission);
    Notification.requestPermission().then(function (permission) {
      console.log(permission);
    });
    // Notification.requestPermission().then(async function (result) {
    //   if (result === "granted") {
    //     displayNotification();
    //     console.log("The permission request was granted.");
    //   } else {
    //     await window.Notification.requestPermission();
    //     console.log("Permission wasn't granted. Allow a retry.");
    //   }
    // });
  },
  created() {
    window.addEventListener(
      "beforeunload",
      () => {
        // this.$socket.emit("getStatusOnline");
      },
      false
    );
  },
  methods: {},
};
</script>
