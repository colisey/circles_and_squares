import axios, {AxiosPromise} from 'axios';

import {REACT_APP_API_ADDRESS} from 'config';

export const apiClient = axios.create({
    baseURL: `${REACT_APP_API_ADDRESS}/api/`,
    timeout: 60000,
  });
  