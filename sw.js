const staticAssets = [
   
    './index.html',
    './oauthcallback.html',
    './scripts/heatapi.js',
    './scripts/auto-complete.min.js',
    './scripts/heatcall.js',
    './scripts/refactor_tproc.js',
    './styles/auto-complete.css',
    './styles/card.css',
    './styles/inline.css',
    './images/bg_comp.jpg',
    './images/p1.png',
    './images/p2.png',
];

self.addEventListener('install', async event => {
const cache = await caches.open('ticketviewer');
cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
const req = event.request;
event.respondWith(cacheFirst(req));
});

async function cacheFirst(req){
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}