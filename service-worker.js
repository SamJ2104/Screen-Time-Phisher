const CACHE_NAME = 'interactive-buttons-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/0.jpeg',
  '/1.jpeg',
  '/2.jpeg',
  '/3.jpeg',
  '/4.jpeg',
  '/whatsapp.jpeg',
  '/home.jpeg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});