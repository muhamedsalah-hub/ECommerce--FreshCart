//Other Libraries
import axios from "axios";

export const RemoveCartItem = (
  productId: string | undefined,
  token: string
) => {
  return axios.delete(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      headers: {
        Accept: "appication/json",
        "Content-Type": "appication/json",
        token,
      },
    }
  );
};
