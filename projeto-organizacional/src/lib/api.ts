// /lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", // ex: "http://localhost:3333"
  withCredentials: true, // importante se backend usar cookie httpOnly
});

// Anexa token do localStorage automaticamente (se usar localStorage)
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token && config.headers)
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
