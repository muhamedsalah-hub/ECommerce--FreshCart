import axios from "axios";

type Idata = string;

export const ResetPassword = (data: Idata) => {
  return axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
    { email: data },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};
