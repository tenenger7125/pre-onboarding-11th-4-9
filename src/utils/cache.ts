const expirationSeconds = 60 * 60 * 1000; // 60 * 60 * 1000 = 1hour
const KEY = 'searchCache';

export const cache = {
  async set(url: string, data: unknown[]) {
    const cacheStorage = await caches.open(KEY);
    const response = new Response(JSON.stringify({ data, expirationTime: Date.now() + expirationSeconds * 1000 }));

    await cacheStorage.put(url, response);
  },
  async get(url: string) {
    const cacheStorage = await caches.open(KEY);
    const cacheResponse = await cacheStorage.match(url);

    return cacheResponse;
  },
};
