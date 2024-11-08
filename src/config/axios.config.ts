import { useAuthStore } from "@/store/AuthStore";
import Axios, { InternalAxiosRequestConfig } from "axios";
import { configure } from "axios-hooks";
import { LRUCache } from "lru-cache";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE;

const axiosOptions = {
  baseURL: baseUrl,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
};
const cache = new LRUCache({ max: 10 });

export const fwbAxios = Axios.create(axiosOptions);
export const axios = Axios.create(axiosOptions);

// request interceptor to add token to request headers
fwbAxios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().token;
    console.log("token", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor intercepting 401 responses, refreshing token and retrying the request
fwbAxios.interceptors.response.use(
  (response) => response.data,
  async (err) => {
    // Do something with response error
    if (err.errors && err.errors.length > 0) {
      return Promise.reject(err.errors[0]);
    }
    return Promise.reject(err);
  }
);

configure({ axios: fwbAxios, cache });
