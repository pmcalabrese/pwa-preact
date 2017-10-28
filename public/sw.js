importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/home.style.af65d2e5.9167b938.css",
    "revision": "9167b9386b5b91459d7b84ca8ab57edf"
  },
  {
    "url": "css/home.style.af65d2e5.css",
    "revision": "af65d2e5127d2a4ebb849ede58849e4b"
  },
  {
    "url": "css/home.style.bundle.0824d653.js",
    "revision": "a22a69e21557986d2ffa7204bcc131e9"
  },
  {
    "url": "index.html",
    "revision": "c97ba7dafafc546e4350cbe840170c9e"
  },
  {
    "url": "js/commons.5b453b1b.js",
    "revision": "abd013707f448c727a817ffb37262055"
  },
  {
    "url": "js/home.bundle.92930f8c.js",
    "revision": "4abd50d649b37af91fe5d0967ad51b26"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
