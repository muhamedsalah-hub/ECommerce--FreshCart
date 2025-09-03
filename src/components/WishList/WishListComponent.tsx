//Components
import { MainNavBar } from "../MainNavBar/MainNavBar";
import { ToastComponent } from "../Toaster/ToastComponent";
import { WishListLists } from "./WishListLists";

import { FooterComponent } from "../Footer/FooterComponent";

//Custom Hook
import { useWishList } from "./UseWishList";
import { useProducts } from "../Products/UseProducts";

//Redux
import { wishListApi } from "../../Features/WishList/WishListSlice";

//React Hooks
import { useEffect } from "react";

export default function WishListComponent() {
  const { wishLists, handleDeleteWishList, dispatch, token } = useWishList();
  const { handleAddToCartBtn } = useProducts();

  useEffect(() => {
    (async function () {
      await dispatch(wishListApi(token));
    })();
  }, []);

  return (
    <>
      <ToastComponent />
      <MainNavBar />
      <div className="container mx-auto p-4">
        <div className="my-5">
          <h1 className="text-main-color font-medium text-4xl">My WishList</h1>
        </div>
        <div className="bg-gray-100">
          {wishLists.map((wishList) => {
            return (
              <WishListLists
                handleAddToCartBtn={handleAddToCartBtn}
                handleDeleteWishList={handleDeleteWishList}
                key={wishList.productId}
                wishList={wishList}
              />
            );
          })}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
