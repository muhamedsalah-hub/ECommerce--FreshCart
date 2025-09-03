// Other Libraries
import axios from "axios";

export const GetSubCategories = (categoryId: string) => {
  return axios.get(
    `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};
