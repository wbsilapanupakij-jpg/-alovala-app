self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request).catch(function() {
      return new Response('Offline - กรุณาเชื่อมต่ออินเทอร์เน็ต', {
        headers: { 'Content-Type': 'text/html; charset=UTF-8' }
      });
    })
  );
});
