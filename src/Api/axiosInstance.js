// src/utils/axiosInstance.js

import axios from "axios";

// Environment variables
const baseURL = process.env.REACT_APP_API_BASE_URL;
const timeout = Number(process.env.REACT_APP_TIMEOUT) || 10000;

const axiosInstance = axios.create({
  baseURL, // Base URL from .env
  timeout, // Timeout from .env
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Token ko localStorage se fetch karo
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Debug logging (enabled only if REACT_APP_DEBUG is true)
    if (process.env.REACT_APP_DEBUG === "true") {
      console.log("Request:", config);
    }

    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    if (process.env.REACT_APP_DEBUG === "true") {
      console.log("Response:", response);
    }
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle server-side errors
      if (error.response.status === 401) {
        alert("Unauthorized! Please log in again.");
        window.location.href = "/login";
      } else {
        console.error("Response Error:", error.response.data);
      }
    } else {
      // Handle network errors
      console.error("Network Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
