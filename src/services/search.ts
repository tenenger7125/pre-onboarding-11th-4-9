import axios from 'axios';

import { cache } from '../utils';
import { BASE_URL } from '../constants';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const searchServices = {
  get() {
    instance.interceptors.response.use(
      async res => {
        const { url = '' } = res.config;

        await cache.set(url, res.data);

        return res;
      },
      err => {
        return Promise.reject(err);
      },
    );

    return instance;
  },
};
