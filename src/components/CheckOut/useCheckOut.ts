//InterFaces
import { IUserInfo } from "../../cors/InterFaces/InterFaces";

//React Hooks
import { useState } from "react";

//Custom Hook
import { useLoginData } from "../Login/UseLoginData";

//API Requests
import { CreateCashPayment } from "../../cors/services/CreateCashPayment";
import { createVisaPayment } from "../../cors/services/CreateVisaPayment";

//React Redux
import {
  changeMessage,
  hideToaster,
  showToaster,
} from "../../Features/Toaster/ToasterSlice";
import { hideSpinner, showSpinner } from "../../Features/Spinner/SpinnerSlice";
import { clearAllItems } from "../../Features/Cart/CartSlice";

export const useCheckOut = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    details: "",
    phone: "",
    city: "",
  });

  const { token, dispatch } = useLoginData();

  const handleCashPayment = async (cartId: string | undefined) => {
    dispatch(showSpinner());
    try {
      const response = await CreateCashPayment(cartId, userInfo, token);
      console.log(response);
      dispatch(showToaster());
      dispatch(
        changeMessage(
          "Order has beed done successfully please get ready with your cash payment"
        )
      );
      dispatch(hideSpinner());
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
      dispatch(clearAllItems());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      dispatch(showToaster());
      dispatch(changeMessage("Cart is empty to pay"));
      dispatch(hideSpinner());
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
    }
  };

  const handleVisaPayment = async (cartId: string | undefined) => {
    dispatch(showSpinner());
    try {
      const response = await createVisaPayment(cartId, userInfo, token);
      const data = await response.json();
      dispatch(hideSpinner());
      console.log(data);
      const url: string = data.session.url;
      window.open(url, "_blank");
      dispatch(clearAllItems());
    } catch (error) {
      console.log(error);
      dispatch(hideSpinner());
      dispatch(showToaster());
      dispatch(changeMessage("Cart is empty to pay"));
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
    }
  };

  return { userInfo, setUserInfo, handleCashPayment, handleVisaPayment };
};
