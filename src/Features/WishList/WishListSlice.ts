import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//API Reaquest
import { GetWishLists } from "../../cors/services/GetWishLists";

//Interfaces
import { IWishList, IWishListState } from "../../cors/InterFaces/InterFaces";

export const wishListApi = createAsyncThunk(
  "wishListApi",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await GetWishLists(token);
      const wish: {
        title: string;
        _id: string;
        category: { name: string };
        imageCover: string;
        price: number;
      }[] = response.data.data;
      const wishListsFilteration: IWishList[] = wish.map((w) => {
        return {
          productId: w._id,
          productName: w.title,
          productCategory: w.category?.name,
          productImage: w.imageCover,
          productPrice: w.price,
        };
      });
      return wishListsFilteration;
    } catch (error) {
      console.log(error);
      return rejectWithValue([]);
    }
  }
);

const initialState: IWishListState = {
  wishLists: [],
};

export const WishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(wishListApi.fulfilled, (currentState, action) => {
      currentState.wishLists = action.payload;
    });
  },
});

export default WishListSlice.reducer;
