//Other Libraries
import axios from "axios";

export const VerifyCode = (code: string) => {
  return axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
    {
      resetCode: code,
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};
