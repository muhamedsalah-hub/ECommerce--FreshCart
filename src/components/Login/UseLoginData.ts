//React Hooks
import { useState } from "react";

//React Redux
import { useAppSelector, useAppDispatch } from "../../Features/Store/Store";
import { UserLoginApi } from "../../Features/CurrentUser/UserLoginSlice";

//React Router
import { useNavigate } from "react-router";

//Interfaces
import { ILoginUserData } from "../../cors/InterFaces/InterFaces";
import {
  changeMessage,
  hideToaster,
  showToaster,
} from "../../Features/Toaster/ToasterSlice";
import { hideSpinner, showSpinner } from "../../Features/Spinner/SpinnerSlice";


export const useLoginData = () => {
  //React Hooks
  const [LoginuserData, setLoginUserData] = useState<ILoginUserData>({
    email: "",
    password: "",
  });

  //React Router
  const navigate = useNavigate();

  //React Redux
  const dispatch = useAppDispatch();
  const token: string = useAppSelector((state) => {
    return state.userLogin.token;
  });

  //Handle Login button
  const handleLoginBtn = async () => {
    dispatch(showSpinner());
    try {
      await dispatch(UserLoginApi(LoginuserData)).unwrap();
      dispatch(hideSpinner());
      dispatch(showToaster());
      dispatch(changeMessage("User Logged In successfully"));
      navigate("/Home");
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      dispatch(hideSpinner());
      dispatch(changeMessage("Unauthorized"));
      dispatch(showToaster());
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
    }
  };

  return {
    LoginuserData,
    token,
    setLoginUserData,
    handleLoginBtn,
    dispatch,
    navigate,
  };
};
