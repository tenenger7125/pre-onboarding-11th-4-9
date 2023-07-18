import { searchServices } from '../services';
import { cache } from '../utils';
import { SearchType } from '../types';

const instance = searchServices.get();

export const searchApi = {
  async get(search: string) {
    const url = `/sick?q=${search}`;
    const res = await cache.get(url);

    if (res) {
      const { data, expirationTime } = await res.json();

      if (Date.now() < expirationTime) return data as SearchType[];
    }

    const { data } = await instance.get<SearchType[]>(url);
    console.info('calling api');

    return data;
  },
};
