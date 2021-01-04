const cacheName = "cache-v1";

const resourcesToPreCache = [
  "/",
  "index.html",
  "manifest.json",
  "menu.json",
  "favicon.ico",
  "logo192.png",
  "logo512.png",
  "static/js/0.chunk.js",
  "static/js/main.chunk.js",
  "static/js/bundle.js",
  "static/css/main.chunk.css",
  "static/media/0.83f7d793.jpg",
  "static/media/1.7c5f7d05.jpg",
  "static/media/2.72a6e2ca.jpg",
  "static/media/3.57800546.jpg",
  "static/media/bg.77b2b214.jpg",
  "static/media/bar_station_menue.ea3ab060.png",
  "static/media/tct_menue.9b91312c.png",
  "static/media/gauthankars_kitchen_flame.de213cc5.svg",
  "static/media/gauthankars_kitchen_full.31e662be.svg",
  "static/media/no_result.22f89940.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPreCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
