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
    "url": "css/home.style.37cf24b8.54b0c13c.css",
    "revision": "54b0c13c1d15af506590d748859e59b8"
  },
  {
    "url": "css/home.style.37cf24b8.css",
    "revision": "37cf24b8d61f8b34bd73b866cff5f652"
  },
  {
    "url": "css/home.style.bundle.0824d653.js",
    "revision": "a22a69e21557986d2ffa7204bcc131e9"
  },
  {
    "url": "index.html",
    "revision": "ec6f5d84ab8f222b17e9eb6ecfbf8498"
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
