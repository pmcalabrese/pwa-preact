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
    "url": "css/home.style.2ce59429.70eeff18.css",
    "revision": "70eeff18fc190b60d371abd6c9e1329a"
  },
  {
    "url": "css/home.style.2ce59429.css",
    "revision": "2ce59429da5064af8f72b07b795d8070"
  },
  {
    "url": "css/home.style.37cf24b8.css",
    "revision": "37cf24b8d61f8b34bd73b866cff5f652"
  },
  {
    "url": "css/home.style.bundle.0824d653.js",
    "revision": "b2ae49c1ef43553ec25ff3555798d47d"
  },
  {
    "url": "index.html",
    "revision": "04947a233c2c6baec9fe037f1a7e493f"
  },
  {
    "url": "js/commons.5b453b1b.js",
    "revision": "e8c9e672235e2eebbb3533906eb62c10"
  },
  {
    "url": "js/home.bundle.92930f8c.js",
    "revision": "91028d1a7a055cf277eca376feea6c61"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
