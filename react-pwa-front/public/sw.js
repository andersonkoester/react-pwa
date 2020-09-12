const CACHE_NAME = 'react-pwa';
const urlsToCache = [
  '/',
  '/index.html'
];
const cacheWhitelist = ['pwa-task-manager'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(error => console.error('💩', error))
    )
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all([
      keys.map(key => {
          if(!cacheWhitelist.includes(key)){
            return caches.delete(key);
          }
        })
      ]))
  )
});

self.addEventListener('fetch', event => {
  console.log("fetch", event)
  event.respondWith(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.match(event.request)
                      .then(response => {
                        return response || fetch(event.request)
                                          .then(response => {
                                            cache.put(event.request, response.clone());
                                            return response;
                                          });
                      });
      })
  )
});