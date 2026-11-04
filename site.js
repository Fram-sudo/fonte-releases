// Page d'accueil : version proposée selon l'appareil, et bandeau « lire dans l'autre langue »
// si le navigateur est réglé dans l'autre langue (jamais de redirection automatique).
(function () {
  var body = document.body;
  var ua = navigator.userAgent || '';
  var ios = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  body.dataset.platform = /Android/i.test(ua) ? 'android' : ios ? 'iphone' : 'desktop';

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-show]') : null;
    if (!t) return;
    e.preventDefault();
    body.classList.add('all');
  });

  var banner = document.getElementById('lang-banner');
  if (!banner) return;
  var KEY = 'fonte-site-lang-banner';
  var dismissed = false;
  try { dismissed = localStorage.getItem(KEY) === '1'; } catch (e) { /* stockage indisponible */ }
  var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
  var browser = String(langs[0] || '').toLowerCase().slice(0, 2);
  if (!dismissed && browser === banner.dataset.for) banner.hidden = false;
  var close = document.getElementById('lang-banner-close');
  if (close) close.addEventListener('click', function () {
    banner.hidden = true;
    try { localStorage.setItem(KEY, '1'); } catch (e) { /* rien */ }
  });
})();
