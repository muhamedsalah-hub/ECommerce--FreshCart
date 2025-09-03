//Interfaces
import { IUserInfo } from "../InterFaces/InterFaces";

export const createVisaPayment = (
  cartId: string | undefined,
  userAddress: IUserInfo,
  token: string
) => {
  return fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://http://localhost:5173/`,
    {
      method: "POST",
      redirect: "manual",
      body: JSON.stringify(userAddress),
      headers: {
        Accept: "application/json",
        "Content-Type": "application.json",
        token,
      },
    }
  );
};
