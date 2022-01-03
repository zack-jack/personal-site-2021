import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

/**
 * Standard HTTP Handler
 */
const XHR = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});

/**
 * XHR GET request
 */
export const get = (
  url: string,
  { params, headers }: AxiosRequestConfig
): AxiosPromise => {
  return XHR.get(url, {
    ...params,
    ...headers,
  });
};

/**
 * XHR POST request
 */
export const post = (
  url: string,
  data: {},
  { headers }: AxiosRequestConfig = {}
): AxiosPromise => XHR.post(url, { ...data }, { ...headers });

export default XHR;
