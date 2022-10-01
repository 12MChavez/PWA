importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  //PWA will read from the cache instead of going  over the network if there is something available in the cache
  //good for files that do not change often
  // new workbox.strategies.CacheFirst()

  //will use the network, but if offline it will fall back to the cache
  //good for files that change often
  new workbox.strategies.NetworkFirst()
);
