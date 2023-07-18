export const cache = (() => {
  const EXPIRATION_TIME = 60 * 60 * 1000; // 60 * 60 * 1000 = 1hour
  const SEARCH_KEY = 'searchCache';

  return {
    async set(url: string, data: unknown) {
      const cacheStorage = await caches.open(SEARCH_KEY);
      const response = new Response(JSON.stringify({ data, expirationTime: Date.now() + EXPIRATION_TIME }));

      await cacheStorage.put(url, response);
    },
    async get(url: string) {
      const cacheStorage = await caches.open(SEARCH_KEY);
      const cacheResponse = await cacheStorage.match(url);

      return cacheResponse;
    },
  };
})();
