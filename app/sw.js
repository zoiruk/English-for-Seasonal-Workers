/* Service worker — offline-first for budget Androids with no field internet.
   Bump CACHE_VERSION to force-refresh after data/code changes (kill-switch). */
const CACHE_VERSION = "esw-v111";
const PRECACHE = ["./", "index.html", "style.css", "app.js", "data.js", "phrasebook.js", "reader.js", "scenarios.js", "phonetics.js", "reading.js", "manifest.json", "icon.svg"];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_VERSION).then((c) => c.addAll(PRECACHE)).catch(() => {}));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // network-first: online users always get the latest; cache is offline fallback.
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((cached) => cached || (req.mode === "navigate" ? caches.match("index.html") : undefined))
      )
  );
});
