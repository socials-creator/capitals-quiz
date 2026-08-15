const CACHE = "capital-rush-v6";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-180.png"
];


self.addEventListener("install", event => {

  event.waitUntil(

    caches
      .open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())

  );

});


self.addEventListener("activate", event => {

  event.waitUntil(

    caches
      .keys()
      .then(keys =>
        Promise.all(

          keys
            .filter(key => key !== CACHE)
            .map(key => caches.delete(key))

        )
      )
      .then(() => self.clients.claim())

  );

});


self.addEventListener("fetch", event => {

  /*
    Never cache the service worker itself.
    This allows GitHub Pages to deliver
    the newest version.
  */

  if(
    new URL(event.request.url)
      .pathname
      .endsWith("/sw.js")
  ){

    return;

  }


  event.respondWith(

    caches
      .match(event.request)
      .then(cached => {

        if(cached){

          return cached;

        }

        return fetch(event.request);

      })

  );

});
