//Other Libraries
import axios from "axios";

export const GetAllBrands = () => {
  return axios.get("https://ecommerce.routemisr.com/api/v1/brands", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
