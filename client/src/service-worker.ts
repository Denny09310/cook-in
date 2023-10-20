// Service worker
//
// References
// https://github.com/webmaxru/pwatter/blob/workbox/src/sw-default.js
// Caching strategies: https://developers.google.com/web/tools/workbox/modules/workbox-strategies#stale-while-revalidate
// Example: https://github.com/JeremieLitzler/mws.nd.2018.s3/blob/master/sw.js

import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkOnly, StaleWhileRevalidate } from 'workbox-strategies';

declare const self: any;

// Enable debug mode during development
const DEBUG_MODE = location.hostname.endsWith('.app.local') || location.hostname === 'localhost';

const DAY_IN_SECONDS = 24 * 60 * 60;
const MONTH_IN_SECONDS = DAY_IN_SECONDS * 30;
const YEAR_IN_SECONDS = DAY_IN_SECONDS * 365;

/**
 * The current version of the service worker.
 */
const SERVICE_WORKER_VERSION = '1.0.0';

if (DEBUG_MODE) {
  console.debug(
    `🚀 ~ service-worker ~ Service worker version ${SERVICE_WORKER_VERSION} loading...`,
  );
}

// ------------------------------------------------------------------------------------------
// Precaching configuration
// ------------------------------------------------------------------------------------------
cleanupOutdatedCaches();

// Precaching
// Make sure that all the assets passed in the array below are fetched and cached
// The empty array below is replaced at build time with the full list of assets to cache
// This is done by workbox-build-inject.js for the production build
const assetsToCache = self.__WB_MANIFEST;
// To customize the assets afterwards:
//assetsToCache = [...assetsToCache, ???];

if (DEBUG_MODE) {
  console.trace('🚀 ~ service-worker.ts ~ Assets that will be cached:', assetsToCache);
}

precacheAndRoute(assetsToCache);

// ------------------------------------------------------------------------------------------
// Routes
// ------------------------------------------------------------------------------------------

// Cache the Google Fonts stylesheets with a stale while revalidate strategy.
registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: YEAR_IN_SECONDS,
        maxEntries: 30,
        purgeOnQuotaError: true, // Automatically cleanup if quota is exceeded.
      }),
    ],
  }),
);

// Make JS/CSS fast by returning assets from the cache
// But make sure they're updating in the background for next use
registerRoute(/\.(?:js|css)$/, new StaleWhileRevalidate());

// Cache images
// But clean up after a while
registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 250,
        maxAgeSeconds: MONTH_IN_SECONDS,
        purgeOnQuotaError: true, // Automatically cleanup if quota is exceeded.
      }),
    ],
  }),
);

// Anything authentication related MUST be performed online
registerRoute(/(https:\/\/)?([^\/\s]+\/)api\/v1\/auth\/.*/, new NetworkOnly());

// Database access is only supported while online
registerRoute(/(https:\/\/)?([^\/\s]+\/)database\/.*/, new NetworkOnly());

// ------------------------------------------------------------------------------------------
// Messages
// ------------------------------------------------------------------------------------------
self.addEventListener('message', (event: { data: any; type: any; ports: any }) => {
  // TODO define/use correct data type
  if (event && event.data && event.data.type) {
    // return the version of this service worker
    if ('GET_VERSION' === event.data.type) {
      if (DEBUG_MODE) {
        console.debug(
          '🚀 ~ service-worker.ts ~ Returning the service worker version:',
          SERVICE_WORKER_VERSION,
        );
      }
      event.ports[0].postMessage(SERVICE_WORKER_VERSION);
    }

    // When this message is received, we can skip waiting and become active
    // (i.e., this version of the service worker becomes active)
    // Reference about why we wait: https://stackoverflow.com/questions/51715127/what-are-the-downsides-to-using-skipwaiting-and-clientsclaim-with-workbox
    if ('SKIP_WAITING' === event.data.type) {
      if (DEBUG_MODE) {
        console.debug(`🚀 ~ service-worker.ts ~ Skipping waiting...`);
      }
      self.skipWaiting();
    }

    // When this message is received, we can take control of the clients with this version
    // of the service worker
    if ('CLIENTS_CLAIM' === event.data.type) {
      if (DEBUG_MODE) {
        console.debug(`🚀 ~ service-worker.ts ~ Claiming clients and cleaning old caches`);
      }
      self.clients.claim();
    }
  }
});
