// self.addEventListener('install', event => {
//     console.log('Service worker installing...');
//     // Add a call to skipWaiting here
//   });
  
// self.addEventListener('activate', event => {
//     console.log('Service worker activating...');
// });

self.addEventListener('notificationclose', event => {
  const notification = event.notification;
  console.log('Closed notification')
});

// self.addEventListener('notificationclick', event => {
//   clients.openWindow('localhost:3000');
// });

/********************************** */

// var cacheName = 'chatCache';
// var filesToCache = [
//     'index.html',
//     '../src/App.js',
//     '../src/Chat.js',
//     '../src/ChatInput.js',
//     '../src/ChatMessage.js',
//     '../src/LoginPage.js',
//     '../src/Welcome.js',
//     '../src/Notification.js',
//     "../src/style.css",
//     "../src/primitive.css"
// ];

// self.addEventListener('install', function(e) {
//   console.log('[ServiceWorker] Install');
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       console.log('[ServiceWorker] Caching app shell');
//       return cache.addAll(filesToCache);
//     })
//   );
// });

// self.addEventListener('activate', function(event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.filter(function(cacheName) {
//         }).map(function(cacheName) {
//           return caches.delete(cacheName);
//         })
//       );
//     })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       return response || fetch(event.request);
//     })
//   );
// });

/************************* */

var CACHE = 'network-or-cache';

// On install, cache some resource.

self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');

// Ask the service worker to keep installing until the returning promise resolves.

  evt.waitUntil(precache());
});

// On fetch, use cache but update the entry with the latest contents from the server.

self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.');


// Try network and if it fails, go for the cached copy.

  evt.respondWith(fromNetwork(evt.request, 400).catch(function () {
    return fromCache(evt.request);
  }));
});

// Open a cache and use addAll() with an array of assets to add all of them to the cache. Return a promise resolving when all the assets are added.

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
    'index.html'
    // '../src/App.js',
    // '../src/Chat.js',
    // '../src/ChatInput.js',
    // '../src/ChatMessage.js',
    // '../src/LoginPage.js',
    // '../src/Welcome.js',
    // '../src/Notification.js',
    // "../src/style.css",
    // "../src/primitive.css",
    // "../src/index.js",
    // 'client.js',
    // './static/js/bundle.js',
    // './static/js/1.chunk.js',
    // './static/js/main.chunk.js'

    ]);
  });
}


// Time limited network request. If the network fails or the response is not served before timeout, the promise is rejected.

function fromNetwork(request, timeout) {
  return new Promise(function (fulfill, reject) {

// Reject in case of timeout.

    var timeoutId = setTimeout(reject, timeout);


// Fulfill in case of success.

    fetch(request).then(function (response) {
      clearTimeout(timeoutId);
      fulfill(response);

// Reject also if network fetch rejects.

    }, reject);
  });
}


// Open the cache where the assets were stored and search for the requested resource. Notice that in case of no matching, the promise still resolves but it does with undefined as value.

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}


