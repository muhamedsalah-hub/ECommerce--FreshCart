//Custom Hook
import { useLoginData } from "../Login/UseLoginData";

//Interfaces
//Other Libraries

import { jwtDecode } from "jwt-decode";

//React Redux
import { useAppSelector } from "../../Features/Store/Store";

export const useAllOrders = () => {
  const { token, dispatch } = useLoginData();
  const { id }: { id: string } = jwtDecode(token);

  const orderDetails = useAppSelector((state) => {
    return state.userOrders.orderDetails;
  });

  return { dispatch, id, orderDetails };
};
