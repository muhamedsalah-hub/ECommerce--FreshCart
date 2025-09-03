//Other Libraries
import axios from "axios";

export const DeleteWishList = (productId: string, token: string) => {
  return axios.delete(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token,
      },
    }
  );
};
