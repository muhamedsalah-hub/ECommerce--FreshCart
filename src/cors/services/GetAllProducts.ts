import axios from "axios";

export const GetAllProducts = (limit: number, page: number) => {
  return axios.get(
    `https://ecommerce.routemisr.com/api/v1/products?limit=${limit}&page=${page}`
  );
};
