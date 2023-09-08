process.env.VUE_APP_VERSION = require("./package.json").version;
console.log(process.env.VUE_APP_VERSION);

module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: "CHAT",
    themeColor: "#1b7dd4",
    msTileColor: "#ffffff",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppCache: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    manifestOptions: {
      background_color: "#1b7dd4",
    },

    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "./service-worker.js",
      skipWaiting: true,
      exclude: [/\.map$/, /manifest\.json$/],
      // ...other Workbox options...
    },
  },

  lintOnSave: false,
};
