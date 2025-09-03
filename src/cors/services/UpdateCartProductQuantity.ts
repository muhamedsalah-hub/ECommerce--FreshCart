//Other Libraries
import axios from "axios";

export const UpdateCartProductQuantity = (
  productId: string | undefined,
  productCount: number,
  token: string
) => {
  return axios.put(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      count: productCount,
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
