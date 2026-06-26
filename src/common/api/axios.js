import axios from "axios";

const api = axios.create({
  baseURL: "https://dev-project-ecommerce.upgrad.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token automatically to every request
api.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
});

export default api;