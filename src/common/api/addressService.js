import api from "./axios";

export const getAddresses = () => {
  return api.get("/addresses");
};

export const createAddress = (data) => {
  return api.post("/addresses", data);
};