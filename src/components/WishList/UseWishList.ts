//Custom Hook
import { useLoginData } from "../Login/UseLoginData";

//Redux
import {
  changeMessage,
  hideToaster,
  showToaster,
} from "../../Features/Toaster/ToasterSlice";
import { useAppSelector } from "../../Features/Store/Store";
import { DeleteWishList } from "../../cors/services/DeleteWishList";
import { hideSpinner, showSpinner } from "../../Features/Spinner/SpinnerSlice";
import { wishListApi } from "../../Features/WishList/WishListSlice";

export const useWishList = () => {
  const { token, dispatch } = useLoginData();

  const wishLists = useAppSelector((state) => {
    return state.wishLists.wishLists;
  });

  const handleDeleteWishList = async (productId: string) => {
    dispatch(showSpinner());
    try {
      await DeleteWishList(productId, token);
      dispatch(hideSpinner());
      dispatch(showToaster());
      dispatch(changeMessage("Product is deleted successfully"));
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
      dispatch(wishListApi(token));
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

  return { wishLists, token, handleDeleteWishList, dispatch };
};
