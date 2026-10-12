// Service worker minimale: serve solo perche Chrome per Android consideri Plume installabile come app vera.
// Non salva nulla in cache: ogni richiesta va in rete, quindi non esistono versioni vecchie "bloccate".
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
