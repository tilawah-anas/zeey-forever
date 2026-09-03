const CACHE_NAME = "for-zeey-v3";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./birthday.html",
  "./calligraphy.html",
  "./card.html",
  "./mulk.html",
  "./recordings.html",
  "./style.css",
  "./script.js",

  "./zainab.png",

  "./fonts/QCF2562.ttf",
  "./fonts/QCF2563.ttf",
  "./fonts/QCF2564.ttf",
  "./fonts/surah-name.ttf",
  "./fonts/Elgharib-Al-Basmala.ttf",

  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});