//Other Libraries
import axios from "axios";

export const GetUserCart = (token: string) => {
  return axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token,
    },
  });
};
