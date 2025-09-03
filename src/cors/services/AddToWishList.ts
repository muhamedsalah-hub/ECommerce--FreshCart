//OtherLibraries
import axios from "axios";

export const AddToWishList = (productId: string, token: string) => {
  return axios.post(
    `https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      productId,
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token,
      },
    }
  );
};
