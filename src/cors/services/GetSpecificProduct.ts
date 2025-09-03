//Other Libraries
import axios from "axios";

export const GetSpecificProduct = (productId: string | undefined) => {
  return axios.get(
    `https://ecommerce.routemisr.com/api/v1/products/${productId}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};
