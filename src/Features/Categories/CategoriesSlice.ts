//React Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//API Requests
import { GetAllCategories } from "../../cors/services/GetAllCategories";
import { GetSubCategories } from "../../cors/services/GetSubCategories";

//Interfaces
import {
  ICategoriesState,
  ISubCategory,
} from "../../cors/InterFaces/InterFaces";

export const CategoriesApi = createAsyncThunk("CategoriesApi", async () => {
  try {
    const response = await GetAllCategories();
    const categories: { name: string; _id: string; image: string }[] =
      response.data.data;

    const categoriesFiltration = categories.map((category) => {
      return {
        categoryName: category.name,
        categoryId: category._id,
        categoryImage: category.image,
      };
    });
    return categoriesFiltration;
  } catch (error) {
    console.log(error);
    return [];
  }
});

export const subCategoriesApi = createAsyncThunk(
  "SubCategoriesApi",
  async (categoryId: string, { rejectWithValue }) => {
    try {
      const response = await GetSubCategories(categoryId);
      const subCategories: { name: string; _id: string }[] = response.data.data;
      const subCategoriesFiltration: ISubCategory[] = subCategories.map(
        (subCategory) => {
          return {
            subCategoryName: subCategory.name,
            subCategoryId: subCategory._id,
          };
        }
      );
      return subCategoriesFiltration;
    } catch (error) {
      console.log(error);
      return rejectWithValue([]);
    }
  }
);

const initialState: ICategoriesState = {
  categories: [],
  subCategories: [],
};

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //Categories
    builder.addCase(CategoriesApi.fulfilled, (currentState, action) => {
      currentState.categories = action.payload;
    });

    //Subcategories
    builder.addCase(subCategoriesApi.fulfilled, (currentState, action) => {
      currentState.subCategories = action.payload;
    });
  },
});

export default CategoriesSlice.reducer;
