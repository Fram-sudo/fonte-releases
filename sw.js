/* Service worker de Fonte (écrit au build par vite.config.ts). */
const VERSION = '0848dff9544b';
const APP_CACHE = 'fonte-app-' + VERSION;
const IMG_CACHE = 'fonte-img-v1';
const PRECACHE = ["./","assets/index-C3mko9XS.css","assets/index-aUX4zfbP.js","data/exercises.json","data/nouveautes.json","fonts/rajdhani-bold.woff2","fonts/rajdhani-semibold.woff2","fonts/roboto.woff2","icons/apple-touch-icon.png","icons/favicon-32.png","icons/icon-192.png","icons/icon-512.png","licenses-web/MIT.txt","licenses-web/OFL-Roboto.txt","licenses/Apache-2.0.txt","licenses/OFL-Rajdhani.txt","licenses/Unlicense.txt","manifest.webmanifest","sounds/rest_bell.mp3","sounds/rest_ding.mp3","sounds/rest_soft.mp3"];
const IMG_HOST = 'raw.githubusercontent.com';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(APP_CACHE).then((cache) => cache.addAll(PRECACHE)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k.startsWith('fonte-app-') && k !== APP_CACHE).map((k) => caches.delete(k))),
    ).then(() => self.clients.claim()),
  );
});

// L'app demande d'activer la nouvelle version quand aucune séance n'est en cours.
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Images des exercices : gardées après la première vue (et toutes si on les télécharge dans Réglages).
  if (url.hostname === IMG_HOST) {
    // Requête en mode CORS (le serveur d'images l'accepte) : la réponse est lisible, donc gardée.
    const cors = new Request(req.url, { mode: 'cors', credentials: 'omit' });
    event.respondWith(
      caches.open(IMG_CACHE).then((cache) =>
        cache.match(req.url).then((hit) => hit || fetch(cors).then((res) => {
          if (res.ok) cache.put(req.url, res.clone());
          return res;
        }, () => fetch(req))),
      ),
    );
    return;
  }
  if (url.origin !== self.location.origin) return;
  // Pages : toujours l'app gardée en cache (elle marche hors ligne ; la nouvelle version arrive par le service worker).
  if (req.mode === 'navigate') {
    event.respondWith(caches.match('./', { cacheName: APP_CACHE }).then((hit) => hit || fetch(req)));
    return;
  }
  event.respondWith(caches.match(req, { cacheName: APP_CACHE }).then((hit) => hit || fetch(req)));
});
