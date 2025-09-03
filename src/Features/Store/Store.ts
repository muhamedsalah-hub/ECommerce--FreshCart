import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Products/ProductSlice";
import UserRegisterationReducer from "../CurrentUser/UserRegisterationSlice";
import UserLoginSliceReducer from "../CurrentUser/UserLoginSlice";
import CategoriesSliceReducer from "../Categories/CategoriesSlice";
import BrandsSliceReducer from "../Brands/BrandsSlice";
import CartSliceReducer from "../Cart/CartSlice";
import toastReducer from "../Toaster/ToasterSlice";
import wishListsReducer from "../WishList/WishListSlice";
import spinnerReducer from "../Spinner/SpinnerSlice";
import userOrdersReducer from "../CurrentUser/userOrdersSlice";

//React Redux
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    userRegisteration: UserRegisterationReducer,
    userLogin: UserLoginSliceReducer,
    categories: CategoriesSliceReducer,
    brands: BrandsSliceReducer,
    cart: CartSliceReducer,
    toast: toastReducer,
    wishLists: wishListsReducer,
    isLoading: spinnerReducer,
    userOrders: userOrdersReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
