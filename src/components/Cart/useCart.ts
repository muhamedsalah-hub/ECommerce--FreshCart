//React Redux
import { useAppDispatch, useAppSelector } from "../../Features/Store/Store";
import {
  changeMessage,
  hideToaster,
  showToaster,
} from "../../Features/Toaster/ToasterSlice";
import { showSpinner, hideSpinner } from "../../Features/Spinner/SpinnerSlice";
import { CartApi } from "../../Features/Cart/CartSlice";

//API Request
import { UpdateCartProductQuantity } from "../../cors/services/UpdateCartProductQuantity";
import { RemoveCartItem } from "../../cors/services/RemoveCartItem";
import { ClearUserCart } from "../../cors/services/ClearUserCart";

//Custom Hook
import { useLoginData } from "../Login/UseLoginData";

//React Hooks
import { useState } from "react";

//Interfaces
import { ICart } from "../../cors/InterFaces/InterFaces";

export const useCart = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { token } = useLoginData();
  const dispatch = useAppDispatch();
  const {
    cartProducts,
    cartId,
    numberOfCartItems,
    totalCartPrice,
    cartOwner,
  }: ICart = useAppSelector((state) => {
    return state.cart;
  });

  const handleRemoveCartItem = async (productId: string | undefined) => {
    dispatch(showSpinner());
    try {
      await RemoveCartItem(productId, token);
      await dispatch(CartApi(token));
      dispatch(hideSpinner());
      dispatch(showToaster());
      dispatch(changeMessage("Product removed from cart successfully"));
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error.response.data.message;
      dispatch(hideSpinner());
      dispatch(showToaster());
      dispatch(changeMessage(msg));
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
    }
  };

  const handleAddAndRemoveProductQuantity = async (
    productId: string | undefined,
    productCount: number
  ) => {
    dispatch(showSpinner());
    await UpdateCartProductQuantity(productId, productCount, token);
    await dispatch(CartApi(token));
    dispatch(hideSpinner());
  };

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleClearUserCart = async () => {
    dispatch(showSpinner());
    try {
      await ClearUserCart(token);
      await dispatch(CartApi(token));
      dispatch(hideSpinner());
      dispatch(showToaster());
      dispatch(changeMessage("Cart is cleared successfully"));
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error.response.data.message;
      dispatch(hideSpinner());
      dispatch(showToaster());
      dispatch(changeMessage(msg));
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
    }
  };

  return {
    handleRemoveCartItem,
    cartProducts,
    cartId,
    numberOfCartItems,
    totalCartPrice,
    cartOwner,
    dispatch,
    handleAddAndRemoveProductQuantity,
    handleOpenModal,
    handleCloseModal,
    modal,
    handleClearUserCart,
    token,
  };
};
