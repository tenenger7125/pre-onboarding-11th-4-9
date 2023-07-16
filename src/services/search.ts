import axios from 'axios';

import { BASE_URL } from '../constants';
import type { SearchType } from '../types';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const searchServices = {
  async search(search: string) {
    const { data } = await instance.get<SearchType[]>(`/sick?q=${search}`);

    return data;
  },
};
