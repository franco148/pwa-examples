
self.addEventListener('install', function(event) {
	console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function(event) {
	console.log('[Service Worker] Activating Service Worker ...', event);
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
	console.log('[Service Worker] Fetching something ...', event);
	// event.respondWith(null);
	event.respondWith(fetch(event.request));
});




