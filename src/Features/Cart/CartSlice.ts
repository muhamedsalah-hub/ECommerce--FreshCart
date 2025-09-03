import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//API Requests
import { GetUserCart } from "../../cors/services/GetUserCart";
import { AddToCart } from "../../cors/services/AddToCart";

//Interfaces
import { ICart, ICartProducts } from "../../cors/InterFaces/InterFaces";

export const CartApi = createAsyncThunk("CartApi", async (token: string) => {
  const response = await GetUserCart(token);
  const cart = response.data;

  console.log(cart);

  const cartProducts: {
    count: number;
    price: number;
    product: {
      id: string;
      title: string;
      imageCover: string;
      category: { name: string };
    };
  }[] = cart.data.products;

  const products: ICartProducts[] = cartProducts.map((product) => {
    return {
      productCount: product.count,
      productPrice: product.price,
      productId: product.product.id,
      productTitle: product.product.title,
      productImage: product.product.imageCover,
      productCategory: product.product.category.name,
    };
  });
  localStorage.setItem("numOfCartItems", JSON.stringify(cart.numOfCartItems));
  return {
    numberOfCartItems: cart.numOfCartItems,
    cartId: cart.cartId,
    totalCartPrice: cart.data.totalCartPrice,
    cartOwner: cart.data.cartOwner,
    cartProducts: products,
  };
});

export const AddToCartApi = createAsyncThunk(
  "AddToCartApi",
  async ({ productId, token }: { productId: string; token: string }) => {
    try {
      const response = await AddToCart(productId, token);
      const numOfCartItems: number = response.data.numOfCartItems;
      localStorage.setItem("numOfCartItems", numOfCartItems.toString());

      return numOfCartItems;
    } catch (error) {
      console.log(error);
    }
  }
);

const parsedNumberOfCartItems = localStorage.getItem("numOfCartItems")
  ? Number(localStorage.getItem("numOfCartItems"))
  : 0;

const initialState: ICart = {
  cartProducts: [],
  cartId: "",
  numberOfCartItems: parsedNumberOfCartItems,
  totalCartPrice: 0,
  cartOwner: "",
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    clearAllItems: (currentState) => {
      currentState.numberOfCartItems = 0;
    },
  },
  extraReducers(builder) {
    builder.addCase(CartApi.fulfilled, (currentState, action) => {
      currentState.cartId = action.payload.cartId;
      currentState.cartOwner = action.payload.cartOwner;
      currentState.cartProducts = action.payload.cartProducts;
      currentState.totalCartPrice = action.payload.totalCartPrice;
      currentState.numberOfCartItems = action.payload.numberOfCartItems;
    });
    builder.addCase(AddToCartApi.fulfilled, (currentState, action) => {
      currentState.numberOfCartItems = action.payload as number;
    });
  },
});

export const { clearAllItems } = CartSlice.actions;
export default CartSlice.reducer;
