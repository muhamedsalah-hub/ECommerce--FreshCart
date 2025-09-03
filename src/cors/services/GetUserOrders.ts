import axios from "axios";

export const GetUserOrders = (userId: string) => {
  return axios.get(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};
