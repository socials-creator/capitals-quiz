/* Capital Rush v12.7: pre-cache all 5 modes including outlines. */
importScripts('./offline-assets.js');
const CACHE = 'capital-rush-v12.7-all-modes';
const ASSETS = self.OFFLINE_ASSETS;
async function seedCache(){
  const cache = await caches.open(CACHE);
  // Small batches protect Safari/iPhone against simultaneous network exhaustion.
  for(let i=0;i<ASSETS.length;i+=12){
    await Promise.all(ASSETS.slice(i,i+12).map(async url=>{
      const req = new Request(url,{cache:'reload'});
      try{
        const hit = await cache.match(url);
        if(hit) return;
        const response = await fetch(req);
        if(response.ok) await cache.put(url,response);
      }catch(_error){ /* Missing assets keep indicator in incomplete state */ }
    }));
  }
}
self.addEventListener('install',event=>event.waitUntil(seedCache().then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith('capital-rush-')&&k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('message',event=>{
  if(event.data?.type==='CACHE_RETRY') event.waitUntil(seedCache().then(()=>event.source?.postMessage({type:'CACHE_RETRY_DONE'})));
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  if(new URL(req.url).pathname.endsWith('/sw.js'))return;
  event.respondWith((async()=>{
    const cached=await caches.match(req,{ignoreSearch:true});
    if(cached)return cached;
    try{
      const fresh=await fetch(req);
      if(fresh.ok){const cache=await caches.open(CACHE); await cache.put(req,fresh.clone());}
      return fresh;
    }catch(_){return Response.error();}
  })());
});
