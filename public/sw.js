const cacheName = "cache-v1";

const resourcesToPreCache = [
  "/",
  "index.html",
  "manifest.json",
  "favicon.ico",
  "bundle.js",
  "0.chunk.js",
  "main.chunk.js",
  "logo192.png",
];

// const self = this;

//install sw
self.addEventListener("install", (event) => {
  console.log("Install Event");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPreCache);
    })
  );
});

//activate
self.addEventListener("activate", (event) => {
  console.log("Activate Event");
});

//listen
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
