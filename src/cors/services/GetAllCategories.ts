//Other Libraries
import axios from "axios";

export const GetAllCategories = () => {
  return axios.get("https://ecommerce.routemisr.com/api/v1/categories", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
