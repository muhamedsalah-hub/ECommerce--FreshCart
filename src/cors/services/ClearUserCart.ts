//Other Libraries
import axios from "axios";

export const ClearUserCart = (token: string) => {
  return axios.delete("https://ecommerce.routemisr.com/api/v1/cart", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token,
    },
  });
};
