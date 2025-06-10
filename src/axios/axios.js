import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const tokenLessApi = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

export const api = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response Error:", error.response);

    if (error.response?.status === 401) {
      console.warn("Unauthorized. Redirecting to login...");
    }

    return Promise.reject(error);
  }
);
