import axios from "axios";

export const AddToCart = (productId: string, token: string) => {
  return axios.post(
    "https://ecommerce.routemisr.com/api/v1/cart",
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
