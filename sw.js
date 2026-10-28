'use strict';

const CACHE_NAME = 'cadence-shell-v2';
const SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./fonts.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icons/favicon-32.png",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./fonts/barlow-400-latin-ext.woff2",
  "./fonts/barlow-400-latin.woff2",
  "./fonts/barlow-500-latin-ext.woff2",
  "./fonts/barlow-500-latin.woff2",
  "./fonts/barlow-600-latin-ext.woff2",
  "./fonts/barlow-600-latin.woff2",
  "./fonts/barlow-700-latin-ext.woff2",
  "./fonts/barlow-700-latin.woff2",
  "./fonts/barlow-condensed-600-latin-ext.woff2",
  "./fonts/barlow-condensed-600-latin.woff2",
  "./fonts/barlow-condensed-700-latin-ext.woff2",
  "./fonts/barlow-condensed-700-latin.woff2",
  "./fonts/barlow-condensed-800-latin-ext.woff2",
  "./fonts/barlow-condensed-800-latin.woff2",
  "./fonts/ibm-plex-mono-400-latin-ext.woff2",
  "./fonts/ibm-plex-mono-400-latin.woff2",
  "./fonts/ibm-plex-mono-500-latin-ext.woff2",
  "./fonts/ibm-plex-mono-500-latin.woff2",
  "./fonts/ibm-plex-mono-600-latin-ext.woff2",
  "./fonts/ibm-plex-mono-600-latin.woff2"
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('cadence-shell-') && name !== CACHE_NAME).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response.ok && response.type === 'basic') {
        try {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request.mode === 'navigate' ? './index.html' : request, response.clone());
        } catch {}
      }
      return response;
    } catch {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(request.mode === 'navigate' ? './index.html' : request)) || Response.error();
    }
  })());
});
