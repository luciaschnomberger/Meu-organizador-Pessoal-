// Vida em Ordem — Service Worker (simples, sem cache, só pra habilitar instalação)
self.addEventListener('install', (event) => { self.skipWaiting(); });
self.addEventListener('activate', (event) => { event.waitUntil(clients.claim()); });
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
