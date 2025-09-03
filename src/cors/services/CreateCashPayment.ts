import axios from "axios";
import { IUserInfo } from "../InterFaces/InterFaces";

export const CreateCashPayment = (
  cartId: string | undefined,
  shippingAddress: IUserInfo,
  token: string
) => {
  return axios.post(
    `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
    { shippingAddress },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token,
      },
    }
  );
};
