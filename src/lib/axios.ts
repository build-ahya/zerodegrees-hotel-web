import axios, { InternalAxiosRequestConfig } from 'axios';
import { parse } from 'cookie';
import { auth } from './firebase';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_DEV_BASE_URL
    : process.env.NEXT_PUBLIC_PROD_BASE_URL;
// const isServer = typeof window === 'undefined'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'api-key': process.env.NEXT_PUBLIC_CLIMATE_API_KEY,
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  let accessToken: string | null = null;

  if (typeof window !== 'undefined') {
    // Client-side: Access token from localStorage
    accessToken = localStorage.getItem('accessToken');
  } else if (config.headers?.cookie) {
    // Server-side: Parse cookies for the access token
    const cookies = parse(config.headers.cookie);
    accessToken = cookies.accessToken || null;
  }
  if (!accessToken) {
    return config;
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  } as InternalAxiosRequestConfig;
});

axiosInstance.interceptors.response.use(undefined, async (err) => {
  const error = err.response;

  // Check for 401 errors
  if (error?.status === 401 && error.config && !error.config.__isRetryRequest) {
    let idToken: string | null = null;

    // Handle token retrieval based on environment
    if (typeof window !== 'undefined') {
      // Client-side: Get token from Firebase auth
      idToken = (await auth.currentUser?.getIdToken()) as string;
      if (idToken) {
        localStorage.setItem('accessToken', idToken); // Update localStorage
      }
    } else if (error.config.headers?.cookie) {
      // Server-side: Parse token from cookies
      const cookies = parse(error.config.headers.cookie);
      idToken = cookies.accessToken || null;
    }

    if (idToken) {
      // Retry request with new token
      error.config.__isRetryRequest = true;
      error.config.headers.Authorization = `Bearer ${idToken}`;
      return axiosInstance(error.config);
    }
  }

  return Promise.reject(err);
});

export default axiosInstance;
