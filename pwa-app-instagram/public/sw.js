var CACHE_STATIC_NAME = 'static-v3';
var CACHE_DYNAMIC_NAME = 'dynamic-v2';

self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);

    // When we talk about cache API, we can simply have a look on the APPLICATION
    // tab in developer tools. 
    // We have only one per given page, per given domain even, there we can open
    // multiple sub-caches. And this is what we can do with open() method 
    // caches.open();
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
        .then(function(cache) {
            console.log('[Service Worker] Precaching App Shell');
            // Something to take into account, even with those 2 files cached, it will not work.
            // You have to store the exact requests you are about to make, keep in mind we are
            // storing request, reponse key-value pairs. Load server/ is not the same like server/index.html
            // So we also need to cache the / request.
            // cache.add('/');
            // cache.add('/index.html');
            // cache.add('/src/js/app.js');

            cache.add('/');
            cache.add('/index.html');
            cache.add('/src/js/app.js');
            cache.add('/src/js/feed.js');
            cache.add('/src/js/promise.js');
            cache.add('/src/js/material.min.js');
            cache.add('/src/css/app.css');
            cache.add('/src/css/feed.css');
            cache.add('/src/images/main-image.jpg');
            cache.add('https://fonts.googleapis.com/css?family=Roboto:400,700');
            cache.add('https://fonts.googleapis.com/icon?family=Material+Icons');
            cache.add('https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css');


            // promise and fetch: Does it make sense to store these polyfills in our cache?
            // In my opinion it does not, because we use these polyfills for older browsers. Now these browsers won't
            // support service workers anyways, so there is no value in storing these files in the cache. If we store
            // them there, we only load them for browsers which do not need them, so we can also remove them from there.
            // Now from a performance perspective, storing them in the cache might still be worth it because even modern
            // browsers have to load these files because we simply import them in the HTML file.
            // cache.addAll([
            //   '/',
            //   '/index.html',
            //   '/src/js/app.js',
            //   '/src/js/feed.js',
            //   '/src/js/promise.js',
            //   '/src/js/fetch.js',
            //   '/src/js/material.min.js',
            //   '/src/css/app.css',
            //   '/src/css/feed.css',
            //   '/src/images/main-image.jpg',
            //   'https://fonts.googleapis.com/css?family=Roboto:400,700',
            //   'https://fonts.googleapis.com/icon?family=Material+Icons',
            //   'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
            // ]);
        })
    );
});


// Here is a good place to do cleanup work because this will only be executed once the user clased all the pages,
// all tabs and open the application in a new one. So now it is safe to update the cache because now we are not in a
// running application anymore.
self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    event.waitUntil(
      caches.keys()
            .then(function(keyList) {
              return Promise.all(keyList.map(function(key) {
                if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
                  console.log('[Service Worker] Removing old cache.', key);
                  return caches.delete(key);
                }
              }));
            })
    );
    return self.clients.claim();
});

// Until here, when you refresh the page, you will see only the INSTALL listener has been called. So the obvious one is the activate log is missing.
// Well actually since we have two separate threads here, app.js your normal javascript code in the service worker, Chrome can not guarantee the order here,
// but in theory this executes after you installed the service worker, however you can not rely on this.

// Now the more interesting thing however is the SW activation, where is that console log, wasn't that event fired? Indeed it was not, and we can get more
//  insights if we click on application. There you see that the new service worker is waiting to activate.

// Now it is important to understand if you have a tab open or if you have a window open with your page, then new service workers will get installed but not
// activated. The reason for this is that the page is maybe still communicating with the old service worker and activating a new one which might introduce
// breaking changes, might break the running page. Therefore the way to activate a new version is to close the existing tab and reopen it so that you have

self.addEventListener('fetch', function(event) {
    // console.log('[Service Worker] Fetching something ...', event);
    // event.respondWith(null);
    // event.respondWith(fetch(event.request));

    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
          if (response) {
            return response;
          } else {
            return fetch(event.request)
              .then(function(res) {
                return caches.open(CACHE_DYNAMIC_NAME)
                  .then(function(cache) {
                    cache.put(event.request.url, res);
                    return res;
                  });
              })
              .catch(function(err) {});
          }
      })
    );
});