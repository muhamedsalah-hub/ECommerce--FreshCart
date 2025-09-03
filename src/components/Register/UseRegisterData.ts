//React Redux
import { useAppDispatch } from "../../Features/Store/Store";
import { UserRegisterationApi } from "../../Features/CurrentUser/UserRegisterationSlice";
import {
  changeMessage,
  hideToaster,
  showToaster,
} from "../../Features/Toaster/ToasterSlice";

//React Hooks
import { useState } from "react";

//React Router
import { useNavigate } from "react-router";

//Interfaces
import { IRegisterationUserData } from "../../cors/InterFaces/InterFaces";
import { hideSpinner, showSpinner } from "../../Features/Spinner/SpinnerSlice";

export const useRegisterData = () => {
  //React Router
  const navigate = useNavigate();

  //React Hooks
  const [RegisterationUserData, setRegisterationUserData] =
    useState<IRegisterationUserData>({
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    });

  //React Redux
  const dispatch = useAppDispatch();

  //Handle Register Button
  const handleRegisterBtn = async () => {
    dispatch(showSpinner());
    try {
      await dispatch(UserRegisterationApi(RegisterationUserData)).unwrap();
      dispatch(hideSpinner());
      dispatch(changeMessage("User Registered successfully"));
      dispatch(showToaster());
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
      navigate("/Login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      dispatch(hideSpinner());
      dispatch(changeMessage("Invalid data"));
      dispatch(showToaster());
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
    }
  };

  return {
    RegisterationUserData,
    setRegisterationUserData,
    dispatch,
    handleRegisterBtn,
  };
};
