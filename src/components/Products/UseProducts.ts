//React Redux
import { useAppDispatch, useAppSelector } from "../../Features/Store/Store";
import {
  changeMessage,
  hideToaster,
  showToaster,
} from "../../Features/Toaster/ToasterSlice";

//React Hooks
import { useState, useMemo } from "react";

//Interfaces
import { IProducts } from "../../cors/InterFaces/InterFaces";

//API Requests
import { AddToWishList } from "../../cors/services/AddToWishList";

//Custom Hooks
import { useLoginData } from "../Login/UseLoginData";
import { AddToCartApi } from "../../Features/Cart/CartSlice";

export const useProducts = () => {
  const [page, setPage] = useState<number>(1);
  const { token } = useLoginData();
  const [searchedProduct, setSearchedProduct] = useState<string>("");
  const dispatch = useAppDispatch();
  const Products: IProducts[] = useAppSelector((state) => {
    return state.products.products;
  });

  const numberOfPages: number = useAppSelector((state) => {
    return state.products.numberOfPages;
  });

  const handleAddToCartBtn = async (productId: string) => {
    try {
      await dispatch(AddToCartApi({ productId, token })).unwrap();
      dispatch(showToaster());
      // dispatch(CartApi(token));
      dispatch(changeMessage("Product successfully added to the Cart"));
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error.response.data.message;
      dispatch(showToaster());
      dispatch(changeMessage(msg));
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
    }
  };

  const handleAddToWishList = async (productId: string) => {
    try {
      await AddToWishList(productId, token);
      dispatch(showToaster());
      dispatch(changeMessage("Product successfully added to the WishList"));
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error.response.data.message;
      dispatch(showToaster());
      dispatch(changeMessage(msg));
      setTimeout(() => {
        dispatch(hideToaster());
      }, 3000);
    }
  };

  //Pagination
  const handleSrcoll = () => {
    const endOfPage =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;

    if (endOfPage && page <= numberOfPages) {
      setPage((page) => page + 1);
    }
  };

  const filteredProducts = useMemo(() => {
    return Products.filter((product) => {
      return product.productName
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(searchedProduct.toLowerCase().replace(/\s/g, ""));
    });
  }, [searchedProduct, Products]);

  return {
    page,
    setPage,
    dispatch,
    numberOfPages,
    Products,
    handleAddToCartBtn,
    handleAddToWishList,
    handleSrcoll,
    searchedProduct,
    setSearchedProduct,
    filteredProducts,
  };
};
