// authService.js
import api from "./axios";

export const loginUser = (data) => {
  return api.post("/auth/signin", data);
};