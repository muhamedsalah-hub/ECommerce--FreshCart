//Other Libraries
import axios from "axios";

export const GetWishLists = (token: string) => {
  return axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token,
    },
  });
};
