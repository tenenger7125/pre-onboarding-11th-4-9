import axios from 'axios';

import { BASE_URL } from '../constants';
import { cache } from '../utils';

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
