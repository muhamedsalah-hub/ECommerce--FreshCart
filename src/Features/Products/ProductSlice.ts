//Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//API Requests
import { GetAllProducts } from "../../cors/services/GetAllProducts";

//Interfaces
import { IProductsState } from "../../cors/InterFaces/InterFaces";

export const ProductsApi = createAsyncThunk(
  "Products/ProductsApi",
  async ({ limit, page }: { limit: number; page: number }) => {
    try {
      const response = await GetAllProducts(limit, page);
      const products: {
        imageCover: string;
        title: string;
        price: number;
        ratingsAverage: number;
        category: { name: string };
        _id: string;
      }[] = response.data.data;

      const productsFiltration = products.map((product) => {
        return {
          productImage: product.imageCover,
          productName: product.title,
          productPrice: product.price,
          productRate: product.ratingsAverage,
          productCategory: product.category.name,
          productId: product._id,
        };
      });

      return {
        numberOfPages: response.data.metadata.numberOfPages,
        products: productsFiltration,
      };
    } catch (error) {
      console.log(error);
      return {
        numberOfPages: 0,
        products: [],
      };
    }
  }
);

const initialState: IProductsState = {
  products: [],
  numberOfPages: 0,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //Products
    builder.addCase(ProductsApi.fulfilled, (currentState, action) => {
      const page = action.meta.arg.page;
      currentState.numberOfPages = action.payload.numberOfPages;
      if (page == 1) {
        currentState.products = action.payload.products;
      } else
        currentState.products = [
          ...currentState.products,
          ...action.payload.products,
        ];
    });
  },
});

export default ProductsSlice.reducer;
