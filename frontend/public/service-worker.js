// if (workbox) {
// // adjust log level for displaying workbox logs
// // Doesn't work anymore in v4: https://github.com/GoogleChrome/workbox/issues/2066
// // workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug)

// // apply precaching. In the built version, the precacheManifest will
// // be imported using importScripts (as is workbox itself) and we can
// // precache this. This is all we need for precaching
// workbox.precaching.precacheAndRoute(self.__precacheManifest);

// // Make sure to return a specific response for all navigation requests.
// // Since we have a SPA here, this should be index.html always.
// // https://stackoverflow.com/questions/49963982/vue-router-history-mode-with-pwa-in-offline-mode
// workbox.routing.registerNavigationRoute("/index.html");

// // Setup cache strategy for Google Fonts. They consist of two parts, a static one
// // coming from fonts.gstatic.com (strategy CacheFirst) and a more ferquently updated on
// // from fonts.googleapis.com. Hence, split in two registerroutes
// workbox.routing.registerRoute(
//   /^https:\/\/fonts\.googleapis\.com/,
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: "google-fonts-stylesheets",
//   })
// );
// workbox.routing.registerRoute(
//   /^https:\/\/fonts\.gstatic\.com/,
//   new workbox.strategies.CacheFirst({
//     cacheName: "google-fonts-webfonts",
//     plugins: [
//       new workbox.cacheableResponse.Plugin({
//         statuses: [0, 200],
//       }),
//       new workbox.expiration.Plugin({
//         maxAgeSeconds: 60 * 60 * 24 * 365,
//         maxEntries: 30,
//       }),
//     ],
//   })
// );
// workbox.routing.registerRoute(
//   /^https:\/\/stackpath\.bootstrapcdn\.com/,
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: "fontawesome",
//   })
// );
// }

let namaStatic = "mana-static-v1.8.27";
let manaApi = "mana-dynamic-api-v1.8.27";
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(namaStatic).then((cache) => {
      return cache.addAll([
        "./css/all.css",
        "./css/all.min.css",
        "./js/all.js",
        "./js/all.min.js",
        "./img/icons/android-chrome-192x192.png",
      ]);
    })
  );
  self.skipWaiting();
});

//สั่งให้เช็คว่า activate CACHE_NAME เป็นเวอร์ชั่นล่าสุดแล้วหรือยัง ถ้ายังให้ลบ ของเก่าทิ้ง
self.addEventListener("activate", (event) => {
  var cacheKeeplist = [namaStatic, manaApi];
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// ===========================================================

self.addEventListener("fetch", (evt) => {
  // check if request is made by chrome extensions or web page
  // if request is made for web page url must contains http.
  if (!(evt.request.url.indexOf("http") === 0)) return;
  // skip the request. if request is not made with http protocol
  if (evt.request.method !== "GET") {
    evt.respondWith(
      caches
        .match(evt.request)
        .then(
          (cacheRes) =>
            cacheRes ||
            fetch(evt.request).then((fetchRes) =>
              caches.open(manaApi).then((cache) => {
                cache.put(evt.request.url, fetchRes.clone());
                // check cached items size
                limitCacheSize(manaApi, 75);
                return fetchRes;
              })
            )
        )
        .catch((err) => {
          caches.match(evt.request);
          console.error(err);
        })
    );
  }
});
// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// ==================================================================================================

// หากมีเวอร์ชันแคชให้ใช้ แต่เรียกข้อมูลอัปเดตในครั้งต่อไป
// self.addEventListener("fetch", (event) => {
//   if (!(event.request.url.indexOf("http") === 0)) return;
//   event.respondWith(
//     caches.open(manaApi).then(function(cache) {
//       return cache.match(event.request).then(function(response) {
//         var fetchPromise = fetch(event.request).then(function(networkResponse) {
//           cache.put(event.request, networkResponse.clone());

//           return networkResponse;
//         });
//         return response || fetchPromise;
//       });
//     })
//   );
// });

self.addEventListener("push", (e) => {
  // const data = e.data.json();
  // let nametest = "";
  // if (Number(data.ganttType) == 2) {
  //   nametest = data.verb.replace("ทาสก์", "ทอปปิก");
  // } else {
  //   nametest = data.verb;
  // }
  // if (data.typeNoti === 1) {
  const options = {
    body: "Here is a notification body!",
    icon: "./img/icons/maskable_icon_x512.png",
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

  e.waitUntil(
    self.registration.showNotification("Hello Notification!", options)
  );
});

self.addEventListener("notificationclick", (event) => {
  const clickNotification = event.notification;

  clickNotification.close();

  if (clickNotification.data.url) {
    const promiseChain = clients.openWindow(clickNotification.data.url);

    event.waitUntil(promiseChain);
  }
});
