/*
 * Service worker de transition. Jusqu'à la version 1.0.17, la web app était servie ici, à la racine, avec un service
 * worker du même nom qui renvoyait toujours l'app gardée en cache. Elle vit maintenant dans ./app/ (son propre service
 * worker). Celui-ci remplace l'ancien chez les iPhone qui avaient installé l'app : il prend la main tout de suite
 * (l'ancienne app se recharge), supprime les caches de l'ancienne version et laisse passer les pages (la page
 * d'accueil renvoie l'icône installée vers ./app/). Les données (IndexedDB) et les images d'exercices déjà
 * téléchargées (cache « fonte-img-v1 ») ne sont pas touchées.
 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('fonte-app-')).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});
