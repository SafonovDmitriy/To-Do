/* eslint-disable no-restricted-globals */
const STATIC_CACHE_NAME = "s-app-v1";
const ASSET_URLS = [
  "/public/index.html",
  "/src/",
  "/src/index.js",
  "/src/App.js",
  "/src/components/Header/Header.jsx",
  "/src/components/Header/HeaderStyles.js",
];
self.addEventListener("install", async (event) => {
  console.log("[SW]:install");
  const test = caches
    .open(STATIC_CACHE_NAME)
    .then((cache) => cache.addAll(ASSET_URLS));
  console.log(`test`, test);
  event.waitUntil(test);
});
self.addEventListener("fetch", (event) => {
  console.log("[SW]:fetch");
  event.respondWith(
    caches
      .match(event.request)
      .then(() => fetch(event.request))
      .catch(() => caches.match("index.html"))
  );
});
self.addEventListener("activate", (event) => {
  console.log("[SW]:activate");
  const cacheWhileList = [];
  cacheWhileList.push(STATIC_CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        // eslint-disable-next-line array-callback-return
        cacheNames.map((cacheName) => {
          if (!cacheWhileList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
self.addEventListener("message", async (event) => {
  console.log("Got message in the service worker", event);
});
