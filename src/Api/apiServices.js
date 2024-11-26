// src/services/apiService.js

import axiosInstance from "./axiosInstance";

// GET API call
export const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    throw error; // Caller ko error pass karo
  }
};

// POST API call
export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
