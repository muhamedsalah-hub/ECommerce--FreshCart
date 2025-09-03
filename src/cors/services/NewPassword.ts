//Other Libraries
import axios from "axios";

interface Idata {
  email: string;
  newPassword: string;
}
export const NewPassword = (data: Idata) => {
  return axios.put(
    "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
    data,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};
