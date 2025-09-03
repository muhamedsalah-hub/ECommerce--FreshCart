//Other Libraries
import axios from "axios";

import { IRegisterationUserData } from "../InterFaces/InterFaces";

export const SignUp = (data: IRegisterationUserData) => {
  return axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/signup",
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};
