export const cache = (() => {
  const EXPIRATION_TIME = 60 * 60 * 1000; // 60 * 60 * 1000 = 1hour
  const SEARCH_KEY = 'searchCache';
  let cacheStorage: Cache | undefined;

  const getCacheStorage = async () => {
    if (cacheStorage === undefined) cacheStorage = await caches.open(SEARCH_KEY);

    return cacheStorage;
  };

  return {
    async set(url: string, data: unknown) {
      const cacheStorage = await getCacheStorage();
      const response = new Response(JSON.stringify({ data, expirationTime: Date.now() + EXPIRATION_TIME }));

      await cacheStorage.put(url, response);
    },
    async get(url: string) {
      const cacheStorage = await getCacheStorage();
      const cacheResponse = await cacheStorage.match(url);

      return cacheResponse;
    },
  };
})();
