//Components
import { MainNavBar } from "../MainNavBar/MainNavBar";

import { ToastComponent } from "../Toaster/ToastComponent";
import { CartList } from "./CartList";

//React Hooks
import { lazy, useEffect } from "react";

const CartModal = lazy(() => import("./CartModal"));

//React Router
import { Link } from "react-router";

//Custom Hook
import { useCart } from "./useCart";

//Redux
import { CartApi } from "../../Features/Cart/CartSlice";

export default function Cart() {
  const {
    cartProducts,
    token,
    dispatch,
    numberOfCartItems,
    totalCartPrice,
    modal,
    handleCloseModal,
    handleOpenModal,
    handleClearUserCart,
    cartId,
  } = useCart();

  useEffect(() => {
    (async function () {
      await dispatch(CartApi(token));
    })();
  }, []);

  return (
    <>
      <ToastComponent />
      <div>
        {modal && (
          <CartModal
            handleCloseModal={handleCloseModal}
            handleClearUserCart={handleClearUserCart}
          />
        )}

        <MainNavBar />
        <div className="container mx-auto p-4">
          <div className="my-5">
            <h1 className="text-main-color font-medium text-4xl">My Cart</h1>
          </div>
          <div className="bg-gray-100 my-5">
            <div className="md:flex items-center justify-between">
              <h3 className="p-4 text-2xl">
                Total Price:{" "}
                <span className="text-main-color font-medium text-2xl">
                  {totalCartPrice}
                </span>{" "}
              </h3>
              <h3 className="p-4 text-2xl">
                Number of Items:{" "}
                <span className="text-main-color font-medium text-2xl">
                  {numberOfCartItems} Items
                </span>{" "}
              </h3>
            </div>
            {cartProducts.map((cartProduct) => {
              return (
                <CartList
                  key={cartProduct.productId}
                  cartProduct={cartProduct}
                />
              );
            })}
          </div>
          <div className="my-5 flex gap-x-5 justify-center">
            <button
              onClick={() => {
                handleOpenModal();
              }}
              className="cursor-pointer py-3 px-4 text-white border border-red-500 text-lg  focus:outline-none bg-red-500 rounded-lg hover:bg-red-700  hover:text-white transition duration-200 "
            >
              Clear Cart
            </button>
            <Link to={`/CheckOut/${cartId}`}>
              <button className="cursor-pointer py-3 px-4 text-white border border-main-color text-lg  focus:outline-none bg-main-color rounded-lg  hover:bg-green-700 transition duration-200 ">
                CheckOut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
