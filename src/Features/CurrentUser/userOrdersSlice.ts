import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//API Requests
import { GetUserOrders } from "../../cors/services/GetUserOrders";

//Interfaces
import {
  IAllOrders,
  IAllUserOrdersState,
  ICartProducts,
} from "../../cors/InterFaces/InterFaces";

export const userOrdersApi = createAsyncThunk(
  "userOrdersApi",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await GetUserOrders(userId);
      console.log(response.data);
      const allOrders: IAllOrders[] = response.data;

      const ordersFiltration: {
        cartItems: ICartProducts[];
        paymentMethodType: string;
        totalOrderPrice: number;
      }[] = allOrders.map((order) => {
        const filteredItems = order.cartItems.map((cartItem) => {
          return {
            productCount: cartItem.count,
            productPrice: cartItem.price,
            productId: cartItem._id,
            productTitle: cartItem.product.title,
            productImage: cartItem.product.imageCover,
            productCategory: cartItem.product.category.name,
          };
        });
        return {
          cartItems: filteredItems,
          paymentMethodType: order.paymentMethodType,
          totalOrderPrice: order.totalOrderPrice,
        };
      });

      console.log(ordersFiltration);

      return ordersFiltration;
    } catch (error) {
      console.log(error);
      return rejectWithValue([]);
    }
  }
);

const initialState: IAllUserOrdersState = {
  orderDetails: [],
};

export const userOrdersSlice = createSlice({
  name: "userOrders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(userOrdersApi.fulfilled, (currentState, action) => {
      currentState.orderDetails = action.payload;
    });
  },
});

export default userOrdersSlice.reducer;
