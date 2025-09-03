//Other Libraries
import axios from "axios";

import { ILoginUserData } from "./../InterFaces/InterFaces";

export const Login = (data: ILoginUserData) => {
  return axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    data,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};
